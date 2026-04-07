# Alumni Outcome Data Pipeline Architecture
## Design Document & Implementation Specification

**Document Date:** April 7, 2026  
**Status:** MVP Phase 1  
**Audience:** Product Team, Engineering, Compliance  

---

## Executive Summary

This document specifies the architecture for edu.cloud's minimum viable data pipeline, designed to ingest, validate, and visualize alumni outcome data from multiple sources. The MVP targets 50+ alumni records with >85% accuracy validation, supporting the core 5 metrics: employment rate, salary distribution, geographic distribution, industry breakdown, and advanced degree attainment.

**Key Objectives:**
- Establish repeatable data ingestion workflow from public sources
- Implement fuzzy-matching alumni identification with 85%+ accuracy
- Create interactive dashboard prototype demonstrating data value
- Document compliance approach (FERPA-aligned collection)
- Enable rapid iteration on pilot institution data

---

## 1. Data Ingestion Architecture

### 1.1 Conceptual Flow

```
Public Data Sources → Web Scraping & APIs → Data Normalization → 
De-duplication & Fuzzy Matching → Validation Framework → 
Data Warehouse (JSON/CSV) → Dashboard API → Interactive Visualization
```

### 1.2 Approved Data Sources (Public Only)

**Primary Sources:**
1. **LinkedIn Alumni Profiles (via public URLs)**
   - Source: `linkedin.com/school/[institution-id]/alumni/`
   - Data Points: Current title, company, location, degree info
   - Collection Method: Browser automation (Selenium) or LinkedIn Data API with proper Terms of Service compliance
   - Frequency: Quarterly snapshots
   - Privacy: Public profile data only (no private messages, contact info)

2. **Public University Records & Directories**
   - Source: Official institution alumni networks, public directories
   - Data Points: Graduation year, degree, field of study
   - Collection Method: Direct API access or web scraping with robots.txt compliance
   - Frequency: Annual updates
   - Privacy: Publicly listed information only

3. **Professional Databases**
   - Source: Crunchbase, ZoomInfo (with API agreements)
   - Data Points: Executive profiles, company affiliations, education history
   - Collection Method: Licensed API access or bulk exports
   - Frequency: Real-time syncs
   - Privacy: Business-facing data, GDPR/CCPA compliant

4. **News Archives & Press Releases**
   - Source: Google News API, institution press releases
   - Data Points: Alumni achievements, promotions, company news
   - Collection Method: Keyword search + entity extraction
   - Frequency: Continuous ingestion
   - Privacy: Public news content only

**Compliance Note:** All source data is publicly available. No FERPA-protected student records are collected directly from institutions. Institutions may optionally provide de-identified alumni lists for matching enrichment.

### 1.3 Data Schema

**Alumni Record Schema (Normalized):**

```json
{
  "alumni_id": "UUID",
  "institution_id": "string (institution-provided or derived)",
  "source_institution_match_confidence": 0.85,
  "name": "string (MD5 hashed if not public disclosure)",
  "graduation_year": "integer",
  "degree": "string (e.g., 'Bachelor', 'Master', 'PhD')",
  "field_of_study": "string",
  "current_employment": {
    "status": "employed|unemployed|student|self-employed|retired",
    "company_name": "string",
    "job_title": "string",
    "industry": "string (normalized)",
    "employment_type": "full-time|part-time|contract|freelance",
    "seniority_level": "entry|mid|senior|executive|founder",
    "source": "LinkedIn|LinkedIn API|Company DB|News|Manual|University Directory"
  },
  "salary_data": {
    "estimated_salary": "integer (if available)",
    "salary_source": "LinkedIn|Glassdoor|BLS|Survey|Derived",
    "currency": "USD",
    "data_confidence": 0.0-1.0,
    "last_updated": "ISO8601"
  },
  "location": {
    "city": "string",
    "state": "string",
    "country": "string (ISO 3166)",
    "geographic_region": "string (normalized: US_Northeast, etc.)"
  },
  "education_advancement": {
    "has_advanced_degree": "boolean",
    "advanced_degrees": [
      {
        "degree_type": "Master|PhD|Professional",
        "field": "string",
        "institution": "string",
        "graduation_year": "integer"
      }
    ]
  },
  "data_quality_flags": {
    "is_verified": "boolean",
    "match_confidence": 0.0-1.0,
    "missing_fields": ["array of field names"],
    "last_verification": "ISO8601",
    "data_sources_combined": ["source1", "source2"]
  },
  "created_at": "ISO8601",
  "updated_at": "ISO8601"
}
```

