# Prospect Data Validation & Campaign Execution Checklist
## Cold Outreach Campaign - edu.cloud Pilot Recruitment

**Prepared:** April 6, 2026  
**Campaign Status:** Ready for Execution (Pending Data Verification)  
**Purpose:** Ensure all 20 beachhead prospects have verified contact data before Gmail campaign launch

---

## CRITICAL DEPENDENCY: VERIFIED PROSPECT DATA

⚠️ **BLOCKER STATUS:** This campaign requires verified decision-maker contact information from Apollo API enrichment before any emails can be sent.

**Data Requirements Checklist:**

Before launching the outreach campaign, the following must be verified for EACH of the 20 prospects:

### Required Data Fields (Must Have)
- [ ] **First Name** - Verified from Apollo
- [ ] **Last Name** - Verified from Apollo
- [ ] **Email Address** - Verified from Apollo API (not guessed or fabricated)
- [ ] **Institution Name** - Verified from Apollo
- [ ] **Institution Type** - Confirmed as Research University, Liberal Arts College, or Community College
- [ ] **Job Title** - Verified from Apollo (e.g., "VP of Advancement," "Dean of Development")
- [ ] **Department/Function** - Identified from Apollo (e.g., "Advancement," "Institutional Research")

### Optional but Recommended
- [ ] **Phone Number** - For post-reply follow-up
- [ ] **LinkedIn Profile URL** - For pre-call research
- [ ] **Alternative Email** - If primary appears invalid
- [ ] **Assistant/Admin Contact** - For scheduling assistance

### Data Quality Checks
For each prospect record, verify:

```
PROSPECT DATA VALIDATION FORM

Prospect ID: ____
Prospect Name: [First] [Last]
Institution: ____________________

DATA FIELD VALIDATION:
□ Email format is valid ([name]@[domain].com)
□ Email address is current (not "noreply@," not deprecated domain)
□ Title is decision-maker role (VP, Dean, Director, not "Manager" or "Associate")
□ Title matches segment (Advancement, Development, Student Success, etc.)
□ Institution type is correct (R1/R2 = Research U, NESCAC/equivalent = LAC, CC = Community College)
□ No obvious typos in name or email
□ Email domain matches institution website domain (e.g., @institution.edu)

APOLLO DATA CONFIDENCE:
□ Email source: [Direct from LinkedIn / Corporate directory / University website / Other]
□ Email verification score: [High / Medium / Low]
□ Last verified: [Date from Apollo]
□ Any data flags or confidence notes: [Notes]

CONTACT VALIDITY:
□ No email delivery failures in test
□ Title suggests decision-authority over alumni outcomes
□ Role aligns with segment pain points
□ Decision-maker is likely to receive/open outreach

APPROVED FOR CAMPAIGN: □ Yes □ No
Reviewer Name: _________________ Date: _______
Notes: _________________________________________________
```

---

## SECTION 1: PROSPECT LIST VALIDATION PROCESS

### Step 1: Extract Apollo Enrichment Data
**Source:** Apollo API enrichment results from prior task completion  
**Data Points to Extract:**
1. 20 decision-maker records with verified contact information
2. Apollo confidence score for each email address
3. Data source for each email (LinkedIn, corporate directory, university website, etc.)
4. Last verification date from Apollo

**Validation Question:** Do we have 20+ prospects with confidence score ≥ 7/10 for email accuracy?
- [ ] Yes, proceed to Step 2
- [ ] No, request additional Apollo enrichment or reduce target list to verified contacts only

### Step 2: Verify Email Format & Validity
**Process:**
1. Check each email for format validity ([name]@[domain].[extension])
2. Verify domain matches institution (e.g., @stanford.edu for Stanford, @amherst.edu for Amherst)
3. Remove any obvious typos or malformed addresses
4. Test 5-10 emails with "soft bounce" validation tool if available

**Validation Question:** Do all 20 email addresses pass format and domain validation?
- [ ] Yes, proceed to Step 3
- [ ] No, flag invalid addresses and request replacement from Apollo or remove from list

