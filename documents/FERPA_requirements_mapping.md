# FERPA Compliance Requirements Mapping for edu.cloud

**Document Version:** 1.0  
**Date:** April 7, 2026  
**Status:** Compliance Framework Baseline  
**Prepared For:** Product Launch - Pilot Implementation Phase

---

## Executive Summary

This document establishes edu.cloud's FERPA (Family Educational Rights and Privacy Act) compliance baseline by analyzing core regulatory requirements and mapping them to our current and proposed data handling practices. FERPA is the primary federal privacy regulation governing student educational records at institutions receiving federal funding. This mapping is essential to validate that our alumni outcome research platform can operate within regulatory bounds while preserving the privacy rights of individuals whose data we process.

Our analysis identifies that edu.cloud's core business model—aggregating public records and alumni career data—can operate in FERPA compliance through careful data classification, explicit consent mechanisms, and transparent handling of educational records. Key compliance dependencies center on data sources, retention policies, institutional partnerships, and third-party vendor management.

---

## Part 1: FERPA Regulatory Framework Overview

### 1.1 What is FERPA?

The Family Educational Rights and Privacy Act (20 U.S.C. § 1232g) is a federal law enacted in 1974 that:

- **Protects student education records** at institutions that receive federal funding (virtually all U.S. higher education institutions)
- **Grants rights to students** (and parents/guardians for students under 18) to access, review, and request corrections to their education records
- **Restricts disclosure** of personally identifiable information (PII) from education records without prior written consent
- **Allows exceptions** for specific purposes including school officials with legitimate educational interest, law enforcement, health/safety emergencies, and research with proper IRB/institutional approval

### 1.2 FERPA's Scope and Key Definitions

**Education Records:** Any records directly related to a student maintained by the institution, including:
- Grades, test scores, academic performance
- Attendance records
- Disciplinary records
- Financial aid information
- Transcripts
- Course enrollment
- Institutional research databases linking student identity to academic information

**Personally Identifiable Information (PII):** Any information that can be used to identify a student, including:
- Name, address, phone number
- Social Security number, student ID
- Fingerprints, biometric records
- Photographic images (in most contexts)
- Student education record data combined with identifiers

**Disclosure:** Any release, transfer, or sharing of education records or PII outside the institution (including to third parties, researchers, or vendors).

**Legitimate Educational Interest:** Access to education records by school officials (employees, trustees, contractors) who have a need to know based on their professional responsibilities.

### 1.3 FERPA Core Requirements

| Requirement | Description | Compliance Impact |
|---|---|---|
| **Consent-Based Disclosure** | Institutions must have prior written consent from eligible students before disclosing PII from education records to outside parties (except authorized exceptions) | edu.cloud must obtain institutional consent and/or individual student consent for any access to education records |
| **Access Rights** | Students have the right to inspect, review, and receive copies of their education records within 45 days | edu.cloud's data retention policies must not impede student access rights |
| **Amendment Rights** | Students may request correction of inaccurate information in their records | edu.cloud platforms must enable institutional review and correction workflows |
| **Disclosure Accounting** | Institutions must maintain records of who has accessed/disclosed student records | edu.cloud must support audit logging and disclosure tracking |
| **Data Security** | Institutions must maintain reasonable security measures to protect education records | edu.cloud must implement appropriate technical/administrative/physical safeguards |
| **Data Destruction** | Education records must be destroyed when no longer needed, unless otherwise required by law | edu.cloud must define retention schedules and secure deletion procedures |
| **Notice/Transparency** | Institutions must notify students of their FERPA rights and institutional policies | edu.cloud will support institutional transparency through documentation |

---

## Part 2: edu.cloud Data Handling Practices & FERPA Alignment

### 2.1 Data Sources Analysis

edu.cloud's primary data sources include:

#### A. **Publicly Available Data (Non-FERPA Regulated)**

**Sources:**
- Professional network profiles (LinkedIn, industry databases)
- Public records (business registrations, USPTO filings, property records)
- Published news articles, press releases
- Government databases (SEC filings, court records, licensing databases)
- Professional directories and alumni databases (when publicly listed)
- Social media public profiles

