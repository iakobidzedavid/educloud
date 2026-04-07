# Email Campaign Tracking Spreadsheet Template
**edu.cloud Pilot Recruitment Campaign — Prospect Tracking**

**Campaign Name:** Pilot Recruitment Email Campaign (20 Prospects)
**Start Date:** [Campaign Start Date]
**End Date:** [Campaign End Date + 14 days]
**Status:** [Active / Completed / On Hold]

---

## Tracking Spreadsheet Structure

### Columns (in order of use)

| # | Column Name | Type | Format | Example | Purpose |
|---|-------------|------|--------|---------|---------|
| 1 | Prospect Name | Text | FirstName LastName | John Smith | Identify recipient |
| 2 | Institution | Text | Official Name | State University | Context for personalization |
| 3 | Institution Type | Category | Research Univ / Liberal Arts / Professional | Research Univ | Segment assignment |
| 4 | Decision-Maker Title | Text | Official Job Title | VP Advancement | Identify decision-maker level |
| 5 | Email Address | Email | firstname@institution.edu | john.smith@state.edu | Send recipient |
| 6 | Segment | Category | A / B / C | A | Template variant used |
| 7 | Email Sent | Date/Time | YYYY-MM-DD HH:MM | 2026-04-07 10:15 | Send timestamp |
| 8 | Subject Line Used | Text | Exact subject line | "John, Track State Univ Alumni Outcomes 10x Faster" | For A/B testing |
| 9 | Email Opened | Yes/No | Yes / No | Yes | Open tracking |
| 10 | Open Timestamp | Date/Time | YYYY-MM-DD HH:MM (first open) | 2026-04-07 11:30 | When email opened |
| 11 | Open Count | Number | Total opens | 2 | Engagement indicator (re-opens) |
| 12 | Link Clicked | Yes/No | Yes / No | Yes | Click tracking |
| 13 | Links Clicked Details | Text | Which links (comma-separated) | Scheduling link, landing page | Which CTA engaged |
| 14 | First Click Timestamp | Date/Time | YYYY-MM-DD HH:MM (first click) | 2026-04-07 11:45 | When first clicked |
| 15 | Click Count | Number | Total clicks | 3 | Engagement level |
| 16 | Reply Received | Yes/No | Yes / No | Yes | Reply tracking |
| 17 | Reply Date | Date/Time | YYYY-MM-DD HH:MM | 2026-04-08 09:30 | When reply arrived |
| 18 | Reply Sentiment | Category | Interested / More Info / Not Interested / Spam | Interested | Qualification |
| 19 | Reply Summary | Text | 1-2 sentence summary | "Interested in learning more about outcomes tracking for research impact reporting" | Quick context |
| 20 | Call Scheduled | Yes/No | Yes / No | Yes | Conversion tracking |
| 21 | Call Date/Time | Date/Time | YYYY-MM-DD HH:MM | 2026-04-10 14:00 | When call is scheduled |
| 22 | Call Completed | Yes/No | Yes / No | Yes | Whether call occurred |
| 23 | Call Notes | Text | Key discussion points | "Pain: 200 hrs/year on alumni tracking. Interest in pilot. 3-5 yr payback." | Sale context |
| 24 | Pilot Commitment | Yes/No | Yes / No | Yes | Conversion outcome |
| 25 | Status | Category | Contacted / Engaged / Called / Converted / Lost | Converted | Current state |
| 26 | Next Action | Text | What happens next | "Send pilot SOW, schedule kickoff call" | Follow-up required |

---

## Sample Data (3 Rows)

```
Prospect Name | Institution | Institution Type | Decision-Maker Title | Email Address | Segment | Email Sent | Subject Line Used | Email Opened | Open Timestamp | Open Count | Link Clicked | Links Clicked Details | First Click Timestamp | Click Count | Reply Received | Reply Date | Reply Sentiment | Reply Summary | Call Scheduled | Call Date/Time | Call Completed | Call Notes | Pilot Commitment | Status | Next Action

John Smith | State University | Research Univ | VP Advancement | john.smith@state.edu | A | 2026-04-07 10:15 | John, Track State Univ Alumni Outcomes 10x Faster | Yes | 2026-04-07 11:30 | 2 | Yes | Scheduling link, landing page | 2026-04-07 11:45 | 3 | Yes | 2026-04-08 09:30 | Interested | "Interested in learning more. Asked about pricing and timeline." | Yes | 2026-04-10 14:00 | Yes | "Strong fit. Research outcomes complexity. 200 hrs/yr manual work. Budget available for pilot." | Yes | Converted | Send pilot SOW

Sarah Johnson | Riverside College | Liberal Arts | Director Alumni Relations | s.johnson@riverside.edu | B | 2026-04-07 10:42 | Sarah, Strengthen Riverside's Alumni Story with Better Data | Yes | 2026-04-07 15:10 | 1 | Yes | Scheduling link | 2026-04-07 15:15 | 1 | No | — | — | — | No | — | — | — | No | Engaged | Send follow-up email, offer alternative scheduling

Michael Chen | Professional School | Professional School | Director Career Services | m.chen@profschool.edu | C | 2026-04-07 11:08 | Michael, Track Professional School Graduate Outcomes Automatically | No | — | 0 | No | — | — | 0 | No | — | — | — | No | — | — | — | No | Contacted | Monitor for open, send follow-up at day 7 if no engagement
```

