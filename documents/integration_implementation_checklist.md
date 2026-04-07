# Integration Implementation Checklist
**edu.cloud Platform Integration - Setup & Activation Guide**

---

## Platform 1: Pica Web Search (Hacker News API)

### Pre-Implementation
- [ ] Review Hacker News API documentation
- [ ] Identify team member responsible for setup
- [ ] Create dedicated Slack channel for alerts

### Implementation (Estimated: 4-6 hours)

#### Step 1: Infrastructure Setup
- [ ] Create `/integrations/pica/` directory in codebase
- [ ] Install required Python packages:
  - [ ] `requests` (API client)
  - [ ] `json` (data parsing)
  - [ ] `schedule` (task scheduling)
- [ ] Set up logging for HN API queries

#### Step 2: API Configuration
- [ ] Configure base URL: `https://hacker-news.firebaseio.com/v0`
- [ ] Set up rate limiting (max 30 req/min)
- [ ] Implement retry logic with exponential backoff
- [ ] Add timeout configuration (5 seconds)

#### Step 3: Data Collection Pipeline
- [ ] Create daily query schedule:
  - [ ] 06:00 UTC: Fetch newstories (24-hour window)
  - [ ] 12:00 UTC: Fetch beststories (all-time)
  - [ ] 18:00 UTC: Fetch askstories (community Q&A)
- [ ] Implement keyword filtering:
  - [ ] "alumni"
  - [ ] "outcomes"
  - [ ] "impact"
  - [ ] "tracking"
  - [ ] "higher education"
  - [ ] "university"
  - [ ] "college"
- [ ] Store matching stories in database

#### Step 4: Dashboard & Reporting
- [ ] Create market intelligence dashboard showing:
  - [ ] Daily story counts by keyword
  - [ ] Top stories by engagement (score, comments)
  - [ ] Sentiment indicators
  - [ ] Competitor mentions
- [ ] Generate weekly report template:
  - [ ] Executive summary (3-5 key stories)
  - [ ] Trend analysis
  - [ ] Actionable insights

#### Step 5: Monitoring & Alerts
- [ ] Set up API health checks (every 5 min)
- [ ] Create alert thresholds:
  - [ ] Availability <95% → alert
  - [ ] Response time >1s → alert
  - [ ] High-volume competitor mention → alert
- [ ] Test alert notifications

### Post-Implementation Testing
- [ ] Verify API connectivity
- [ ] Test data collection pipeline (24-hour run)
- [ ] Validate dashboard accuracy
- [ ] Review first weekly report
- [ ] Get stakeholder sign-off

### Success Criteria
- ✅ Daily automated queries executing on schedule
- ✅ >80% data accuracy (stories correctly categorized)
- ✅ Dashboard showing live data (refreshed hourly)
- ✅ Weekly reports generated automatically
- ✅ Zero downtime in first 7 days

---

## Platform 2: Composio Integration Platform

### Pre-Implementation
- [ ] Schedule 2-hour integration planning meeting
- [ ] Identify primary CRM (Salesforce vs. HubSpot)
- [ ] Assign technical owner + backup
- [ ] Create project management board
- [ ] Determine email sending volume expectations
- [ ] Review compliance requirements (CAN-SPAM, GDPR)

### Implementation Phase 1: Account & Platform Setup (4-6 hours)

#### Step 1: Composio Account Configuration
- [ ] Sign up for Composio account (free tier)
- [ ] Upgrade to paid tier if needed ($50-200/month)
- [ ] Configure organization/team settings
- [ ] Enable audit logging for compliance
- [ ] Set up two-factor authentication

#### Step 2: Gmail OAuth Integration
- [ ] Create Google Cloud Project
- [ ] Enable Gmail API
- [ ] Generate OAuth 2.0 credentials (Web application type)
- [ ] Set authorized redirect URIs:
  - [ ] `https://api.composio.dev/callback`
  - [ ] `https://your-domain.com/oauth/callback`