### Step 3: Validate Decision-Maker Roles
**Process:**
1. Verify each prospect's title indicates decision-making authority over alumni outcomes/impact measurement
2. Cross-check titles against segment expectations:
   - **Research U:** VP of Advancement, VP of Development, VP of Institutional Research, Provost, VP of Development
   - **LAC:** Director of Advancement, Director of Development, Chief Development Officer, Dean of Institutional Research
   - **CC:** Dean of Workforce Development, Director of Student Success, VP of Institutional Research, President's Office

3. Flag any titles that seem too junior (Coordinator, Assistant) or misaligned (HR Director, IT Manager)

**Validation Question:** Do 90%+ of prospects have decision-maker-level titles?
- [ ] Yes, proceed to Step 4
- [ ] No, request title updates from Apollo or replace prospects with higher-level contacts

### Step 4: Institution Type Validation
**Process:**
1. Verify each prospect's institution is correctly classified (Research U / LAC / CC)
2. Confirm classification through Carnegie Classification or institution's self-identification
3. Ensure segment distribution: 7 Research U, 7 LAC, 6 CC (or as planned)

**Validation Question:** Are all institutions correctly classified and segment distribution appropriate?
- [ ] Yes, proceed to Step 5
- [ ] No, reclassify institutions or rebalance segment distribution

### Step 5: Segment-Specific Pain Point Alignment
**Process:**
1. For each prospect, confirm their institution experiences the primary pain points we're addressing:
   - **Research U:** Alumni outcome tracking, research impact measurement, donor narratives
   - **LAC:** Graduate success proof, career outcomes, fundraising support
   - **CC:** Employer partnership ROI, employment outcome tracking, program validation

2. Review institution's public materials (website, annual reports, grant applications) for evidence of these pain points

**Validation Question:** Can we confirm each prospect's institution likely experiences segment-specific pain points?
- [ ] Yes, proceed to Step 6
- [ ] No, research prospects individually and adjust if pain point alignment is questionable

### Step 6: Create Master Prospect List
**Process:**
1. Create a clean CSV/Excel file with all 20 validated prospects
2. Include columns: First Name, Last Name, Email, Institution, Institution Type, Title, Department
3. Add columns for: Segment (Research U / LAC / CC), Email Confidence Score, Apollo Verification Date
4. Sort by institution type (all Research U together, etc.)
5. Assign each prospect a unique ID (PROSPECT-001 through PROSPECT-020)

**Example:**
```
PROSPECT_ID,FIRST_NAME,LAST_NAME,EMAIL,INSTITUTION,INSTITUTION_TYPE,TITLE,DEPARTMENT,SEGMENT,EMAIL_CONFIDENCE,VERIFIED_DATE
PROSPECT-001,Sarah,Johnson,sjohnson@stanford.edu,Stanford University,Research University,VP of Advancement,Development,Research U,9/10,2026-04-05
PROSPECT-002,James,Chen,j.chen@harvard.edu,Harvard University,Research University,Director of Institutional Research,Provost Office,Research U,8/10,2026-04-05
...
```

**Validation Question:** Is the master prospect list complete, clean, and ready for campaign execution?
- [ ] Yes, proceed to Step 7
- [ ] No, clean data and re-validate

### Step 7: Final Approval & Campaign Readiness
**Process:**
1. Review master list with campaign stakeholders
2. Confirm all 20 prospects are decision-makers at target institutions
3. Get sign-off from Sales/Outreach lead
4. Formally approve campaign launch

**Validation Checklist:**
- [ ] All 20 prospects have verified email addresses
- [ ] All prospects have decision-maker titles
- [ ] Segment distribution is correct (7 Research U, 7 LAC, 6 CC)
- [ ] No duplicate institutions in list
- [ ] Master prospect list is in shared campaign folder
- [ ] Campaign templates are ready (3 segment-specific versions)
- [ ] Calendly link is created for discovery calls
- [ ] Email tracking tool (HubSpot/Mailchimp) is configured
- [ ] Gmail account is authenticated and ready
- [ ] Tracking spreadsheet template is prepared

