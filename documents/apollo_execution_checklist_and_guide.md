# Apollo Prospect Enrichment - Execution Checklist & Implementation Guide

**Document Version:** 1.0  
**Date:** April 8, 2026  
**Status:** READY FOR IMMEDIATE EXECUTION

---

## Quick Start Guide

### Pre-Execution Setup
- [ ] Apollo.io account login confirmed and API access validated
- [ ] Export template prepared (CSV with 9-column structure)
- [ ] Verification criteria defined (email status = VERIFIED minimum)
- [ ] Target institution list sourced (from IPEDS or institutional database)
- [ ] Decision-maker title library compiled and tested
- [ ] Deduplication rules documented
- [ ] Quality assurance checklist prepared

### Expected Timeline
- **Phase 1 (Searches 1-4):** 2-3 execution cycles
- **Phase 2 (Data Consolidation):** 1 execution cycle
- **Phase 3 (Validation & Export):** 1 execution cycle
- **Total:** Immediate execution upon plan approval

---

## Detailed Execution Steps

### STEP 1: Research Universities Search

**Objective:** Identify 15-20 VP Institutional Research/Advancement contacts at R1/R2 research universities

**Apollo Search Configuration:**
```
Search Term (Combined with AND logic):
- Organization: "University" OR "Research Institution"
- Organization Size: 5,000 - 50,000 employees
- Title: "VP Institutional Research" OR "VP Institutional Advancement" OR "Director Institutional Research" OR "Chief Data Officer"
- Country: United States
- Organization Type: Nonprofit (Education)
```

**Expected Results:** 15-20 contacts
**Data Fields to Capture:**
- First Name
- Last Name
- Job Title (exact)
- Email (with verification status)
- Phone
- LinkedIn URL
- Company Name
- Company Size
- Website

**Deduplication Rule:**
- Remove if same person appears multiple times at same institution
- Keep highest-level title if multiple records for same person

**Validation Checklist:**
- [ ] Email verification status = VERIFIED or VERIFIED_CURRENT
- [ ] Phone number present and matches institution directory
- [ ] LinkedIn URL points to valid profile
- [ ] Job title matches "VP" or "Director" level
- [ ] Institution is R1/R2 research university (verify via IPEDS)

**Record Count After De-dup:** _____ (Target: 15-20)

---

### STEP 2: Liberal Arts Colleges Search

**Objective:** Identify 12-15 VP Advancement/Alumni Relations contacts at selective liberal arts colleges

**Apollo Search Configuration:**
```
Search Term (Combined with AND logic):
- Organization: "College" (filtering out universities and community colleges)
- Organization Size: 500 - 5,000 employees
- Title: "VP Advancement" OR "VP Alumni Relations" OR "Director Alumni Relations" OR "Director Advancement"
- Country: United States
- Organization Type: Nonprofit (Education)
- Filter: Selective undergraduate focus (note: may require manual review)
```

**Expected Results:** 12-15 contacts
**Data Fields:** Same as Step 1

**Deduplication Rule:**
- Remove duplicates of same contact
- Keep VP-level over Director-level if multiple titles
- Keep advancement over alumni relations if same person

**Validation Checklist:**
- [ ] Email verified through Apollo
- [ ] Liberal Arts college confirmed (research manually if unclear)
- [ ] Title is advancement/alumni-focused
- [ ] LinkedIn confirms educational background and institution match
- [ ] Institution has 500-5,000 student enrollment (estimated)

**Record Count After De-dup:** _____ (Target: 12-15)

---

### STEP 3: Community Colleges Search

**Objective:** Identify 10-12 Director of Institutional Research contacts at public community/technical colleges

**Apollo Search Configuration:**
```
Search Term (Combined with AND logic):
- Organization: "Community College" OR "Technical College" OR "Public College"
- Organization Size: 500 - 15,000 employees
- Title: "Director Institutional Research" OR "Director Student Services" OR "VP Academics" OR "Dean of Students"
- Country: United States
- Organization Type: Public (Education)
```

**Expected Results:** 10-12 contacts
**Data Fields:** Same as Step 1

**Deduplication Rule:**
- Prioritize Institutional Research titles over Student Services
- Remove exact duplicates

**Validation Checklist:**
- [ ] Email verified
- [ ] Community college or technical college confirmed
- [ ] Title relevant to outcomes/effectiveness tracking
- [ ] Public institution verified
- [ ] Employee count 500-15,000 (consistent with CC size)

