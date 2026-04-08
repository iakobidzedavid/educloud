# Google Ads Daily Performance Monitoring Framework
## edu.cloud Higher Education Campaign
**Campaign Name:** Alumni Impact Measurement  
**Budget:** $10/day  
**Monitoring Period:** Wave 1 (April 8 - May 8, 2026)

---

## Overview

This document establishes the standard operating procedures (SOPs) for daily, weekly, and monthly monitoring of the edu.cloud Google Ads search campaign. The monitoring framework ensures:

1. **Early Problem Detection** — Identify budget, bid, or performance issues within 24-48 hours
2. **Real-time Optimization** — Adjust bids and pause underperforming keywords weekly
3. **Data-Driven Decisions** — Document daily metrics for cumulative analysis and trend identification
4. **Baseline Establishment** — Create Wave 1 baseline for comparison with future campaign iterations

---

## Part 1: Daily Monitoring (5-10 minutes/day)

### Daily Monitoring Checklist
**Best Practice:** Review at 9:00 AM ET daily  
**Access:** Google Ads Dashboard > Campaigns > Alumni Impact Measurement

#### Step 1: Budget & Spend Health
| Metric | Check | Target | Status | Notes |
|--------|-------|--------|--------|-------|
| Budget Status | Clicks: _____ | 2-10 | ⬜ | Confirm budget not exceeded; expect ~$10 spend |
| Daily Spend | $_____ | ~$10 | ⬜ | Alert if >$12 (overspend) or <$8 (underspend) |
| Remaining Budget | _____ | Daily budget | ⬜ | Should reset to $10 at midnight |

**Action Triggers:**
- ❌ If daily spend >$12: Reduce bids by 10-15% OR lower average bid amount
- ❌ If daily spend <$8: Increase bids by 10-15% OR verify campaign is active

#### Step 2: Traffic & Engagement Metrics
| Metric | Value | Target Range | Status | Daily Note |
|--------|-------|--------------|--------|------------|
| Impressions (today) | _____ | 50-150 | ⬜ | Validate keyword visibility |
| Clicks (today) | _____ | 2-10 | ⬜ | Monitor click volume trends |
| CTR (today) | ___% | 2.0-4.0% | ⬜ | High quality indicator |
| Avg CPC (today) | $_____ | $0.50-$2.00 | ⬜ | Track bid efficiency |

**Interpretation:**
- **Impressions <30:** Keywords may have low search volume or low bid positioning. Increase bids by 20%.
- **Impressions >200:** Bids may be too high or budget underconstrained. Monitor CPA; reduce bids if CPA >$50.
- **CTR >5%:** Excellent ad/keyword match; consider increasing bids to capture more volume.
- **CTR <1.5%:** Poor ad/keyword relevance. Review search terms; add negative keywords.

#### Step 3: Conversion Tracking Validation
| Metric | Check | Notes |
|--------|-------|-------|
| Conversion Pixel | ✅ Active | Verify conversion tracking script is installed on website |
| Form Submissions (Google Analytics) | _____ | Cross-check with Google Ads conversions (should match within 2-3 hours) |
| Conversions Reported (Google Ads) | _____ | Should appear in Conversions column within 24 hours |
| Any Conversion Delays? | ⬜ Yes ⬜ No | If delayed, troubleshoot pixel or form integration |

**Action Triggers:**
- ❌ If conversions in GA but not in Google Ads: Conversion tracking pixel may not be firing correctly. Check Google Tag Manager configuration.
- ❌ If no conversions despite 50+ clicks: Either poor message-market fit OR form conversion rate very low. Review website form drop-off.

#### Step 4: Quality Score & Policy Review
| Item | Check | Status |
|------|-------|--------|
| Quality Score (Overall) | _____ (Target: 7+) | ⬜ |
| Ad Status | Active / [Paused] | ⬜ |
| Policy Violations | None / [List] | ⬜ |
| Landing Page Score | _____ (Target: Good/Excellent) | ⬜ |

**Notes:**
- Quality Score <6: Keyword/ad match may be poor. Check search term report and pause misaligned keywords.
- Policy Violations: Most common = landing page relevance. Ensure edu.cloud homepage clearly addresses search intent.

---

### Daily Monitoring Log Template

Use this template to document daily observations:

