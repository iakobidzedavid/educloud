# LTV/CAC Financial Model - Detailed Spreadsheet Reference
## Quick-Reference Tables for Financial Planning

**Purpose:** This document provides detailed calculation tables that can be imported into Excel or used as a reference for dynamic financial modeling.

---

## Section 1: Monthly Cohort Analysis Model

### Cohort 1 (Pilot Phase - Months 1-6)

| Month | Customer Name | Institution | ACV | Signature Date | CAC | Y1 Retained | Y2 Retained | Y3 Retained | 4-Year Revenue | Gross Profit |
|---|---|---|---|---|---|---|---|---|---|---|
| M2 | Customer 1 | Research University | 60,000 | Jan 15 | 4,200 | Yes | Yes | Yes | 244,560 | 207,876 |
| M2 | Customer 2 | Liberal Arts | 45,000 | Jan 22 | 4,200 | Yes | Yes | Yes | 183,420 | 155,907 |
| M3 | Customer 3 | Research University | 65,000 | Feb 10 | 4,200 | Yes | Yes | Yes | 264,570 | 224,884 |
| M4 | Customer 4 | Community College | 30,000 | Mar 5 | 4,200 | Yes | Yes | Yes | 121,680 | 103,428 |
| M5 | Customer 5 | Liberal Arts | 50,000 | Apr 8 | 4,200 | Yes | Yes | Yes | 203,250 | 172,763 |
| M6 | Customer 6 | Community College | 35,000 | May 20 | 4,200 | Yes | Yes | Yes | 142,440 | 121,074 |
| **COHORT 1 TOTAL** | | | | | **$25,200** | | | | **$1,159,920** | **985,932** |
| **AVERAGE** | | | **47,500** | | **$4,200** | | | | | |

### Year 1 Pilot Revenue Modeling

| Month | Cohort Customers | Monthly Revenue | Cumulative Revenue | CAC Spend | Cumulative CAC |
|---|---|---|---|---|---|
| M1 | 0 | $0 | $0 | $0 | $0 |
| M2 | 2 | $8,750 | $8,750 | $8,400 | $8,400 |
| M3 | 3 | $13,125 | $21,875 | $4,200 | $12,600 |
| M4 | 4 | $17,500 | $39,375 | $4,200 | $16,800 |
| M5 | 5 | $21,875 | $61,250 | $4,200 | $21,000 |
| M6 | 6 | $26,250 | $87,500 | $4,200 | $25,200 |
| M7 | 8 | $35,000 | $122,500 | $8,400 | $33,600 |
| M8 | 8 | $35,000 | $157,500 | $0 | $33,600 |
| M9 | 8 | $35,000 | $192,500 | $0 | $33,600 |
| M10 | 8 | $35,000 | $227,500 | $0 | $33,600 |
| M11 | 8 | $35,000 | $262,500 | $0 | $33,600 |
| M12 | 10 | $43,750 | **$306,250** | $8,400 | **$42,000** |

**Year 1 Summary:**
- **Total ARR (end of year):** $450,000 (10 customers × $45k average)
- **Total ACV signed:** $450,000
- **Total CAC spend:** $42,000
- **Revenue generated Y1:** $306,250 (ramping)
- **Gross profit Y1:** $260,313 (85% margin on revenue)
- **CAC payback date:** ~50 days (average across cohort)

---

## Section 2: Detailed LTV Calculation by Scenario

### Conservative Scenario Workings

**Customer Profile:** $45,000 ACV, 3-year contract

| Year | Revenue | Retention | Cumulative Retained | Gross Profit (85%) |
|---|---|---|---|---|
| 1 | $45,000 | 100% | $45,000 | $38,250 |
| 2 | $38,250 | 85% | $38,250 | $32,513 |
| 3 | $32,513 | 80% | $32,513 | $27,636 |
| **Total** | | | **$115,763** | **$98,399** |
| **Expansion (5% ARPU)** | | | **$4,950** | **$4,207** |
| **Grand Total (Gross Profit)** | | | | **$102,606** |
| **PV Adjusted (5% discount)** | | | | **$95,000** |