**Campaign Status:**
- [ ] APPROVED FOR LAUNCH - All data validated, ready to send emails
- [ ] BLOCKED - Issues identified; resolve before launch

---

## SECTION 2: EMAIL SENDING CHECKLIST

### Pre-Launch Verification (Day 0)

**Technical Setup:**
- [ ] Gmail account authenticated via OAuth/SMTP
- [ ] Email template files are loaded and ready to customize
- [ ] Calendly calendar is synced and responding
- [ ] Email tracking tool (HubSpot/Mailchimp) is enabled
- [ ] Tracking pixels are embedded in email template
- [ ] Tracking spreadsheet is created and accessible
- [ ] Subject lines and body copy have been spell-checked
- [ ] All personalization fields ([Name], [Institution], etc.) are correct in templates

**Prospect List:**
- [ ] Master prospect list is loaded in campaign tool or prepared for manual sending
- [ ] All 20 prospects verified one final time
- [ ] Segment assignments are correct for each prospect
- [ ] No duplicate email addresses
- [ ] No missing email addresses

**Calendar & Scheduling:**
- [ ] Calendly discovery call booking page is live and linked in emails
- [ ] Calendar is set to 15-minute time slots, with 1-hour buffer between calls
- [ ] Timezone is set correctly (assuming PT for edu.cloud)
- [ ] At least 3-4 hours per week (Days 8-25) are blocked for discovery calls
- [ ] Team member assigned to manage/attend all calls is aware and prepared

**Response Protocol:**
- [ ] Email response template is prepared ("Thank you for your interest...")
- [ ] Team member assigned to respond to all replies within 2 hours
- [ ] Call confirmation process is documented
- [ ] No-show response is prepared
- [ ] Follow-up call process is documented (if needed)

### Day 1 Execution (April 6, 2026)

**Morning (8-10am PT):**
- [ ] Final review of email templates and personalization
- [ ] Send test email to [your@email.com] to verify tracking, links, formatting
- [ ] Verify test email received properly and links work
- [ ] Customize first email batch with personalization fields
- [ ] Load prospect list into email platform (or prepare for manual batch sends)

**Mid-Day (10am-12pm PT):**
- [ ] Send batch 1: Prospects 1-5 (Research Universities)
- [ ] Verify sends in Gmail sent folder and tracking tool
- [ ] Log send times in tracking spreadsheet
- [ ] Wait 30 minutes between batches for system stability

**Afternoon (12pm-3pm PT):**
- [ ] Send batch 2: Prospects 6-10 (remaining Research U, start LAC)
- [ ] Verify sends
- [ ] Log send times

**Late Afternoon (3pm-5pm PT):**
- [ ] Send batch 3: Prospects 11-15 (LAC)
- [ ] Verify sends
- [ ] Log send times

**Next Business Day (April 7):**
- [ ] Send batch 4: Prospects 16-20 (CC)
- [ ] Verify all sends completed
- [ ] Begin monitoring for opens and clicks
- [ ] Check for bounces or delivery failures

### Post-Send Monitoring (Days 1-3)

**Daily (9am PT):**
- [ ] Check email tracking tool for opens and clicks
- [ ] Review Gmail inbox for replies
- [ ] Log all opens, clicks, and replies in tracking spreadsheet
- [ ] Respond to any replies within 2 hours
- [ ] Document common questions or objections

**Special Actions (as needed):**
- [ ] If bounce/delivery failure: Note prospect and request updated email from Apollo
- [ ] If out-of-office reply: Mark for retry on specific date mentioned
- [ ] If email reply received: Schedule discovery call immediately; send calendar link
- [ ] If high-interest prospect: Flag for priority follow-up

---

## SECTION 3: DATA INTEGRITY & COMPLIANCE

