# Privacy Impact Assessment (PIA) for edu.cloud Alumni Outcome Research Platform

**Assessment Version:** 1.0  
**Assessment Date:** April 7, 2026  
**Platform:** edu.cloud MVP (Pilot Phase)  
**Assessment Scope:** Data collection, storage, access, retention, and sharing practices  
**Risk Rating:** MEDIUM (requires mitigation before production launch)

---

## Executive Summary

This Privacy Impact Assessment evaluates the privacy and data security risks associated with edu.cloud's alumni outcome research platform. The assessment identifies that while the platform's core business model—aggregating public and institutional outcome data—is fundamentally privacy-preserving, several critical control gaps create medium-level risk exposure if unaddressed.

**Key Findings:**
- ✅ **Strengths:** Data minimization approach; focus on publicly available data; aggregated reporting model
- ⚠️ **Gaps:** Uncontrolled internal data access; undefined retention schedules; incomplete vendor management
- 🔴 **Critical Issues:** No encryption for sensitive databases; no audit logging; FERPA compliance framework incomplete

**Risk Rating Before Mitigation:** 6.5/10 (MEDIUM)  
**Risk Rating After Mitigation (Post-Roadmap):** 2.5/10 (LOW)

**Recommendation:** Proceed with pilot under controlled conditions (single institution, <500 students) contingent on implementing Phase 1 mitigations (data classification, access control, encryption).

---

## Part 1: Information Assets & Data Inventory

### 1.1 Data Types Collected

| Data Type | Source | Volume (Current) | PII Sensitivity | Retention | Purpose |
|---|---|---|---|---|
| **Alumni Career Outcomes** | Public records, LinkedIn, professional databases | ~5,000 records (pilot) | Medium (name, job title, company) | Per FERPA schedule (3 years post-pilot) | Impact measurement, institutional reporting |
| **Educational Background** | Institution partnership / public sources | ~5,000 records | High (degree, graduation year, major) | Per FERPA schedule (3 years post-pilot) | Cohort analysis, alumni tracking |
| **Aggregated Impact Metrics** | Calculated from outcome data | ~100 institution-level records | Low (de-identified statistics) | Indefinite | Research, publication, institutional dashboards |
| **User Account Data** | Self-service registration / institutional SSO | ~50 users (pilot) | Medium (name, email, institution affiliation) | Account lifetime + 1 year | Access control, audit logging |
| **System Logs & Analytics** | Application events, user interactions | ~10GB/month (pilot) | Low (anonymized events) | 90 days | Performance monitoring, incident investigation |

### 1.2 Data Flows

```
┌─────────────────────────────────────────────────────────────┐
│ DATA SOURCES                                                │
├─────────────────────────────────────────────────────────────┤
│ 1. Public Records (LinkedIn, SEC, news)  ───→ WEB SCRAPER   │
│ 2. Institution Partnership (API/upload)  ───→ DATA IMPORTER │
│ 3. Student Self-Service (web form)      ───→ FORM HANDLER  │
│ 4. System Monitoring (logs, events)     ───→ LOG AGGREGATOR│
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌──────────────────────────────────────┐
        │     DATA PROCESSING PIPELINE         │
        ├──────────────────────────────────────┤
        │ • Fuzzy matching / deduplication     │
        │ • Data normalization                  │
        │ • Outcome classification              │
        │ • Institutional aggregation           │
        └──────────────────────────────────────┘
                            ↓
        ┌──────────────────────────────────────┐
        │    DATA STORAGE (AWS RDS)            │
        ├──────────────────────────────────────┤
        │ • Alumni outcome records              │
        │ • Educational background              │
        │ • User accounts & permissions         │
        │ • System audit logs                   │
        └──────────────────────────────────────┘
                    ↙           ↓           ↘
        ┌──────────┐  ┌─────────────┐  ┌──────────┐
        │Institution│  │  Analytics  │  │ Research │
        │Dashboard  │  │ (Mixpanel)  │  │ Export   │
        │(reporting)│  │(anonymized) │  │ (CSV)    │
        └──────────┘  └─────────────┘  └──────────┘
```

---

## Part 2: Privacy Risk Assessment

### 2.1 Data Security Risks

#### Risk #1: Unencrypted Sensitive Databases

