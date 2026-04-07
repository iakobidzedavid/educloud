# Gmail Cold Outreach Execution Guide
**edu.cloud Pilot Recruitment Campaign — Implementation Checklist**

**Last Updated:** April 7, 2026
**Status:** Ready for Execution
**Responsibility:** Campaign Lead + Gmail Integration

---

## Pre-Send Checklist (Complete Before Sending)

### Data Validation
- [ ] **Apollo Prospect List:** 20 verified decision-makers confirmed
  - [ ] All email addresses present and formatted correctly
  - [ ] Decision-maker titles documented (VP Advancement, Director Alumni Relations, etc.)
  - [ ] Institution names and types recorded (Research Univ / Liberal Arts / Professional)
  - [ ] No duplicate email addresses in list
  - [ ] LinkedIn profiles linked for research context

- [ ] **Prospect Data Quality Check:** For each prospect:
  - [ ] Email address matches LinkedIn/institution directory
  - [ ] Email not marked as unsubscribed in any system
  - [ ] No previous outreach history with this prospect
  - [ ] Institution size and type confirmed (for segment assignment)

### Email Template Preparation
- [ ] **Template Variants Created & Reviewed:**
  - [ ] Variant A (Research Universities) — tone and specificity reviewed
  - [ ] Variant B (Liberal Arts Colleges) — pain points accurate
  - [ ] Variant C (Professional Schools) — outcomes focus clear

- [ ] **Personalization Fields Confirmed:**
  - [ ] [FirstName] placeholder correct for each prospect
  - [ ] [Institution] name matches official institution name
  - [ ] Pain points specific to institutional type and size
  - [ ] All placeholders will be auto-populated before send

- [ ] **CTA & Links Ready:**
  - [ ] Calendly scheduling link tested and working
  - [ ] Landing page link (edu.cloud product page) active
  - [ ] All URLs shortened and tracked (Bitly or similar)
  - [ ] No broken links in email

- [ ] **Email Format & Display:**
  - [ ] Plain text version created (fallback)
  - [ ] HTML version tested on mobile (iPhone/Android)
  - [ ] Line length <60 chars (readability on small screens)
  - [ ] No images (to avoid spam filter issues)
  - [ ] Signature includes all required info (name, title, email, phone)

### Gmail Authentication & Deliverability
- [ ] **Domain Authentication Configured:**
  - [ ] DKIM signing enabled for edu.cloud domain
  - [ ] SPF record includes Gmail servers
  - [ ] DMARC policy set to allow signing
  - [ ] Test email sent to gmail.com address — arrives in inbox (not spam)

- [ ] **Sender Information:**
  - [ ] Sending from company domain email (name@edu.cloud, not personal)
  - [ ] From name is human-readable (FirstName LastName, not "Sales Team")
  - [ ] Reply-To address set to monitored inbox
  - [ ] Bounce address configured

- [ ] **Gmail Account Setup:**
  - [ ] Gmail account has sufficient daily send limit (Gmail: 500 msgs/day)
  - [ ] API credentials configured with Gmail API access
  - [ ] OAuth token refreshed and valid
  - [ ] Rate limiting set (stagger sends across 30 minutes)

### Tracking & Monitoring Setup
- [ ] **Open Tracking:**
  - [ ] Tracking pixel embedded in email (Gmail API or Mailgun)
  - [ ] Pixel verified in test send
  - [ ] Spreadsheet column prepared for "Email Opened" (Yes/No)
  - [ ] Timestamp column ready for "Open Timestamp"

- [ ] **Click Tracking:**
  - [ ] URL rewriting enabled (all links go through tracking service)
  - [ ] Test click logged and appears in spreadsheet
  - [ ] Can distinguish between scheduling link clicks vs. other links
  - [ ] Click timestamp captured

- [ ] **Reply Monitoring:**
  - [ ] Gmail label created: "pilot-recruitment-replies"
  - [ ] Filter configured to auto-label all replies to campaign email address
  - [ ] Reply inbox monitored for daily triage
  - [ ] Team members have access to shared inbox/label

- [ ] **Spreadsheet Prepared:**
  - [ ] All 20 rows pre-populated with prospect data
  - [ ] Column headers match tracking data (see Campaign Plan)
  - [ ] Formulas ready to calculate rates (open %, click %, reply %)
  - [ ] Share permissions set for team visibility

### Legal & Compliance
- [ ] **CAN-SPAM Compliance:**
  - [ ] Physical address included in email footer? Yes / No (optional for B2B)
  - [ ] Unsubscribe link present? Yes (recommended even for business emails)
  - [ ] Clear subject line (not misleading)
  - [ ] "This is an advertisement" disclosure? (if required by jurisdiction)

