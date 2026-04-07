# Legal Review Recommendations for FERPA Compliance

**Document Version:** 1.0  
**Date:** April 7, 2026  
**Prepared For:** Legal Counsel Review & Executive Decision  
**Status:** Pre-Pilot Legal Assessment  

---

## Executive Summary

This document outlines the specific items requiring legal counsel review before edu.cloud's pilot launch with higher education institutions. It prioritizes legal/compliance work, defines approval workflows, and provides templates and guidance for each deliverable.

**Legal Review Scope:**
1. **Regulatory Compliance** — FERPA adherence; state privacy law implications
2. **Contracts & Agreements** — Institutional data sharing agreements; vendor contracts
3. **Privacy & Consent** — Student consent forms; privacy notices
4. **Risk Management** — Liability exposure; insurance coverage; indemnification
5. **Incident Response** — Breach notification procedures; regulatory reporting

**Timeline:** All Phase 1 legal items must complete 10 days before pilot data access begins.

---

## Part 1: Legal Deliverables Requiring Review

### 1.1 FERPA Regulatory Compliance Review

#### Item 1: FERPA Compliance Framework Document
**Status:** ✅ **DELIVERED** (FERPA_requirements_mapping.md)

**Legal Review Scope:**
- [ ] Verification that FERPA analysis is accurate and current
- [ ] Confirmation that edu.cloud's data handling model aligns with FERPA standards
- [ ] Identification of any FERPA interpretation risks or gray areas
- [ ] Confirmation that proposed consent process complies with FERPA requirements
- [ ] Assessment of liability exposure for FERPA violations

**Reviewer:** External or internal legal counsel with FERPA expertise

**Timeline:** 5 business days for review + comments

**Approval Criteria:**
- Legal counsel confirms FERPA compliance framework is sound
- Any identified gaps are documented and accepted as known risks
- Mitigation roadmap is feasible and reasonable

**Deliverable Upon Approval:**
- Legal counsel sign-off memo (1-2 pages) confirming FERPA compliance review

---

#### Item 2: Data Privacy Laws Compliance Assessment
**Status:** 🟨 **IN PROGRESS** (Partially covered in FERPA framework)

**Legal Review Scope:**
- [ ] State privacy law implications (FERPA is federal; states may have additional requirements)
- [ ] Specific state laws applicable based on pilot institutions' locations:
  - [ ] California (FERPA + California Consumer Privacy Act [CCPA]?)
  - [ ] New York (FERPA + New York SHIELD Act?)
  - [ ] Texas (FERPA + Texas Data Privacy and Security Act?)
  - [ ] Other states: _______________