### 1.4 Data Collection Workflow

**Step 1: Source Configuration**
- For each data source, configure API credentials or scraping parameters
- Store credentials in environment variables (never in code)
- Define batch sizes, rate limits, retry logic

**Step 2: Data Extraction**
- Execute source-specific extractors (LinkedIn, University APIs, etc.)
- Normalize field names and values
- Preserve source attribution for transparency

**Step 3: De-duplication & Matching**
- Match records across sources using fuzzy string matching
- Algorithm: Levenshtein distance on (name + graduation_year + company_name)
- Confidence threshold: 0.85+ for automatic merge, <0.85 flagged for manual review

**Step 4: Enrichment**
- Cross-reference with industry databases
- Normalize job titles to standard taxonomy (LinkedIn Occupations)
- Estimate salary using BLS median by role + location

**Step 5: Validation**
- Run accuracy checks (see Section 3)
- Flag records failing quality thresholds
- Generate validation report

**Step 6: Storage & Publishing**
- Store validated records in JSON/CSV format
- Generate institution-specific dataset views
- Publish to dashboard API endpoint

---

## 2. Web Scraper Proof-of-Concept Implementation

### 2.1 Tech Stack

**Core Technologies:**
- **Language:** Python 3.9+
- **Web Scraping:** Selenium WebDriver (Chrome) for JavaScript-heavy sites, BeautifulSoup4 for static content
- **Async Processing:** Asyncio + aiohttp for concurrent requests
- **Data Handling:** Pandas for CSV/JSON transformation
- **API:** FastAPI or Flask for data serving
- **Deployment:** AWS Lambda + S3 (serverless) or Heroku (simple scaling)

**Dependencies:**
```
selenium==4.x
beautifulsoup4==4.x
pandas==2.x
requests==2.x
aiohttp==3.x
python-dotenv==1.x
logging==0.x
```

### 2.2 LinkedIn Alumni Scraper Module

**File:** `scrapers/linkedin_scraper.py`

**Features:**
- Scrapes public LinkedIn alumni pages using browser automation
- Extracts: name, current title, company, location, degree info
- Implements rate limiting (1-2 seconds between requests)
- Stores raw output in JSON
- Includes retry logic for transient failures
- Privacy-preserving: uses public API endpoints only

**Pseudocode:**

```python
class LinkedInAlumniScraper:
    def __init__(self, institution_id, headless=True):
        self.driver = selenium.Chrome(headless=headless)
        self.institution_id = institution_id
        self.rate_limit = 2  # seconds between requests
        self.results = []
    
    def scrape_alumni_page(self, page_number):
        """
        Navigate to LinkedIn alumni page and extract profiles
        """
        url = f"https://www.linkedin.com/school/{self.institution_id}/alumni/"
        params = {"page": page_number}
        
        self.driver.get(url)
        # Wait for JS to load
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "alumni-card"))
        )
        
        # Parse HTML with BeautifulSoup
        soup = BeautifulSoup(self.driver.page_source, "html.parser")
        profiles = soup.find_all("div", class_="alumni-card")
        
        for profile in profiles:
            record = {
                "name": profile.find("h3").text,
                "current_title": profile.find("span", class_="title").text,
                "company": profile.find("span", class_="company").text,
                "location": profile.find("span", class_="location").text,
                "source": "LinkedIn",
                "collected_at": datetime.now().isoformat()
            }
            self.results.append(record)
            time.sleep(self.rate_limit)
        
        return len(profiles)
    
    def scrape_all_pages(self, max_pages=10):
        """Iterate through pagination"""
        for page in range(1, max_pages + 1):
            count = self.scrape_alumni_page(page)
            if count == 0:
                break
        return self.results
    
    def export_json(self, filename):
        """Save results to JSON"""
        with open(filename, 'w') as f:
            json.dump(self.results, f, indent=2)
```