- [ ] **GDPR Compliance (if sending to EU prospects):**
  - [ ] Legitimate interest basis documented (pilot recruitment = legitimate interest)
  - [ ] Privacy policy linked in email
  - [ ] Easy unsubscribe mechanism available
  - [ ] No personal data shared with third parties

- [ ] **Email List Hygiene:**
  - [ ] No scraped email lists used
  - [ ] All addresses obtained through legitimate business research (Apollo, LinkedIn)
  - [ ] No purchased email lists
  - [ ] Can verify source of each email address

---

## Send Execution (Campaign Day)

### Pre-Send Final Review (1 hour before)
1. **Spot Check 5 Random Prospects:**
   - [ ] Read full personalized email for 5 different prospects
   - [ ] Confirm personalization is specific to institution (not generic)
   - [ ] Verify no [bracketed placeholders] remain unfilled
   - [ ] Check tone matches segment (research / fundraising / career outcomes)

2. **Technical Final Check:**
   - [ ] Test send to internal email address
   - [ ] Verify email arrives in inbox within 5 minutes
   - [ ] Check formatting on mobile device
   - [ ] Confirm open pixel fires (check tracking system)
   - [ ] Test link clicks are logged
   - [ ] Click scheduling link — Calendly loads properly

3. **Backup & Documentation:**
   - [ ] Save copy of all 20 personalized emails to file (for records)
   - [ ] Screenshot template variants for audit trail
   - [ ] Document send time and timezone
   - [ ] Prepare send confirmation log

### Send Execution (30-minute window)
1. **Initiate Batch Send via Gmail API:**
   ```
   For each prospect in list:
   - Fetch personalized email body (with [placeholders] filled)
   - Construct Gmail message object
   - Set From: [official company email]
   - Set To: [prospect email]
   - Set Subject: [variant subject line]
   - Set Headers (In-Reply-To, References for threading)
   - Attach tracking pixel to message
   - Call Gmail API: messages.send()
   - Log send timestamp and message ID
   - Wait 1-2 minutes between sends (stagger delivery)
   ```

2. **Monitor Send Progress:**
   - [ ] Confirm each send returns success (200 OK response)
   - [ ] Log any send failures (attempt retry immediately)
   - [ ] Track send timestamps
   - [ ] Stop and troubleshoot if >5% failure rate

3. **Post-Send Verification (within 30 minutes):**
   - [ ] Check "Sent" folder in Gmail — 20 emails present
   - [ ] Verify send times in spreadsheet align with stagger pattern
   - [ ] Spot check 3 recipients' email addresses to confirm delivery
   - [ ] Update spreadsheet "Email Sent" column with timestamps

### Immediate Post-Send Monitoring (Hours 1-4)
1. **First Engagement Tracking:**
   - [ ] Monitor for early opens (within 1 hour = high engagement)
   - [ ] Check for immediate replies (spam filters or vacation responders)
   - [ ] Monitor spam/bounce notifications
   - [ ] Document any unexpected rejections

2. **Deliverability Verification:**
   - [ ] Check Gmail bounce folder for hard bounces
   - [ ] For any bounces: note in spreadsheet, prepare replacement contact if available
   - [ ] Monitor received/Spam ratio (should be 95%+ inbox, <5% spam)
   - [ ] If >5% spam folder: investigate and adjust authentication

3. **Team Communication:**
   - [ ] Send team message confirming send completion
   - [ ] Share high-level stats (delivery rate, early opens)
   - [ ] Assign reply triage responsibility
   - [ ] Set expectations for monitoring schedule

---

## Daily Monitoring Protocol (Days 1-14)

### Daily Check-in (5-10 minutes, morning)
**Timing:** 8:00 AM daily
- [ ] Pull overnight open/click data from tracking system
- [ ] Update spreadsheet "Email Opened" and "Open Timestamp" columns
- [ ] Note any new clicks and which links (scheduling vs. landing page)
- [ ] Check reply inbox for overnight responses
- [ ] Triage replies: Interested / More Info / Not Interested / Spam

### Reply Triage Protocol
**When reply arrives:**
1. [ ] Tag with "pilot-recruitment-replies" label
2. [ ] Read full reply text
3. [ ] Categorize sentiment:
   - **Interested:** Prospect wants to talk or has positive signal
   - **More Info Needed:** Prospect has questions but not committed
   - **Not Interested:** Explicit rejection or "remove me"
   - **Spam/Bounce:** Delivery failure or irrelevant reply

4. [ ] Document in spreadsheet:
   - Column "Reply Received": Yes
   - Column "Reply Date": [date received]
   - Column "Reply Sentiment": [category]
   - Column "Reply Summary": [1-2 sentence summary of their message]

5. [ ] Forward to Sales Rep:
   - **Interested:** Flag as priority, include prospect context from Apollo
   - **More Info Needed:** Prepare detailed follow-up email with additional info
   - **Not Interested:** Log objection for analysis