---

## Calculation Formulas (for spreadsheet)

### Primary Metrics
```
Delivery Rate = COUNTA(Email Opened) / 20 * 100%
Open Rate = COUNTIF(Email Opened,"Yes") / 20 * 100%
Click Rate = COUNTIF(Link Clicked,"Yes") / COUNTIF(Email Opened,"Yes") * 100%
Reply Rate = COUNTIF(Reply Received,"Yes") / 20 * 100%
Call Rate = COUNTIF(Call Scheduled,"Yes") / COUNTIF(Reply Received,"Yes") * 100%
Conversion Rate = COUNTIF(Pilot Commitment,"Yes") / COUNTIF(Call Completed,"Yes") * 100%
```

### Segment Performance
```
For Segment A (Research Universities):
  Open Rate A = COUNTIFS(Segment,"A",Email Opened,"Yes") / COUNTIF(Segment,"A") * 100%
  Reply Rate A = COUNTIFS(Segment,"A",Reply Received,"Yes") / COUNTIF(Segment,"A") * 100%
  [Repeat for Segments B and C]
```

### Daily Tracking (optional)
```
If tracking by day:
  Emails Opened Today = COUNTIFS(Open Timestamp,">="&TODAY(),Open Timestamp,"<"&TODAY()+1)
  Replies Today = COUNTIFS(Reply Date,">="&TODAY(),Reply Date,"<"&TODAY()+1)
  Calls Scheduled Today = COUNTIFS(Call Date,">="&TODAY(),Call Date,"<"&TODAY()+1)
```

---

## Monitoring Dashboard (Sample)

### Daily Snapshot (to fill in each morning)
```
Date: April 8, 2026

Sent: 20/20 (100%)
Bounces: 0
Delivered: 20/20 (100%)

Opens to Date: 15/20 (75%)
Opens Today: 3 new
Latest Open: 2026-04-08 08:15

Clicks to Date: 8/20 (40%)
Clicks Today: 2 new
Link Types: 6 scheduling, 2 landing page

Replies to Date: 2/20 (10%)
Replies Today: 1 new
Sentiment: 2 Interested, 0 More Info, 0 Not Interested

Calls Scheduled: 1/20 (5%)
Calls Completed: 0/1
Calls Today: 0 new

Status Summary:
- Contacted: 20/20 (sent emails)
- Engaged: 8/20 (opened or clicked)
- Called: 1/20 (scheduled)
- Converted: 0/20 (pilot committed)

Next Actions:
- Follow up with Sarah Johnson (clicked, no booking) - send reminder
- Schedule sales prep for John Smith call (scheduled 4/10)
- Monitor for day 3+ opens on remaining 5 non-openers
```

### Weekly Summary (Day 7)
```
Week 1 Performance (Days 1-7):

DELIVERY
- Sent: 20/20 (100%)
- Delivered: 20/20 (100%)
- Hard Bounces: 0 (0%)
- Soft Bounces: 0 (0%)

ENGAGEMENT
- Opens: 15/20 (75%) ✓ Target: 50%+ ✓EXCEEDED
- Click Rate (of opens): 8/15 (53%) ✓ Target: 40%+ ✓EXCEEDED
- Total Clicks: 8/20 (40%)

CONVERSION
- Replies: 2/20 (10%) ⚠ Target: 15%+ ⚠BELOW
- Call Scheduled: 1/20 (5%) ⚠ Target: 25%+ ⚠BELOW
- Call Completed: 0/1 (N/A)
- Pilot Committed: 0/20 (0%)

SEGMENT BREAKDOWN
Segment A (Research Univ):
- Open: 7/8 (88%) ✓
- Click: 4/7 (57%) ✓
- Reply: 1/8 (13%)

Segment B (Liberal Arts):
- Open: 5/7 (71%) ✓
- Click: 2/5 (40%)
- Reply: 1/7 (14%)

Segment C (Professional):
- Open: 3/5 (60%)
- Click: 2/3 (67%) ✓
- Reply: 0/5 (0%) ✗ NEEDS ATTENTION

INSIGHTS
- Opens strong (75% vs. 30-40% benchmark) → subject lines working
- Segment C has 0% reply rate → pain points may not resonate
- 8 prospects clicked but only 1 booked → CTA friction or hesitation
- Follow-up strategy needed to convert engaged but not-yet-committed prospects

ACTIONS FOR WEEK 2
- Send reminder to 7 prospects who clicked but didn't book (with direct times)
- Follow up on 5 non-openers (optional, day 7+)
- Analyze Segment C objections → consider messaging refresh for second wave
- Prepare sales talk track for John Smith call (scheduled 4/10)
```