**Record Count After De-dup:** _____ (Target: 10-12)

---

### STEP 4: Professional Schools Search

**Objective:** Identify 10-13 Director Career Services/Dean contacts at law, medical, and business schools

**Apollo Search Configuration:**
```
Search Term (Combined with AND logic):
- Organization: "Law School" OR "Medical School" OR "Business School" OR "Graduate School"
- Organization Size: 300 - 5,000 employees
- Title: "Director Career Services" OR "Director of Admissions" OR "Dean of Students" OR "VP Student Services"
- Country: United States
- Organization Type: Nonprofit (Education) OR Academic
```

**Expected Results:** 10-13 contacts
**Data Fields:** Same as Step 1

**Deduplication Rule:**
- Remove duplicates
- Prioritize Director-level and Dean-level titles

**Validation Checklist:**
- [ ] Email verified through Apollo
- [ ] Professional school type confirmed
- [ ] Career/outcomes-focused role
- [ ] LinkedIn profile shows appropriate seniority

**Record Count After De-dup:** _____ (Target: 10-13)

---

### STEP 5: Data Consolidation & Deduplication

**Objective:** Combine all 4 search results into single consolidated dataset with zero duplicates

**Consolidation Process:**

1. **Merge all 4 segments into master spreadsheet**
   - Research Universities (Step 1 results)
   - Liberal Arts Colleges (Step 2 results)
   - Community Colleges (Step 3 results)
   - Professional Schools (Step 4 results)

2. **Apply Master Deduplication Rules**
   - Remove exact duplicates (same email address)
   - Remove same person at different institutions (check LinkedIn)
   - Flag institutional duplicates (e.g., 2 VPs at same university)
   - Keep highest-level title if person has multiple roles
   - Keep most recent contact information (check update dates)

3. **Consolidation Checklist:**
   - [ ] All 4 segment files imported
   - [ ] Total count before de-dup: _____ (target 47-60)
   - [ ] Exact duplicates identified and removed: _____ records
   - [ ] Cross-segment duplicates identified: _____ records
   - [ ] Final count after de-dup: _____ (target 50+)
   - [ ] All 9 data fields populated for each record
   - [ ] No gaps or missing values

4. **Data Standardization**
   - Standardize phone format: (XXX) XXX-XXXX
   - Standardize email format: lowercase, no spaces
   - Standardize institution names (use official legal names)
   - Standardize title formatting (proper case, no abbreviations)
   - Standardize LinkedIn URLs (remove query parameters)

---

### STEP 6: Alumni Base & Research Intensity Calculation

**Objective:** Populate Alumni Base and Research Intensity columns for all 50+ prospects

**Alumni Base Estimation:**
- Use organizational employee count as proxy
- Research universities: Employee count × 3-5x multiplier = estimated alumni
- Liberal arts colleges: Employee count × 2-4x multiplier
- Community colleges: Employee count × 1-2x multiplier
- Professional schools: Employee count × 1.5-3x multiplier
- Cross-reference with institution websites for official alumni figures when available

**Alumni Base Population Process:**
- [ ] Gather employee count from Apollo for each institution
- [ ] Apply appropriate multiplier based on institution type
- [ ] Document any institutions where official alumni data found
- [ ] Validate reasonableness (e.g., 500+ minimum alumni base)
- [ ] Note data source for each entry

**Research Intensity Classification:**

*High Research Intensity:*
- R1 Carnegie classification universities
- Heavy federal research funding
- 50+ research centers/institutes
- Examples: Harvard, MIT, Stanford, UCLA

*Medium Research Intensity:*
- R2 universities
- Moderate research funding
- 10-50 research centers
- Examples: University of Maine, Colorado State University

*Low Research Intensity:*
- Master's level institutions
- Limited research programs
- Examples: Most liberal arts colleges, community colleges

**Research Intensity Assignment:**
- [ ] Verify Carnegie Classification via IPEDS (for universities)
- [ ] Assign High/Medium/Low based on classification
- [ ] Document rationale for edge cases
- [ ] Cross-check with institution website (research office existence)

---

### STEP 7: Email Verification & Validation

**Objective:** Ensure 95%+ of prospects have verified email addresses with high deliverability

**Email Verification Process:**
- [ ] Review Apollo verification status for each email
  - VERIFIED = Confirmed deliverable
  - VERIFIED_CURRENT = Recently verified
  - UNVERIFIED = Needs secondary validation or removal