```
DATE: April [__], 2026

DAILY SUMMARY:
Impressions: _____  |  Clicks: _____  |  CTR: _____%  |  Spend: $_____  |  Conversions: _____

METRIC HEALTH:
✅ Budget on track: $_____ spent (target: ~$10/day)
✅ Traffic normal: _____ clicks (target: 2-10/day)
✅ Quality Score stable: _____ avg (target: 7+)
✅ Conversion tracking active: ✅ Yes / ❌ No

KEYWORD PERFORMANCE (Top 3 by impressions):
1. [Keyword Name] — Impr: ____, Clicks: ____, CTR: __%, Conv: ____
2. [Keyword Name] — Impr: ____, Clicks: ____, CTR: __%, Conv: ____
3. [Keyword Name] — Impr: ____, Clicks: ____, CTR: __%, Conv: ____

OBSERVATIONS:
- [Note any unusual patterns, user behavior observations, etc.]

ACTION ITEMS FOR TOMORROW:
- [ ] ___________________________________________
- [ ] ___________________________________________

ISSUES TO ESCALATE:
- None / [List any technical issues, policy violations, etc.]
```

---

## Part 2: Weekly Monitoring (20-30 minutes/week)

### Weekly Monitoring Schedule
**Frequency:** Every Monday morning (consolidating Friday-Sunday performance)  
**Report Due:** Monday 10:00 AM ET  
**Scope:** Full week of cumulative data

### Weekly Performance Review Template

#### Week 1: April 8-14, 2026

| Metric | Week 1 | Week 1 Target | Status | Trend |
|--------|--------|---------------|--------|-------|
| Total Impressions | _____ | 350-1050 | ⬜ | ↑ / → / ↓ |
| Total Clicks | _____ | 14-70 | ⬜ | ↑ / → / ↓ |
| Weekly CTR | ____% | 2-4% | ⬜ | ↑ / → / ↓ |
| Total Spend | $_____ | ~$70 | ⬜ | On-target / Over / Under |
| Avg CPC (Weekly) | $_____ | $0.50-$2.00 | ⬜ | ↑ / → / ↓ |
| **Total Conversions** | **_____** | **1-3** | **⬜** | **↑ / → / ↓** |
| **Cost per Conversion** | **$_____** | **<$50** | **⬜** | **↑ / → / ↓** |
| Quality Score (Avg) | _____ | 7+ | ⬜ | Stable / Improving / Declining |

### Weekly Keyword Performance Analysis

**Top 5 Keywords (by Click Volume):**
| Rank | Keyword | Impr | Clicks | CTR | Avg CPC | Conv | Cost/Conv |
|------|---------|------|--------|-----|---------|------|-----------|
| 1 | _____________ | ____ | ____ | __% | $____ | ____ | $_______ |
| 2 | _____________ | ____ | ____ | __% | $____ | ____ | $_______ |
| 3 | _____________ | ____ | ____ | __% | $____ | ____ | $_______ |
| 4 | _____________ | ____ | ____ | __% | $____ | ____ | $_______ |
| 5 | _____________ | ____ | ____ | __% | $____ | ____ | $_______ |

**Bottom 5 Keywords (by Click Volume or 0 impressions):**
| Rank | Keyword | Impr | Clicks | CTR | Status | Action |
|------|---------|------|--------|-----|--------|--------|
| 1 | _____________ | ____ | ____ | __% | [Pause] | Reduce bid / Pause if 0 impr. |
| 2 | _____________ | ____ | ____ | __% | [Pause] | Reduce bid / Pause if 0 impr. |
| 3 | _____________ | ____ | ____ | __% | [Pause] | Reduce bid / Pause if 0 impr. |
| 4 | _____________ | ____ | ____ | __% | [Pause] | Reduce bid / Pause if 0 impr. |
| 5 | _____________ | ____ | ____ | __% | [Pause] | Reduce bid / Pause if 0 impr. |

### Weekly Optimization Actions

**Bid Adjustments (for Week 2+):**
- 📈 **Increase Bid +20%:** Top 3 converting keywords (verified conversions)
- 📉 **Decrease Bid -20%:** Bottom 5 keywords OR low CTR keywords (<1.5%)
- ⏸️ **Pause:** Keywords with 0 impressions after 48+ hours (insufficient search volume)

**Negative Keyword Review:**
- Review "Search Terms Report" (Campaigns > Keywords > Search Terms)
- Identify irrelevant searches triggering ads
- Example: "alumni outcomes tracking" may trigger "alumni outcomes tracking software REVIEW" (non-purchasing intent)
- Add negative keywords: [+negative keywords from off-target searches]

**Ad Copy Feedback:**
- Note headline/description combinations with highest CTR
- Identify top 3 performing headlines; plan rotation testing
- Review ad disapproval issues

### Weekly Conversion Analysis

**Form Submission Review:**
- Total conversions reported by Google Ads: _____
- Verify in Google Forms/CRM: _____
- Discrepancies: _____ (should be minimal, <10%)
- Average form completion time: _____ (indicator of friction)
- Form drop-off rate: ____% (identify field issues)