### Email Authentication & Deliverability

**SPF/DKIM/DMARC Setup:**
- [ ] edu.cloud Gmail account has SPF record configured for domain
- [ ] DKIM is enabled for outgoing emails
- [ ] DMARC policy is set (p=monitor for testing, p=quarantine/reject when verified)
- [ ] Verify setup with MXToolbox or similar
- [ ] Test email deliverability with mail-tester.com or similar tool

**Email Content Compliance:**
- [ ] Subject line is honest and relevant (not clickbait)
- [ ] From address is clear (no spoofed addresses)
- [ ] Unsubscribe link is included in footer
- [ ] Physical mailing address of edu.cloud is included
- [ ] All claims in email are accurate (no exaggeration about product capabilities)
- [ ] No misleading subject lines or deceptive practices

**CAN-SPAM Compliance:**
- [ ] Subject line accurately reflects email content (✓ for outreach; not deceptive)
- [ ] From address is transparent ("from: edu.cloud" or founder name)
- [ ] Reply email address is functional
- [ ] Physical address of edu.cloud is included in footer
- [ ] "Unsubscribe" link is present and functional
- [ ] Unsubscribe requests are honored within 10 business days
- [ ] Send time is respectful (avoid 6pm-9am sends)

**GDPR Compliance (if applicable):**
- [ ] Prospect data is from legitimate business source (Apollo, LinkedIn, public database)
- [ ] No personal data outside of name/email/title is collected without consent
- [ ] Prospect has legitimate expectation of contact (decision-maker in relevant industry)
- [ ] Privacy statement available on website or included in footer
- [ ] Right to access/deletion/opt-out is available
- [ ] No automated decision-making without transparency

### Data Management & Security
- [ ] Prospect list is stored in secure location (company Google Drive, not personal email)
- [ ] Email credentials are not shared insecurely
- [ ] Tracking spreadsheet is not shared outside approved team
- [ ] No prospect emails are forwarded to external email accounts
- [ ] Campaign data is backed up daily
- [ ] Access to prospect list is restricted to campaign team only

---

## SECTION 4: CONTINGENCY PLANS

### If Email Sending Fails
**Scenario:** Gmail SMTP connection error; emails not sending

**Resolution:**
1. Check Gmail account authentication status
2. Verify SMTP credentials are correct
3. Check Gmail security settings (may require allowing "less secure apps")
4. Wait 30 minutes and retry
5. If persistent, switch to Mailchimp or alternative email platform
6. Document failure and delay campaign by 1 day

**Fallback:** Use Mailchimp or HubSpot email sending instead of Gmail SMTP

---

### If Email Bounce Rate Is High
**Scenario:** 30%+ of emails bounce (invalid address, domain issues, etc.)

**Resolution:**
1. Analyze bounce pattern (specific domain? specific title level?)
2. Request updated email addresses from Apollo for bounced prospects
3. If >3 bounces from same institution, investigate that institution's email system
4. Replace bounced prospects with alternatives from Apollo enrichment
5. Continue campaign with remaining verified prospects
6. Do not send to same address twice after bounce

**Fallback:** Reduce campaign size to 15 verified prospects rather than 20

---

### If Email Open Rate Stays Below 40% After 5 Days
**Scenario:** Opens are lower than projected; suggests subject line or timing issue

**Resolution:**
1. Analyze which opens occurred (which segments, which time of day?)
2. Review opens from Day 5 follow-up (may be different subject line performing better)
3. Consider alternate send time for remaining follow-ups (test Tuesday 9am vs. Wednesday 2pm)
4. Do NOT resend to same prospects who already received email; only test on new prospects
5. Document insights for future campaigns

**Fallback:** Continue campaign; may be normal variation; check metrics on Day 10

---

### If Reply Rate Is Below 10% After 15 Days
**Scenario:** Fewer than 2 replies from 20 outreach; suggests messaging issue