### Base Case Scenario Workings

**Customer Profile:** $45,000 ACV, 4-year contract, 10% ARPU growth

| Year | Base Revenue | ARPU Growth Factor | Annual Revenue | Retention | Retained Revenue | Gross Profit (85%) |
|---|---|---|---|---|---|---|
| 1 | $45,000 | 1.00 | $45,000 | 100% | $45,000 | $38,250 |
| 2 | $45,000 | 1.10 | $49,500 | 90% | $44,550 | $37,868 |
| 3 | $49,500 | 1.10 | $54,450 | 85% | $46,283 | $39,340 |
| 4 | $54,450 | 1.10 | $59,895 | 80% | $47,916 | $40,729 |
| **Total Revenue** | | | | | **$183,749** | |
| **Gross Profit (85%)** | | | | | | **$156,186** |
| **PV Adjusted (5% discount)** | | | | | | **$135,000** |

### Optimistic Scenario Workings

**Customer Profile:** $45,000 ACV, 5-year contract, 15% ARPU growth, strong retention

| Year | Base Revenue | ARPU Growth | Annual Revenue | Retention | Retained Revenue | Gross Profit (85%) |
|---|---|---|---|---|---|---|
| 1 | $45,000 | 1.00 | $45,000 | 100% | $45,000 | $38,250 |
| 2 | $45,000 | 1.15 | $51,750 | 95% | $49,163 | $41,788 |
| 3 | $51,750 | 1.15 | $59,513 | 90% | $53,561 | $45,527 |
| 4 | $59,513 | 1.15 | $68,440 | 85% | $58,174 | $49,448 |
| 5 | $68,440 | 1.15 | $78,706 | 80% | $62,965 | $53,520 |
| **Total Revenue** | | | | | **$268,863** | |
| **Gross Profit (85%)** | | | | | | **228,533** |
| **PV Adjusted (5% discount)** | | | | | | **185,000** |

---

## Section 3: CAC Build-Up Analysis

### Fixed Costs Allocation

| Cost Item | Amount | Allocation Method |
|---|---|---|
| Email marketing platform (Lemlist) | $500 | Spread across first 50 outreach |
| Landing page development | $1,000 | Spread across all acquired customers |
| Sales collateral creation | $1,500 | Spread across pilot cohort |
| CRM & scheduling tools | $300 | Spread across pilot cohort |
| **Total Fixed:** | **$3,300** | |
| **Per Customer (÷10):** | **$330** | |

### Variable Costs per Customer

| Cost Item | Hours | Hourly Rate | Total |
|---|---|---|---|
| Initial prospect research + outreach | 4 | $75 | $300 |
| Email follow-ups + engagement | 3 | $75 | $225 |
| Call preparation + discovery call | 2 | $100 | $200 |
| Demo presentation + Q&A | 2.5 | $120 | $300 |
| Proposal + negotiation | 4 | $100 | $400 |
| Contract execution + setup | 2 | $150 | $300 |
| Travel (30% of customers) | N/A | N/A | $500 |
| **Total Variable:** | | | **$2,225** |

**Total CAC = Fixed per customer ($330) + Variable ($2,225) = $2,555**

*But we budget conservatively at $4,200 to account for untracked time and contingency.*

---

## Section 4: Payback Period Analysis by Customer Profile

### Research University Customer

| Month | ACV | Gross Profit (85%) | Monthly Gross Profit | Cumulative Gross Profit | Payback Status |
|---|---|---|---|---|---|
| 0 | $60,000 | $51,000 | $0 | -$4,200 | Investment period |
| 1 | | | $4,250 | $50 | **PAYBACK ACHIEVED** |

**Payback Period: 0.98 months (30 days)**