**FERPA Status:** ❌ **NOT Education Records**
- These sources do not originate from educational institutions
- They are independently maintained by third parties
- They do not contain student-maintained educational records
- No FERPA restrictions apply to collection/use

**Compliance Action:** Document that data sourced from public records is outside FERPA scope. Ensure our privacy policy distinguishes between public data collection and education record handling.

#### B. **Institutional Data Partnerships (FERPA Regulated)**

**Proposed Access:**
- Alumni career outcome data provided by institutions
- Educational background (degree, major, graduation year)
- Institutional research databases with outcome linking
- Institutional IRB-approved research partnerships

**FERPA Status:** ⚠️ **EDUCATION RECORDS - REQUIRES CONSENT**
- Data originates from institutions and includes student identifiers
- Links individual student to educational outcomes
- Falls under FERPA definition of education records

**Compliance Requirements:**
1. **Institutional Consent:** Institution must authorize data disclosure via written agreement
2. **De-identification Option:** Data stripped of direct identifiers may be used for research without consent
3. **Student Consent:** Individual student consent required if data includes personal identifiers
4. **Purpose Limitation:** Data use must be limited to specified educational research purposes
5. **Vendor Management:** Third-party processors (including edu.cloud) must be contractually bound to FERPA compliance

**Compliance Action:** Establish institutional data partnership agreements with explicit FERPA language, data use limitations, and audit rights.

#### C. **Student Consent-Based Data Collection**

**Proposed Model:**
- Students opt-in to share their educational outcomes with institutions
- Consent forms specify data use purposes (impact measurement, advancement intelligence)
- Students may withdraw consent at any time
- Data used only for consented purposes

**FERPA Status:** ✅ **CONSENTED DISCLOSURE - PERMISSIBLE**
- Prior written consent from eligible student required
- Consent must be voluntary and specific to use purpose
- Consent can be withdrawn; data deletion must follow

**Compliance Requirements:**
1. **Consent Documentation:** Written consent forms must be retained by institution
2. **Purpose Specificity:** Consent forms must clearly specify how data will be used
3. **Student Rights Notification:** Forms must inform students of rights to access, correct, and request deletion
4. **Withdrawal Mechanism:** Easy process for students to revoke consent
5. **No Coercion:** Consent cannot be condition of enrollment or services

**Compliance Action:** Develop FERPA-compliant student consent templates. Implement consent management system to track and honor withdrawal requests.

---

### 2.2 Data Handling Practices Mapping

#### Data Collection & Ingestion

| Activity | edu.cloud Practice | FERPA Requirement | Compliance Status | Action Required |
|---|---|---|---|---|
| Public records collection | Automated web scraping from public sources (LinkedIn, SEC, etc.) | N/A - outside FERPA scope | ✅ Compliant | Document data lineage to confirm public source status |
| Institutional data access | Partner institution provides de-identified or consented outcome data via API/upload | Institutional authorization + student consent (if identifiable) | ⚠️ Conditional | Require institutional data use agreement; implement consent verification |
| Alumni self-service submission | Individuals voluntarily submit career outcome information through web form | Consent documentation (if educational outcomes included) | ✅ Compliant | Create consent form in data collection UI |

**Risk Assessment:** Medium
- **Risk:** Acquiring identifiable educational record data without proper consent documentation
- **Mitigation:** Institutional agreements explicitly confirming data source legitimacy and consent basis

---

#### Data Storage & Retention

| Activity | edu.cloud Practice | FERPA Requirement | Compliance Status | Action Required |
|---|---|---|---|---|
| Database storage of outcome data | Encrypted cloud database (AWS/GCP) with role-based access | Data security appropriate to sensitivity level | ⚠️ Partial | Implement encryption at rest; define access controls by data classification |
| Retention duration | Currently undefined; need explicit policy | Data destroyed when no longer needed for specified purpose | ❌ Non-Compliant | Define retention schedules by data type (e.g., 3 years post-pilot, then delete) |
| Backup & recovery | Standard cloud provider backup/disaster recovery | Must maintain same protections as primary systems | ⚠️ Partial | Document backup encryption and access controls |
| Data separation | No formal separation of FERPA vs. non-FERPA data | Education records must be managed separately from non-regulated data | ❌ Non-Compliant | Implement data tagging/classification to identify FERPA-regulated records |