**Description:** Alumni outcome and educational background data stored in AWS RDS PostgreSQL database without encryption at rest.

**Risk Level:** 🔴 **CRITICAL**

**Likelihood:** High (cloud database compromise, AWS employee access)  
**Impact:** High (exposure of PII for 5,000+ individuals)  
**Residual Risk (unmitigated):** 8/10

**Affected Data:**
- Student names, graduation years, majors
- Career outcomes, job titles, companies
- Institutional identifiers

**Potential Harm:**
- Identity theft through PII exposure
- Reputational damage to institutions
- FERPA violation liability
- Student/institutional legal action
- Regulatory investigation by OCR

**Mitigation:**
1. Enable AWS RDS encryption at rest (AES-256) immediately
2. Implement transparent data encryption (TDE) for database columns
3. Separate encryption keys from database credentials
4. Document encryption implementation in compliance audit trail

**Residual Risk (post-mitigation):** 2/10

---

#### Risk #2: Unrestricted Internal Data Access

**Description:** All engineers/analysts can query production databases containing identifiable education records without role-based access control.

**Risk Level:** 🔴 **CRITICAL**

**Likelihood:** High (employee mistakes, unauthorized access, malicious insider)  
**Impact:** High (exposure of 5,000+ records, FERPA violation)  
**Residual Risk (unmitigated):** 8/10

**Affected Data:**
- All PII in production databases
- Educational records linked to student identifiers

**Potential Harm:**
- Accidental over-sharing of sensitive data
- Insider theft of PII for personal gain or competitive intelligence
- Regulatory investigation
- Institutional trust loss

**Mitigation:**
1. Implement role-based access control (RBAC):
   - "Engineer" role: access to production logs only (no PII)
   - "Analyst" role: access to aggregated/de-identified data only
   - "Operations" role: access to operational data (user accounts, system logs)
   - "Research" role: limited, audited access to research datasets with approval
2. Require multi-factor authentication for any FERPA data access
3. Implement data masking for non-research access (show last 4 characters of names only)
4. Quarterly access reviews; remove unnecessary permissions

**Residual Risk (post-mitigation):** 2/10

---

#### Risk #3: No Audit Logging of Data Access

**Description:** No logging of who accesses education records, when, or what data they retrieve.

**Risk Level:** 🔴 **CRITICAL**

**Likelihood:** High (incidents occur but cannot be detected)  
**Impact:** High (inability to investigate breaches, detect insider threats)  
**Residual Risk (unmitigated):** 8/10

**Affected Data:**
- Audit visibility for all PII databases

**Potential Harm:**
- Undetected insider theft or unauthorized access
- Inability to comply with FERPA access accounting requirement
- Delayed breach investigation
- Regulatory non-compliance findings

**Mitigation:**
1. Implement database audit logging (AWS CloudTrail + RDS activity stream)
2. Log all access to tables containing PII:
   - Query type (SELECT, UPDATE, DELETE)
   - User/role executing query
   - Timestamp, query duration
   - Rows accessed/modified
3. Retain logs for minimum 3 years
4. Implement log integrity controls (logs protected from modification)
5. Set up alerts for suspicious access patterns (bulk data exports, after-hours access)

**Residual Risk (post-mitigation):** 1/10

---

#### Risk #4: Undefined Data Retention Schedule

**Description:** No policy for how long education records are retained before deletion; indefinite retention increases exposure window.

**Risk Level:** 🟠 **HIGH**

**Likelihood:** High (no retention policy = ongoing exposure)  
**Impact:** High (extended exposure of PII)  
**Residual Risk (unmitigated):** 7/10

**Affected Data:**
- All identifiable education records
- Student consent records

**Potential Harm:**
- FERPA violation (data retention beyond purpose)
- Extended exposure of PII to security risks
- Regulatory non-compliance

**Mitigation:**
1. Define retention schedule by data type:
   - **Educational outcome data:** 3 years post-pilot conclusion, then delete
   - **Student consent records:** Retained as long as data is retained (legal hold)
   - **Aggregated/de-identified data:** Retain indefinitely (no FERPA restriction)
   - **System logs:** 90 days for operational logs; 3 years for audit/security logs
2. Implement automated deletion pipeline:
   - Scheduled database jobs to identify and delete expired records
   - Deletion logging for audit trail
   - Regular verification of deletion completion
