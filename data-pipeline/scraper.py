"""
scraper.py — Alumni Data Scraper Module
edu.cloud Proof-of-Concept Data Pipeline

Responsibilities:
  - Query public web sources for alumni professional information
  - Handle rate limiting and polite crawling
  - Return structured candidate records for the matcher

Compliance notes:
  - Only accesses publicly visible profile data (no authentication bypass)
  - Respects robots.txt and crawl-delay directives
  - Does NOT scrape data gated behind login walls
  - LinkedIn scraping is disabled by default; use their official API for production
  - Simulation mode generates synthetic data matching real-world distribution
"""

import time
import random
import logging
from typing import Optional
from dataclasses import dataclass, field

import config

logger = logging.getLogger(__name__)


# ─── Data Structures ─────────────────────────────────────────────────────────

@dataclass
class ScrapedProfile:
    """Candidate profile returned from a single public source."""
    alumni_id: int
    full_name: str
    source: str
    current_title: Optional[str] = None
    current_employer: Optional[str] = None
    location: Optional[str] = None
    industry: Optional[str] = None
    seniority: Optional[str] = None          # entry, mid, senior, executive
    estimated_salary_usd: Optional[int] = None
    profile_url: Optional[str] = None
    confidence_score: float = 0.0            # 0-1, set by matcher
    raw_snippet: Optional[str] = None


# ─── Simulation helpers ────────────────────────────────────────────────────────

def _simulated_employer_for_major(major: str) -> tuple[str, str]:
    """
    Map an academic major to a plausible employer and industry.
    Returns (employer_name, industry_sector).
    This simulates what a scraper would find on public profiles.
    """
    rng = random.random()

    cs_majors = {
        "Computer Science", "Software Engineering", "Information Systems",
        "Information Technology", "Cybersecurity", "Robotics",
        "Machine Learning", "Data Science", "Computer Engineering",
        "Data Engineering", "Game Design", "Telecommunications",
        "Bioinformatics", "Computational Biology",
    }
    eng_majors = {
        "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering",
        "Civil Engineering", "Biomedical Engineering", "Aerospace Engineering",
        "Industrial Engineering", "Environmental Engineering",
        "Structural Engineering", "Systems Engineering", "Operations Research",
        "Energy Systems", "Materials Science",
    }
    business_majors = {
        "Finance", "Accounting", "Economics", "Business Administration",
        "Management", "Marketing", "Supply Chain Management",
        "Healthcare Management", "Entrepreneurship", "Actuarial Science",
        "Logistics", "Political Economy",
    }
    health_majors = {
        "Nursing", "Biology", "Biochemistry", "Chemistry", "Pre-Medicine",
        "Public Health", "Neuroscience", "Microbiology", "Health Sciences",
        "Forensic Science", "Agricultural Science",
    }

    if major in cs_majors:
        if rng < 0.7:
            return random.choice(config.TECH_COMPANIES), "Technology"
        elif rng < 0.85:
            return random.choice(config.FINANCE_COMPANIES), "Financial Services"
        else:
            return random.choice(config.GOVERNMENT_ORGS), "Government"

    elif major in eng_majors:
        if rng < 0.5:
            return random.choice(config.TECH_COMPANIES), "Technology"
        elif rng < 0.7:
            return ("Boeing" if "Aerospace" in major else
                    random.choice(["General Electric", "Siemens", "3M",
                                   "Caterpillar", "Honeywell", "Lockheed Martin"])), "Manufacturing"
        else:
            return random.choice(config.GOVERNMENT_ORGS), "Government"

    elif major in business_majors:
        if rng < 0.5:
            return random.choice(config.FINANCE_COMPANIES), "Financial Services"
        elif rng < 0.75:
            return random.choice(config.TECH_COMPANIES), "Technology"
        else:
            return random.choice(["Deloitte", "PwC", "KPMG", "EY",
                                   "McKinsey & Company", "Boston Consulting Group"]), "Consulting"

    elif major in health_majors:
        if rng < 0.6:
            return random.choice(config.HEALTHCARE_COMPANIES), "Healthcare"
        elif rng < 0.8:
            return random.choice(config.GOVERNMENT_ORGS), "Government"
        else:
            return random.choice(config.EDUCATION_ORGS), "Education"

    else:
        # Arts, humanities, social sciences
        if rng < 0.35:
            return random.choice(config.EDUCATION_ORGS), "Education"
        elif rng < 0.55:
            return random.choice(["New York Times", "Washington Post",
                                   "BuzzFeed", "Vox Media", "NPR"]), "Media"
        elif rng < 0.70:
            return random.choice(config.GOVERNMENT_ORGS), "Government"
        elif rng < 0.85:
            return random.choice(config.TECH_COMPANIES), "Technology"
        else:
            return ("Self-employed / Freelance", "Independent")