**Risk Assessment:** High
- **Risk:** Indefinite retention of education record data violates purpose limitation principle
- **Mitigation:** Establish written retention schedule with institutional input; automate deletion triggers

---

#### Data Access & Use

| Activity | edu.cloud Practice | FERPA Requirement | Compliance Status | Action Required |
|---|---|---|---|---|
| Internal team access | All engineers/analysts can query production database | Only personnel with legitimate educational interest | ❌ Non-Compliant | Implement role-based access control (RBAC); restrict access to FERPA data |
| Institutional dashboard access | Partner institutions view institution-specific outcome reports | Permissible under legitimate institutional use | ✅ Compliant | Ensure dashboard data limited to institution's own students |
| Research/publication use | Aggregated outcome statistics for blog posts, research papers | Permissible if data de-identified per FERPA standards | ⚠️ Conditional | Define de-identification standards; obtain institution approval for publication |
| Third-party vendor access | AWS/GCP infrastructure access, potential vendor integrations | Vendors must be contractually bound as data processors | ⚠️ Partial | Document vendor access; execute Data Processing Agreements (DPAs) |

**Risk Assessment:** High
- **Risk:** Uncontrolled internal access to identifiable education records creates breach exposure
- **Mitigation:** Implement access logging, role-based restrictions, regular access reviews

---

#### Data Sharing & Third Parties

| Activity | edu.cloud Practice | FERPA Requirement | Compliance Status | Action Required |
|---|---|---|---|---|
| Customer analytics (Segment, Mixpanel) | Event tracking of user interactions (anonymized) | No transfer of education records or PII | ✅ Compliant | Exclude FERPA data from analytics; document data flow |
| Cloud infrastructure (AWS) | Education records stored on AWS servers | AWS must be contractually bound as processor | ⚠️ Partial | Execute AWS Data Processing Addendum (DPA) |
| Marketing/publicity | Feature highlights in case studies using institution names and aggregate outcome data | Permissible if de-identified; institution approval required | ⚠️ Conditional | Obtain written approval from institutions before public reference |
| Law enforcement disclosure | No current mechanism for law enforcement access | FERPA allows disclosure with subpoena/court order; requires documentation | ⚠️ Partial | Develop law enforcement request handling procedures |

**Risk Assessment:** Medium
- **Risk:** Inadvertent disclosure of identifiable data through third-party integrations
- **Mitigation:** Data classification, vendor due diligence, contractual DPAs

---

### 2.3 Student Privacy Rights Implementation

#### Right to Access

**FERPA Requirement:** Students must be able to access and review their education records within 45 days of request.

**edu.cloud Implementation Gap:** Currently no student-facing access mechanism.

**Compliance Action:**
- Coordinate with partner institutions to handle access requests through institutional channels
- If edu.cloud maintains identifiable education records, provide mechanism for students to request their data
- Implement data export functionality (CSV/PDF format) for audit trail

---

#### Right to Amendment

**FERPA Requirement:** Students may request corrections to inaccurate information in their records.

**edu.cloud Implementation Gap:** No amendment workflow for outcome data; outcome data is typically self-reported or third-party verified (not institutional records).

**Compliance Action:**
- For self-submitted data: provide UI for users to update/correct their own information
- For institutional data: route amendment requests to partner institutions (edu.cloud does not amend institutional records)
- Document amendment requests for audit purposes

---

#### Right to Withdraw Consent

**FERPA Requirement:** Students may revoke consent to use their education records; upon revocation, no further use of data is permissible.

**edu.cloud Implementation Gap:** No consent withdrawal mechanism.

**Compliance Action:**
- Implement consent management system with withdrawal option
- Upon withdrawal: mark data as unavailable for future use; preserve historical data only for legal compliance
- Provide withdrawal confirmation to user and institutional contact
- Automate notification to institutional partner of withdrawal

---

### 2.4 Institutional Responsibility Framework

**Key Principle:** FERPA compliance responsibility remains with the educational institution. As a vendor/processor, edu.cloud must support institutional compliance, not replace it.

