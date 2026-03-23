---
name: campaign-brief
description: Generate comprehensive campaign brief from strategy notes and goals
---

# Campaign Brief Generator

Transform campaign strategy notes and goals into a comprehensive, actionable campaign brief ready for team execution.

## What this skill does

Takes your campaign ideas and strategy notes to create:
- Clear campaign objectives and success metrics
- Target audience definition
- Channel strategy and tactics
- Timeline with key milestones
- Budget allocation
- Creative requirements
- Measurement plan

## How to use

1. Gather your campaign strategy notes, goals, and requirements
2. Run `:code[/campaign-brief]{showCopyAction=true}`
3. Provide your strategy document or notes
4. Get a complete campaign brief ready to share with your team

**Time saved:** What normally takes 2-3 hours of formatting and organizing becomes a 10-minute review.

## Input format

Can be any of:
- Bullet points from brainstorming sessions
- Strategy meeting notes
- Campaign goals and KPIs
- Target audience research
- Budget parameters
- Timeline requirements

## Output structure

```
# [Campaign Name] - Campaign Brief

## Campaign Overview

**Campaign Name:** [Name]
**Campaign Type:** [Awareness/Consideration/Conversion/Retention]
**Duration:** [Start date] - [End date]
**Owner:** [Name/Team]
**Status:** [Planning/In Progress/Completed]

**Brief Description:**
[2-3 sentence summary of what this campaign is and why we're doing it]

---

## Objectives

**Primary Objective:**
[Main goal - be specific and measurable]

**Secondary Objectives:**
- [Supporting goal 1]
- [Supporting goal 2]

**Success Metrics:**
- [Metric 1]: [Current baseline] → [Target] by [date]
- [Metric 2]: [Current baseline] → [Target] by [date]
- [Metric 3]: [Current baseline] → [Target] by [date]

---

## Target Audience

**Primary Audience:**
- **Demographics:** [Age, location, role, company size, etc.]
- **Psychographics:** [Interests, behaviors, pain points]
- **Current relationship:** [Prospect/Customer/User/Other]
- **Size:** [Estimated reach]

**Secondary Audience:**
[If applicable]

**Key Insights:**
- [Insight 1 about what motivates this audience]
- [Insight 2 about their challenges or needs]
- [Insight 3 about how they make decisions]

---

## Key Messages

**Primary Message:**
[Main message - what we want audience to remember]

**Supporting Messages:**
- [Message point 1]
- [Message point 2]
- [Message point 3]

**Proof Points:**
- [Evidence/data/testimonials supporting our claims]

**Call-to-Action:**
[Specific action we want audience to take]

---

## Channel Strategy

### Channel Mix

**Primary Channels:**
1. **[Channel 1 - e.g., LinkedIn]**
   - Rationale: [Why this channel]
   - Tactics: [Specific activities]
   - Budget: $[amount]
   - KPIs: [How we measure success]

2. **[Channel 2 - e.g., Email]**
   - Rationale: [Why this channel]
   - Tactics: [Specific activities]
   - Budget: $[amount]
   - KPIs: [How we measure success]

**Supporting Channels:**
- [Channel 3]: [Brief description and role]

### Channel Integration
[How channels work together to create cohesive experience]

---

## Creative Requirements

**Creative Concept:**
[Overall creative direction or theme]

**Asset Needs:**
- [Asset 1 - e.g., Hero image]: [Specs, due date, owner]
- [Asset 2 - e.g., Email templates]: [Specs, due date, owner]
- [Asset 3 - e.g., Landing page]: [Specs, due date, owner]
- [Asset 4 - e.g., Ad copy variations]: [Specs, due date, owner]

**Brand Guidelines:**
- [Specific brand requirements or considerations]

**Copy Tone:**
[Voice and tone for campaign messaging]

---

## Timeline & Milestones

### Pre-Launch Phase
- **[Date]:** [Milestone 1 - e.g., Creative brief approved]
- **[Date]:** [Milestone 2 - e.g., Assets completed]
- **[Date]:** [Milestone 3 - e.g., Landing page live]

### Launch Phase
- **[Date]:** Campaign launch
- **[Date]:** [In-flight milestone]

### Post-Launch Phase
- **[Date]:** [Optimization checkpoint]
- **[Date]:** Campaign end
- **[Date]:** Results analysis due

### Critical Path Items
[Tasks that must happen on time or campaign is at risk]

---

## Budget

| Category | Item | Cost |
|----------|------|------|
| Paid Media | [Channel 1] | $[amount] |
| | [Channel 2] | $[amount] |
| Creative | [Asset production] | $[amount] |
| Technology | [Tools/platforms] | $[amount] |
| **Total** | | **$[total]** |

**Budget Notes:**
[Any important context about budget allocation or constraints]

---

## Team & Responsibilities

| Role | Name | Responsibilities |
|------|------|------------------|
| Campaign Lead | [Name] | Overall strategy and execution |
| Creative | [Name] | Asset creation and design |
| Content | [Name] | Copy and messaging |
| Paid Media | [Name] | Ad buying and optimization |
| Analytics | [Name] | Tracking and reporting |

---

## Measurement Plan

**Tracking Setup:**
- [UTM parameters or tracking codes]
- [Analytics configuration needed]
- [Dashboard or reporting tool]

**Reporting Cadence:**
- **Daily:** [What we check daily]
- **Weekly:** [Weekly check-ins and optimizations]
- **End of Campaign:** [Final analysis and learnings]

**Success Criteria:**
[What "success" looks like - be specific]

---

## Risks & Contingencies

**Potential Risks:**
- **Risk 1:** [Description]
  - Mitigation: [Plan]

- **Risk 2:** [Description]
  - Mitigation: [Plan]

---

## Approvals Required

- [ ] Budget approval: [Name] by [date]
- [ ] Creative approval: [Name] by [date]
- [ ] Legal review: [Name] by [date]
- [ ] Executive sign-off: [Name] by [date]

---

## Additional Resources

- [Link to strategy doc]
- [Link to creative files]
- [Link to campaign dashboard]
- [Link to competitive analysis]
```