3. Institutional partners must approve retention schedule
4. Document retention schedule in data use agreements

**Residual Risk (post-mitigation):** 1/10

---

### 2.2 Third-Party & Vendor Risks

#### Risk #5: Insufficient Vendor Management (Cloud Infrastructure)

**Description:** AWS used as data processor without Data Processing Agreement (DPA) or security assessment.

**Risk Level:** 🟠 **HIGH**

**Likelihood:** Medium (vendors generally have good security, but gaps possible)  
**Impact:** High (AWS compromise could expose all PII)  
**Residual Risk (unmitigated):** 6/10

**Affected Data:**
- All data stored in AWS RDS, S3, CloudTrail logs
- Potential AWS employee access to education records

**Potential Harm:**
- AWS breach exposes edu.cloud data
- Regulatory liability; FERPA violation
- Institutional liability pass-through to edu.cloud
- No contractual recourse without DPA

**Mitigation:**
1. Execute AWS Data Processing Addendum (DPA):
   - Require AWS to implement reasonable security measures
   - AWS liability/indemnification for data breaches
   - Right to audit AWS security practices
   - Compliance with FERPA requirements
2. Implement additional controls:
   - AWS CloudTrail logging of all API access to education records
   - Encryption keys managed by edu.cloud (not AWS)
   - Segregation of environments (test data separate from production)
3. Annual security assessment of AWS infrastructure
4. Compliance with FedRAMP standards (federal data handling requirements)

**Residual Risk (post-mitigation):** 2/10

---

#### Risk #6: Analytics & Third-Party Tool Access to PII

**Description:** Analytics platforms (Mixpanel) and other vendors may inadvertently receive identifiable user data through event tracking.

**Risk Level:** 🟠 **HIGH**

**Likelihood:** Medium (analytics tools often receive more data than necessary)  
**Impact:** Medium (PII shared with third party, but contained to analytics platform)  
**Residual Risk (unmitigated):** 5/10

**Affected Data:**
- User email addresses, institution names, user roles
- Potentially student outcome data if included in user-facing features

**Potential Harm:**
- Vendor breach exposes PII to attacker
- Privacy violation; potential regulatory concern
- Institutional trust loss

**Mitigation:**
1. Data minimization:
   - Do NOT send education record data (names, outcomes) to analytics platforms
   - Do NOT send student email addresses or identifiers
   - Send only anonymized event data (feature usage, page views)
2. Vendor agreements:
   - Confirm vendor compliance with privacy standards
   - Require encryption in transit (TLS)
   - Require data deletion on request
   - Document data processor agreement
3. Regular audit:
   - Quarterly review of data sent to each vendor
   - Identify and remove unnecessary PII transmission
   - Vendor security assessment checklist

**Residual Risk (post-mitigation):** 1/10

---

### 2.3 Data Governance & Consent Risks

#### Risk #7: No Student Consent Process for Educational Data

**Description:** No mechanism to obtain or track student consent before sharing educational outcome data with institutions.

**Risk Level:** 🔴 **CRITICAL**

**Likelihood:** High (students likely unaware their data is being shared)  
**Impact:** Medium (FERPA violation potential; institutional liability)  
**Residual Risk (unmitigated):** 7/10

**Affected Data:**
- All identifiable educational outcome data
- Student contact information

**Potential Harm:**
- FERPA violation (unauthorized disclosure of education records)
- Student privacy complaints
- Regulatory investigation by Department of Education
- Institutional liability for non-compliance

**Mitigation:**
1. Implement consent management system:
   - Web form or mobile consent collection
   - Clear statement of what data will be collected/shared
   - Institution named as recipient of data
   - Student rights notification (access, correction, withdrawal)
   - Consent version control (track which version each student consented to)
2. Institutional integration:
   - Institutions can integrate consent collection into alumni communications
   - Consent data stored securely with full audit trail
   - Students can withdraw consent anytime via web portal
3. Consent-based data handling:
   - Education record data only accessible when valid consent exists
   - Upon consent withdrawal, education record data inaccessible within 15 days
   - Preserve deletion audit log for regulatory compliance

**Residual Risk (post-mitigation):** 1/10

---

#### Risk #8: Insufficient Institutional Data Use Agreements

**Description:** Institutional data partnerships lack clear FERPA language, purpose limitations, and accountability for data handling.