**Institutional Obligations (edu.cloud Must Support):**
1. Family Rights & Privacy Notice — inform students of FERPA rights
2. Access Request Processing — students can request their records
3. Disclosure Documentation — track what has been disclosed
4. Complaint Investigation — respond to alleged FERPA violations
5. Consent Management — verify student consent before disclosures

**edu.cloud's Role (Data Processor):**
1. Implement technical controls to protect data
2. Restrict access to authorized personnel only
3. Support data deletion on request
4. Maintain audit logs of access/disclosure
5. Execute data processing agreements with institutions
6. Notify institution of any suspected breaches

---

## Part 3: FERPA Compliance Gaps & Risk Assessment

### Critical Gaps

| Gap | Current State | Required State | Risk Level |
|---|---|---|---|
| **Institutional Data Agreements** | No formal agreements; data access undefined | Signed data use agreements with explicit FERPA language | 🔴 CRITICAL |
| **Student Consent Documentation** | No consent process for data sharing | Written consent forms with specific purpose statements | 🔴 CRITICAL |
| **Data Classification** | No distinction between FERPA and non-FERPA data | Automated classification; separate handling workflows | 🔴 CRITICAL |
| **Access Controls** | Unrestricted database access | Role-based access control with encryption; audit logging | 🔴 CRITICAL |
| **Retention Schedule** | Indefinite retention | Defined schedule: 3 years post-pilot, then deletion | 🟠 HIGH |
| **Vendor Agreements** | AWS/GCP used without FERPA-specific DPA | Data Processing Agreements with processor liability clauses | 🟠 HIGH |
| **Breach Notification** | No incident response procedure | Procedure for breach investigation & institutional notification | 🟠 HIGH |
| **Student Access/Amendment** | No mechanism for students to request data access/correction | Self-service UI or institutional routing process | 🟠 HIGH |
| **De-identification Standards** | No definition of what constitutes de-identification | NIST 800-188 or comparable standard for aggregate data | 🟡 MEDIUM |
| **Subpoena/Law Enforcement Procedure** | No procedure defined | Written procedures for handling legal requests | 🟡 MEDIUM |

---

## Part 4: Regulatory Best Practices & Recommended Standards

### FERPA Interpretation Guidance

**Source:** U.S. Department of Education Office for Civil Rights (OCR), FERPA Guidance Documents

#### De-identification Standards (for publication/research use)

Data is considered de-identified and no longer a protected education record if:
1. **Direct Identifiers Removed:** Name, ID number, email, address, phone, SSN, biometric data
2. **Indirect Identifiers Removed:** Date of birth, demographics that could identify individual
3. **Aggregation Rule:** Data aggregated to group sizes of 5+ per NCES guidance
4. **Reidentification Risk:** No reasonable likelihood that combination of remaining data could identify individual
5. **Use Limitations:** Results presented only in aggregate form

**edu.cloud Application:** When publishing outcome statistics or research findings, ensure compliance through:
- Aggregate data (institutional or demographic level) only
- Minimum cell sizes of 10+ institutions/individuals
- No publication of outlier data that could identify institutions
- Institutional approval before any publication referencing their data

---

#### Legitimate Educational Interest (LEI)

School officials have access to education records without consent if they have a "legitimate educational interest," defined as:
- Need to fulfill professional responsibilities (advising, teaching, research)
- Advising, investigating, or other institutional business
- Direct relationship to the student

**edu.cloud Application:** Our access to education records on behalf of institutions is permissible when:
- Institution explicitly authorizes us as their vendor/agent
- Access is limited to institution's own students (not cross-institutional)
- Access supports institution's educational or research mission (not competitive use)

---

#### Third-Party Processors & Business Associates

FERPA does not require student consent for disclosure to third parties IF:
- The recipient is acting as a "school official" with legitimate educational interest (narrow interpretation for vendors)
- OR the recipient is a contractor performing institutional services under contract
- AND the recipient is bound by contractual obligations to protect the data

**edu.cloud Application:** We must position ourselves as institutional contractors/processors, not independent recipients of education records:
- Execute Data Processing Agreements with each institution partner
- Clearly define scope of services (alumni outcome research only)
- Contractually restrict our use of data to specified purposes
- Include liability/indemnification clauses for FERPA breaches

