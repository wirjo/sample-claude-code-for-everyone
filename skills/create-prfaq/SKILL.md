---
name: create-prfaq
description: Generate an Amazon-style PR/FAQ (Press Release / Frequently Asked Questions) document using the Working Backwards methodology. Use when writing a PR/FAQ, working backwards from a customer outcome, or defining a new product or feature the Amazon way.
---

# Create PR/FAQ Skill

Transform rough ideas and requirements into a structured Amazon-style PR/FAQ using the Working Backwards methodology.

## What this skill does

Takes your product ideas, requirements, or notes and creates a complete PR/FAQ with:
- A crisp press release written as if the product has already launched
- Customer problem and proposed solution
- Customer quotes (real or representative)
- FAQs covering both customer and internal stakeholder questions
- Success metrics

## How to use

1. Gather your inputs (problem statement, customer feedback, product vision, requirements notes)
2. Run `/create-prfaq`
3. Provide your inputs
4. Review the draft and refine — iterate on the press release headline until it clearly describes customer value
5. Expand FAQs to address likely stakeholder questions

## Input format

Can be any of:
- A problem statement or opportunity description
- Customer feedback or pain points
- Bullet points of proposed features
- Meeting notes about the product vision
- A rough draft press release

## Output structure

```
# [Product Name] — Press Release

[City, Date] — [Company] today announced [Product Name], [one-sentence description of what it is and who it's for].

## The problem

[Description of the customer problem. Written from the customer's perspective, not the company's.]

## Our solution

[How the product solves the problem. Focus on the customer outcome, not the technology.]

## Customer quote

"[Representative quote from a target customer expressing the value they get.]"
— [Persona name, role]

## Getting started

[How a customer would start using the product. Keep it simple.]

## Executive quote

"[Quote from a leader explaining why this matters to the company and customers.]"
— [Name, Title]

---

# Frequently Asked Questions

## Customer FAQs

**Q: [Common customer question]**
A: [Clear, honest answer]

**Q: [Pricing / availability question]**
A: [Answer]

## Internal / Stakeholder FAQs

**Q: Why are we doing this now?**
A: [Answer]

**Q: How does this fit our strategy?**
A: [Answer]

**Q: What does success look like?**
A: [Metrics and targets]

**Q: What are the biggest risks?**
A: [Honest assessment and mitigations]
```

## Example

**Input:**
```
Customers struggle to onboard new team members to our analytics tool.
It takes 2-3 weeks and requires IT involvement.
We want self-serve onboarding in under a day.
Target: enterprise teams of 10-500 people.
```

**Output:**
```
# Analytics Onboarding — Press Release

Seattle, WA — Acme Corp today announced Self-Serve Onboarding for Analytics Pro,
letting enterprise teams get new members productive in under a day — no IT ticket required.

## The problem

When a new analyst joins a team, getting them access to dashboards and data
takes two to three weeks. IT handles provisioning, admins configure permissions
manually, and new hires spend their first days waiting instead of working.
For fast-moving teams, this delay costs real productivity.

## Our solution

Self-Serve Onboarding lets team admins invite new members, assign role-based
permissions, and complete setup in under 30 minutes. New hires receive a guided
setup flow and are ready to explore dashboards on day one.

## Customer quote

"Our last analyst hire was productive on day one — I didn't have to open
a single IT ticket."
— Jordan M., Head of Revenue Analytics

[Continues...]
```

## Tips for better PR/FAQs

**Start with the headline:**
If you can't write a one-sentence headline a customer would care about, the problem isn't clear enough yet.

**Write for a customer, not an engineer:**
Avoid technical terms in the press release. If a customer wouldn't say it, don't write it.

**Make the FAQs hard:**
Include the questions your toughest stakeholder would ask — resourcing, timeline, risk, why not a competitor solution.

**Iterate on the customer quote:**
If the quote sounds generic, the value proposition is generic. Keep refining until the quote is specific and believable.

**Use it as a forcing function:**
The PR/FAQ is a decision-making tool. If a feature doesn't improve the press release, question whether it belongs in scope.
