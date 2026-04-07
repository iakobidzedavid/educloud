"""
Configuration module for edu.cloud Alumni Data Pipeline.
Stores data source endpoints, thresholds, and pipeline settings.
"""

import os

# ─── Pipeline Behaviour ───────────────────────────────────────────────────────
SIMULATION_MODE = True          # Set False when real HTTP calls are approved
MATCH_SCORE_THRESHOLD = 75      # Minimum fuzzy-match score (0-100) to accept
MAX_WORKERS = 5                 # Concurrent scraping threads
REQUEST_DELAY_SECONDS = 1.5     # Polite crawl delay between requests
REQUEST_TIMEOUT = 10            # HTTP timeout in seconds

# ─── Data Sources (public only) ───────────────────────────────────────────────
DATA_SOURCES = {
    "linkedin_public":    "https://www.linkedin.com/search/results/people/",
    "google_news":        "https://news.google.com/search",
    "company_website":    None,   # Resolved dynamically per employer domain
    "open_alex":          "https://api.openalex.org/people",   # Research citations
    "bls_oes":            "https://data.bls.gov/cew/data/api/",  # Salary benchmarks
    "crunchbase_public":  "https://www.crunchbase.com/search/people",
}

# ─── Salary Benchmarks by Major (BLS OES 2023 medians, USD) ──────────────────
# [ESTIMATED from BLS OES 2023 national data – not per-alumnus actuals]
SALARY_BENCHMARKS = {
    "Computer Science":          105_000,
    "Software Engineering":      112_000,
    "Data Science":              100_000,
    "Electrical Engineering":     98_000,
    "Mechanical Engineering":     90_000,
    "Chemical Engineering":       95_000,
    "Civil Engineering":          85_000,
    "Biomedical Engineering":     92_000,
    "Aerospace Engineering":     110_000,
    "Industrial Engineering":     88_000,
    "Environmental Engineering":  80_000,
    "Computer Engineering":      105_000,
    "Information Systems":        88_000,
    "Information Technology":     85_000,
    "Cybersecurity":              95_000,
    "Robotics":                  105_000,
    "Machine Learning":          120_000,
    "Finance":                    80_000,
    "Accounting":                 72_000,
    "Economics":                  78_000,
    "Business Administration":    78_000,
    "Management":                 74_000,
    "Marketing":                  65_000,
    "Healthcare Management":      82_000,
    "Entrepreneurship":           72_000,
    "Supply Chain Management":    72_000,
    "Nursing":                    77_000,
    "Biology":                    55_000,
    "Biochemistry":               60_000,
    "Chemistry":                  70_000,
    "Physics":                    90_000,
    "Mathematics":                72_000,
    "Statistics":                 88_000,
    "Psychology":                 50_000,
    "Sociology":                  48_000,
    "Political Science":          55_000,
    "Communications":             50_000,
    "English Literature":         45_000,
    "History":                    45_000,
    "Public Health":              58_000,
    "Social Work":                48_000,
    "Education":                  45_000,
    "Criminal Justice":           52_000,
    "International Relations":    55_000,
    "Philosophy":                 45_000,
    "Art History":                42_000,
    "Music":                      47_000,
    "Theatre":                    42_000,
    "Graphic Design":             52_000,
    "Architecture":               80_000,
    "Urban Studies":              55_000,
    "Journalism":                 48_000,
    "Other":                      55_000,  # Fallback
}

# ─── Employment Sectors ────────────────────────────────────────────────────────
TECH_COMPANIES = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Salesforce",
    "Oracle", "IBM", "Accenture", "Deloitte Digital", "Stripe",
    "Shopify", "HubSpot", "Twilio", "Palantir", "Snowflake",
    "Databricks", "Cloudflare", "Okta", "CrowdStrike",
]

HEALTHCARE_COMPANIES = [
    "Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "HCA Healthcare",
    "UnitedHealth Group", "Johnson & Johnson", "Pfizer", "Merck",
    "Boston Scientific", "Medtronic", "Abbott Laboratories",
]

FINANCE_COMPANIES = [
    "JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "BlackRock",
    "Fidelity", "Vanguard", "Bank of America", "Citigroup",
    "Wells Fargo", "American Express", "Capital One",
]

EDUCATION_ORGS = [
    "Harvard University", "Stanford University", "MIT", "University of Michigan",
    "State Department of Education", "Teach For America", "Khan Academy",
]

GOVERNMENT_ORGS = [
    "U.S. Department of Defense", "NASA", "CDC", "FDA",
    "Environmental Protection Agency", "Department of Energy",
    "State Government", "City Government", "U.S. Army Corps of Engineers",
]

# ─── Geographic Regions ────────────────────────────────────────────────────────
METRO_AREAS = [
    "San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX",
    "Boston, MA", "Chicago, IL", "Los Angeles, CA", "Denver, CO",
    "Atlanta, GA", "Washington, DC", "Dallas, TX", "Miami, FL",
    "Minneapolis, MN", "Portland, OR", "Philadelphia, PA",
    "Houston, TX", "San Diego, CA", "Nashville, TN", "Phoenix, AZ",
    "Charlotte, NC",
]

# ─── Output Settings ──────────────────────────────────────────────────────────
OUTPUT_DIR = "output"
REPORT_FILENAME = "alumni_outcomes_report.json"
ACCURACY_REPORT_FILENAME = "accuracy_validation_report.json"
LOG_LEVEL = "INFO"
