---
name: proposal-generator
description: Generate customized sales proposals from template and customer data
---

# Proposal Generator Skill

Create customized sales proposals by combining your proposal template with customer-specific information from discovery calls and requirements.

## What this skill does

Takes your proposal template and customer data to create:
- Customized executive summary
- Tailored solution overview addressing specific pain points
- Detailed pricing with justification
- Implementation timeline based on customer needs
- Success metrics aligned with customer goals
- Custom terms and conditions if needed

## How to use

1. Have your proposal template ready (or use a standard format)
2. Gather customer-specific information (pain points, requirements, budget)
3. Run `:code[/proposal-generator]{showCopyAction=true}`
4. Provide template and customer data
5. Review and customize the generated proposal

## Input format

**Template:** Your standard proposal structure or format

**Customer Data:**
- Company name and background
- Key contacts and decision makers
- Pain points and requirements
- Budget and pricing discussions
- Timeline and implementation needs
- Competitive situation
- Success criteria

## Output structure

```
# Proposal for [Company Name]

## Executive Summary

[Customized 2-3 paragraph summary addressing their specific situation,
pain points, and how your solution solves their problems]

**Project:** [Name]
**Prepared for:** [Contact Name, Title]
**Prepared by:** [Your Name, Title]
**Date:** [Date]
**Valid until:** [Date + 30 days]

---

## Understanding Your Needs

### Current Challenges
[List their specific pain points mentioned in discovery]

- Challenge 1: [Their words describing the problem]
- Challenge 2: [Impact on their business]
- Challenge 3: [What they've tried that hasn't worked]

### Your Goals
[Their stated objectives and success criteria]

- Goal 1: [Specific, measurable outcome]
- Goal 2: [Business impact they're targeting]
- Goal 3: [Timeline or performance target]

---

## Proposed Solution

### Overview
[How your solution specifically addresses their challenges]

### Key Components
1. **[Component 1]**
   - What it does: [Functionality]
   - How it helps: [Addresses specific pain point]
   - Value: [Quantifiable benefit]

2. **[Component 2]**
   [Repeat structure]

### Why This Approach Works
[Explain why this is the right solution for their specific situation]

---

## Implementation Plan

### Timeline
- **Week 1-2:** [Phase 1 activities]
- **Week 3-4:** [Phase 2 activities]
- **Week 5-6:** [Phase 3 activities]
- **Go-Live:** [Target date]

### Your Team's Role
[What customer needs to provide or do]

### Our Team's Role
[What we'll provide and do]

### Success Milestones
- Milestone 1: [Deliverable and date]
- Milestone 2: [Deliverable and date]
- Milestone 3: [Deliverable and date]

---

## Investment

### Pricing Summary

| Item | Description | Amount |
|------|-------------|---------|
| [Product/Service 1] | [What's included] | $[amount] |
| [Product/Service 2] | [What's included] | $[amount] |
| Implementation | [Services included] | $[amount] |
| **Total Year 1** | | **$[total]** |
| **Annual Renewal** | | **$[renewal]** |

### Payment Terms
[Standard terms or custom based on their needs]

### What's Included
- [Item 1 with description]
- [Item 2 with description]
- [Item 3 with description]

### Optional Add-Ons
- [Optional item 1]: $[amount]
- [Optional item 2]: $[amount]

---

## Expected Outcomes

### Success Metrics
Based on your goals, we expect:

- [Metric 1]: [Current state] → [Target state] within [timeframe]
- [Metric 2]: [Current state] → [Target state] within [timeframe]
- [Metric 3]: [Current state] → [Target state] within [timeframe]

### ROI Projection
[Calculation showing how investment pays back]

**Investment:** $[amount]
**Expected Annual Benefit:** $[savings/revenue]
**Payback Period:** [months]

---

## Why [Your Company]

### Relevant Experience
[Case studies or examples relevant to their industry/situation]

### Customer Success Story
[Brief story of similar customer with results]

### Our Commitment
[What makes your company/team uniquely qualified]

---

## Next Steps

1. **[Action 1]** - [Who] by [date]
2. **[Action 2]** - [Who] by [date]
3. **[Action 3]** - [Who] by [date]

### Questions?
[Your contact information and availability]

---

## Terms and Conditions

### Agreement Period
[Contract length and renewal terms]

### Support and Maintenance
[What's included, hours, SLAs]

### Confidentiality
[Standard confidentiality terms]

### Acceptance
This proposal is valid until [date]. To accept, please sign below.

**Accepted by:** ___________________________
**Name:** ___________________________
**Title:** ___________________________
**Date:** ___________________________
```