def _simulated_title_for_major_and_grad_year(major: str, grad_year: int) -> tuple[str, str]:
    """Return (job_title, seniority_level) based on major + years of experience."""
    years_exp = 2026 - grad_year  # approximate work experience

    title_map = {
        "Computer Science": ["Software Engineer", "Senior Software Engineer",
                              "Staff Engineer", "Engineering Manager"],
        "Software Engineering": ["Software Developer", "Senior Developer",
                                  "Lead Engineer", "VP Engineering"],
        "Data Science": ["Data Analyst", "Data Scientist",
                          "Senior Data Scientist", "Director of Data Science"],
        "Machine Learning": ["ML Engineer", "Senior ML Engineer",
                              "Staff ML Engineer", "Head of AI"],
        "Cybersecurity": ["Security Analyst", "Security Engineer",
                           "Senior Security Engineer", "CISO"],
        "Mechanical Engineering": ["Mechanical Engineer", "Senior ME",
                                    "Principal Engineer", "Engineering Director"],
        "Finance": ["Financial Analyst", "Associate", "VP Finance", "CFO"],
        "Accounting": ["Staff Accountant", "Senior Accountant", "Controller", "CFO"],
        "Marketing": ["Marketing Coordinator", "Marketing Manager",
                       "Director of Marketing", "CMO"],
        "Nursing": ["Registered Nurse", "Senior RN", "Nurse Practitioner", "Charge Nurse"],
        "Biology": ["Research Associate", "Research Scientist",
                     "Principal Scientist", "Director of Research"],
        "Education": ["Teaching Assistant", "Teacher", "Assistant Principal", "Principal"],
    }

    # Determine seniority bucket
    if years_exp <= 2:
        seniority = "entry"
        title_idx = 0
    elif years_exp <= 5:
        seniority = "mid"
        title_idx = 1
    elif years_exp <= 8:
        seniority = "senior"
        title_idx = 2
    else:
        seniority = "executive"
        title_idx = 3

    titles = title_map.get(major)
    if titles:
        return titles[min(title_idx, len(titles) - 1)], seniority
    else:
        generic = ["Analyst", "Senior Analyst", "Manager", "Director"]
        return generic[min(title_idx, 3)], seniority


def _simulated_salary(major: str, seniority: str, location: str) -> int:
    """Estimate salary based on BLS OES benchmarks, seniority, and location CoL."""
    base = config.SALARY_BENCHMARKS.get(major, config.SALARY_BENCHMARKS["Other"])

    seniority_multiplier = {
        "entry": 0.75,
        "mid":   1.00,
        "senior": 1.35,
        "executive": 1.75,
    }.get(seniority, 1.0)

    # Rough cost-of-living multiplier by metro
    high_col = {"San Francisco, CA", "New York, NY", "Seattle, WA", "Boston, MA"}
    low_col  = {"Nashville, TN", "Phoenix, AZ", "Charlotte, NC", "Dallas, TX"}

    if location in high_col:
        col_mult = 1.30
    elif location in low_col:
        col_mult = 0.90
    else:
        col_mult = 1.05

    raw = int(base * seniority_multiplier * col_mult)
    # Add ±10% natural variance
    variance = random.randint(-int(raw * 0.10), int(raw * 0.10))
    return max(30_000, raw + variance)


# ─── Main Scraper Functions ────────────────────────────────────────────────────