- [ ] Compliance with COPPA (Children's Online Privacy Protection Act) if any pilot students under 13
- [ ] GLBA (Gramm-Leach-Bliley Act) applicability (unlikely, but check if financial aid data involved)
- [ ] State education records privacy laws (many states have their own FERPA-like rules)

**Reviewer:** Legal counsel with state privacy law expertise OR outside counsel

**Timeline:** 7 business days for review + assessment

**Deliverable Upon Completion:**
- State Privacy Law Compliance Memo (2-3 pages) identifying:
  - Applicable state laws for each pilot institution
  - Specific compliance requirements beyond FERPA
  - Any conflicts between state law and FERPA
  - Recommended adjustments to edu.cloud's practices

---

### 1.2 Institutional Contracts & Agreements

#### Item 3: Institutional Data Use Agreement (DUA) Template
**Status:** 🟨 **DRAFTED** (Template version requires legal review)

**Legal Review Scope:**
- [ ] **Scope of Services:** Clear definition of what edu.cloud will do with data
  - Question: Is edu.cloud acting as "school official" (with institutional authority) or as external processor?
  - Recommendation: Frame as processor/contractor, not school official (limits your authority)
  - Required Language: "edu.cloud is a data processor acting on behalf of [Institution] for the purposes of alumni outcome research and impact measurement."

- [ ] **Data Authorization & Legitimacy:**
  - Question: How does the institution authorize release of education records to edu.cloud?
  - Legal Requirement: Institution must document legitimate basis (e.g., student consent, institutional research, accreditation support)
  - Required Language: "Institution represents that it has obtained all necessary student consents and complies with FERPA before releasing data to edu.cloud."

- [ ] **Scope of Data:**
  - Question: What data types will institution share?
  - Legal Issue: Over-broad data sharing increases FERPA violation risk
  - Recommendation: Explicitly list data types:
    - [ ] Student names, IDs, contact info
    - [ ] Graduation year, degree, major
    - [ ] Educational outcomes (salary, job title, company)
    - [ ] Other: _______________
  - Explicitly EXCLUDE: Grades, disciplinary records, financial aid amounts, health/counseling records, etc.

- [ ] **Use Limitations:**
  - Question: What can edu.cloud do with the data?
  - Legal Requirement: Data use must be limited to specific, stated purposes
  - Required Language: "edu.cloud will use data solely for: (1) alumni outcome research, (2) institutional impact reporting, (3) accreditation support. Data will not be used for commercial purposes, resold, or shared with third parties without [Institution]'s written consent."

- [ ] **Retention & Deletion:**
  - Question: How long can edu.cloud keep the data?
  - Legal Requirement: Retention period must be reasonable and documented
  - Recommended Language: "edu.cloud will retain Institution data for 3 years following the end of this agreement, then permanently delete. Institution may request deletion anytime; edu.cloud will delete within 30 days."

- [ ] **Data Security & Safeguards:**
  - Question: What security measures will edu.cloud implement?
  - Legal Requirement: "Reasonable safeguards" appropriate to data sensitivity
  - Recommended Language: "edu.cloud will implement industry-standard safeguards including encryption (at rest and in transit), role-based access control, audit logging, and annual security audits. edu.cloud will notify Institution of any breaches within 30 days."

- [ ] **Breach Notification:**
  - Question: What happens if edu.cloud has a data breach?
  - Legal Requirement: FERPA mandates notification within 30 days; Institution needs prompt notice
  - Recommended Language: "edu.cloud will notify Institution within 5 business days of discovering any breach. Institution will determine whether to notify students (edu.cloud will provide notification template)."

- [ ] **Audit Rights:**
  - Question: Can Institution audit edu.cloud's handling of data?
  - Legal Requirement: Yes; Institution maintains FERPA responsibility
  - Recommended Language: "Institution has the right to audit edu.cloud's handling of Institution data, including review of security controls, access logs, retention/deletion procedures. edu.cloud will cooperate with audits and provide requested documentation within 30 days."

- [ ] **Liability & Indemnification:**
  - Question: Who is liable if there's a FERPA violation?
  - Legal Requirement: Need to allocate liability between Institution and edu.cloud
  - Recommended Language: "edu.cloud will indemnify Institution against third-party claims and regulatory penalties arising from edu.cloud's mishandling of Institution data. Institution remains liable for its own FERPA violations (e.g., improper initial disclosure to edu.cloud)."

- [ ] **Term & Termination:**
  - Question: How long does the agreement last? What happens at the end?
  - Recommended Language: "Agreement continues for [duration of pilot]. Upon termination: (1) edu.cloud will cease using data within 30 days, (2) edu.cloud will delete Institution data within 30 days, (3) edu.cloud will certify deletion in writing."

- [ ] **Amendments & Updates:**
  - Question: Can the agreement be changed?
  - Recommended Language: "Either party may propose amendments. Amendments become effective upon written consent of both parties. Security updates and regulatory changes may be implemented by edu.cloud with 30 days' notice to Institution."

**Red Flags to Avoid:**
- ❌ "edu.cloud may use data for any purpose not prohibited by law" (too vague; invite misuse)
- ❌ "Data will be retained indefinitely" (violates FERPA purpose limitation)
- ❌ "edu.cloud is not liable for breaches" (unacceptable to institutions)
- ❌ "No audit rights" (Institution cannot manage FERPA risk)
- ❌ Data can be shared with third parties without consent (violates FERPA)

**Reviewer:** Your legal counsel + Institutional legal counsel (each institution reviews before signing)

**Timeline:** 
- edu.cloud legal: 5 business days initial draft review
- Institution legal: 2-3 weeks for each institution (they move slowly)

**Approval Criteria:**
- Legal counsel confirms language is FERPA-compliant
- Language is clear and unambiguous (no loopholes)
- Liability allocation is balanced and acceptable to both parties
- Retention/deletion schedule is explicit and realistic

**Deliverable Upon Approval:**
- Final Institutional Data Use Agreement template (2-3 pages)
- Executed signature pages from each pilot institution

---

#### Item 4: Master Service Agreement (MSA) or Terms of Service
**Status:** ⬜ **NOT STARTED** (May already exist; legal review needed)

**Legal Review Scope:**
- [ ] Confirmation that existing MSA/ToS adequately covers FERPA compliance
- [ ] Addition of FERPA-specific terms if not present
- [ ] Addition of data processing/DPA language
- [ ] Confirmation that liability limitations are appropriate given FERPA exposure
- [ ] Review of limitation of liability clause (should not disclaim FERPA violation liability)

**Reviewer:** Your legal counsel

**Timeline:** 3 business days for review

**Approval Criteria:**
- FERPA language added to MSA/ToS
- Limitation of liability clause does not disclaim FERPA breach liability
- Data processing/DPA language aligns with institutional DUA

**Note:** If no MSA exists, consider whether you need one (depends on complexity of institutional relationships and services).

---

### 1.3 Student Consent & Privacy Notices

#### Item 5: Student Consent Form (FERPA-Compliant)
**Status:** 🟨 **DRAFTED** (Requires legal review before use)

**Legal Review Scope:**
- [ ] **Validity Under FERPA:** Does form meet FERPA's "prior written consent" requirement?
  - FERPA requires: Written consent, signed by eligible student, specific to disclosure
  - Legal Assessment: Evaluate consent form against FERPA regulations (34 CFR § 99.3)

- [ ] **Content Requirements:**
  - [ ] Clear identification of Institution and edu.cloud
  - [ ] Specific description of data being disclosed (not vague "educational records")
  - [ ] Purpose of disclosure (specific use, not "any lawful purpose")
  - [ ] Identification of recipients (edu.cloud, not "third parties")
  - [ ] Student rights notification (access, correction, withdrawal)
  - [ ] No condition precedent (consent not required for enrollment/services)
  - [ ] Expiration date or ongoing status (how long is consent valid?)
  - [ ] Signature/date/version number

- [ ] **Language & Clarity:**
  - [ ] Plain English (not legal jargon)
  - [ ] Adequate white space and formatting
  - [ ] Readable font size (12pt minimum)
  - [ ] Mobile-friendly if digital form

- [ ] **Withdrawal Mechanism:**
  - Legal Requirement: Student must be able to withdraw consent
  - Recommended Language: "You may withdraw this consent anytime by emailing privacy@edu.cloud. Upon withdrawal, edu.cloud will stop using your data and will delete your records within 30 days."

- [ ] **State Law Variations:**
  - Question: Do any pilot institutions' states require specific consent language?
  - Legal Assessment: Review state privacy laws (CA, NY, TX, etc.) for specific consent requirements
  - Potential Issue: FERPA consent may not satisfy state law consent (may need dual consent)

**Red Flags to Avoid:**
- ❌ Consent form describes data vaguely ("your educational records")
- ❌ Form doesn't identify edu.cloud as specific recipient
- ❌ Form doesn't explain purpose ("for any institutional use")
- ❌ Form is too long or complex (lower completion rates)
- ❌ Form doesn't include withdrawal mechanism

**Reviewer:** Your legal counsel + Institutional legal counsel

**Timeline:** 3 business days for review + revisions

**Approval Criteria:**
- Form complies with FERPA written consent requirement
- Form language is clear and understandable
- Institutional counsel approves
- Form is mobile-friendly and easy to complete

**Deliverable Upon Approval:**
- Final Consent Form (1-2 pages)
- Web form version (if applicable)
- Instructions for institutions on how to deploy form

---

#### Item 6: Student Privacy Notice / FERPA Rights Notice
**Status:** 🟨 **DRAFTED** (Requires legal review before publication)

**Legal Review Scope:**
- [ ] **FERPA Rights Notification:** Does notice adequately inform students of their FERPA rights?
  - FERPA Requirement: Institutions must notify students of rights (20 U.S.C. § 1232g(e))
  - Legal Assessment: Confirm notice meets legal standard

- [ ] **Content Requirements:**
  - [ ] Definition of education records (what data is protected)
  - [ ] Student rights under FERPA:
    - [ ] Right to inspect/review records
    - [ ] Right to request corrections
    - [ ] Right to withdraw consent
  - [ ] How to request access/correction/withdrawal (process and timeline)
  - [ ] edu.cloud's role and privacy practices
  - [ ] Data retention schedule
  - [ ] Complaint process (to Institution or Department of Education)
  - [ ] Contact information (Institution's compliance officer, edu.cloud privacy lead)

- [ ] **Accuracy & Completeness:**
  - [ ] Confirm data retention schedule stated in notice matches documented policy
  - [ ] Confirm contact information is current
  - [ ] Confirm complaint process accurately describes steps

- [ ] **Accessibility:**
  - [ ] Notice is in plain English
  - [ ] Available in accessible formats (for students with disabilities)
  - [ ] Posted prominently on Institution's website and edu.cloud's website

**Reviewer:** Your legal counsel

**Timeline:** 3 business days for review

**Approval Criteria:**
- Notice adequately communicates student FERPA rights
- Contact information and processes are accurate
- Notice is clear and understandable

**Deliverable Upon Approval:**
- Final Privacy Notice (1-2 pages)
- Web-accessible version
- PDF version for institutions to post

---

### 1.4 Vendor Agreements & Data Processing

#### Item 7: AWS Data Processing Addendum (DPA)
**Status:** 🟨 **IN PROGRESS** (AWS DPA available; legal review recommended)

**Legal Review Scope:**
- [ ] **FERPA Compliance:** Does AWS DPA adequately address FERPA requirements?
  - Legal Assessment: Confirm DPA requires AWS to protect education records
  - Potential Gap: AWS DPA may not be FERPA-specific; review for adequacy

- [ ] **Key DPA Provisions:**
  - [ ] Data Processing Scope: AWS processes education records as data processor
  - [ ] Security Requirements: AWS must implement "appropriate safeguards" (encrypt, access control, audit logging)
  - [ ] Subprocessors: AWS cannot subcontract without approval
  - [ ] Breach Notification: AWS must notify within 30 days of breach
  - [ ] Audit Rights: edu.cloud (or Institution on our behalf) can audit AWS security
  - [ ] Data Location: Confirm data stored in U.S. (if required by Institution)
  - [ ] Data Deletion: AWS must delete data upon termination/request
  - [ ] Liability: AWS indemnifies for breaches

- [ ] **Potential Issues:**
  - AWS DPA may limit liability ("not responsible for indirect damages")
  - Question: Does liability cap adequately cover potential FERPA violation damages?
  - Legal Assessment: Evaluate adequacy of liability clause

**Reviewer:** Your legal counsel (can delegate to AWS if simple execution)

**Timeline:** 2 business days for review (AWS DPA is standard)

**Approval Criteria:**
- DPA covers AWS's role as data processor for education records
- DPA requires appropriate safeguards and breach notification
- Liability provisions are acceptable

**Deliverable Upon Approval:**
- Executed AWS Data Processing Addendum
- Copy filed with compliance documentation

---

#### Item 8: Other Third-Party Vendor Agreements
**Status:** 🟡 **PARTIAL** (Some vendors identified; agreements needed)

**Vendors Requiring DPA/Assessment:**

1. **Mixpanel (Analytics)**
   - [ ] Does Mixpanel receive any education record data? (Should NOT)
   - [ ] Legal Review: Confirm data minimization; review Mixpanel DPA for adequacy
   - Recommended: Do NOT send education record data to Mixpanel (only anonymized events)
   - If data minimized: Standard DPA may be acceptable
   - If PII shared: Require Mixpanel DPA with FERPA language

2. **Twilio or SendGrid (Email/SMS, if used)**
   - [ ] Does vendor receive education record data?
   - [ ] Legal Review: If only for transactional emails (password resets), minimal FERPA concern
   - If used for institutional communications with education records: Require DPA

3. **Others TBD:**
   - [ ] _____________________

**Reviewer:** Privacy Lead + Legal Counsel (for DPA review)

**Timeline:** 5 business days per vendor

**Deliverables Upon Completion:**
- Vendor Data Matrix: vendors vs. data types received
- DPA for each vendor processing education records
- Documented justification for each vendor (why needed, data minimization approach)

---

### 1.5 Risk Management & Insurance

#### Item 9: FERPA Violation Liability Assessment
**Status:** ⬜ **NOT STARTED** (Requires legal counsel)

**Legal Assessment Scope:**
- [ ] **Potential Liability Exposure:** What is edu.cloud's exposure if FERPA violation occurs?
  - Regulatory Penalty: Potential loss of federal funding for Institution (edu.cloud not directly penalized)
  - Institution Liability: Institution liable to students for FERPA violation
  - Third-Party Claims: Students could sue Institution; Institution could sue edu.cloud
  - Reputational: Significant brand damage

- [ ] **Indemnification Responsibilities:**
  - Question: Who pays if Institution is sued over FERPA violation caused by edu.cloud?
  - Legal Framework: Institutional DUA should require edu.cloud to indemnify Institution
  - Recommended Language: "edu.cloud will indemnify and hold Institution harmless from claims, damages, and costs arising from edu.cloud's breach of FERPA or this Agreement."

- [ ] **Insurance Requirements:**
  - Question: Should edu.cloud carry cyber liability insurance?
  - Recommendation: YES - strongly recommended for FERPA exposure
  - Coverage to consider:
    - [ ] Data breach liability ($2-5M minimum)
    - [ ] Cyber extortion
    - [ ] Breach notification costs
    - [ ] Regulatory defense costs
    - [ ] Network security/privacy liability
  - Timeline: Obtain before pilot launch
  - Cost: $3-8K annually for $3-5M coverage (approximate)

**Reviewer:** Your legal counsel + insurance broker

**Timeline:** 5 business days for assessment

**Deliverables Upon Completion:**
- Risk Assessment Memo: potential liability exposure
- Insurance Broker Quote: cyber liability coverage
- Recommendation: carry insurance (yes/no and amount)

---

#### Item 10: Limitation of Liability Review
**Status:** 🟨 **IN PROGRESS** (Existing ToS/MSA may have clause; requires review)

**Legal Review Scope:**
- [ ] **Current Limitation Clause:** Does ToS/MSA limit liability for FERPA violations?
  - Problem: Many software companies include broad liability disclaimers
  - Example: "IN NO EVENT SHALL COMPANY BE LIABLE FOR..."
  - Question: Does disclaimer cover FERPA violations? (It shouldn't)

- [ ] **FERPA Exception to Liability Limits:**
  - Legal Requirement: Liability limits should NOT apply to FERPA violations
  - Recommended Language: "Notwithstanding any limitation of liability in this Agreement, the parties do not limit liability for: (1) breaches of confidentiality obligations, (2) FERPA violations, (3) data breaches, (4) indemnification obligations."

- [ ] **Institutional Expectations:**
  - Institutions will expect unlimited liability for FERPA breaches
  - Legal Assessment: Is edu.cloud prepared to accept this exposure?
  - Business Decision: You may accept unlimited liability for FERPA breaches (insure accordingly)

**Reviewer:** Your legal counsel

**Timeline:** 2 business days for review

**Deliverables Upon Completion:**
- Revised Limitation of Liability clause (if needed)
- Documentation of liability allocation (what's limited, what's not)

---

## Part 2: External Legal Counsel Recommendations

### 2.1 When to Hire Outside Counsel

**Recommend hiring specialized outside counsel for:**

1. **FERPA Expertise**
   - Recommendation: Hire law firm with higher education/FERPA specialization
   - Services: Review FERPA compliance framework, institutional DUA template, consent forms
   - Cost: $5-10K for comprehensive review
   - Timeline: 2-3 weeks
   - Benefit: Expert credibility with institutional partners; independent validation

2. **State Privacy Law Analysis**
   - Recommendation: If pilot institutions span multiple states, get state law review
   - Services: Identify applicable state privacy laws; recommend compliance steps
   - Cost: $3-5K for multi-state analysis
   - Timeline: 1-2 weeks
   - Benefit: Avoid state-specific FERPA compliance gaps

3. **Institutional Negotiations**
   - Recommendation: Institutional legal teams often want to negotiate DUA terms
   - Services: Legal counsel to negotiate on your behalf
   - Cost: $2-3K per institution negotiation (if needed)
   - Timeline: 2-4 weeks per institution
   - Benefit: Experienced advocate; institutional relationships

### 2.2 Internal vs. External Counsel

| Item | Internal? | External? | Recommendation |
|---|---|---|---|
| FERPA Compliance Review | Possible | **Better** | External (higher ed expertise) |
| FERPA Policy Drafting | Possible | **Better** | External (higher ed expertise) |
| Institutional DUA Negotiation | Possible | **Better** | External (experience with institutions) |
| Student Consent Form | Yes | Better | Start internal; external legal review before use |
| Privacy Notice | Yes | Better | Start internal; external legal review before publication |
| AWS DPA Review | Yes | - | Internal sufficient (standard agreement) |
| Vendor DPA Review | Yes | - | Internal sufficient (with Privacy Lead) |
| Insurance Broker Coordination | **Internal/External** | - | Work with insurance broker (not lawyer) |
| Incident Response Procedure | **Internal** | External (optional) | Internal; coordinate with legal counsel |

**Recommended Approach:**
- Hire external counsel for Items 1-3 (FERPA expertise + negotiations)
- Use internal counsel for remaining items + external review before finalizing documents

---

## Part 3: Legal Review Workflow & Timeline

### Phase 1: Document Preparation (Weeks 1-2)

| Week | Deliverable | Owner | Status |
|---|---|---|---|
| 1 | FERPA Compliance Framework | Privacy Lead | ✅ Done |
| 1 | Privacy Impact Assessment | Privacy Lead | ✅ Done |
| 1 | Institutional DUA Template (draft) | Privacy Lead + Internal Counsel | 🟨 In Progress |
| 1 | Student Consent Form (draft) | Privacy Lead + Internal Counsel | 🟨 In Progress |
| 2 | Privacy Notice (draft) | Privacy Lead + Internal Counsel | 🟨 In Progress |
| 2 | State Privacy Law Analysis | Internal or External Counsel | ⬜ Not Started |

### Phase 2: Internal Legal Review (Weeks 3-4)

| Item | Internal Counsel | Timeline | Status |
|---|---|---|---|
| FERPA Framework | Sign-off memo | 5 days | ⬜ Pending |
| DUA Template | Revisions + approval | 5 days | ⬜ Pending |
| Consent Form | Revisions + approval | 3 days | ⬜ Pending |
| Privacy Notice | Revisions + approval | 3 days | ⬜ Pending |
| State Law Analysis | Assessment memo | 7 days | ⬜ Pending |

### Phase 3: External Legal Review (Weeks 3-4, Parallel)

| Item | External Counsel | Timeline | Budget |
|---|---|---|---|
| FERPA Compliance Review | 2-3 week turnaround | $5-10K | Hire |
| Institutional DUA Review | 2-3 week turnaround | (included in FERPA review) | - |
| State Privacy Laws | 1-2 week turnaround | $3-5K | Hire |

### Phase 4: Institutional Review (Weeks 4-6)

| Institution | DUA Review | Consent Review | Timeline |
|---|---|---|---|
| Institution #1 | Institutional counsel | Internal review | 2-3 weeks |
| Institution #2 | Institutional counsel | Internal review | 2-3 weeks |
| Institution #3 | Institutional counsel | Internal review | 2-3 weeks |

### Phase 5: Finalization & Execution (Weeks 5-7)

| Item | Action | Timeline | Status |
|---|---|---|---|
| Institutional DUAs | Negotiate + execute signatures | 2-3 weeks | ⬜ Pending |
| Student Consent Form | Institutional approval + deployment | 1 week | ⬜ Pending |
| Privacy Notice | Publication on websites | 1 week | ⬜ Pending |
| AWS DPA | Execution | 1 week | ⬜ Pending |
| Insurance | Policy execution | 1 week | ⬜ Pending |

**Critical Path:** Institutional DUA negotiation is longest; start immediately

---

## Part 4: Specific Legal Language Templates

### 4.1 FERPA Compliance Acknowledgment (for DUA)

```
FERPA COMPLIANCE ACKNOWLEDGMENT

Institution and edu.cloud acknowledge that:

1. Education Records: Institution's data constitutes "education records" 
   under the Family Educational Rights and Privacy Act (FERPA), 
   20 U.S.C. § 1232g, and the implementing regulations, 34 CFR Part 99.

2. edu.cloud's Role: edu.cloud will serve as a data processor and 
   institutional agent on behalf of Institution, limited to the 
   purposes stated in this Agreement.

3. FERPA Compliance: edu.cloud will comply with all FERPA requirements 
   regarding the security, retention, and use of education records, 
   including but not limited to:
   - Implementing reasonable security measures to protect records
   - Limiting access to authorized personnel only
   - Maintaining audit logs of all access
   - Retaining records only as long as necessary
   - Deleting records upon Institution's request
   - Notifying Institution of any breach within 30 days

4. Institutional Responsibility: Institution retains all responsibility 
   and liability under FERPA for edu.cloud's handling of education 
   records. Institution represents that it has obtained all necessary 
   student consents and complies with FERPA before releasing data to 
   edu.cloud.

5. Indemnification: edu.cloud will indemnify Institution against any 
   claims, damages, penalties, or costs arising from edu.cloud's breach 
   of this Agreement or violation of FERPA.
```

---

### 4.2 Breach Notification Procedure (for DPA)

```
BREACH NOTIFICATION

In the event of a breach or suspected breach of education records:

1. edu.cloud will conduct an investigation and determine the scope of 
   the breach (what data was accessed, who accessed it, how long).

2. edu.cloud will notify Institution within 5 business days of 
   discovering the breach, providing:
   - Description of the breach
   - Types of data affected
   - Number of records affected
   - Likely impact on students
   - edu.cloud's response and remediation steps

3. Institution will determine whether to notify affected students 
   within the FERPA-required timeline (within 30 days or per state law).

4. edu.cloud will provide a notification template to Institution 
   for notifying students.

5. edu.cloud will conduct a root cause analysis and provide a written 
   report within 30 days, including:
   - How the breach occurred
   - Contributing factors
   - Preventive measures implemented
   - Recommendations to Institution
```

---

### 4.3 Data Use Restrictions Language (for DUA)

```
DATA USE RESTRICTIONS

edu.cloud will use Institution data solely for:

1. Alumni outcome research and impact measurement
2. Institutional impact reporting and dashboards
3. Accreditation and strategic planning support
4. Aggregate research and publications (with Institution approval)

edu.cloud will NOT:

1. Use data for commercial purposes or to develop competing products
2. Share data with third parties without Institution's written consent
3. Sell, license, or transfer data to any other party
4. Use data for marketing, promotional, or advertising purposes
5. Use data to identify, target, or profile students for non-academic purposes
6. Combine Institution data with other institutions' data for competitive analysis

Any use outside these restrictions requires Institution's prior written approval.
```

---

### 4.4 Student Consent Withdrawal Language (for Consent Form)

```
WITHDRAWAL OF CONSENT

You may withdraw this consent at any time by emailing 
privacy@edu.cloud or [Institution contact].

When you withdraw consent:

1. edu.cloud will immediately cease using your data for future analyses
2. edu.cloud will delete your personally identifiable information 
   within 30 days
3. Institutional reports already generated may continue to reference 
   de-identified aggregate data (but not your individual data)
4. You will receive a confirmation email when your data has been deleted

To withdraw: [Simple process - email template provided]
```

---

## Part 5: Legal Approval Checklist

**All items must be completed before pilot data access begins.**

- [ ] **Item 1: FERPA Compliance Review**
  - Legal counsel sign-off: __________________ Date: ______
  - Any gaps identified and accepted as known risks: Yes / No
  - Evidence filed: Copy of sign-off memo attached

- [ ] **Item 2: State Privacy Law Assessment**
  - Legal counsel assessment complete: Yes / No
  - State-specific adjustments identified: Yes / No
  - Evidence filed: Copy of state law memo attached

- [ ] **Item 3: Institutional Data Use Agreement**
  - Internal legal counsel approval: __________________ Date: ______
  - External counsel review (if hired): __________________ Date: ______
  - Institution #1 signature: __________________ Date: ______
  - Institution #2 signature: __________________ Date: ______
  - Institution #3 signature: __________________ Date: ______
  - Evidence filed: Signed DUA copies attached

- [ ] **Item 4: Student Consent Form**
  - Internal legal counsel approval: __________________ Date: ______
  - Institution approval (each institution): __________________ Date: ______
  - Web form deployment tested: Yes / No
  - Evidence filed: Final consent form + screenshots of web form

- [ ] **Item 5: Privacy Notice**
  - Internal legal counsel approval: __________________ Date: ______
  - Publication on Institution websites: Yes / No
  - Publication on edu.cloud website: Yes / No
  - Evidence filed: Screenshots/PDFs of published notice

- [ ] **Item 6: AWS Data Processing Addendum**
  - Legal counsel review: __________________ Date: ______
  - Signed DPA on file: Yes / No
  - Evidence filed: Copy of signed AWS DPA

- [ ] **Item 7: Vendor Agreements & Assessments**
  - Vendor Data Matrix documented: Yes / No
  - DPAs executed for all vendors receiving education records: Yes / No
  - Data minimization verified: Yes / No
  - Evidence filed: Vendor matrix + DPA copies

- [ ] **Item 8: Liability & Insurance**
  - Risk assessment memo complete: __________________ Date: ______
  - Cyber liability insurance policy effective: Yes / No
  - Policy amount: $________
  - Policy effective date: __________
  - Evidence filed: Copy of insurance certificate

- [ ] **Item 9: Limitation of Liability Review**
  - Reviewed and revised (if needed): __________________ Date: ______
  - FERPA breaches explicitly excluded from liability limits: Yes / No
  - Evidence filed: Updated ToS/MSA or certification of no changes needed

- [ ] **Item 10: Incident Response Procedure**
  - Procedure documented: Yes / No
  - Legal counsel reviewed: __________________ Date: ______
  - Team training completed: Yes / No
  - Evidence filed: Copy of procedure document + training records

---

## Final Sign-Off

**All legal reviews and approvals completed:**

✅ **Legal Counsel Sign-Off**

I have reviewed the above legal items and confirm that edu.cloud's 
FERPA compliance framework is legally sound and ready for pilot launch.

Signed: _________________________________ **Date:** ________

Name: _________________________________ Title: _____________

**CEO/Executive Sign-Off**

I understand the legal requirements and risks outlined above. 
I authorize proceeding with the pilot under the terms approved 
by legal counsel.

Signed: _________________________________ **Date:** ________

Name: _________________________________ Title: _____________

---

## Appendix: External Counsel Recommendations

### Higher Education Law Firms with FERPA Expertise

Consider engaging firms specializing in higher education law for external review:

1. **Examples:**
   - Cooley LLP (education law practice)
   - Heidrick & Struggles (higher ed consulting)
   - Local regional law firm with higher ed experience
   
2. **Services to Request:**
   - FERPA compliance audit (1-2 weeks, $5-10K)
   - Institutional DUA negotiation support (as needed)
   - Incident response procedure review (1 week, $2-3K)

3. **References:**
   - Ask pilot institutions for referrals to their legal counsel
   - Ask regional higher education associations for recommendations
   - Contact NACUA (National Association of College and University Attorneys) for referrals

---

**Document Owner:** Legal Counsel  
**Last Updated:** April 7, 2026  
**Status:** PRE-PILOT LEGAL ASSESSMENT

**Next Steps:**
1. Assign legal counsel owner
2. Schedule review meetings
3. Begin external counsel outreach (if using)
4. Execute timeline (Weeks 1-7 from current date)
