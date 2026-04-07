# Google Ads Campaign Execution Guide
## edu.cloud Higher Education Impact Measurement

**Campaign ID:** 23730969080  
**Ad Group ID:** 197642460880  
**Budget ID:** 15482527565  
**Launch Date:** 2026-04-07  
**Status:** Ready for Activation

---

## Pre-Launch Activation Checklist

### Step 1: Conversion Tracking Setup (CRITICAL)

Target CPA bidding requires accurate conversion tracking. Complete this FIRST before activating campaign.

#### 1.1 Google Ads Conversion Tracking

**Option A: Google Tag Manager (Recommended for Next.js)**

1. Access Google Tag Manager (GTM): https://tagmanager.google.com/
2. Create new container for edu.cloud domain
3. Create trigger: "Form Submission" (CSS selector: form submit button)
4. Create tag: Google Ads Conversion Tracking
   - Conversion ID: (from Google Ads account)
   - Conversion Label: lead_form_submit
5. Test in GTM Preview mode
6. Publish container
7. Embed GTM container ID in Next.js layout.tsx: `<script>(gtag code)</script>`

**Option B: Direct Google Ads Pixel (If GTM unavailable)**

1. Go to Google Ads account > Tools > Conversions
2. Create conversion action:
   - Name: "Lead Form Submission"
   - Category: "Leads"
   - Value: $10
   - Conversion window: 30 days
   - Count: "One per user per day"
3. Get conversion tracking code (gtag or event snippet)
4. Add to landing page HTML: `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-..."></script>`

#### 1.2 Landing Page Event Tracking (Next.js Implementation)

**Add to `src/app/page.tsx` or `src/app/layout.tsx`:**

```typescript
// Track form submissions
useEffect(() => {
  const trackFormSubmission = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 10.0,
        'currency': 'USD',
        'transaction_id': Date.now().toString()
      });
    }
  };

  // Attach to form submit button
  const submitButton = document.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.addEventListener('click', trackFormSubmission);
  }

  return () => {
    if (submitButton) {
      submitButton.removeEventListener('click', trackFormSubmission);
    }
  };
}, []);
```

#### 1.3 HubSpot CRM Integration (For Lead Scoring)

1. Install HubSpot tracking code on landing page
2. Map form submissions to HubSpot contact records
3. Create HubSpot custom property: "Google Ads Source" (TRUE/FALSE)
4. Configure HubSpot to pass lead quality signals back to Google Ads
5. Import HubSpot audience into Google Ads (for remarketing)

**Implementation:** Contact HubSpot support or use native integration in HubSpot app marketplace.

#### 1.4 Verification Checklist

- [ ] Google Tag Manager container deployed and tested
- [ ] Conversion tracking pixel firing on form submission (verify in GTM Debug)
- [ ] HubSpot integration active (form submissions appear in HubSpot)
- [ ] Test form submission: Should appear as conversion in Google Ads within 24 hours
- [ ] Quality Score improvement (should reach 7+ within 48 hours of conversion data)

---

### Step 2: Geographic Targeting Configuration

#### 2.1 Location Targeting Setup

1. **Beachhead Primary Markets (Phase 1):** Northeast, Mid-Atlantic, Midwest
   - Northeast: MA, CT, NY, PA, NJ, VT, NH, RI, ME
   - Mid-Atlantic: MD, VA, DE, DC, WV, NC, SC
   - Midwest: OH, IN, IL, MI, WI, MN, IA, MO

2. **Secondary Markets (Phase 2 - After 2 weeks):**
   - West Coast: CA, WA, OR
   - South Central: TX, LA, AR
   - Mountain: CO, UT, AZ

3. **Implementation in Google Ads:**
   - Campaign Settings > Locations
   - Select "Target" (not "Exclude")
   - Add states from beachhead list
   - Apply location exclusions (if needed)

#### 2.2 Location Bid Adjustments

| Region | Bid Adjustment | Rationale |
|--------|---|-----------|
| MA, CT, NY (Ivy League) | +20% | Highest LTV, largest ad spend |
| OH, IL, MI (Big Ten) | +15% | Research universities |
| NC, VA (ACC academic) | +10% | Growing higher ed market |
| Secondary markets | +0% | Test performance |

---

### Step 3: Negative Keywords & Exclusions

#### 3.1 Add Negative Keywords

**In Google Ads Campaign:**
1. Campaign Settings > Keywords > Negative keywords
2. Add each keyword below at campaign level

**Negative Keywords List:**