**Risk Level:** 🟠 **HIGH**

**Likelihood:** High (FERPA-specific language often omitted from standard contracts)  
**Impact:** High (FERPA violation, institutional liability)  
**Residual Risk (unmitigated):** 6/10

**Affected Data:**
- All education records shared by institutional partners

**Potential Harm:**
- Partner institution liable for FERPA violation
- Institution legal action against edu.cloud
- Regulatory investigation
- Reputational damage

**Mitigation:**
1. Create FERPA-compliant data use agreement template:
   - edu.cloud role defined as data processor/school official with limited authority
   - Purpose limitation: education research and alumni outcome measurement only
   - Data use restrictions: no secondary commercial use, no data resale
   - Retention schedule: 3 years post-pilot, then delete
   - Deletion rights: institution can request deletion anytime
   - Breach notification: edu.cloud must notify within 30 days
   - Audit rights: institution may audit edu.cloud's handling of data
   - Liability: edu.cloud indemnifies institution for FERPA violations
2. Review with institutional legal counsel before execution
3. Annual compliance certification from edu.cloud to institution

**Residual Risk (post-mitigation):** 1/10

---

### 2.4 Business Continuity & Incident Response Risks

#### Risk #9: No Breach Response Procedure

**Description:** No documented incident response plan for data breaches; no notification procedures.

**Risk Level:** 🟠 **HIGH**

**Likelihood:** Medium (unlikely if security controls are strong, but possible)  
**Impact:** High (delayed response increases harm; regulatory penalties)  
**Residual Risk (unmitigated):** 5/10

**Affected Data:**
- All PII potentially exposed in breach

**Potential Harm:**
- Delayed breach notification violates FERPA requirements (30-day notification window)
- Regulatory penalties
- Identity theft from delayed notification
- Institutional liability

**Mitigation:**
1. Develop Incident Response Procedure document including:
   - Breach discovery: how to detect unauthorized access
   - Investigation: preserve evidence, determine scope/nature of breach
   - Assessment: number of records affected, PII types exposed
   - Notification:
     - Notify institution(s) within 5 business days
     - Notify affected students within 30 days (or per state law, whichever is stricter)
     - Notify Department of Education if 5,000+ records at single institution affected
   - Remediation: log access controls, security updates, additional monitoring
   - Lessons learned: root cause analysis, preventive measures
2. Designate incident response team:
   - Security/Infrastructure Lead (investigation)
   - Legal Counsel (notification, compliance)
   - CEO/Product Lead (institutional communication)
3. Test incident response procedure annually
4. Maintain breach insurance ($2-5M coverage recommended)

**Residual Risk (post-mitigation):** 2/10

---

#### Risk #10: Insufficient Disaster Recovery & Business Continuity

**Description:** No documented recovery procedures if primary data systems fail or become corrupted.

**Risk Level:** 🟡 **MEDIUM**

**Likelihood:** Low (cloud infrastructure generally robust, but outages occur)  
**Impact:** Medium (temporary service loss; potential data loss if backups inadequate)  
**Residual Risk (unmitigated):** 4/10

**Affected Data:**
- All institutional and user data

**Potential Harm:**
- Service unavailability for institutions
- Potential data loss if backups inadequate
- Inability to fulfill FERPA data deletion requests

**Mitigation:**
1. Document current backup/recovery architecture:
   - AWS automated backups (daily, 30-day retention)
   - Point-in-time recovery capability
   - Cross-region replication for disaster recovery
2. Test recovery procedures:
   - Annual disaster recovery drill
   - Measure RTO (recovery time objective): <4 hours target
   - Measure RPO (recovery point objective): <1 hour data loss
3. Document recovery procedures:
   - Steps to recover from database corruption
   - Steps to recover from accidental data deletion
   - Communication plan during outage
4. Maintain recovery documentation and update annually

**Residual Risk (post-mitigation):** 1/10

---

## Part 3: Privacy Risk Summary Table