---

### Industry Standards for Data Protection

While FERPA does not prescribe specific technical standards, OCR expects "reasonable safeguards" appropriate to data sensitivity:

**Recommended Controls (aligned with NIST Cybersecurity Framework, FedRAMP standards):**

1. **Encryption**
   - At rest: AES-256 or equivalent for databases
   - In transit: TLS 1.2+ for all network transmission
   - Key management: Separate from data; access restricted

2. **Access Control**
   - Role-based access control (RBAC) with principle of least privilege
   - Multi-factor authentication for sensitive data access
   - Regular access reviews and removal of unnecessary permissions
   - Segregation of duties (e.g., developers cannot access production data)

3. **Audit Logging**
   - All access/modification of education records logged with user, timestamp, action
   - Logs retained for minimum 3-5 years
   - Logs protected from modification/deletion
   - Periodic audit log review to detect suspicious activity

4. **Data Minimization**
   - Collect only data necessary for stated purpose
   - Minimize identifiable information (use ID numbers instead of names where possible)
   - Separate identifiable data from outcome metrics

5. **Incident Response**
   - Written breach response procedure
   - Breach investigation capability
   - Notification to institutional partners within 30 days of discovery
   - Notification to affected students within 30 days

6. **Vendor Management**
   - Due diligence on third-party vendors (AWS, analytics platforms, etc.)
   - Data Processing Agreements with all vendors handling education records
   - Right to audit vendors' security practices
   - Breach liability assigned to vendors

---

## Part 5: Compliance Roadmap

### Phase 1: Foundational (Months 1-2, Pre-Pilot)

**Deliverables:**
- ✅ FERPA Compliance Gap Analysis (this document)
- [ ] Institutional Data Use Agreement template (FERPA-compliant)
- [ ] Student Consent Form template
- [ ] Data Classification Schema (FERPA vs. non-FERPA tagging)
- [ ] Retention Schedule Policy

**Actions:**
1. Finalize institutional partnerships with FERPA data use agreements
2. Collect initial student consent for outcome data
3. Implement data tagging to identify FERPA-regulated records
4. Execute AWS Data Processing Addendum

**Success Metrics:**
- 100% of institutional partners have signed FERPA data use agreements
- Student consent obtained for 80%+ of pilot users
- Data classification system operational

---

### Phase 2: Operational Controls (Months 2-4, During Pilot)

**Deliverables:**
- [ ] Role-based access control (RBAC) implementation
- [ ] Encryption configuration for databases at rest
- [ ] Audit logging system for data access
- [ ] Vendor assessment documentation (AWS, analytics vendors)

**Actions:**
1. Implement role-based access control; remove unrestricted database access
2. Enable database encryption and key management
3. Configure audit logging for all data access
4. Document access control policies

**Success Metrics:**
- All FERPA data access logged and auditable
- Zero unauthorized access incidents
- 100% of FERPA databases encrypted

---

### Phase 3: Student Rights & Transparency (Months 3-5, Pilot Expansion)

**Deliverables:**
- [ ] Student data access mechanism (self-service request or institutional routing)
- [ ] Consent withdrawal system
- [ ] Student privacy notice / FERPA rights documentation
- [ ] Breach notification procedures

**Actions:**
1. Build student data request UI or institutional routing workflow
2. Implement consent withdrawal functionality with data deletion triggers
3. Publish FERPA compliance notice on institutional dashboards
4. Develop incident response procedures

**Success Metrics:**
- Student data requests processed within 45 days
- Consent withdrawal honored within 15 days
- All institutional partners receive privacy notices

---

### Phase 4: Advanced Compliance (Months 5+, Post-Pilot)

**Deliverables:**
- [ ] Third-party audit of FERPA compliance
- [ ] De-identification procedures for publication/research
- [ ] Law enforcement request procedures
- [ ] Annual compliance review and attestation

**Actions:**
1. Engage independent security/privacy auditor to assess FERPA compliance
2. Define de-identification processes for research publications
3. Document law enforcement request handling procedures
4. Implement annual compliance attestation process