### Weekly Review (Fridays, 30 minutes)
**Timing:** Friday afternoon
1. [ ] Calculate daily metrics:
   - Opens to date: [count] / 20 = [%]
   - Clicks to date: [count] / 20 = [%]
   - Replies to date: [count] / 20 = [%]
   - Call bookings to date: [count]

2. [ ] Compare to benchmarks:
   - Day 7 target: 50%+ opens, 20%+ clicks
   - Day 14 target: 70%+ opens, 40%+ clicks, 10%+ replies

3. [ ] Analyze engagement patterns:
   - Which segment (A/B/C) performs best by open rate?
   - Which subject lines get highest open rates?
   - Which pain points generate most replies?
   - Any prospects with multiple opens (high interest)?

4. [ ] Plan follow-ups:
   - Identify high-engagement prospects (opened + clicked, no call)
   - Schedule reminder emails for scheduling link clickers
   - Plan second-wave prospects based on learnings
   - Document objections for messaging refinement

---

## Post-Send Automation (If Available)

### Trigger-Based Follow-ups
If using email automation platform (Mailchimp, HubSpot):

**Trigger 1: Click Scheduling Link, No Booking (48 hours)**
- Conditions: Click on Calendly link, "Call Scheduled" still = No
- Action: Send reminder email
- Content: "Hi [FirstName], I noticed you were interested in learning more. Here are a few open times this week to chat: [available slots]"
- Goal: Convert interested prospects to booked calls

**Trigger 2: Opened Email, No Click (7 days)**
- Conditions: Email Opened = Yes, Click = No
- Action: Send follow-up email
- Content: Single follow-up with social proof + different CTA
- Content: "Hi [FirstName], wanted to follow up on my earlier email about [Institution]'s alumni outcomes. Would a 15-min call be helpful?"
- Goal: Re-engage readers who didn't click first time

**Trigger 3: No Open (14 days)**
- Conditions: Email Opened = No
- Action: None (do not send blind follow-up without engagement signal)
- Note: Low open often indicates bad email address or lack of relevance

---

## Data Collection & Analysis

### Open/Click Tracking Data Fields
Track the following for each prospect:

**Send Data:**
- Email Sent: [timestamp]
- Subject Line Used: [variant A/B/C]
- Segment: [Research/Liberal Arts/Professional]

**Engagement Data:**
- Email Opened: [Yes/No]
- Open Timestamp: [first open time]
- Open Count: [number of times opened] (re-opens = high interest)
- Link Clicked: [Yes/No, which link]
- Click Timestamp: [first click time]
- Click Count: [how many clicks total]
- Link Type: [Scheduling link vs. Landing page vs. Other]

**Response Data:**
- Reply Received: [Yes/No]
- Reply Date: [timestamp]
- Reply Sentiment: [Interested / More Info / Not Interested / Spam]
- Reply Summary: [1-2 sentence summary]

**Conversion Data:**
- Call Scheduled: [Yes/No]
- Call Date/Time: [scheduled datetime]
- Call Completed: [Yes/No]
- Call Notes: [key discussion points, pain points, objections]
- Pilot Commitment: [Yes/No]
- Status: [Contacted / Engaged / Called / Converted / Lost]

### KPI Calculations
- **Delivery Rate:** (Sent Successfully / Total Sent) × 100%
- **Open Rate:** (Opened / Delivered) × 100%
- **Click Rate:** (Clicked / Opened) × 100%
- **Reply Rate:** (Replied / Delivered) × 100%
- **Call Rate:** (Call Scheduled / Replied) × 100%
- **Conversion Rate:** (Pilot Committed / Called) × 100%

### Segment Performance Analysis
Compare metrics by segment:
| Metric | Segment A | Segment B | Segment C | Overall |
|--------|-----------|-----------|-----------|---------|
| Open Rate | [%] | [%] | [%] | [%] |
| Click Rate | [%] | [%] | [%] | [%] |
| Reply Rate | [%] | [%] | [%] | [%] |
| Call Rate | [%] | [%] | [%] | [%] |

Insights:
- Which segment performs best? Why?
- Should messaging differ by segment?
- Any segment to focus on for second wave?

---

## Troubleshooting & Common Issues

### Issue: Low Open Rates (<50% by Day 3)

**Diagnosis Steps:**
1. Check spam folder — are emails landing there?
2. Review subject line — is it compelling enough?
3. Check send time — did you send at optimal time?
4. Verify domain authentication — DKIM/SPF/DMARC correct?

**Resolution Options:**
- If in spam: Adjust domain authentication or try different sending domain
- If subject line weak: Switch to alternative subject for remaining prospects
- If timing poor: Note time of day and adjust for next wave
- Resend to non-openers after 7 days with new subject line

### Issue: High Bounce Rate (>5%)