### 2.3 University Directory Scraper

**File:** `scrapers/university_directory_scraper.py`

**Features:**
- Scrapes institutional alumni directories (with robots.txt compliance)
- Extracts: name, graduation year, degree, major, employer
- Includes HTML parsing for common directory structures
- Normalizes field mappings across institutions
- Generates CSV output for import

**Data Collection for 50+ Test Alumni:**

Sample output structure (CSV):

```
name,graduation_year,degree,field_of_study,current_company,job_title,location
Alice Johnson,2015,Bachelor,Computer Science,Google,Senior Engineer,Mountain View CA
Bob Smith,2014,Master,Business Administration,McKinsey,Associate Consultant,New York NY
Carol White,2016,Bachelor,Marketing,Adobe,Product Manager,San Jose CA
David Chen,2013,PhD,Physics,Stanford University,Research Scientist,Palo Alto CA
Emma Rodriguez,2015,Bachelor,Finance,Goldman Sachs,Analyst,New York NY
...
```

---

## 3. Data Validation Framework

### 3.1 Accuracy Measurement Methodology

**Target:** >85% overall accuracy across 5 dimensions

**5 Accuracy Dimensions:**

| Dimension | Metric | Target | Validation Method |
|-----------|--------|--------|-------------------|
| **Identity Match** | Alumni correctly identified | 90%+ | Manual review of 30 random records by institution contact |
| **Employment Status** | Current employment correctly classified | 85%+ | Cross-reference with LinkedIn, company websites |
| **Job Title Accuracy** | Standardized title matches actual role | 80%+ | Manual spot-check, title normalization consistency |
| **Location Accuracy** | City/State correctly captured | 90%+ | Google Maps API validation, known address databases |
| **Salary Estimation** | Estimated salary within 20% of actual | 75%+ | Optional: Alumni survey validation, BLS median comparison |

### 3.2 Validation Logic Implementation

**File:** `validation/accuracy_validator.py`

```python
class AlumniDataValidator:
    def __init__(self, test_dataset_size=50):
        self.test_dataset = []
        self.accuracy_scores = {}
        self.test_dataset_size = test_dataset_size
    
    def validate_identity_match(self, record_sample):
        """
        Validate that alumni name + year matches institution records.
        Requires institution-provided ground truth dataset.
        """
        ground_truth = load_institution_alumni_list()
        
        matches = 0
        for record in record_sample:
            # Fuzzy match name to ground truth
            best_match = fuzz.token_set_ratio(
                record['name'].lower(),
                ground_truth['names']
            )
            if best_match >= 0.85:
                matches += 1
        
        accuracy = matches / len(record_sample)
        return accuracy
    
    def validate_employment_status(self, record_sample):
        """
        Cross-reference LinkedIn and company databases
        """
        matches = 0
        for record in record_sample:
            linkedin_profile = self.lookup_linkedin(record['name'])
            if linkedin_profile:
                if record['status'] == linkedin_profile['current_status']:
                    matches += 1
        
        accuracy = matches / len(record_sample)
        return accuracy
    
    def validate_location(self, record_sample):
        """
        Validate against Google Maps API
        """
        matches = 0
        for record in record_sample:
            location_str = f"{record['city']}, {record['state']}"
            result = gmaps.geocode(location_str)
            if result:
                matches += 1
        
        accuracy = matches / len(record_sample)
        return accuracy
    
    def generate_validation_report(self):
        """
        Produce comprehensive accuracy report
        """
        report = {
            "validation_date": datetime.now().isoformat(),
            "test_sample_size": self.test_dataset_size,
            "accuracy_by_dimension": {
                "identity_match": self.accuracy_scores.get("identity", 0),
                "employment_status": self.accuracy_scores.get("employment", 0),
                "job_title": self.accuracy_scores.get("title", 0),
                "location": self.accuracy_scores.get("location", 0),
                "salary": self.accuracy_scores.get("salary", 0)
            },
            "overall_accuracy": sum(self.accuracy_scores.values()) / len(self.accuracy_scores),
            "meets_85_percent_target": sum(self.accuracy_scores.values()) / len(self.accuracy_scores) >= 0.85,
            "flagged_records": self.identify_low_confidence_records(),
            "recommendations": self.generate_recommendations()
        }
        return report
```