| # | Risk | Category | Initial Severity | Mitigation | Residual Risk | Owner |
|---|---|---|---|---|---|---|
| 1 | Unencrypted databases | Data Security | 8/10 | Enable RDS encryption at rest | 2/10 | Infra Lead |
| 2 | Unrestricted data access | Access Control | 8/10 | Implement RBAC + MFA | 2/10 | Infra Lead |
| 3 | No audit logging | Access Control | 8/10 | CloudTrail + RDS activity stream | 1/10 | Infra Lead |
| 4 | Undefined retention | Data Governance | 7/10 | Define retention schedule; automate deletion | 1/10 | Privacy Lead |
| 5 | Vendor management gaps | Vendor Risk | 6/10 | Execute AWS DPA; security assessment | 2/10 | Privacy Lead |
| 6 | Third-party tool access to PII | Vendor Risk | 5/10 | Data minimization; vendor audit | 1/10 | Product Lead |
| 7 | No student consent | FERPA Compliance | 7/10 | Implement consent management system | 1/10 | Product Lead |
| 8 | Weak institutional agreements | FERPA Compliance | 6/10 | FERPA-compliant DUA template | 1/10 | Privacy Lead |
| 9 | No breach response | Incident Response | 5/10 | Develop & test IR procedure | 2/10 | Security Lead |
| 10 | Insufficient disaster recovery | Business Continuity | 4/10 | Test DR procedures; document RTO/RPO | 1/10 | Infra Lead |

**Overall Portfolio Risk (Initial):** 6.8/10 (MEDIUM-HIGH) → (Post-Mitigation): 1.6/10 (LOW)

---

## Part 4: Institutional Privacy Requirements

### 4.1 Typical Institutional Privacy Concerns (Based on Higher Ed Industry)

When pitching to pilot institutions, expect these privacy-related questions and objections:

#### "How do you handle FERPA compliance?"
**Institutional Concern:** We are liable for FERPA violations; we need assurance that you understand and comply with FERPA.

**Response Framework:**
- edu.cloud operates as your data processor under Data Use Agreement
- We implement role-based access, encryption, audit logging per FERPA standards
- You maintain institutional control of data; you approve all uses
- Refer to this Privacy Impact Assessment as evidence of compliance planning

#### "What happens to our data if your company goes out of business?"
**Institutional Concern:** If you fail, can we recover our data? Will it be sold to competitors?

**Response Framework:**
- Data Use Agreement includes wind-down provisions
- Upon termination: within 30 days, deliver all data in CSV format or delete
- We do not monetize or sell institutional data
- Data not shared with other institutions without explicit consent

#### "How is our data encrypted?"
**Institutional Concern:** Our board/audit committee asks about encryption; we need technical assurance.

**Response Framework:**
- Database encryption at rest (AES-256) per AWS RDS standards
- Data in transit encrypted via TLS 1.2+
- Encryption keys managed separately from data
- Annual security audit by independent firm confirms encryption implementation

#### "Can your employees see our data?"
**Institutional Concern:** We don't want random employees accessing our data.

**Response Framework:**
- Role-based access control limits data access to authorized personnel only
- Most engineers cannot access production data
- All access to education records logged and auditable
- Regular access reviews remove unnecessary permissions
- Employees sign confidentiality/data handling agreements

#### "What if there's a data breach?"
**Institutional Concern:** If data is breached, what are our obligations? When will you notify us?

**Response Framework:**
- We maintain cybersecurity insurance ($2-5M coverage)
- Breach notification within 5 business days of discovery (before we notify students)
- You decide whether to notify students (we provide notification template)
- We conduct root cause analysis and implement preventive measures
- Refer to Incident Response Procedure section of PIA

---

### 4.2 Institutional Privacy Self-Assessment Template

Provide this to institutional partners to help them assess their own FERPA compliance:

```markdown
## Pilot Institutional Privacy Self-Assessment

Before engaging with edu.cloud, ensure your institution has:

- [ ] Legal review of Data Use Agreement (DUA) with edu.cloud
- [ ] Board approval to share educational outcome data with third party
- [ ] Student consent process in place (or mechanism for students to opt-out)
- [ ] FERPA compliance officer assigned to oversee partnership
- [ ] Clear purpose and retention schedule for data shared with edu.cloud
- [ ] Audit rights documented in DUA (right to audit edu.cloud's security)
- [ ] Breach notification procedures aligned with FERPA requirements
- [ ] Annual compliance review process with edu.cloud

If any of these are unchecked, work with edu.cloud to implement before proceeding.
```

---

## Part 5: Post-Launch Compliance Monitoring