- [ ] Add required scopes:
  - [ ] `gmail.send`
  - [ ] `gmail.modify`
  - [ ] `gmail.readonly`
- [ ] Connect Gmail account to Composio
- [ ] Verify permissions granted
- [ ] Test sending a test email via API

#### Step 3: Salesforce OAuth Integration
- [ ] Create Salesforce Developer Edition org (if needed)
- [ ] Enable OAuth in Salesforce:
  - [ ] Settings → Apps → App Manager
  - [ ] New Connected App
- [ ] Set OAuth scopes:
  - [ ] api
  - [ ] refresh_token
  - [ ] web
- [ ] Configure Composio as connected app
- [ ] Authorize integration
- [ ] Test API connectivity (list accounts/leads)

#### Step 4: Alternative CRM: HubSpot OAuth
- [ ] Create HubSpot Private App (if using HubSpot instead)
- [ ] Generate API key
- [ ] Configure scopes:
  - [ ] contacts.write
  - [ ] crm.objects.custom.read
- [ ] Connect to Composio
- [ ] Test API connectivity

### Implementation Phase 2: Google Analytics Integration (2-3 hours)

#### Step 1: Google Analytics Setup
- [ ] Create Google Analytics 4 property (if not exists)
- [ ] Enable Measurement Protocol API
- [ ] Generate API key/credential
- [ ] Create custom events:
  - [ ] `pilot_email_sent`
  - [ ] `pilot_email_opened`
  - [ ] `pilot_email_clicked`
  - [ ] `demo_scheduled`
  - [ ] `pilot_initiated`
- [ ] Connect to Composio

#### Step 2: Campaign Tracking Configuration
- [ ] Set up campaign parameters (UTM):
  - [ ] utm_source = "pilot_recruitment"
  - [ ] utm_medium = "email"
  - [ ] utm_campaign = "wave1"
- [ ] Create conversion funnel:
  - [ ] Email sent → website visit
  - [ ] Website visit → form submission
  - [ ] Form submission → demo scheduled
  - [ ] Demo → pilot initiated

### Implementation Phase 3: Email Campaign Automation (6-8 hours)

#### Step 1: Campaign Template Setup
- [ ] Create email template for research universities:
  - [ ] Subject: "Higher education outcomes at {{institution}}"
  - [ ] Body: Institutional-specific value prop
  - [ ] CTA: "Schedule 30-min demo"
- [ ] Create email template for liberal arts colleges:
  - [ ] Subject: "Simplify alumni impact tracking"
  - [ ] Body: Simplicity + compliance focus
  - [ ] CTA: "See how it works"
- [ ] Create email template for community colleges:
  - [ ] Subject: "Demonstrate institutional success"
  - [ ] Body: Affordability + ease of use
  - [ ] CTA: "Request demo"
- [ ] Create follow-up email (48 hours):
  - [ ] Subject: "Your demo link ({{institution_name}})"
  - [ ] Body: Reminder + alternative contact info
  - [ ] CTA: "Reply to this email"

#### Step 2: Workflow Automation Configuration
Create Composio automation workflow:
```
Trigger: Manual (Wave 1)

Step 1: Read prospect list from Salesforce
  - Filter: Industry = "Higher Education"
  - Filter: Size > 1000 employees
  - Output: 50+ leads with name, institution, email

Step 2: Segment by institution type
  - "Research University" (if Carnegie classification found)
  - "Liberal Arts College" (if enrollment <3000)
  - "Community College" (if public + <2yr)

Step 3: Personalize email content
  - Use institution name in greeting
  - Include segment-specific messaging
  - Add personalized CTA

Step 4: Send emails via Gmail
  - From: sales@edu.cloud
  - Delay 5 seconds between sends (rate limiting)
  - Log send timestamp

Step 5: Record activity in Salesforce
  - Create Activity record
  - Type: "Email"
  - Subject: "Pilot Recruitment Outreach"
  - Relate to Lead/Contact

Step 6: Track in Google Analytics
  - Log "pilot_email_sent" event
  - Include lead ID and segment

Wait 48 hours

Step 7: Send follow-up email
  - Subject: "Your demo link"
  - Include demo scheduling link
  - Track separately in GA
```

