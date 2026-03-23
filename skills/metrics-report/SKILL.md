---
name: metrics-report
description: Create executive metrics reports from raw data with insights and recommendations
---

# Metrics Report Generator

Transform raw metrics data into executive-ready reports with trends, insights, and actionable recommendations.

## What this skill does

Takes your metrics data (CSV, spreadsheets, analytics exports) and creates:
- Executive summary with key takeaways
- Trend analysis and visualizations
- Performance against goals
- Insights and patterns
- Recommendations for action
- Data-driven storytelling

## How to use

1. Export your metrics data (CSV, spreadsheet, or paste data)
2. Run `:code[/metrics-report]{showCopyAction=true}`
3. Provide the data and context (goals, previous periods, benchmarks)
4. Get an executive-ready report with insights

**Time saved:** According to Anthropic's Inference team, "What normally requires an hour of analysis and Google searching now takes 10-20 minutes—an 80% reduction."

## Input format

Data in any of these formats:
- CSV files with metrics
- Pasted spreadsheet data
- Analytics export files
- Multiple data sources to combine

Plus context:
- What metrics matter most
- Goals or targets
- Time period
- Audience for the report

## Output structure

```
# [Metrics Report Title]

**Reporting Period:** [Dates]
**Prepared for:** [Audience]
**Prepared by:** [Your name]
**Date:** [Report date]

---

## Executive Summary

[2-3 paragraph summary highlighting the most important findings.
What's working, what needs attention, and key recommendations.]

**Key Highlights:**
- ✅ [Positive finding with impact]
- ⚠️ [Area of concern with impact]
- 📈 [Notable trend or change]
- 💡 [Key insight or opportunity]

---

## Performance Overview

### Overall Performance

| Metric | Target | Actual | vs Target | vs Last Period |
|--------|--------|--------|-----------|----------------|
| [Metric 1] | [Goal] | [Result] | +15% | +10% |
| [Metric 2] | [Goal] | [Result] | -5% | +3% |
| [Metric 3] | [Goal] | [Result] | +20% | +25% |

**Performance Rating:** [On Track / Needs Attention / Exceeding]

---

## Detailed Analysis

### [Category 1 - e.g., Traffic & Engagement]

**What Happened:**
[Data-driven description of what the numbers show]

**Key Metrics:**
- **[Metric name]:** [Value] ([% change] vs last period)
  - [Brief explanation of what this means]
- **[Metric name]:** [Value] ([% change] vs last period)
  - [Brief explanation of what this means]

**Trends:**
- [Trend 1 with data support]
- [Trend 2 with data support]

**Why This Matters:**
[Business impact explanation]

---

### [Category 2 - e.g., Conversions & Revenue]

**What Happened:**
[Data-driven description]

**Key Metrics:**
[Repeat structure from Category 1]

**Trends:**
[Notable patterns]

**Why This Matters:**
[Business impact]

---

### [Category 3 - e.g., Channel Performance]

**Channel Breakdown:**

| Channel | Impressions | Clicks | Conversions | Cost | CPA | ROI |
|---------|-------------|--------|-------------|------|-----|-----|
| LinkedIn | [#] | [#] | [#] | $[#] | $[#] | [%] |
| Email | [#] | [#] | [#] | $[#] | $[#] | [%] |
| Search | [#] | [#] | [#] | $[#] | $[#] | [%] |

**Top Performers:**
- [Channel 1]: [Why it performed well]
- [Channel 2]: [Key success factors]

**Underperformers:**
- [Channel 1]: [Why it underperformed]
- [Channel 2]: [Potential issues]

---

## Insights & Patterns

### Key Insights

**1. [Insight Title]**
**Finding:** [What the data shows]
**Why It Matters:** [Business implication]
**Evidence:** [Supporting data points]

**2. [Insight Title]**
[Repeat structure]

### Correlations & Patterns
- [Pattern 1 you discovered in the data]
- [Pattern 2 worth noting]
- [Pattern 3 for investigation]

---

## Goal Progress

### Primary Goals

**Goal 1: [Description]**
- Target: [Number]
- Current: [Number]
- Progress: [%] complete
- Status: 🟢 On Track / 🟡 Needs Attention / 🔴 At Risk
- Projection: [Where we'll end up at current pace]

**Goal 2: [Description]**
[Repeat structure]

### Progress Chart
```
Goal Progress:
[Visual representation or description of progress toward each goal]
```

---

## Recommendations

### Immediate Actions (This Week)

**1. [Action Title]**
- **Why:** [Data-driven reason]
- **How:** [Specific steps]
- **Expected Impact:** [What you expect to happen]
- **Owner:** [Who should do this]

**2. [Action Title]**
[Repeat structure]

### Short-term Initiatives (Next 2-4 Weeks)

**1. [Initiative Title]**
- **Rationale:** [Why based on data]
- **Approach:** [How to execute]
- **Success Metrics:** [How to measure]

---

## Risks & Concerns

**Current Risks:**
- ⚠️ **[Risk 1]:** [Description and potential impact]
  - Mitigation: [What to do about it]

- ⚠️ **[Risk 2]:** [Description and potential impact]
  - Mitigation: [Action plan]

---

## Questions for Discussion

1. [Question based on data that needs team input]
2. [Question about strategic direction]
3. [Question about resource allocation]

---

## Next Steps

- [ ] [Action item 1] - [Owner] by [date]
- [ ] [Action item 2] - [Owner] by [date]
- [ ] [Action item 3] - [Owner] by [date]

**Next Report:** [Date]

---

## Appendix: Detailed Data

[Include additional tables, charts, or granular data for reference]

### Raw Data Summary
[Link to or embed detailed data tables]

### Methodology Notes
[Any important context about how data was collected or calculated]

### Definitions
[Clarify any metrics that might be ambiguous]
```

