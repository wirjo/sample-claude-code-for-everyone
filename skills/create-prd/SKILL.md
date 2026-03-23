---
name: create-prd
description: Generate a Product Requirements Document from notes and requirements
---

# Create PRD Skill

Transform rough notes and requirements into a structured Product Requirements Document.

## What this skill does

Takes your requirements notes and creates a complete PRD with:
- Problem statement and context
- Proposed solution overview
- User stories with acceptance criteria
- Success metrics and KPIs
- Functional and non-functional requirements
- Timeline and phasing
- Open questions and risks

## How to use

1. Gather your requirements (notes, customer feedback, brainstorming)
2. Run `:code[/create-prd]{showCopyAction=true}`
3. Provide your requirements document or notes
4. Review and refine the generated PRD
5. Iterate by asking for specific sections to be expanded or modified

## Input format

Can be any of:
- Bullet points of features needed
- Meeting notes about the problem
- Customer feedback and feature requests
- Technical constraints and considerations
- Success criteria and business goals

## Output structure

```
# [Feature Name] - Product Requirements Document

## Problem Statement
[Clear description of the problem we're solving]
[Why this matters to users and the business]

## Proposed Solution
[High-level solution overview]
[How it addresses the problem]

## User Stories
- As a [user type], I want [goal] so that [benefit]
  - Acceptance criteria: [specific, testable conditions]

## Success Metrics
- Primary: [Key metric and target]
- Secondary: [Supporting metrics]
- How we'll measure: [Measurement approach]

## Requirements

### Functional Requirements
1. [What the system must do]
2. [User-facing capabilities]

### Non-Functional Requirements
- Performance: [Response times, throughput]
- Security: [Authentication, authorization, data protection]
- Usability: [User experience requirements]
- Scalability: [Growth considerations]

## Timeline and Phasing
- Phase 1: [Scope] - [Duration]
- Phase 2: [Scope] - [Duration]

## Dependencies
- [Technical dependencies]
- [Team dependencies]
- [External dependencies]

## Open Questions
- [Questions needing answers]
- [Decisions to be made]

## Risks and Mitigations
- Risk: [Description] → Mitigation: [Approach]

## Out of Scope
- [What we're explicitly not doing]
```

## Example

**Input:**
```
Users complaining about slow dashboard load times.
Need real-time updates.
Must handle 500+ concurrent users.
Timeline: 2 months
```

**Output:**
```
# Real-Time Dashboard Performance - PRD

## Problem Statement
Users experience 5-10 second load times on dashboards during peak usage,
leading to frustration and reduced engagement. Current architecture cannot
support growing user base (500+ concurrent users).

## Proposed Solution
Implement caching layer, optimize database queries, and add WebSocket
connections for real-time updates. This will reduce load times to <1 second
and enable live data updates.

## User Stories
- As a dashboard user, I want the dashboard to load in under 1 second
  so that I can quickly access my data
  - Acceptance: Dashboard loads in <1s for 95% of requests

- As a dashboard user, I want to see data update in real-time
  so that I always have current information
  - Acceptance: Updates appear within 2 seconds of data change

## Success Metrics
- Primary: Reduce average load time from 7s to <1s
- Secondary: Support 500+ concurrent users with no degradation
- Measurement: APM monitoring, user session analytics

[Additional sections continue...]
```

## Tips for better PRDs

**Be specific about the problem:**
Include user quotes, data on impact, and why solving this matters.

**Prioritize user stories:**
Mark stories as Must-Have, Should-Have, or Nice-to-Have.

**Quantify success metrics:**
Use specific numbers and timeframes (e.g., "Increase conversion by 20% within 30 days").

**Include visuals:**
Reference mockups, diagrams, or user flows if available.

**Keep it updated:**
Treat the PRD as a living document that evolves during development.