#### Step 3: Workflow Testing
- [ ] Prepare test prospect list (5 people)
- [ ] Execute workflow on test batch
- [ ] Verify emails sent correctly
- [ ] Check Salesforce activity creation
- [ ] Validate Google Analytics events
- [ ] Monitor email deliverability
- [ ] Test email links and CTA
- [ ] Verify no duplicates sent
- [ ] Get stakeholder approval before Wave 1

### Implementation Phase 4: Campaign Execution & Monitoring (2-3 hours setup)

#### Step 1: Wave 1 Execution (50 prospects)
- [ ] Prepare prospect list (Salesforce export)
- [ ] Trigger Composio workflow
- [ ] Monitor real-time send status
- [ ] Create monitoring dashboard showing:
  - [ ] Emails sent (real-time count)
  - [ ] Open rate (hourly update)
  - [ ] Click rate (hourly update)
  - [ ] Reply count (manual tracking)
  - [ ] Demo scheduled (CRM tracking)

#### Step 2: Real-Time Monitoring
- [ ] Set up Slack webhook for key metrics:
  - [ ] "10 emails opened"
  - [ ] "First demo scheduled"
  - [ ] "First positive reply"
- [ ] Create daily email report summarizing:
  - [ ] Send count
  - [ ] Open rate
  - [ ] Click rate
  - [ ] Next actions

#### Step 3: Optimization & Iteration
- [ ] Analyze first 24-hour results
- [ ] Identify highest-performing email version
- [ ] Identify highest-performing institution segments
- [ ] Prepare messaging adjustments
- [ ] Plan Wave 2 refinements

### Post-Implementation Testing
- [ ] Test end-to-end workflow (small batch)
- [ ] Verify email deliverability (check spam folder)
- [ ] Confirm Salesforce activity logging
- [ ] Validate Google Analytics event tracking
- [ ] Test mobile email rendering
- [ ] Verify CTA links work
- [ ] Get legal sign-off (CAN-SPAM compliance)
- [ ] Execute Wave 1 campaign

### Success Criteria
- ✅ First pilot recruitment email sent by April 25
- ✅ >30% email open rate achieved
- ✅ >5% click-through rate achieved
- ✅ 100% data integrity (no duplicate sends)
- ✅ All activities logged in Salesforce
- ✅ Campaign metrics tracked in Google Analytics
- ✅ 1+ demo scheduled within 5 days

---

## Platform 3: HyperFX SEO Integration

### Pre-Implementation
- [ ] Identify SEO champion (tech + marketing collaboration)
- [ ] Schedule 30-min HyperFX platform walkthrough
- [ ] Review competitor list (identify 5 main competitors)
- [ ] Define primary keyword list (target 10-15 keywords)
- [ ] Confirm budget allocation ($500-1500/month)

### Implementation (Estimated: 4-6 hours, includes subscription)

#### Step 1: HyperFX Account & Subscription (1-2 hours)
- [ ] Sign up for HyperFX account
- [ ] Choose subscription tier:
  - [ ] Standard: 5 domains, 50 keywords, daily updates
  - [ ] Professional: 10 domains, 200 keywords, real-time updates
  - [ ] Recommended: Professional ($1000-1500/month)
- [ ] Complete payment setup
- [ ] Verify email confirmation

#### Step 2: Domain Configuration
- [ ] Add edu.cloud domain to HyperFX
- [ ] Verify domain ownership (add DNS record)
- [ ] Add 5 competitor domains:
  - [ ] Salesforce Philanthropy Cloud
  - [ ] Ellucian Ethos Intelligence
  - [ ] Blackbaud Raiser's Edge
  - [ ] iModules
  - [ ] Workday HCM
- [ ] Wait for initial crawl (~24 hours)

#### Step 3: Keyword Configuration (1-2 hours)
Create keyword tracking list:

**Tier 1: Primary Keywords (5)**
- [ ] "alumni outcomes measurement"
- [ ] "college impact tracking"
- [ ] "institutional effectiveness platform"
- [ ] "alumni success tracking software"
- [ ] "higher education analytics platform"

**Tier 2: Secondary Keywords (8)**
- [ ] "alumni database software"
- [ ] "student outcomes measurement"
- [ ] "institutional research platform"
- [ ] "alumni engagement software"
- [ ] "educational impact measurement"
- [ ] "college outcomes data"
- [ ] "university effectiveness software"
- [ ] "alumni tracking system"

**Tier 3: Long-Tail Keywords (10+)**
- [ ] "how to measure alumni outcomes"
- [ ] "free alumni tracking software"
- [ ] "college outcome tracking tools"
- [ ] "institutional effectiveness metrics"
- [ ] "higher education data analytics"
- [ ] (And 5+ additional long-tail variations)

- [ ] Set all keywords to track daily
- [ ] Include US geographic focus (initial)
- [ ] Add to rank tracking

#### Step 4: Baseline Measurement (1-2 hours)
- [ ] Wait for first rank report (may take 24-48 hours)
- [ ] Document baseline metrics:
  - [ ] Domain Authority: ___ (current)
  - [ ] Page Authority (homepage): ___ (current)
  - [ ] Backlinks: ___ (current count)
  - [ ] Referring domains: ___ (current count)
  - [ ] Spam score: ___ (current)

- [ ] Document keyword rankings:
  - [ ] Create spreadsheet with baseline rankings
  - [ ] Note keyword difficulty scores
  - [ ] Record search volume estimates
  - [ ] Identify SERP features (featured snippets, etc.)

- [ ] Competitive benchmarking:
  - [ ] Compare DA to 5 main competitors
  - [ ] Note top-ranking keywords for competitors
  - [ ] Identify content gap opportunities

#### Step 5: Technical SEO Audit (1-2 hours)
- [ ] Request full technical SEO audit
- [ ] Review audit report for:
  - [ ] Critical issues (must fix):
    - [ ] SSL certificate validity
    - [ ] Crawlability problems
    - [ ] 404 errors on key pages
  - [ ] Warnings (should fix):
    - [ ] Page load speed (target: <3s)
    - [ ] Core Web Vitals (LCP, FID, CLS)
    - [ ] Mobile responsiveness
  - [ ] Info items (nice to have):
    - [ ] Structured data implementation
    - [ ] Meta tag optimization

- [ ] Create action plan for critical + warning items
- [ ] Assign owner for each fix
- [ ] Schedule completion target (pre-launch)

#### Step 6: Dashboard & Reporting Setup (1 hour)
- [ ] Create Google Data Studio dashboard connected to HyperFX:
  - [ ] Keyword ranking trends (line chart)
  - [ ] Domain Authority trend (line chart)
  - [ ] Competitive comparison table
  - [ ] Top-ranking keywords leaderboard
  - [ ] Traffic opportunity analysis

- [ ] Set up weekly reporting:
  - [ ] Every Monday at 09:00 UTC
  - [ ] PDF report emailed to leadership
  - [ ] Include rank changes, traffic analysis, action items

- [ ] Configure alerts for:
  - [ ] Any keyword drops >5 positions
  - [ ] DA drops >2 points
  - [ ] New technical issues detected

### Post-Implementation Testing
- [ ] Verify first rank report generated successfully
- [ ] Validate baseline metrics recorded
- [ ] Test dashboard connectivity
- [ ] Confirm weekly reports generating
- [ ] Review alert notification delivery
- [ ] Get stakeholder sign-off on baseline

### Success Criteria
- ✅ Domain Authority baseline captured
- ✅ 10-15 keywords tracked for rank changes
- ✅ 5 competitors monitored for benchmarking
- ✅ Technical SEO audit completed
- ✅ Dashboard generating accurate weekly reports
- ✅ Monitoring alerts configured and tested

---