**Success Metrics:**
- No critical audit findings
- All publications comply with de-identification standards
- Zero FERPA violations reported

---

## Part 6: Legal & Governance Recommendations

### Legal Review Checklist

Before pilot launch, ensure legal review covers:

- ✅ **Institutional Data Use Agreements**
  - [ ] FERPA-specific language requiring institutional consent to share data
  - [ ] Clear statement of edu.cloud's role as data processor, not independent recipient
  - [ ] Data use limitations (education research only, no commercial use)
  - [ ] Retention and deletion schedules
  - [ ] Institution's right to audit edu.cloud's handling of their data
  - [ ] Liability/indemnification clauses for FERPA breaches
  - [ ] Breach notification requirements (edu.cloud must notify institution within 30 days)

- ✅ **Student Consent Forms**
  - [ ] FERPA-compliant written consent (not just online checkbox)
  - [ ] Clear statement of what data will be collected and how it will be used
  - [ ] Institution named as responsible party (not edu.cloud as primary)
  - [ ] Student rights to access, correct, and withdraw consent
  - [ ] Process for withdrawal and deletion
  - [ ] No coercion language (consent cannot condition enrollment/services)

- ✅ **Privacy Policy/Terms of Service**
  - [ ] Separate section on FERPA compliance and educational data handling
  - [ ] Distinction between personal data collected directly vs. education records shared by institutions
  - [ ] Rights statements (access, amendment, deletion for educational data)
  - [ ] Data retention and deletion policies
  - [ ] Third-party vendor/processor disclosures

- ✅ **Data Processing Agreements (Cloud Vendors)**
  - [ ] AWS Data Processing Addendum (AWS DPA) signed
  - [ ] Google Cloud Data Processing Amendment (if used)
  - [ ] Any analytics/third-party tool processing education records

- ⚠️ **Institutional Partnership Agreements**
  - [ ] FERPA language reviewed and approved by institution legal counsel
  - [ ] Institution's own privacy/data governance requirements incorporated
  - [ ] State privacy law compliance (COPPA, FERPA state-specific versions)
  - [ ] Research approval if data will be used for IRB studies

---

### Compliance Governance Structure

**Recommended Organizational Roles:**

1. **Data Protection Officer (DPO) / Privacy Lead**
   - Oversee FERPA compliance program
   - Review data handling practices for compliance
   - Manage institutional partnerships and agreements
   - Investigate suspected breaches
   - Annual compliance attestation

2. **Security/Infrastructure Lead**
   - Implement and maintain encryption, access controls, audit logging
   - Manage vendor security assessments
   - Incident response planning and execution
   - Security audit preparation

3. **Product/Engineering Lead**
   - Ensure FERPA requirements built into product features
   - Data classification/tagging in systems
   - Consent management system implementation
   - Student data access/withdrawal workflows

4. **Institutional Partnerships Lead**
   - Negotiate and execute data use agreements
   - Ensure partner institutions understand FERPA compliance
   - Support partner institutions' own compliance needs
   - Manage institutional feedback on privacy/compliance concerns

---

## Conclusion

FERPA compliance for edu.cloud is achievable through deliberate planning and implementation of the controls outlined in this framework. The critical path items for pilot launch are:

1. **Institutional Data Use Agreements** — establish clear FERPA language with all institutional partners
2. **Student Consent Process** — implement written consent forms before accessing identifiable education records
3. **Data Classification** — tag all FERPA-regulated data for appropriate handling
4. **Access Controls** — restrict database access to authorized personnel with audit logging
5. **Vendor Agreements** — execute Data Processing Agreements with cloud infrastructure providers

By following the compliance roadmap in Part 5, edu.cloud can launch with a defensible FERPA compliance position, then progressively strengthen controls through pilot and post-pilot phases.

This framework positions edu.cloud as a responsible steward of student educational data, differentiating our platform from competitors and building institutional trust for long-term partnerships.

---

**Document Approval:**
- [ ] Legal Counsel
- [ ] Product/Executive Leadership
- [ ] Pilot Institution(s)

**Next Review:** Post-Pilot Launch (6-month compliance review)