### 3.3 Validation Report Output

**File:** `reports/DATA_VALIDATION_REPORT.md`

```markdown
# Data Validation Report
## Test Institution: [Institution Name]
## Validation Date: [Date]
## Data Collection Period: [Start] to [End]

### Overall Accuracy Score: 87% ✓ (PASSES 85% TARGET)

### Accuracy by Dimension

| Dimension | Score | Status | Notes |
|-----------|-------|--------|-------|
| Identity Match | 91% | ✓ PASS | 45/50 alumni correctly identified |
| Employment Status | 86% | ✓ PASS | Cross-referenced with LinkedIn |
| Job Title Accuracy | 82% | ⚠ MARGINAL | 41/50 standardized correctly |
| Location Accuracy | 94% | ✓ PASS | Validated via Google Maps API |
| Salary Estimation | 78% | ✓ PASS | Within 20% of BLS medians |

### Quality Assurance Checks

- [x] No duplicate records detected
- [x] All required fields populated (except optional salary)
- [x] Date fields in valid ISO8601 format
- [x] Country/state codes valid
- [x] Name length within expected range (3-100 chars)
- [x] Employment dates logical (not in future)

### Flagged Records Requiring Manual Review

1. Record #7 (Margaret S.) - Ambiguous job title, confidence 0.72
2. Record #23 (J. Kim) - Location validation failed, possible outdated address
3. Record #41 (Robert L.) - Salary estimate unusual (>200% above median)

### Recommendations for Improvement

1. Implement LinkedIn API integration for real-time employment data
2. Add alumni survey mechanism to validate salary estimates
3. Create institution-provided ground truth dataset for ongoing matching
4. Increase geographic validation with address verification API
```

---

## 4. MVP Dashboard Specification

### 4.1 Dashboard Overview

**Purpose:** Interactive visualization of alumni outcomes for pilot institution

**Core Metrics (5):**
1. **Employment Rate** - Percentage of alumni employed (by graduation year cohort)
2. **Salary Distribution** - Salary quartiles (Q1, Median, Q3) by degree/field
3. **Geographic Distribution** - Interactive map of alumni locations
4. **Industry Breakdown** - Pie chart of alumni by industry sector
5. **Advanced Degree Attainment** - Percentage pursuing Master's/PhD/Professional degrees

### 4.2 Technical Stack

- **Frontend Framework:** React 19 (Next.js 15 App Router)
- **UI Components:** Tailwind CSS + Custom React components
- **Data Visualization:** Recharts (charts), Leaflet (map)
- **State Management:** React Context API
- **API Integration:** Fetch API with error handling

### 4.3 Dashboard Pages & Components

**Main Page:** `/dashboard`

**Components:**
- Header with institution selector
- Metric cards (summary KPIs)
- Employment rate chart
- Salary distribution box plot
- Interactive geographic map
- Industry pie chart
- Advanced degree stats
- Data quality badge

### 4.4 API Endpoints

```
GET /api/dashboard/alumni - Fetch alumni records
GET /api/dashboard/metrics - Get aggregated metrics
GET /api/dashboard/employment-rate - Time series data
GET /api/dashboard/salary-distribution - Quartile data
GET /api/dashboard/geographic - Map data
GET /api/dashboard/industries - Industry breakdown
GET /api/dashboard/education - Advanced degree stats
GET /api/dashboard/validation-report - Data quality report
```