## Cross-Platform Integration Checklist

### Data Consistency & Sync
- [ ] Pica → Analytics: Market sentiment data feeds dashboard
- [ ] Composio → Analytics: Campaign metrics logged to GA
- [ ] Composio → CRM: All email sends logged in Salesforce
- [ ] HyperFX → Analytics: SEO metrics displayed in dashboard
- [ ] All platforms → Central database: Data synced daily

### Monitoring & Health Checks
- [ ] Set up central monitoring dashboard for all 3 platforms
- [ ] Create alert rules for platform downtime
- [ ] Test failover procedures
- [ ] Document troubleshooting steps for each platform
- [ ] Schedule weekly health check review

### Documentation & Training
- [ ] Write setup runbook for each platform
- [ ] Create troubleshooting guide
- [ ] Record video walkthrough for each integration
- [ ] Document API credentials management procedure
- [ ] Train marketing team on campaign tools
- [ ] Train analytics team on dashboard usage

### Compliance & Security
- [ ] Review FERPA compliance for all data flows
- [ ] Verify CAN-SPAM compliance for email campaigns
- [ ] Document data retention policies
- [ ] Audit API permission scopes
- [ ] Implement credential rotation schedule:
  - [ ] Gmail OAuth refresh token check (quarterly)
  - [ ] HyperFX API key rotation (quarterly)
  - [ ] Salesforce OAuth token validation (quarterly)

---

## Implementation Timeline Summary

| Week | Platform | Task | Owner | Status |
|------|----------|------|-------|--------|
| 1 | Pica | API setup | Tech Lead | ⏳ In Progress |
| 1 | Composio | Account setup | Tech Lead | ⏳ Pending |
| 2 | Composio | Gmail OAuth | Tech Lead | ⏳ Pending |
| 2 | Composio | Salesforce OAuth | Tech Lead | ⏳ Pending |
| 2 | Composio | Analytics setup | Data Analyst | ⏳ Pending |
| 3 | Composio | Campaign templates | Marketing Manager | ⏳ Pending |
| 3 | Composio | Workflow testing | Tech Lead | ⏳ Pending |
| 4 | All | Wave 1 campaign execution | Marketing Manager | ⏳ Pending |
| 4 | HyperFX | Subscription & setup | Tech Lead | ⏳ Pending |
| 4 | HyperFX | Keyword configuration | Marketing Manager | ⏳ Pending |
| 5 | HyperFX | Baseline measurement | Data Analyst | ⏳ Pending |
| 5 | All | Cross-platform monitoring | Tech Lead | ⏳ Pending |

**Critical Path: Composio Gmail OAuth → Salesforce integration → Workflow testing → Wave 1 execution (17 days minimum)**

---

## Troubleshooting Quick Reference

### Pica API Issues
- **Timeout errors:** Check rate limiting; wait 2 seconds between requests
- **Invalid JSON:** Verify story IDs exist before fetching
- **No data returned:** Confirm API endpoint URL is correct

### Composio Integration Issues
- **OAuth token expired:** Refresh token automatically via Composio
- **Email not sending:** Check Gmail app password; verify "Less secure apps" enabled
- **Salesforce sync failed:** Verify API user has sufficient permissions

### HyperFX Setup Issues
- **Domain not verified:** Complete DNS verification record setup
- **No rank data:** Wait 24-48 hours for initial crawl
- **Keyword not tracking:** Verify keyword spelling and add again

---

## Sign-Off & Approval

**Technical Implementation:**
- [ ] Tech Lead: _________________ Date: _______
- [ ] QA Lead: _________________ Date: _______

**Marketing & Business:**
- [ ] Marketing Manager: _____________ Date: _______
- [ ] Business Owner: _____________ Date: _______

**Compliance & Security:**
- [ ] Data Officer: _____________ Date: _______
- [ ] Legal Review: _____________ Date: _______

---

**Document Version:** 1.0  
**Last Updated:** April 7, 2026  
**Next Review:** April 14, 2026 (after Pica implementation)