**Prospect Quality Assessment:**
- Conversion institution types identified: Research Universities / Liberal Arts / Community Colleges / Other
- Decision-maker titles: Provost / VP Advancement / Institutional Research Dir. / Alumni Relations / Other
- Interest strength indicators (form content analysis): High / Medium / Low

---

## Part 3: Monthly Reporting (1-2 hours/month)

### Monthly Performance Report
**Frequency:** Last day of calendar month (e.g., April 30, May 31)  
**Report Format:** Markdown document saved to /documents/  
**Filename:** `google_ads_performance_report_APRIL_2026.md`

#### Monthly Report Structure

```
# Google Ads Performance Report - APRIL 2026
## Alumni Impact Measurement Campaign

### EXECUTIVE SUMMARY
[1-2 paragraph summary of performance, key findings, recommendations]

### CAMPAIGN METRICS SUMMARY
[Table with monthly totals vs. targets vs. previous month]

### KEYWORD PERFORMANCE ANALYSIS
[Top 10 keywords table with all metrics + ROI analysis]

### CONVERSION ANALYSIS
[Breakdown of conversions by source, institution type, quality assessment]

### OPTIMIZATION ACTIONS IMPLEMENTED
[List of bid adjustments, keyword pauses, testing changes made during month]

### INSIGHTS & LEARNINGS
[Key takeaways about what's working, what isn't, why]

### BUDGET ANALYSIS
[Monthly spend vs. budget, projection for next month, recommendations]

### NEXT MONTH RECOMMENDATIONS
[3-5 specific, actionable optimization priorities]

### APPENDIX: DAILY PERFORMANCE LOG
[Calendar view of daily metrics for trend analysis]
```

---

## Part 4: Monthly Performance Benchmarks & Targets

### Month 1 (April 2026) — Baseline Establishment
**Objective:** Establish baseline performance, validate messaging, confirm conversion tracking

| Metric | Target | Success Range |
|--------|--------|----------------|
| Total Impressions | 350-1050 | 200+ (shows keyword visibility) |
| Total Clicks | 14-70 | 10+ (validates ad relevance) |
| Overall CTR | 2-4% | >1.5% (acceptable quality) |
| Total Spend | ~$300 | Within 10% of budget ($270-330) |
| Cost per Click | $0.50-$2.00 | <$3.00 (efficiency check) |
| Total Conversions | 3-10 | 1+ (validates form + tracking) |
| Cost per Conversion | <$100 | <$150 (early sustainability check) |
| Quality Score (Avg) | 7+ | 6+ (basic quality threshold) |

**Success Criteria:** Campaign considered "successful" if:
- ✅ Conversion tracking operational (≥1 conversion attributed)
- ✅ CTR >1.5% (ads relevant to search intent)
- ✅ Cost per conversion <$100 (scalable economics)

### Month 2 (May 2026) — Optimization Phase
**Objective:** Refine targeting, improve conversion economics, increase volume profitably

| Metric | Target | vs. Month 1 |
|--------|--------|------------|
| Total Impressions | 600+ | +50-100% |
| Total Clicks | 30+ | +100-150% |
| Overall CTR | 2.5-4.5% | Stable or improving |
| Cost per Conversion | <$75 | -25% reduction |
| Conversions | 10-20 | +100% |
| Quality Score (Avg) | 7-8 | Improving |

**Focus Areas:**
1. **Bid optimization** on high-converting keywords
2. **State-level geographic targeting** (increase bids in high-intent states)
3. **Ad group segmentation** by institution type
4. **Negative keyword expansion** based on search term analysis

### Month 3+ (June 2026+) — Scale Phase
**Objective:** Scale profitable campaigns, expand to new channels, prepare for second wave

**KPIs to achieve:**
- Cost per conversion: <$50 (profitable acquisition)
- Monthly conversions: 50+ (adequate pilot pool)
- Conversion quality score: 4/5 (strong institution match)
- ROAS positive: Revenue from converted pilots > Ad spend

---

## Part 5: Troubleshooting Guide

### Common Issues & Solutions

#### Issue 1: No Conversions Despite Clicks
**Symptoms:** Consistent clicks (e.g., 30/week) but zero conversions

**Root Causes:**
1. **Conversion tracking not implemented** — conversion pixel not firing
2. **Low form conversion rate** — website form has high drop-off
3. **Poor message-market fit** — clicks are unqualified traffic
4. **Form friction** — required fields, technical issues, poor UX