### Liberal Arts College

| Month | ACV | Gross Profit (85%) | Monthly Gross Profit | Cumulative Gross Profit | Payback Status |
|---|---|---|---|---|---|
| 0 | $45,000 | $38,250 | $0 | -$4,200 | Investment period |
| 1 | | | $3,188 | -$1,012 | In payback |
| 2 | | | $3,188 | $2,176 | **PAYBACK ACHIEVED** |

**Payback Period: 1.32 months (39 days)**

### Community College

| Month | ACV | Gross Profit (85%) | Monthly Gross Profit | Cumulative Gross Profit | Payback Status |
|---|---|---|---|---|---|
| 0 | $30,000 | $25,500 | $0 | -$4,200 | Investment period |
| 1 | | | $2,125 | -$2,075 | In payback |
| 2 | | | $2,125 | $50 | **PAYBACK ACHIEVED** |

**Payback Period: 1.98 months (59 days)**

---

## Section 5: Annual Operating Costs Breakdown

| Cost Category | Amount | Notes |
|---|---|---|
| **Product Development** | | |
| - Senior Engineer (1 FTE) | $140,000 | Data pipeline development |
| - Junior Engineer (0.5 FTE) | $50,000 | Infrastructure & DevOps |
| **Sales & Marketing** | | |
| - Sales/BDR (1 FTE) | $60,000 | Outreach, pilots, demos |
| - Marketing support | $20,000 | Content, templates, CRM |
| **Operations** | | |
| - CEO/Founder time allocation | $40,000 | Product strategy, fundraising |
| - Customer Success | $30,000 | Onboarding, support (0.5 FTE) |
| **G&A** | | |
| - Legal/compliance | $10,000 | Contract templates, compliance |
| - Finance/accounting | $8,000 | Bookkeeping, tax |
| - Infrastructure/tools | $12,000 | Cloud, SaaS tools, domains |
| **TOTAL OPERATING COSTS** | **$370,000** | |

**Adjusted Profit Calculation (Year 1 with 10 customers):**

| Line Item | Amount |
|---|---|
| Total Revenue (10 × $45k) | $450,000 |
| Less: COGS (15% margin) | -$67,500 |
| **Gross Profit** | **$382,500** |
| Less: Operating Costs | -$370,000 |
| **EBITDA** | **+$12,500** |
| Less: CAC amortization | -$42,000 |
| **Net Operating Income** | **-$29,500** |

*Note: This represents cash profitability in Year 1 (EBITDA positive), with losses only when CAC is fully expensed per accounting standards. By Year 2 with 20 new customers, Operating Profit is highly positive.*

---

## Section 6: Breakeven Analysis - Sensitivity Table

### Breakeven Customers by ACV

| ACV | Gross Profit per Customer | Fixed Costs | Breakeven # | Margin of Safety |
|---|---|---|---|---|
| $30,000 | $25,500 | $230,000 | 9.0 | Tight |
| $35,000 | $29,750 | $230,000 | 7.7 | Reasonable |
| **$40,000** | **$34,000** | **$230,000** | **6.8** | **Good** |
| **$45,000** | **$38,250** | **$230,000** | **6.0** | **Good** |
| $50,000 | $42,500 | $230,000 | 5.4 | Strong |
| $55,000 | $46,750 | $230,000 | 4.9 | Strong |

### Pilot Profitability by Size

| Pilot Size | Total ACV | Gross Profit | Fixed Costs | Net Operating Profit | Status |
|---|---|---|---|---|---|
| 2 | $90,000 | $76,500 | $230,000 | -$153,500 | Loss |
| 3 | $135,000 | $114,750 | $230,000 | -$115,250 | Loss |
| 4 | $180,000 | $153,000 | $230,000 | -$77,000 | Loss |
| 5 | $225,000 | $191,250 | $230,000 | -$38,750 | Loss |
| **6** | **$270,000** | **$229,500** | **$230,000** | **-$500** | **Breakeven** |
| 7 | $315,000 | $267,750 | $230,000 | +$37,750 | **Profit** |
| 8 | $360,000 | $306,000 | $230,000 | +$76,000 | **Profit** |
| 10 | $450,000 | $382,500 | $230,000 | +$152,500 | **Profit** |
| 15 | $675,000 | $573,750 | $230,000 | +$343,750 | **Strong Profit** |