```
free alumni tracking
template outcomes
student outcomes
learning outcomes
employment outcomes
k-12 outcomes
high school outcomes
middle school
secondary school
online degree
for-profit university
salary outcomes
distance learning
virtual outcomes
survey alumni
```

**Rationale:** Exclude non-buyer personas and low-intent searches.

#### 3.2 Add Negative Keywords at Ad Group Level

**In Ad Group Settings:**
1. Ad Group Settings > Keywords > Negative keywords
2. Add specific negative keywords targeting competitor keywords (if needed):

```
free outcomes software
outcomes software demo
outcomes platform comparison
```

---

### Step 4: Bid Strategy & Budget Configuration

#### 4.1 Set Target CPA Bid Strategy

1. **Campaign Settings > Bidding**
2. Select "Target cost per acquisition (tCPA)"
3. Set target CPA: **$200 USD**
4. Daily budget: **$50 USD** (already set)
5. Save and wait 14 days for conversion data before optimizing

#### 4.2 Keyword-Level Bid Adjustments (After 2 weeks of data)

**High-Intent Keywords (Increase by 20%):**
- "alumni outcomes platform"
- "impact measurement higher education"
- "institutional effectiveness reporting"

**Broad Keywords (Decrease by 10%):**
- "alumni tracking software"
- "fundraising intelligence platform"

**Implementation:** Ad Group > Keywords > Adjust CPC bids

---

### Step 5: Ad Quality & Landing Page Optimization

#### 5.1 Quality Score Pre-Check

1. **Campaign > Ad Groups > Keywords**
2. Look for green, yellow, red quality score indicators
3. **Target:** All keywords should have quality score 7+
4. **If <6:** Likely due to:
   - Low CTR (improve ad copy relevance)
   - Poor landing page experience (check mobile optimization)
   - Low historical account performance (new account; give 48-72 hours)

#### 5.2 Landing Page Optimization Checklist

Before campaign activation, verify landing page meets Google quality standards:

- [ ] **Mobile-Responsive Design:** Test on iOS + Android devices
- [ ] **Page Load Speed:** <3 seconds on mobile (test at PageSpeed Insights)
- [ ] **HTTPS Enabled:** Secure connection (should be default for Vercel)
- [ ] **Clear Value Prop:** Headline matches ad copy (80%+ alignment)
- [ ] **Call-to-Action (CTA):** Visible above the fold
  - Primary CTA: "Schedule Free Demo" or "Get Started"
  - Secondary CTA: "Download Case Study" or "Watch Video"
- [ ] **Form Fields:** Max 3-5 fields (Name, Email, Institution, Role, Timeframe)
- [ ] **Trust Signals:** 
  - Logo of higher ed partner (if available)
  - Customer testimonials or success metrics
  - Security badges (SSL, GDPR compliant)
- [ ] **No Distracting Elements:** Avoid excessive popups, videos auto-playing

#### 5.3 A/B Testing Landing Page Variants

**Variant A (Control):** Current landing page
**Variant B (Test):** Focus on accreditation compliance angle
**Variant C (Test):** Focus on cost savings angle

Set up redirects: Send 50% of traffic to each variant. Measure conversion rates after 1 week.

---

### Step 6: Campaign Activation

#### Final Pre-Launch Checklist

- [ ] Conversion tracking verified (test submission created conversion event)
- [ ] Geographic targeting set to beachhead regions
- [ ] Negative keywords deployed
- [ ] Bid strategy: Target CPA = $200
- [ ] Quality Score: 7+ on all keywords
- [ ] Landing page tested on mobile & desktop
- [ ] Budget: $50/day confirmed
- [ ] Campaign status: **Change from PAUSED to ENABLED**

#### Activation Steps

1. Go to Google Ads Account > Campaigns > Alumni Outcomes Impact Measurement
2. Click campaign name
3. Campaign Settings > Status
4. Change from "Paused" to "Enabled"
5. Confirm activation
6. Monitor impressions in real-time for 4 hours (verify traffic flowing)

**Go-Live Confirmation:**
- Watch campaign dashboard
- Expect 5-10 impressions within 2 hours
- Expect 1-3 clicks within 4 hours
- If no activity after 4 hours, review bid strategy or contact Google support

---

## Daily Monitoring Framework (Week 1-2)

### Daily Checklist (5 minutes)