## Example

**Input:**
```
Campaign metrics CSV:
Campaign: Product_Launch, Email: 50000 impressions, 2500 clicks, 150 conversions, $5000 spend
Campaign: Product_Launch, Social: 100000 impressions, 5000 clicks, 200 conversions, $8000 spend
Campaign: Webinar_Series, Email: 25000 impressions, 1500 clicks, 300 conversions, $3000 spend
Campaign: Webinar_Series, LinkedIn: 30000 impressions, 2000 clicks, 250 conversions, $4000 spend

Goals: 500 MQLs (actual: 900), $20K budget (actual: $20K)
Last period: 350 MQLs, similar budget
```

**Output:**
```
# Q2 Campaign Performance Report

**Reporting Period:** April 1 - June 30, 2025
**Prepared for:** Marketing Leadership
**Prepared by:** Marketing Operations
**Date:** July 5, 2025

---

## Executive Summary

Q2 campaigns significantly exceeded expectations, generating 900 MQLs against
a target of 500 (180% of goal). We stayed on budget at $20K while achieving
a 157% increase in lead volume compared to Q1 (350 MQLs).

The Product Launch and Webinar Series campaigns drove this success, with
webinars showing exceptional conversion rates (27.5% avg) significantly
higher than product launch campaigns (7.2% avg). Email continues to be our
most cost-effective channel at $30 CPA vs $40 for LinkedIn and $32 for
other social.

**Key Highlights:**
- ✅ Exceeded MQL goal by 80% (900 vs 500 target)
- ✅ 157% increase in lead gen vs Q1
- 📈 Webinar conversions 4x higher than typical campaigns
- 💡 Email consistently outperforms social for cost efficiency

---

## Performance Overview

### Overall Performance

| Metric | Target | Actual | vs Target | vs Q1 |
|--------|--------|--------|-----------|-------|
| MQLs Generated | 500 | 900 | +80% | +157% |
| Budget Spent | $20,000 | $20,000 | On Target | +0% |
| Cost per MQL | $40 | $22 | 45% better | 60% better |
| Conversion Rate | 3% | 5.8% | +93% | +82% |

**Performance Rating:** 🟢 Exceeding Expectations

---

## Detailed Analysis

### Campaign Performance

**What Happened:**
Two campaigns ran in parallel: Product Launch (April-May) and Webinar
Series (May-June). Together they generated 900 MQLs at an average CPA of
$22, significantly below our $40 target.

**Key Metrics:**

**Product Launch Campaign:**
- **MQLs:** 350 (39% of total)
- **Spend:** $13,000 (65% of budget)
- **CPA:** $37
- **Conversion Rate:** 7.2%

**Webinar Series Campaign:**
- **MQLs:** 550 (61% of total)
- **Spend:** $7,000 (35% of budget)
- **CPA:** $13
- **Conversion Rate:** 27.5%

**Trends:**
- Webinar format dramatically outperformed traditional campaigns
  (27.5% vs 7.2% conversion)
- Cost per lead decreased 65% from Product Launch to Webinar Series
- Email engagement increased 40% from April to June (list warming effect)

**Why This Matters:**
Webinar format provides 3x better ROI than traditional campaigns. This
suggests we should shift more budget toward educational webinar content
and reduce spend on direct product promotion.

---

### Channel Performance

**Channel Breakdown:**

| Channel | Impressions | Clicks | Conversions | Cost | CPA | Conv Rate |
|---------|-------------|--------|-------------|------|-----|-----------|
| Email | 75,000 | 4,000 | 450 | $8,000 | $18 | 11.3% |
| Social | 100,000 | 5,000 | 200 | $8,000 | $40 | 4.0% |
| LinkedIn | 30,000 | 2,000 | 250 | $4,000 | $16 | 12.5% |
| **Total** | **205,000** | **11,000** | **900** | **$20,000** | **$22** | **8.2%** |

**Top Performers:**
- **LinkedIn:** Best conversion rate (12.5%) and competitive CPA ($16).
  Professional audience highly engaged with webinar content.
- **Email:** Strong conversion (11.3%) with solid volume. Existing
  database warming up to our messaging.

**Underperformers:**
- **Social (General):** 4% conversion significantly below other channels.
  Audience quality lower, or messaging less targeted.

---

## Insights & Patterns

### Key Insights

**1. Webinar Format Is a Game-Changer**
**Finding:** Webinar campaigns converted at 27.5% vs 7.2% for product
launch campaigns—nearly 4x better.
**Why It Matters:** Each dollar spent on webinars generates 3x more leads.
We're leaving money on the table if we don't shift strategy.
**Evidence:** 550 MQLs from $7K spend (webinars) vs 350 MQLs from $13K
spend (product launch).

**2. Email Database Is Now Highly Engaged**
**Finding:** Email conversion increased from 8% (April) to 14% (June),
suggesting list quality improved through consistent engagement.
**Why It Matters:** Our email list is now a high-value asset that we
should prioritize and protect.
**Evidence:** Month-over-month engagement increases: April 8% → May 11% →
June 14%.

**3. LinkedIn Audience Matches Our ICP Better Than General Social**
**Finding:** LinkedIn converted 3x better than general social (12.5% vs 4%)
despite similar creative and messaging.
**Why It Matters:** Audience quality matters more than reach. Better to
pay more for LinkedIn than waste budget on low-quality social traffic.
**Evidence:** $16 CPA (LinkedIn) delivers MQLs that convert to SQLs at
25% vs 10% from social.

---

## Goal Progress

### Primary Goals

**Goal 1: Generate 500 MQLs**
- Target: 500
- Current: 900
- Progress: 180% complete
- Status: 🟢 Exceeded
- Result: Beat goal by 400 MQLs (80% above target)

**Goal 2: Stay Within $20K Budget**
- Target: $20,000
- Current: $20,000
- Progress: 100% utilized
- Status: 🟢 On Target
- Result: Exactly on budget while significantly exceeding lead goal

**Goal 3: Achieve $40 Cost Per MQL**
- Target: $40
- Current: $22
- Progress: 45% better than target
- Status: 🟢 Exceeded
- Result: $18 below target CPA, enabling reinvestment

---

## Recommendations

### Immediate Actions (This Week)

**1. Double Down on Webinar Strategy**
- **Why:** 4x better conversion at fraction of the cost
- **How:** Plan Q3 webinar series, allocate 50% of budget (vs 35% in Q2)
- **Expected Impact:** If we maintain 27% conversion, we'll generate
  1,200+ MQLs in Q3 with same budget
- **Owner:** Marketing Lead

**2. Reduce General Social Spend**
- **Why:** 4% conversion and $40 CPA not meeting efficiency bar
- **How:** Cut general social by 50%, reallocate to LinkedIn and email
- **Expected Impact:** Maintain reach but improve lead quality and reduce CPA
- **Owner:** Paid Media Manager

### Short-term Initiatives (Next 2-4 Weeks)

**1. Create Webinar Content Library**
- **Rationale:** Webinars working incredibly well; scale what works
- **Approach:** Plan 6 webinars for Q3, create production schedule
- **Success Metrics:** Maintain 25%+ conversion rate at scale

**2. Email Nurture Optimization**
- **Rationale:** Email performance improving month-over-month
- **Approach:** Segment list, personalize content, increase frequency
  for engaged segments
- **Success Metrics:** Maintain 14%+ conversion, grow list by 20%

---

## Risks & Concerns

**Current Risks:**
- ⚠️ **Webinar Fatigue:** If we run too many webinars, audience may
  become fatigued and conversion rates could drop
  - Mitigation: Vary topics, test different formats (workshop vs panel),
    limit frequency to 2 per month

- ⚠️ **Email List Burnout:** Increased email volume could lead to
  unsubscribes or declining engagement
  - Mitigation: Strict email frequency cap, improve segmentation, always
    provide value

---

## Questions for Discussion

1. Should we set a more aggressive Q3 MQL target given Q2 overperformance?
2. What's our capacity to produce 6 webinars per quarter?
3. Should we invest in email list growth given strong performance?

---

## Next Steps

- [ ] Finalize Q3 webinar topics and schedule - Marketing Lead by July 12
- [ ] Reduce social budget and reallocate - Paid Media by July 10
- [ ] Create email segmentation strategy - Marketing Ops by July 15
- [ ] Set Q3 goals based on Q2 learnings - Leadership by July 8

**Next Report:** October 5, 2025 (Q3 Results)
```

## Real-world application: Processing hundreds of data points

The Growth Marketing team at Anthropic uses Claude Code to "process CSV
files with hundreds of ads, identify underperformers, and generate new
variations—generating hundreds of new ads in minutes instead of hours."

This same data processing capability works for metrics reports: analyze
hundreds of data points, identify patterns, and generate insights in
minutes instead of hours.

## Tips for better metrics reports

**Lead with insights, not data:**
"Webinars convert 4x better" is more useful than "Webinars had 27.5% conversion."

**Show comparisons:**
Numbers mean nothing without context. Always compare to goals, last period, or benchmarks.

**Visualize trends:**
Describe upward/downward trends clearly. Use simple visual indicators (📈, ✅, ⚠️).

**Make it actionable:**
Every insight should lead to a recommendation. "So what?" test.

**Know your audience:**
Executives want summary and recommendations. Analysts want detailed data.

**Tell a story:**
Don't just list metrics. Explain what happened and why it matters.

**Be honest about bad news:**
If something underperformed, say so clearly and explain what you'll do about it.