## Example

**Input:**
```
Q2 product launch campaign. Goal: 500 MQLs, 50 sales opportunities.
Budget: $80K. Targeting mid-market companies 500-5000 employees.
Channels: LinkedIn, email, webinar series. Timeline: April-June.
Key message: fastest implementation in market (2 weeks vs 3 months).
Need case studies, landing page, email sequences, LinkedIn ads.
```

**Output:**
```
# Dashboard 2.0 Launch - Campaign Brief

## Campaign Overview

**Campaign Name:** Dashboard 2.0 Launch Campaign
**Campaign Type:** Product Launch / Demand Generation
**Duration:** April 1, 2025 - June 30, 2025
**Owner:** Marketing Team
**Status:** Planning

**Brief Description:**
Launch campaign for Dashboard 2.0 targeting mid-market companies with
message of fastest implementation timeline in market. Multi-channel
approach combining LinkedIn advertising, email nurture, and webinar series
to generate 500 MQLs and 50 sales opportunities in Q2.

---

## Objectives

**Primary Objective:**
Generate 500 marketing qualified leads (MQLs) for Dashboard 2.0

**Secondary Objectives:**
- Create 50 sales-qualified opportunities
- Achieve 20% MQL to SQL conversion rate
- Establish "fastest implementation" positioning in market

**Success Metrics:**
- MQLs: 0 → 500 by June 30
- SQLs: 0 → 50 by June 30
- Pipeline created: $6M
- Website traffic: +50% from baseline
- Brand awareness: +30% in target segment

---

## Target Audience

**Primary Audience:**
- **Demographics:** VP Engineering, CTO, Head of Data at mid-market
  companies (500-5,000 employees) in US and Canada
- **Psychographics:** Frustrated with slow, rigid enterprise tools;
  value speed and flexibility; budget-conscious but willing to pay
  for quality
- **Current relationship:** Prospects (some familiar with brand,
  some cold)
- **Size:** ~50,000 reachable via LinkedIn, 15,000 in email database

**Key Insights:**
- Implementation timeline is a major decision factor (mentioned in
  80% of sales calls)
- Current tools take 3+ months to deploy; our 2-week timeline is
  compelling differentiator
- Mid-market buyers want enterprise features without enterprise
  complexity and cost

---

## Key Messages

**Primary Message:**
"Deploy enterprise-grade analytics in 2 weeks, not 3 months—at half
the cost of traditional solutions."

**Supporting Messages:**
- Speed: Be operational in 2 weeks with our guided implementation
- Flexibility: No-code customization means no engineering required
- Value: 50% lower total cost of ownership than enterprise alternatives

**Proof Points:**
- TechCorp deployed in 12 days with zero downtime
- Acme Corp saved $150K compared to previous solution
- 98% customer satisfaction score

**Call-to-Action:**
Schedule a demo / Download comparison guide / Register for webinar

[Additional sections continue...]
```

## Real-world example: Growth marketing at Anthropic

The Growth Marketing team at Anthropic uses Claude Code to process CSV files with hundreds of ads, identify underperformers, and generate new variations within character limits. **Result: Generates hundreds of new ads in minutes instead of hours.**

This same approach works for campaign briefs—turn rough notes into polished documents in minutes, not hours.

## Tips for better campaign briefs

**Start with the "why":**
Make objectives crystal clear before diving into tactics.

**Be specific with metrics:**
"Increase awareness" is vague. "Increase brand awareness 30% among mid-market CTOs" is measurable.

**Make timeline realistic:**
Account for approval cycles, asset production time, and buffer for delays.

**Assign clear ownership:**
Every deliverable needs an owner and due date.

**Plan for measurement upfront:**
Don't figure out tracking after launch. Set it up from day one.

**Include budget contingency:**
Hold back 10-15% for optimization or unexpected opportunities.

**Make it skimmable:**
Stakeholders will skim before reading in detail. Use headers and bullets.