| Time | Check | Action |
|------|-------|--------|
| **9 AM** | Impressions | If 0, check keyword bids |
| **12 PM** | Click-through rate | If <5%, review ad copy relevance |
| **3 PM** | Cost per click | If >$50, lower bids by 15% |
| **5 PM** | Conversions | If 0 after 24 hours, check tracking code |

### Daily Metrics to Track

```
Date: ___________
Impressions: _____ (Target: 25-35/day)
Clicks: _____ (Target: 2-5/day)
CTR (%): _____ (Target: 10%+)
Cost: $_____ (Target: <$50/day)
CPC: $_____ (Target: $15-30)
Conversions: _____ (Target: 0-1/day after 48 hrs)
Quality Score Avg: _____ (Target: 7+)

Notes:
- Top performing keyword: ________________
- Top performing ad headline: ________________
- Issues/alerts: ________________
```

### Weekly Optimization (Every Tuesday)

**Frequency:** Comprehensive review (30 minutes)

#### 5.1 Review Search Terms Report

1. Campaign > Keywords > Search Terms
2. Identify searches that triggered ads but shouldn't have
3. **Action:** Add to negative keywords
4. Identify high-volume searches not in keyword list
5. **Action:** Add new keywords if intent aligned

#### 5.2 Review Keyword Performance

1. Sort by CTR (descending and ascending)
2. **Top performers:** Increase bids by 10-15%
3. **Bottom performers:** Decrease bids by 20% or pause
4. Review Quality Score (if <6, check ad copy alignment)

#### 5.3 Review Ad Copy Performance

1. Campaign > Ad Groups > Ads
2. Identify top-performing headline combinations
3. **Hypothesis:** Accreditation headlines underperform; cost-savings headlines outperform
4. **Action:** Pause underperforming headlines; test 2 new variants

#### 5.4 Review Geographic Performance

1. Campaign Settings > Locations > Breakdown by location
2. Identify highest-performing states (highest CTR, lowest CPC)
3. **Action:** Increase bid adjustments for top states
4. **Action:** Consider pausing lowest-performing states (if low volume)

---

## Weekly Performance Report Template

**Report Period:** __________ to __________  
**Campaign:** Alumni Outcomes Impact Measurement  
**Prepared by:** __________________  
**Date:** __________________

### Summary Metrics (7-Day Snapshot)

| Metric | This Week | Last Week | Variance | Target | Status |
|--------|-----------|-----------|----------|--------|--------|
| Impressions | _____ | _____ | +/- ___% | 150-200 | 🟢/🟡/🔴 |
| Clicks | _____ | _____ | +/- ___% | 10-20 | 🟢/🟡/🔴 |
| Click-Through Rate (CTR) | ____% | ____% | +/- __pp | 8%+ | 🟢/🟡/🔴 |
| Cost Per Click (CPC) | $_____ | $_____ | +/- $___ | $20 avg | 🟢/🟡/🔴 |
| Conversions | _____ | _____ | +/- ___% | 1-3 | 🟢/🟡/🔴 |
| Cost Per Conversion (CPA) | $_____ | $_____ | +/- $___ | $200 | 🟢/🟡/🔴 |
| Cost | $_____ | $_____ | +/- $___ | $350 | 🟢/🟡/🔴 |
| Avg Quality Score | ____/10 | ____/10 | +/- ___ | 7+ | 🟢/🟡/🔴 |

### Top Keywords (by CTR)

1. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____
2. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____
3. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____

### Bottom Keywords (by CTR - Candidates for Optimization)

1. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____
2. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____
3. __________________ | CTR: ____% | CPC: $_____ | Impressions: _____

### Top Ad Copy (Headline/Description Combinations)

1. Headline: "________________" | Description: "________________" | CTR: ____%
2. Headline: "________________" | Description: "________________" | CTR: ____%
3. Headline: "________________" | Description: "________________" | CTR: ____%

### Actions Taken This Week

- [ ] Adjusted bids on _____ keywords
- [ ] Added _____ negative keywords
- [ ] Paused _____ underperforming keywords
- [ ] Created _____ new ad copy variants
- [ ] Geographic targeting adjustments: _________________
- [ ] Landing page optimization: _________________

### Blockers & Issues

Issue: ________________________________  
Root cause: _____________________________  
Action taken: ____________________________  
Resolution date: __________________________

Issue: ________________________________  
Root cause: _____________________________  
Action taken: ____________________________  
Resolution date: __________________________

### Next Week Priorities

1. _________________________________________
2. _________________________________________
3. _________________________________________

---

## Conversion Tracking Troubleshooting