**Solutions:**
1. Verify conversion pixel in Google Tag Manager (should fire on form submission)
2. Test form submission manually; check Google Analytics for "thank you" page views
3. Review Google Analytics landing page behavior (time on page, scroll depth)
4. Compare form completion rate: (Form submissions / Landing page visitors) × 100
5. Simplify form: test with name + email only (remove institution field)

#### Issue 2: High CTR But Low Quality Score
**Symptoms:** CTR 5%+ but Quality Score <6

**Root Causes:**
1. **Poor landing page relevance** — homepage doesn't match search intent
2. **Slow page load** — landing page performance issue
3. **Mobile experience** — poor responsive design

**Solutions:**
1. Route higher-intent keywords to specific landing page (e.g., "outcomes measurement" → /pricing or /solutions page)
2. Test different landing pages; analyze page speed in Google PageSpeed Insights
3. Ensure mobile-responsive design (test on smartphone)

#### Issue 3: Impressions Declining Week-over-Week
**Symptoms:** Week 1: 400 impr., Week 2: 350 impr., Week 3: 280 impr.

**Root Causes:**
1. **Budget too low** — daily budget cap limiting impressions
2. **Bids too low** — low position on search results
3. **Quality score declining** — lower ad position due to quality issues
4. **Keyword saturation** — limited search volume for niche keywords

**Solutions:**
1. Check if daily budget exhausting before end of day (Campaign > Status)
2. Increase max CPC bids by 20% to improve position
3. Review Quality Score trends; identify and pause low-score keywords
4. Expand keyword list with 10-15 new long-tail keywords

#### Issue 4: Cost per Conversion Increasing
**Symptoms:** Week 1 CPA: $30, Week 2 CPA: $45, Week 3 CPA: $60+

**Root Causes:**
1. **Click quality degrading** — low-intent clicks due to bid increases
2. **Bid competition increasing** — competitors increasing bids
3. **Form conversion rate declining** — form experiencing technical issues
4. **Seasonality** — fewer qualified prospects converting in this week

**Solutions:**
1. Review search term report; add negative keywords for off-topic searches
2. Implement bid adjustments by time of day (reduce bids during low-conversion hours)
3. Test form changes; ensure "thank you" page is loading correctly
4. Compare to historical conversion rates; assess if decline is temporary

---

## Part 6: Performance Reporting Dashboard

### Daily Snapshot (Minimum Daily Tracking)
Print or screenshot daily and save to folder: `/monitoring/daily_snapshots/APRIL_2026/`

**Minimum data to capture:**
- Date, Impressions, Clicks, CTR, Spend, CPA, Quality Score

### Weekly Summary
Template for saving: `/monitoring/weekly_reports/WEEK_1_APRIL_8_14.md`

### Monthly Report
Template for saving: `/documents/google_ads_performance_report_APRIL_2026.md`

---

## Part 7: Campaign Scaling Triggers

### Expand Campaign (Increase Daily Budget)
**Condition:** When BOTH are true:
- Cost per conversion <$50 (profitable unit economics)
- ≥5 conversions achieved in prior week

**Action:** Increase daily budget by $5-10 (to $15-20/day) in increments

**Expected Impact:** 50% volume increase with maintained or improved CPA

### Pause Underperforming Keywords
**Condition:** When ANY is true:
- 0 impressions after 72 hours (search volume too low)
- CTR <1% after 50+ impressions (keyword-ad mismatch)
- Quality Score <4 after bid optimization attempts

**Action:** Pause keyword; monitor for 1 week; consider adding as negative keyword to other ad groups

### Restructure Campaign (Create Institution-Type Ad Groups)
**Condition:** When BOTH are true:
- ≥200 conversions accumulated across all keywords
- Clear pattern of 1-2 institution types generating 60%+ of conversions

**Action:** Create 3 separate ad groups with institution-specific messaging; move keywords to relevant group

---

## Appendix: Google Ads Dashboard Settings

### Recommended Dashboard Columns
When viewing Campaign > Keywords report, include:

Essential:
- Keyword
- Clicks
- CTR
- Avg. CPC
- Cost
- Conv.
- Conv. Rate
- Cost/Conv.

Optional (advanced):
- Quality Score
- First Page Bid
- Top of Page Bid
- Estimated First Page Position
- Impression Share

### Google Ads Campaign URL
`https://ads.google.com/aw/campaigns/4933895015:23727930201`

---

## Document Control

**Version:** 1.0  
**Created:** April 8, 2026  
**Last Updated:** April 8, 2026  
**Next Review:** April 15, 2026 (after first week of data)  
**Owner:** Google Ads Campaign Manager

---

*This monitoring framework ensures daily oversight of campaign health, weekly optimization, and monthly strategic review of the edu.cloud Google Ads initiative.*