- [ ] For UNVERIFIED emails:
  - Cross-reference institution directory
  - Check LinkedIn for updated email
  - Use institution format (firstname.lastname@institution.edu)
  - If still unverified, flag for secondary outreach

**Email Verification Results:**
- Total emails: _____
- VERIFIED status: _____ (____%)
- VERIFIED_CURRENT: _____ (____%)
- UNVERIFIED (secondary verified): _____ (____%)
- UNVERIFIED (removed): _____ records
- **Final Verified Rate: _____% (Target: 95%+)**

**Phone Number Validation:**
- [ ] Validate phone format consistency
- [ ] Cross-reference with institution directory for accuracy
- [ ] For missing phone numbers, attempt to populate from:
  - Institution main line + title search
  - LinkedIn profile
  - Institution department directory

**Phone Validation Results:**
- Total phone numbers present: _____ (____%)
- Phone numbers with secondary validation: _____ (____%)
- Phone numbers remaining blank (acceptable): _____ records

---

### STEP 8: LinkedIn Profile Validation

**Objective:** Verify LinkedIn profiles match job titles and confirm current employment

**LinkedIn Validation Process:**
- [ ] Access Apollo LinkedIn URL field for each prospect
- [ ] Verify profile exists and is publicly accessible
- [ ] Confirm:
  - Current position matches reported title
  - Current company matches reported institution
  - Job start date is recent (within 1-3 years for stability)
  - No job change indicators (if LinkedIn shows recent change, flag)

**LinkedIn Validation Results:**
- Total LinkedIn URLs: _____ (____%)
- Profiles confirming title/company match: _____ (____%)
- Profiles requiring manual review: _____ records
- Job change indicators noted: _____ records

**Records Needing Attention:**
- Document any discrepancies between Apollo and LinkedIn
- Update titles/positions if LinkedIn shows more current information
- Flag contacts with very recent role changes (< 3 months)

---

### STEP 9: Final Quality Assurance & Export

**Pre-Export Data Quality Audit:**

**Completeness Check:**
- [ ] Record count: _____ (minimum 50 ✓/✗)
- [ ] All 9 columns present: ✓/✗
- [ ] No blank cells in required fields (Name, Title, Email, Institution): ✓/✗
- [ ] Alumni Base populated: _____ records (____%) ✓/✗
- [ ] Research Intensity populated: _____ records (____%) ✓/✗

**Accuracy Check (10% Sample Validation):**
- [ ] Random sample of 5-6 records selected
- [ ] Cross-referenced against:
  - Institution website (verify contact is real)
  - LinkedIn profile (verify title/employment)
  - Institution directory (verify phone/email)
- Sample validation results: _____/___ records accurate ✓/✗
- Issues found and remediated: _____

**Data Type Validation:**
- [ ] Names: Proper case (FirstName LastName)
- [ ] Emails: Valid format (name@institution.edu)
- [ ] Phones: Consistent format ((XXX) XXX-XXXX)
- [ ] LinkedIn URLs: Valid HTTPS URLs
- [ ] Alumni Base: Numeric values with + (e.g., 5000+)
- [ ] Research Intensity: Only H/M/L values

**Format Validation:**
- [ ] CSV file is UTF-8 encoded
- [ ] File opens correctly in Excel/Google Sheets
- [ ] No special character encoding errors
- [ ] Column headers match specification exactly
- [ ] No extra blank rows or columns

**Final Sign-Off:**
- [ ] Data quality meets standards
- [ ] All validation checks passed
- [ ] Ready for export and delivery

---

## CSV Export Specification

**File Name:** `apollo_enriched_prospect_list_50plus_[DATE].csv`

**Column Order & Formatting:**
```
1. Institution Name (Text)
2. Contact Name (Text)
3. Title (Text)
4. Email (Text, lowercase)
5. Phone (Text, format: (XXX) XXX-XXXX)
6. LinkedIn URL (Text, HTTPS URL)
7. Institution Size (Text, e.g., "5000+ employees")
8. Alumni Base (Text, e.g., "10000+")
9. Research Intensity (Text, values: High/Medium/Low)
```