### 5.1 Privacy & Security KPIs

**Establish baseline metrics to track compliance post-launch:**

| Metric | Target | Frequency | Owner |
|---|---|---|---|
| **Access Control** | | | |
| % of FERPA data access with valid authorization | 100% | Weekly | Security Lead |
| % of unauthorized access attempts detected | 100% | Incident review | Security Lead |
| % of permissions removed after quarterly review | >10% | Quarterly | Infra Lead |
| **Encryption** | | | |
| % of FERPA data encrypted at rest | 100% | Monthly | Infra Lead |
| % of data encrypted in transit (TLS) | 100% | Monthly | Infra Lead |
| **Audit Logging** | | | |
| % of FERPA data access logged | 100% | Weekly | Infra Lead |
| Average log review response time | <2 hours | Incident review | Security Lead |
| **Retention & Deletion** | | | |
| % of expired data deleted on schedule | 100% | Monthly | Privacy Lead |
| Retention deletion verification audit | Pass | Quarterly | Privacy Lead |
| **Institutional Compliance** | | | |
| % of institutions with signed DUA | 100% | Ongoing | Privacy Lead |
| % of institutions with valid consent on file | 100% | Monthly | Privacy Lead |
| Institutional data audit requests | Fulfilled <10 days | Ongoing | Privacy Lead |
| **Incident Response** | | | |
| Time to detect security incident | <24 hours target | Post-incident | Security Lead |
| Time to notify institution of breach | <5 business days | Post-incident | Legal/CEO |
| Breach incident count | 0 | Annual review | CEO |

---

### 5.2 Annual Privacy & Compliance Audit Scope

**Commission independent security audit annually covering:**

1. **Technical Controls**
   - Encryption at rest/in transit (test decryption)
   - Access control implementation (test unauthorized access)
   - Audit logging completeness (sample log review)
   - Deletion process verification (test deletion)
   - Incident response procedure testing (simulate breach scenario)

2. **Governance & Documentation**
   - Data Use Agreements (review institutional partnerships)
   - Consent records (sample verification that consent exists)
   - Retention schedule compliance (verify deletions)
   - Personnel access reviews (verify authorization remains appropriate)
   - Vendor agreements (DPAs, security assessments)

3. **Regulatory Alignment**
   - FERPA requirement checklist completion
   - State privacy law compliance (if applicable)
   - Industry standard alignment (NIST, FedRAMP where relevant)

4. **Remediation Tracking**
   - Prior audit findings resolution
   - Status of mitigations from this PIA

**Audit Output:**
- Written audit report with findings categorized by severity
- Remediation timeline for each finding
- Management attestation of control implementation

---

## Conclusion & Risk Acceptance

**Overall Assessment:**

edu.cloud's privacy and security posture is **MEDIUM RISK** in current state, with well-defined mitigation pathway to **LOW RISK** post-implementation.

**Recommendation:** 
- ✅ Proceed with **controlled pilot** (single institution, <500 students) contingent on immediate implementation of Phase 1 mitigations (encryption, RBAC, consent process)
- ⚠️ Do NOT proceed with multi-institutional pilot or significant data volumes until Phase 1-2 mitigations complete
- 📋 Schedule Phase 3-4 mitigations for post-pilot expansion

**Risk Acceptance:**
This Privacy Impact Assessment has been reviewed and approved by:

- [ ] Chief Executive Officer / Product Lead
- [ ] Privacy/Legal Counsel
- [ ] Pilot Institution(s)

**Next Review:** Post-Pilot Launch (6-month compliance assessment)

---

## Appendix: Privacy Risk Heat Map

```
SEVERITY/LIKELIHOOD MATRIX

        HIGH LIKELIHOOD          MEDIUM LIKELIHOOD       LOW LIKELIHOOD
        ───────────────         ─────────────────      ─────────────

HIGH    🔴 Risk #1              🟠 Risk #5             
IMPACT  🔴 Risk #2              🟠 Risk #8             
        🔴 Risk #3              🟠 Risk #9             

MED     🟠 Risk #7              🟡 Risk #10            
IMPACT  

LOW                             
IMPACT  

        ↑
        CRITICAL: Require immediate mitigation
        HIGH: Must mitigate within 30 days
        MEDIUM: Mitigate within 60-90 days
```