---

## Status Definitions

### "Status" Column Categories

| Status | Definition | Trigger | Next Action |
|--------|------------|---------|------------|
| **Contacted** | Email sent successfully | Email delivered | Monitor for opens/clicks |
| **Engaged** | Opened email OR clicked link | Open OR click event | Encourage call booking |
| **Called** | Discovery call scheduled | Call scheduled date/time set | Prepare for call |
| **Converted** | Agreed to pilot | Pilot Commitment = Yes | Send SOW, schedule kickoff |
| **Lost** | Declined or no response after follow-up | No reply after day 14, or explicit "not interested" | Document objections |

---

## Reply Sentiment Classification

### Interested
**Definition:** Prospect signals positive interest and openness to discussion
**Examples:**
- "This looks great, would love to learn more"
- "We've been looking for something like this"
- "Can we schedule a call?"
- "What's the pricing and timeline?"

**Action:** Prioritize for sales follow-up; high conversion probability

### More Info Needed
**Definition:** Prospect has questions but sentiment unclear; interest conditional
**Examples:**
- "How does this compare to [competitor]?"
- "What's your experience with institutions like ours?"
- "Does this integrate with our current systems?"
- "Can you send more details about the process?"

**Action:** Provide additional information; then follow up for call

### Not Interested
**Definition:** Prospect declines explicitly or indicates low priority
**Examples:**
- "Not a priority for us right now"
- "We already have a solution"
- "Thanks, but we don't need this"
- "Remove me from future emails"

**Action:** Log objection; mark as lost; honor unsubscribe requests

### Spam
**Definition:** Reply is not from decision-maker or is irrelevant
**Examples:**
- "I don't work here anymore"
- "You have the wrong department"
- Automated out-of-office replies
- Email bounce notifications

**Action:** Update contact info if available; otherwise mark as lost

---

## Usage Instructions

### During Campaign (Daily)
1. **Morning Check-in (10 min):**
   - Pull overnight open/click data from Gmail tracking
   - Update columns: Email Opened, Open Timestamp, Link Clicked, etc.
   - Check reply inbox and populate Reply columns
   - Note any new calls scheduled

2. **Weekly Review (Friday, 30 min):**
   - Calculate all metrics using formulas
   - Compare to targets and benchmarks
   - Identify top performers and bottom performers
   - Document insights for messaging refinement

3. **Daily Standup (5 min):**
   - Share high-level metrics (opens, replies, calls)
   - Flag any prospects needing urgent follow-up
   - Confirm follow-ups completed from previous day

### Post-Campaign (Day 14+)
1. **Final Analysis:**
   - Complete all calculations
   - Generate segment performance comparison
   - Document lessons learned
   - Identify which pain points resonated most

2. **Second Wave Preparation:**
   - Apply insights to messaging for next 30 prospects
   - Update templates based on feedback
   - Prepare segmentation for second wave

3. **Archive:**
   - Save completed spreadsheet to records
   - Document campaign performance metrics
   - Retain for future reference and training

---

## Data Export & Integration

### Export for Sales CRM
```
For prospects who replied "Interested" or scheduled calls:
Export columns: Prospect Name, Email, Institution, Title, 
                Reply Summary, Call Scheduled, Next Action
Import to: Salesforce, HubSpot, Pipedrive, or other CRM
Purpose: Sales rep workflow
```

### Export for Marketing Analysis
```
For segment performance review:
Export columns: All columns including segment, email opened, 
                click data, reply sentiment
Analysis: By segment, by subject line, by institution type
Purpose: Marketing insights for next campaign
```

### Export for Leadership Reporting
```
For executive dashboard:
Summary only: Total sent, delivery rate, open rate, reply rate,
              call rate, conversion rate, key insights
Format: 1-page summary with chart
Purpose: Monthly GTM reporting
```

---

## Tips for Accurate Tracking

1. **Timestamping:** Always use UTC or consistent timezone (specify which)
2. **Deduplicate Opens:** Only count first open in "Email Opened" = Yes; count total in "Open Count"
3. **Link Tracking:** If multiple links clicked, list all in "Links Clicked Details"
4. **Reply Routing:** Forward all campaign replies to shared inbox with label for easy tracking
5. **Call Notes:** Be specific — capture pain points, budget signals, timeline mentions
6. **Status Updates:** Update status only after actions complete (don't mark "Called" until call actually occurred)

---

## Template Ready for Use

This template is ready to use immediately once prospect data is available. Simply:

1. **Create new Google Sheet or Excel workbook**
2. **Add column headers** from table above
3. **Populate rows** with 20 prospects from Apollo list
4. **Add formulas** for automatic metric calculation
5. **Share with team** for collaborative monitoring
6. **Begin daily tracking** as emails are sent

---

## Questions?

For questions about tracking setup or metric calculations:
- Review Campaign Plan for metric definitions
- Review Execution Guide for daily monitoring protocol
- Contact Campaign Lead with specific questions about data entry