**Example Records:**
```csv
Institution Name,Contact Name,Title,Email,Phone,LinkedIn URL,Institution Size,Alumni Base,Research Intensity
Harvard University,Dr. Sarah Johnson,VP Institutional Research,sjohnson@harvard.edu,(617) 495-1234,https://www.linkedin.com/in/sarahjohnson,8500+ employees,20000+,High
Amherst College,Michael Chen,VP Advancement,mchen@amherst.edu,(413) 542-5678,https://www.linkedin.com/in/michaelchen,1200+ employees,3500+,Medium
Santa Fe Community College,Jennifer Martinez,Director of Institutional Research,jmartinez@sfcc.edu,(505) 428-1000,https://www.linkedin.com/in/jennifermartinez,800+ employees,1000+,Low
```

**Export Checklist:**
- [ ] File saved with correct filename and date
- [ ] UTF-8 encoding confirmed
- [ ] File size reasonable (50+ records = 15-30 KB)
- [ ] Spot-check 3-5 records open correctly in Excel
- [ ] Column widths adjusted for readability
- [ ] No extra blank rows/columns

---

## Segment Distribution Target

**Expected Final Distribution (50+ Total):**

| Segment | Target Count | Actual | Status |
|---------|--------------|--------|--------|
| Research Universities | 15-20 | _____ | ✓/✗ |
| Liberal Arts Colleges | 12-15 | _____ | ✓/✗ |
| Community Colleges | 10-12 | _____ | ✓/✗ |
| Professional Schools | 10-13 | _____ | ✓/✗ |
| **TOTAL** | **50+** | **_____** | **✓/✗** |

---

## Troubleshooting Guide

### Issue: Insufficient Search Results for Segment

**Symptoms:** Search returns < 10 results for any segment

**Resolution:**
1. Broaden job title filters (include associate/assistant director level)
2. Expand organization size range (±20%)
3. Include secondary keywords (e.g., "Advancement Services", "Outcomes Assessment")
4. Manually add top institutions known to be in segment (verify through institution websites)

### Issue: High Unverified Email Rate

**Symptoms:** >10% of emails show UNVERIFIED status

**Resolution:**
1. Cross-reference institution directory pages
2. Use institutional email format pattern to estimate correct address
3. Check LinkedIn profiles for updated contact information
4. Contact institution main line to verify correct contact/email
5. Consider removing if email cannot be verified after secondary attempts

### Issue: Duplicate Contacts Detected

**Symptoms:** Same person appears multiple times or duplicate email addresses

**Resolution:**
1. Keep only most recent/highest-level entry
2. Check LinkedIn update dates to determine currency
3. Verify same person hasn't moved to different institution
4. Remove lower-level title if person has multiple roles listed

### Issue: Missing Alumni Base Data

**Symptoms:** No employee count in Apollo for institution

**Resolution:**
1. Research institution size from:
   - Institution website (About/Facts section)
   - Chronicle of Higher Education database
   - IPEDS database
   - LinkedIn company page (employee count estimate)
2. Calculate alumni base using appropriate multiplier
3. Note data source in separate metadata file

### Issue: LinkedIn URL Errors

**Symptoms:** LinkedIn links return 404 or expired profile

**Resolution:**
1. Search LinkedIn for contact by name + institution
2. Verify profile exists and is current
3. Update URL if profile moved or name changed
4. If profile cannot be found, note as "LinkedIn not found" and include note

---

## Success Criteria Checklist

**TASK COMPLETE WHEN:**

- [x] Strategic plan document written and approved
- [ ] 50+ unique prospects identified and enriched
- [ ] All 9 data columns populated with verified information
- [ ] 95%+ email verification rate achieved
- [ ] 90%+ LinkedIn profile match confirmed
- [ ] Zero duplicate records in final dataset
- [ ] Segment distribution balanced (all 4 segments represented)
- [ ] CSV file exported and quality-tested
- [ ] All research and validation documentation completed
- [ ] Execution summary report written
- [ ] Files committed to repository

**Final Deliverables Ready:**
- [ ] `apollo_enriched_prospect_list_50plus_[DATE].csv`
- [ ] `apollo_prospect_enrichment_research_report.md`
- [ ] `apollo_execution_summary.md`
- [ ] `apollo_execution_checklist_and_guide.md` (this document)

---

## Document Control

**Version:** 1.0  
**Status:** READY FOR EXECUTION  
**Last Updated:** April 8, 2026

This checklist provides step-by-step guidance for executing the Apollo prospect enrichment task. Follow sequentially for optimal results and quality assurance.