---

## 5. Compliance & Privacy Framework

### 5.1 FERPA Compliance Strategy

**FERPA Applicability:**
- FERPA protects student education records held by institutions receiving federal funding
- edu.cloud collects ONLY publicly available data (not student records)
- No access to confidential grades, financial aid, or enrollment data required

**Compliant Data Collection:**
1. **Public LinkedIn Profiles** - Voluntary public disclosure by alumni
2. **News & Press Releases** - Publicly published information
3. **Professional Databases** - Business-facing, opt-in data
4. **Institution Public Directories** - Already published by institution

**Data Handling:**
- No collection of FERPA-protected records
- No requests for student education records from institution
- Optional: Institution may provide de-identified alumni lists for matching enhancement
- Clear disclosure: Users understand what data is collected and from where

### 5.2 Privacy Impact Assessment

| Data Type | Source | Risk Level | Mitigation |
|-----------|--------|------------|-----------|
| Alumni Name | Public (LinkedIn/Directory) | Low | MD5 hash if not from public disclosure |
| Employment Info | Public (LinkedIn/Company) | Low | Use only public profiles |
| Salary Estimates | Derived from BLS/Glassdoor | Medium | Aggregated, no individual targeting |
| Location Data | Public profiles | Low | City/state level only, no addresses |
| Education History | Public/Self-reported | Low | Graduation year, degree type only |

### 5.3 Data Retention Policy

- Raw scraping data: 90 days (then purge)
- Normalized alumni records: 1 year
- Aggregated metrics: Indefinite
- Validation reports: 2 years

---

## 6. Phased Implementation Plan

### Phase 1 (Weeks 1-2): Foundation
- [ ] Implement data schema and storage structure
- [ ] Build LinkedIn scraper PoC (50 alumni)
- [ ] Create validation framework
- [ ] Deploy test dataset

### Phase 2 (Weeks 3-4): Dashboard MVP
- [ ] Develop React dashboard components
- [ ] Integrate API endpoints
- [ ] Implement 5 core metrics visualizations
- [ ] Deploy to staging

### Phase 3 (Weeks 5-6): Production Hardening
- [ ] Scale to 500+ alumni records
- [ ] Implement automated data refresh
- [ ] Add pilot institution authentication
- [ ] Generate validation reports

### Phase 4 (Weeks 7-8): Pilot Deployment
- [ ] Deploy with first pilot institution
- [ ] Collect feedback and iterate
- [ ] Document insights and case study

---

## 7. Success Criteria

**Technical:**
- ✓ Data pipeline processes 50+ records without errors
- ✓ Validation framework confirms >85% accuracy
- ✓ Dashboard loads in <2 seconds
- ✓ All 5 metrics correctly calculated and visualized
- ✓ API returns <100ms response times

**Business:**
- ✓ Pilot institution confirms data accuracy through manual review
- ✓ Dashboard generates actionable insights about alumni outcomes
- ✓ Setup time for new institution <1 week
- ✓ Cost per institution <$500/month to operate

**Compliance:**
- ✓ Privacy assessment completed and documented
- ✓ No FERPA violations in data collection
- ✓ Clear data provenance documentation
- ✓ Retention policies documented and enforced

---

## 8. Appendix

### A. Data Sources Reference

- **LinkedIn Official API:** developers.linkedin.com/docs
- **Google Maps Geocoding API:** maps.googleapis.com
- **BLS Occupational Wage Data:** bls.gov/oes
- **Crunchbase Data:** crunchbase.com/docs
- **ZoomInfo API:** zoominfo.com/api

### B. Related Documentation

- FERPA Compliance Assessment: `/documents/FERPA_COMPLIANCE_ASSESSMENT.md`
- Data Privacy Policy: `/documents/PRIVACY_POLICY.md`
- Database Schema: `/documents/DATABASE_SCHEMA.sql`

---

**Document Owner:** Data Engineering Team  
**Last Updated:** April 7, 2026  
**Next Review:** May 7, 2026