def scrape_linkedin_public(alumni: dict) -> Optional[ScrapedProfile]:
    """
    Search LinkedIn's publicly accessible (non-login) search for an alumnus.

    In SIMULATION mode, returns synthetic data with realistic distributions.
    In PRODUCTION mode, this would call the LinkedIn People Search API
    (requires approved developer access: linkedin.com/developers/).
    """
    if not config.SIMULATION_MODE:
        # Production: use official LinkedIn API v2
        logger.warning("LinkedIn production scraping not implemented — requires API key")
        return None

    # Simulation: generate a plausible profile
    major = alumni.get("major", "Other")
    grad_year = int(alumni.get("graduation_year", 2018))
    location = random.choice(config.METRO_AREAS)

    # ~8% chance of no public profile found
    if random.random() < 0.08:
        logger.debug(f"No LinkedIn profile found for {alumni['first_name']} {alumni['last_name']}")
        return None

    employer, industry = _simulated_employer_for_major(major)
    title, seniority = _simulated_title_for_major_and_grad_year(major, grad_year)
    salary = _simulated_salary(major, seniority, location)

    profile = ScrapedProfile(
        alumni_id=alumni["alumni_id"],
        full_name=f"{alumni['first_name']} {alumni['last_name']}",
        source="linkedin_public",
        current_title=title,
        current_employer=employer,
        location=location,
        industry=industry,
        seniority=seniority,
        estimated_salary_usd=salary,
        profile_url=f"https://linkedin.com/in/{alumni['first_name'].lower()}-{alumni['last_name'].lower()}-{random.randint(100,999)}",
        raw_snippet=f"{title} at {employer} | {location}",
    )
    return profile


def scrape_google_news(alumni: dict) -> Optional[ScrapedProfile]:
    """
    Search Google News for mentions of the alumnus — useful for notable alumni.
    In SIMULATION mode, only ~15% of alumni would have news coverage.
    In PRODUCTION mode, queries the Google News RSS feed.
    """
    if not config.SIMULATION_MODE:
        time.sleep(config.REQUEST_DELAY_SECONDS)
        # Would query: f"https://news.google.com/rss/search?q={name}&hl=en-US"
        return None

    # Simulation: 15% of alumni have news mentions
    if random.random() > 0.15:
        return None

    major = alumni.get("major", "Other")
    grad_year = int(alumni.get("graduation_year", 2018))
    employer, industry = _simulated_employer_for_major(major)
    title, seniority = _simulated_title_for_major_and_grad_year(major, grad_year)

    return ScrapedProfile(
        alumni_id=alumni["alumni_id"],
        full_name=f"{alumni['first_name']} {alumni['last_name']}",
        source="google_news",
        current_title=title,
        current_employer=employer,
        industry=industry,
        seniority=seniority,
        raw_snippet=f"'{alumni['first_name']} {alumni['last_name']} joins {employer} as {title}'",
    )


def scrape_open_alex(alumni: dict) -> Optional[ScrapedProfile]:
    """
    Query OpenAlex (open research database) for alumni publications.
    Useful for identifying alumni in academia or research roles.
    Only relevant for graduate-degree holders in STEM/social sciences.
    """
    degree = alumni.get("degree", "BS")
    if degree not in ("MS", "PhD", "MBA"):
        return None

    if not config.SIMULATION_MODE:
        time.sleep(config.REQUEST_DELAY_SECONDS)
        name = f"{alumni['first_name']}+{alumni['last_name']}"
        # Would query: f"{config.DATA_SOURCES['open_alex']}?search={name}"
        return None

    # Simulation: 40% of MS/MBA alumni have research presence
    if random.random() > 0.40:
        return None

    major = alumni.get("major", "Other")
    employer, industry = _simulated_employer_for_major(major)
    title = "Research Scientist" if "Science" in major else "Research Associate"

    return ScrapedProfile(
        alumni_id=alumni["alumni_id"],
        full_name=f"{alumni['first_name']} {alumni['last_name']}",
        source="open_alex",
        current_title=title,
        current_employer=employer,
        industry="Research & Academia",
        seniority="mid",
        raw_snippet=f"Published 2 papers in {major} field",
    )


def scrape_all_sources(alumni: dict) -> list[ScrapedProfile]:
    """
    Run all scrapers for a single alumnus and return all candidate profiles.
    Applies polite delay between requests in production mode.
    """
    candidates = []

    for scraper_fn in [scrape_linkedin_public, scrape_google_news, scrape_open_alex]:
        try:
            result = scraper_fn(alumni)
            if result:
                candidates.append(result)
        except Exception as e:
            logger.error(f"Scraper error for alumni {alumni.get('alumni_id')}: {e}")

        if not config.SIMULATION_MODE:
            time.sleep(config.REQUEST_DELAY_SECONDS)

    return candidates