---

## Section 7: Cohort Retention Modeling (Year 1-3 Projections)

### Cohort 1 (10 customers, M1-M6 signature dates)

| Cohort Month | Customers | Year 1 Revenue | Year 2 Projection (90% retention) | Year 3 Projection (85% retention) |
|---|---|---|---|---|
| M2 | 2 | $90,000 | $81,000 | $68,850 |
| M3 | 1 | $45,000 | $40,500 | $34,425 |
| M4 | 1 | $45,000 | $40,500 | $34,425 |
| M5 | 1 | $45,000 | $40,500 | $34,425 |
| M6 | 1 | $45,000 | $40,500 | $34,425 |
| M7-M8 | 4 | $180,000 | $162,000 | $137,700 |
| **TOTAL** | **10** | **$450,000** | **$404,500** | **$343,850** |
| **YoY Growth** | | | -10.1% | -15.0% |

*Note: Negative growth in this table assumes NO new customer additions. In reality, Cohort 2 (M7-M12) adds 5-8 customers, making total Year 2 cohort ~20 customers and driving 100%+ total ARR growth.*

---

## Section 8: LTV:CAC Ratio Sensitivity Matrix

| ACV | CAC | LTV (4-yr) | Ratio | Assessment |
|---|---|---|---|---|
| $35,000 | $3,000 | $107,000 | 35.7:1 | Exceptional |
| $35,000 | $4,200 | $107,000 | 25.5:1 | Exceptional |
| $35,000 | $6,000 | $107,000 | 17.8:1 | Strong |
| | | | | |
| $45,000 | $2,000 | $135,000 | 67.5:1 | Exceptional |
| $45,000 | $4,200 | $135,000 | 32.1:1 | Exceptional |
| $45,000 | $6,000 | $135,000 | 22.5:1 | Strong |
| $45,000 | $8,000 | $135,000 | 16.9:1 | Strong |
| | | | | |
| $60,000 | $4,200 | $180,000 | 42.9:1 | Exceptional |
| $60,000 | $8,000 | $180,000 | 22.5:1 | Strong |

**Interpretation:** edu.cloud maintains strong unit economics across a wide range of ACV and CAC assumptions. Even if ACV drops 25% or CAC increases 100%, the business remains fundamentally healthy.

---

## Section 9: Year 1-3 Financial Projections (Conservative Growth)

### Year 1

| Metric | Value |
|---|---|
| Target New Customers | 10 |
| Average ACV | $45,000 |
| Total ARR (EOY) | $450,000 |
| Blended CAC | $4,200 |
| Total CAC Spend | $42,000 |
| Gross Profit (85%) | $382,500 |
| Operating Costs | $370,000 |
| **EBITDA** | **$12,500** |
| Operating Margin | 2.8% |

### Year 2

| Metric | Value |
|---|---|
| Target New Customers | 20 |
| Average ACV | $48,000 |
| Total ARR (EOY) | $1,440,000 |
| Blended CAC | $3,200 |
| Total CAC Spend | $64,000 |
| Gross Profit (85%) | $1,224,000 |
| Operating Costs | $550,000 |
| **EBITDA** | **$674,000** |
| Operating Margin | 46.8% |

### Year 3

| Metric | Value |
|---|---|
| Target New Customers | 60 |
| Average ACV | $50,000 |
| Total ARR (EOY) | $4,500,000 |
| Blended CAC | $2,500 |
| Total CAC Spend | $150,000 |
| Gross Profit (85%) | $3,825,000 |
| Operating Costs | $900,000 |
| **EBITDA** | **$2,925,000** |
| Operating Margin | 65.0% |