**Resolution:**
1. Analyze which segments got replies (if any)
2. Check if bounced emails explain low reply rate
3. Consider if prospect list is correct (title level, institution type validation)
4. Review email content: is pain point clear? Is CTA compelling?
5. Increase cadence of follow-ups (Days 6, 10, 14 instead of 5, 10, 15)
6. Personalize follow-ups more heavily

**Fallback:** Pause campaign for analysis; request additional Apollo enrichment; restart with revised messaging

---

### If Calendar Booking Rate Is Below 20% (of clickers)
**Scenario:** Prospects are clicking calendar link but not booking calls

**Resolution:**
1. Verify Calendly link is working correctly
2. Check calendar availability (ensure time slots are showing)
3. Test booking process as prospect (may have friction)
4. Consider shortening call time from 15 to 10 minutes
5. In follow-ups, emphasize simplicity of booking ("2-click process")
6. Alternative: Provide direct scheduling link via follow-up email

**Fallback:** Add explicit "Book Here" CTA in follow-up emails

---

## SECTION 5: SUCCESS CRITERIA & GO/NO-GO DECISION

### Campaign Launch Decision Matrix

**Go/No-Go Criteria (Pre-Launch):**

| Criteria | Minimum Requirement | Status |
|----------|-------------------|--------|
| **Verified Prospect List** | 20 prospects with confirmed emails | [ ] Go [ ] No-Go |
| **Decision-Maker Titles** | 90%+ are director/VP level | [ ] Go [ ] No-Go |
| **Email Templates Ready** | 3 segment-specific templates + test send | [ ] Go [ ] No-Go |
| **Tracking Setup** | HubSpot/Mailchimp configured + spreadsheet | [ ] Go [ ] No-Go |
| **Calendar Ready** | Calendly link created + 10+ hours blocked | [ ] Go [ ] No-Go |
| **Team Assigned** | 1 person for responses, 1 for calls | [ ] Go [ ] No-Go |
| **Gmail Ready** | Account authenticated + test send successful | [ ] Go [ ] No-Go |
| **Compliance Verified** | CAN-SPAM, GDPR, email auth checks | [ ] Go [ ] No-Go |

**Decision:**
- If ALL criteria are "Go" → **LAUNCH CAMPAIGN**
- If ANY criteria is "No-Go" → **RESOLVE BLOCKER BEFORE LAUNCH**

---

### Campaign Performance Checkpoints

**Day 5 Checkpoint:**
- [ ] Open rate ≥ 40% → On track
- [ ] Reply rate ≥ 2-3% → On track
- [ ] No major technical issues → On track

**Day 15 Checkpoint:**
- [ ] Open rate ≥ 55% → On track
- [ ] Reply rate ≥ 10% → On track
- [ ] 1-2 discovery calls scheduled → On track
- [ ] No prospects unsubscribing or reporting spam → On track

**Day 25 Checkpoint:**
- [ ] Open rate ≥ 55-60% → On track
- [ ] Reply rate ≥ 15% → On track
- [ ] 3-5 discovery calls completed → On track
- [ ] At least 1 high-interest prospect → On track

**Campaign Success (Day 30):**
- [ ] 1-2 pilots recruited → **SUCCESS**
- [ ] 3-4 strong prospects in pipeline → **SUCCESS**
- [ ] Segment-level insights documented → **SUCCESS**
- [ ] Engagement metrics meeting expectations → **SUCCESS**

---

## FINAL APPROVAL

**Campaign Launch Checklist:**

Prepared by: _________________ Date: _______

Technical Setup Verified: _________________ Date: _______

Prospect Data Validated: _________________ Date: _______

Compliance Check Completed: _________________ Date: _______

Campaign Manager Approval: _________________ Date: _______

**Status:** [ ] APPROVED FOR LAUNCH [ ] BLOCKED - ISSUES TO RESOLVE

**Launch Date:** _________________ (Target: April 6, 2026)

---

**Document Version:** 1.0  
**Last Updated:** April 6, 2026  
**Owner:** CRM & Prospect Management Agent