**Diagnosis Steps:**
1. Check Apollo data — were emails recently verified?
2. Verify email format — any typos or formatting errors?
3. Check domain authentication — DKIM/SPF might block delivery
4. Contact prospects' institutions — confirm email not changed

**Resolution Options:**
- For soft bounces: Retry after 48 hours
- For hard bounces: Search LinkedIn for updated contact info
- If >10% bounces: Contact Apollo to verify data source and get credits
- Document bounce rate for future data quality assessment

### Issue: No Replies (0% by Day 7)

**Diagnosis Steps:**
1. Check opens — are prospects at least opening emails?
2. Check clicks — are they interested but hesitant to call?
3. Review competitive positioning — is value prop compelling vs. alternatives?
4. Check CTA — is scheduling link clear and easy to use?

**Resolution Options:**
- If opens OK but clicks low: Pain point may not resonate; refine messaging
- If clicks OK but no reply: CTA friction too high; offer easier alternative ("I'll call you")
- If no opens: Subject line or sender domain needs adjustment
- If opens/clicks OK: Follow-up email may be needed to convert to call

### Issue: Calendly Link Receives Clicks But No Bookings

**Diagnosis Steps:**
1. Test Calendly link — does it load properly?
2. Check availability — are meeting slots actually available?
3. Check timezone — is timezone correct for prospect?
4. Check email reminder — does Calendly send confirmation?

**Resolution Options:**
- Ensure availability slots are present and spanning multiple days/times
- Send manual follow-up: "I see you were interested. Here are some times that work for me this week — would one of these be good?"
- Offer phone call alternative: "I can also call you directly — are you available [specific times]?"
- Include direct calendar link (not embedded) for compatibility

---

## Team Roles & Responsibilities

### Campaign Lead
**Responsible for:** Execution and monitoring
- Pre-send validation and testing
- Batch send execution via Gmail API
- Daily open/click tracking
- Reply triage and routing
- Spreadsheet updates
- Daily team standup on engagement metrics

**Success Criteria:**
- 100% delivery rate (or >95% with <5% bounces)
- 50%+ opens by Day 3
- <1% spam folder rate

### Sales Rep
**Responsible for:** Prospect engagement and conversion
- Schedule and conduct discovery calls
- Qualify prospects for pilot program
- Address objections and questions
- Negotiate pilot terms and SOW
- Document call notes in spreadsheet

**Success Criteria:**
- Book 5-10 discovery calls from 20 outreach emails
- Convert 2-3 calls to pilot commitments
- Document objections for messaging refinement

### Marketing/Product
**Responsible for:** Analysis and optimization
- Analyze segment performance
- Identify messaging improvements for next wave
- Update competitive positioning if needed
- Prepare case study content from pilot calls

**Success Criteria:**
- Document 3-5 key insights for messaging refinement
- Ready second wave messaging by Day 14

---

## Contingency & Escalation

### If Delivery Rate <90%
1. Check Gmail bounce notifications immediately
2. Verify DKIM/SPF authentication
3. Try resending from different email account if issue persists
4. Escalate to technical team if >10% delivery failure

### If Open Rate <40% by Day 5
1. Analyze subject lines — which ones get opens vs. which ones don't?
2. Review competitor outreach for better subject line ideas
3. Test new subject line on remaining non-openers (if <48 hours since send)
4. Escalate to marketing if systematic issue

### If Reply Rate <5% by Day 10
1. Verify pain points are accurate for each prospect
2. Get sales rep feedback on missing elements in messaging
3. Consider whether targeting is correct (are these decision-makers?)
4. Plan messaging refresh for second wave

### If No Calls Booked by Day 7
1. Sales rep to manually reach out to "interested" replies with calendar link
2. Send follow-up email to scheduling link clickers with specific times
3. Consider whether CTA friction is too high (switching from Calendly to direct scheduling)
4. Escalate to leadership if fundamental fit issue with prospects

---

## Completion Checklist

**Campaign is COMPLETE when:**
- [ ] All 20 emails sent successfully
- [ ] Email tracking enabled and functioning
- [ ] Daily monitoring protocol established
- [ ] Reply triage process active
- [ ] Spreadsheet updated with send/open/click data
- [ ] At least 3 discovery calls scheduled

**Campaign is SUCCESSFUL when:**
- [ ] 15%+ reply rate achieved (minimum 3 replies)
- [ ] 1+ discovery call completed
- [ ] Prospect feedback documented for messaging refinement
- [ ] 1+ pilot commitment achieved (goal: 2-3)

---

## Approval & Sign-Off

**Campaign Lead:** _________________ Date: _________
**Sales Lead:** _________________ Date: _________
**CMO/GTM Lead:** _________________ Date: _________

**Ready to Execute:** [ ] YES [ ] NO

If NO, list blockers: _____________________________________________