## Example

**Input:**
```
Customer: Acme Corp
Contact: John Smith, VP Engineering
Pain points: Current analytics tool crashes during month-end, slow performance
Budget: $100K approved
Timeline: Need to start May 1
Requirements: 500+ concurrent users, real-time dashboards, custom reporting
```

**Output:**
```
# Proposal for Acme Corp

## Executive Summary

Acme Corp is experiencing critical reliability issues with your current
analytics platform, specifically month-end crashes that disrupt business-
critical reporting processes. With 500+ users depending on the platform
and growing data volumes, you need a solution that delivers enterprise-
grade reliability with sub-second performance.

We propose implementing our Real-Time Analytics Platform, specifically
designed to handle high concurrency and large datasets without performance
degradation. Our solution will eliminate the month-end crashes you're
experiencing and provide your team with the real-time dashboards and
custom reporting capabilities required to support your growing business.

With a two-week implementation timeline, you'll be operational by your
May 1 target date with minimal disruption to your current operations.

**Project:** Analytics Platform Implementation
**Prepared for:** John Smith, VP Engineering
**Prepared by:** [Your Name], Account Executive
**Date:** March 15, 2025
**Valid until:** April 14, 2025

---

## Understanding Your Needs

### Current Challenges

- **System Crashes:** Current platform crashes during month-end reporting,
  disrupting critical business processes and requiring manual workarounds

- **Performance Issues:** Slow dashboard load times with 500+ concurrent
  users, particularly during peak usage periods

- **Limited Customization:** Unable to create the custom reports needed by
  different teams and stakeholders

### Your Goals

- **Reliability:** Zero downtime during month-end close and peak usage
- **Performance:** Sub-second dashboard load times for all users
- **Scalability:** Support 500+ concurrent users with room to grow
- **Timeline:** Implementation complete and system live by May 1, 2025

---

## Proposed Solution

### Overview
Our Real-Time Analytics Platform provides enterprise-grade reliability
and performance through distributed architecture, intelligent caching,
and optimized query processing. Specifically designed for high-concurrency
environments, the platform ensures consistent performance even during
your heaviest usage periods.

### Key Components

1. **Enterprise Analytics Engine**
   - What it does: Processes complex queries across large datasets with
     sub-second response times
   - How it helps: Eliminates the performance bottlenecks causing your
     month-end crashes
   - Value: 99.9% uptime SLA, handles 1000+ concurrent users

2. **Real-Time Dashboard Platform**
   - What it does: Live-updating dashboards with automatic data refresh
   - How it helps: Teams see current data without manual refreshes
   - Value: Reduces time spent waiting for reports by 80%

3. **Custom Report Builder**
   - What it does: No-code interface for creating custom reports and views
   - How it helps: Each team builds reports for their specific needs
   - Value: Eliminates backlog of custom report requests

[Implementation Plan, Investment sections continue...]

---

## Investment

### Pricing Summary

| Item | Description | Amount |
|------|-------------|---------|
| Analytics Platform License | 500 users, unlimited dashboards | $75,000 |
| Implementation Services | 2-week rapid deployment | $15,000 |
| Training & Onboarding | Team training and documentation | $5,000 |
| **Total Year 1** | | **$95,000** |
| **Annual Renewal (Year 2+)** | | **$75,000** |

[Remainder of proposal continues...]
```

## Tips for better proposals

**Lead with their problem, not your product:**
Show you understand their situation before pitching your solution.

**Use their language:**
Quote their pain points and goals in their own words.

**Be specific about outcomes:**
Use numbers and timeframes (e.g., "Reduce processing time by 50% within 30 days").

**Address objections preemptively:**
If you know concerns (budget, timeline, risk), address them in the proposal.

**Make next steps crystal clear:**
Don't leave them wondering "What do I do if I want to move forward?"

**Include social proof:**
Mention relevant customers, especially in their industry or with similar challenges.

**Keep it scannable:**
Use headers, bullets, and white space. Executives will skim it first.