### Issue: 0 Conversions After 48 Hours

**Diagnostics:**

1. **Check GTM Tag Firing:**
   - Go to Google Tag Manager > Preview mode
   - Submit form on landing page
   - Verify "Form Submission" trigger fires
   - Verify Google Ads conversion tag fires
   - If not firing: Check CSS selector of form submit button

2. **Check Google Ads Conversion Code:**
   - Google Ads > Tools > Conversions
   - Look for conversion action "Lead Form Submission"
   - Check if conversion status is "Recording conversions"
   - If not: Ensure conversion tracking code is deployed

3. **Check Landing Page Pixel:**
   - Use Chrome DevTools (F12) > Network tab
   - Submit form
   - Look for request to `www.googleadservices.com` or `googletagmanager.com`
   - If not present: Pixel not deployed correctly

**Solutions:**

- [ ] Re-deploy GTM container code (ensure container ID correct)
- [ ] Verify form submit button CSS selector
- [ ] Test form submission in incognito window (clear cache)
- [ ] Wait 24 hours for conversion data to populate
- [ ] Contact Google support if issue persists

---

## Escalation Matrix

| Issue | Severity | Action | Owner | Timeline |
|-------|----------|--------|-------|----------|
| Zero impressions after 4 hours | Critical | Check bid strategy; contact support | Marketing | 2 hours |
| CTR <5% for 3 days | High | Review ad copy; test variants | Marketing | 24 hours |
| CPC >$50 | High | Lower bids; review quality score | Marketing | 24 hours |
| Conversion rate <0.5% for 2 weeks | High | A/B test landing page | Product + Marketing | 7 days |
| Quality Score <6 on majority of keywords | Medium | Improve ad copy relevance | Marketing | 48 hours |
| Geographic underperformance | Low | Adjust bid modifiers; pause region | Marketing | Weekly |

---

## Success Criteria & Go/No-Go Decision Points

### Week 1 Success Criteria (Day 1-7)

**Go Criteria (Campaign performing):**
- Impressions: 50+
- Clicks: 5+
- CTR: 5%+
- CPC: <$40

**No-Go Criteria (Campaign underperforming):**
- Impressions: 0-10 (bidding issue)
- Clicks: 0-1 (ad relevance issue)
- CTR: <2% (copy/targeting issue)
- CPC: >$60 (competition too high)

**Decision:** If No-Go criteria met, pause campaign and troubleshoot before resuming.

### Week 2-4 Success Criteria (Day 8-28)

**Go Criteria (Conversion machine):**
- CTR: 8%+
- Conversion rate: 1%+
- CPA: $150-300
- Quality Score: 7+ on 80%+ of keywords

**No-Go Criteria (Major optimization needed):**
- CTR: <5% (messaging issue)
- Conversion rate: <0.5% (landing page issue)
- CPA: >$400 (inefficient spend)
- Quality Score: <6 on majority (relevance issue)

**Decision:** If No-Go criteria met, halt spend, optimize landing page + messaging, then resume after 1-week pause.

### Week 5-8 Success Criteria (Day 29-60)

**Pilot Success:**
- Total conversions: 5+
- Average CPA: $200-300
- CTR: 10%+
- Quality Score: 7+ on all keywords

**Recommendation:** If pilot success achieved, increase daily budget to $75-100 and expand to secondary geographic markets.

---

## Post-Pilot Analysis Framework

### Day 60 Comprehensive Review

**Deliverable:** Executive Summary Report

**Sections:**
1. Campaign Performance Summary (impressions, clicks, conversions, cost)
2. Conversion Analysis (lead quality assessment from sales team)
3. Channel Attribution (what % of pilot recruits came from Google Ads?)
4. ROI Calculation (total cost vs. pilot value)
5. Recommendations (scale, pause, optimize, or hybrid approach)
6. Budget Forecast (project next 6 months spend based on performance)

**Key Question:** Is Google Ads the most cost-efficient channel compared to cold outreach, content marketing, and other channels?

---

## Campaign Resource Links

**Account:** https://ads.google.com/aw/campaigns  
**Campaign ID:** 23730969080  
**Google Tag Manager:** https://tagmanager.google.com/  
**Google Analytics 4:** https://analytics.google.com/  
**HubSpot CRM:** https://app.hubspotusercontent.com/  

---

**Document Version:** 1.0  
**Last Updated:** 2026-04-07  
**Campaign Manager:** Marketing Team  
**Escalation Contact:** [Insert contact]