---

## Section 10: Customer Acquisition Funnel Modeling

### Pilot Phase Funnel (50 prospects → 10 customers)

| Stage | Quantity | Conversion Rate | Notes |
|---|---|---|---|
| Target prospects | 50 | 100% | Beachhead segments via Apollo |
| Email outreach | 50 | 100% | Initial touch |
| Opened email | 20 | 40% | Click tracking |
| Clicked CTA | 10 | 20% | Interest signal |
| Initial meeting | 8 | 16% | Phone/Zoom discovery call |
| Qualified opportunity | 6 | 12% | Fit validated, budget available |
| Demo scheduled | 6 | 12% | Interest confirmed |
| Demo completed | 5 | 10% | Progressed to evaluation |
| **Pilot agreement signed** | **5** | **10%** | **Goal for Phase 1 (M1-6)** |
| Pilots added (M7-12) | 5 | 10% | Phase 2, improved messaging |
| **TOTAL YEAR 1 PILOTS** | **10** | **20%** | **Cumulative rate** |

**Key metrics:**
- Email open rate target: 40% (vs. 25% cold outreach average)
- Meeting-to-pilot conversion: 60% (strong for enterprise sales)
- Time to signature: 45-60 days (vs. 90+ for typical enterprise)

---

## Section 11: Metrics Tracking Template

### Monthly Cohort Dashboard (To be updated each month)

```
MONTH: ___________
REPORTING DATE: ___________

NEW CUSTOMER METRICS:
├─ New pilots signed this month: ___
├─ Average ACV: $___________
├─ Total contract value: $___________
├─ CAC spend this month: $___________
├─ CAC per customer: $___________
└─ Signature date to go-live (days): ___

EXISTING CUSTOMER METRICS:
├─ Active customers (cumulative): ___
├─ Feature adoption (% logged in 7+ days): ____%
├─ Support tickets (unresolved): ___
├─ NPS score (rolling 30-day): ___
├─ Churn/at-risk customers: ___
└─ Expansion upsell opportunities identified: ___

FINANCIAL SUMMARY:
├─ Month ARR (active customers × $45k): $___________
├─ Month gross profit (85% margin): $___________
├─ YTD CAC spend: $___________
├─ YTD gross profit: $___________
└─ Profitability status: [On Track / At Risk / Exceeding]

PIPELINE:
├─ Active conversations: ___
├─ Demos scheduled: ___
├─ Proposals pending: ___
└─ Expected signings (next 30 days): ___
```

---

## Appendix: Excel Formula References

### LTV Calculation (Base Case)

```
Year 1 Revenue: =45000
Year 2 Revenue: =Year1*1.1*0.9  // 10% growth, 90% retention
Year 3 Revenue: =Year2*1.1*0.85 // 10% growth, 85% retention
Year 4 Revenue: =Year3*1.1*0.8  // 10% growth, 80% retention

Total Revenue: =SUM(Year1:Year4)
Gross Profit: =Total Revenue * 0.85
LTV (PV): =Gross Profit / 1.05^2  // 5% discount rate
```

### Payback Period Calculation

```
Monthly Revenue: =ACV / 12
Monthly Gross Profit: =Monthly Revenue * 0.85
Payback Period (months): =CAC / Monthly Gross Profit
Payback Period (days): =Payback Period (months) * 30
```

### Break-Even Analysis

```
Fixed Costs: =370000  // Year 1 operating costs
Gross Profit per Customer: =45000 * 0.85
Break-Even Customers: =Fixed Costs / Gross Profit per Customer
```

---

**Last Updated:** April 7, 2026  
**Model Owner:** Business Model & Economics Analyst  
**Review Frequency:** Monthly (post-execution), then quarterly post-pilot
