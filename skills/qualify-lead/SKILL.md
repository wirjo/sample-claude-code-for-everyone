---
name: qualify-lead
description: Qualify sales leads using BANT criteria from call notes or meeting transcripts
---

# Qualify Lead Skill

Analyze call notes or meeting transcripts to qualify leads using the BANT framework (Budget, Authority, Need, Timeline).

## What this skill does

Takes your sales call notes and creates:
- BANT criteria analysis with confidence levels
- Lead quality score (1-10)
- Recommended next steps
- Risk factors and red flags
- Competitive considerations
- Deal probability assessment

## How to use

1. Have your call notes or meeting transcript ready
2. Run `:code[/qualify-lead]{showCopyAction=true}`
3. Provide the notes
4. Get qualification assessment and recommendations

## Input format

Call notes or transcript containing:
- What the prospect said about their needs
- Budget discussions or financial mentions
- Decision-making process and stakeholders
- Timeline mentions and urgency drivers
- Any concerns, objections, or competitors mentioned

## Output structure

```
# Lead Qualification: [Company Name]

**Contact:** [Name, Title]
**Date:** [Date]
**Account Executive:** [Your name]

## BANT Assessment

### Budget: [High/Medium/Low confidence]
**Evidence:**
- [Specific mentions of budget or spending]

**Assessment:**
- Allocated budget: [Amount or range]
- Budget authority: [Who controls it]
- Funding status: [Approved/pending/unknown]

**Score:** [0-10]

---

### Authority: [High/Medium/Low confidence]
**Evidence:**
- [Who you spoke with and their role]

**Assessment:**
- Primary contact: [Name, role, influence level]
- Decision maker: [Who makes final call]
- Decision process: [How decisions are made]
- Additional stakeholders: [Who else is involved]
- Technical veto power: [Anyone who can block the deal]

**Score:** [0-10]

---

### Need: [High/Medium/Low confidence]
**Evidence:**
- [What problem they're trying to solve]

**Assessment:**
- Problem: [What they're trying to solve]
- Pain level: [How urgent - Low/Medium/High/Critical]
- Current solution: [What they use now]
- Cost of inaction: [What happens if they don't solve this]
- Fit with our solution: [How well we address the need]

**Score:** [0-10]

---

### Timeline: [High/Medium/Low confidence]
**Evidence:**
- [Specific dates or timeframes mentioned]

**Assessment:**
- Target decision date: [When they need to decide]
- Target implementation date: [When they need solution live]
- Timeline drivers: [Why this timeline]
- Key milestones: [Important dates in their process]
- Urgency level: [Low/Medium/High]

**Score:** [0-10]

---

## Overall Lead Quality

**Total BANT Score:** [Average of 4 scores] / 10

**Lead Quality:** [Hot/Warm/Cold]
- Hot (8-10): High probability, move fast
- Warm (5-7): Promising, needs development
- Cold (0-4): Low probability, nurture or disqualify

## Opportunity Details

**Estimated Deal Size:** $[amount]
**Close Probability:** [percentage]%
**Expected Close Date:** [date]

## Competitive Situation

**Competitors Mentioned:**
- [Competitor name]: [Status/position]

**Our Position:**
[Strong/Competitive/Weak and why]

## Risk Factors

**Red Flags:**
- ⚠️ [Risk 1 with description]
- ⚠️ [Risk 2 with description]

**Mitigation Strategies:**
- [How to address each risk]

## Recommended Next Steps

**Immediate Actions (This Week):**
1. [Specific action with owner and date]
2. [Specific action with owner and date]

**Short-term Actions (Next 2 Weeks):**
1. [Action item]
2. [Action item]

**Resources Needed:**
- [Sales engineer, executive sponsor, customer reference, etc.]

## Key Questions to Answer

**Still Unknown:**
- [ ] Question that needs clarification
- [ ] Information we still need

**How to Get Answers:**
- [Strategy for getting missing information]

## Notes

[Additional context, interesting quotes, or observations]
```

## Example

**Input:**
```
Call with Acme Corp. Spoke with John Smith (VP Engineering). They have
$100K budget approved. Need to replace current analytics tool - crashes
during month-end. Decision by end of April. Also evaluating Competitor A
and Competitor B. John is the decision maker but CTO has to approve.
Want to start May 1st.
```

**Output:**
```
# Lead Qualification: Acme Corp

**Contact:** John Smith, VP Engineering
**Date:** March 15, 2025
**Account Executive:** [Your name]

## BANT Assessment

### Budget: High confidence
**Evidence:**
- "$100K budget approved"
- Currently spending on analytics tool

**Assessment:**
- Allocated budget: $100,000
- Budget authority: Already approved at executive level
- Funding status: Approved and allocated

**Score:** 9/10

---

### Authority: High confidence
**Evidence:**
- John Smith is VP Engineering and identified as decision maker
- CTO approval required

**Assessment:**
- Primary contact: John Smith, VP Engineering (high influence)
- Decision maker: John Smith with CTO approval
- Decision process: VP makes recommendation, CTO approves
- Additional stakeholders: CTO (approval required)
- Technical veto power: CTO could block

**Score:** 8/10

---

### Need: High confidence
**Evidence:**
- Current tool "crashes during month-end"
- Need to "replace current analytics tool"

**Assessment:**
- Problem: System reliability issues affecting critical business processes
- Pain level: High (impacts month-end close)
- Current solution: Analytics tool with reliability problems
- Cost of inaction: Continued month-end disruptions, risk to business
- Fit with our solution: Strong - we solve reliability and performance

**Score:** 9/10

---

### Timeline: High confidence
**Evidence:**
- "Decision by end of April"
- "Want to start May 1st"

**Assessment:**
- Target decision date: End of April 2025
- Target implementation date: May 1, 2025
- Timeline drivers: Month-end pain creates urgency
- Key milestones: Decision in 6 weeks, implementation 8 weeks
- Urgency level: High

**Score:** 9/10

---

## Overall Lead Quality

**Total BANT Score:** 8.75 / 10

**Lead Quality:** Hot
This is a high-quality opportunity with strong BANT alignment.
All criteria are well-qualified with clear evidence.

## Opportunity Details

**Estimated Deal Size:** $100,000 annually
**Close Probability:** 70%
**Expected Close Date:** April 30, 2025

## Competitive Situation

**Competitors Mentioned:**
- Competitor A: In evaluation
- Competitor B: In evaluation

**Our Position:** Competitive
We're one of three vendors being evaluated. Need to differentiate on
reliability and implementation speed. Their pain point (crashes) plays
to our strength.

## Risk Factors

**Red Flags:**
- ⚠️ Competitive evaluation with 2 other vendors
- ⚠️ CTO approval required (haven't met them yet)
- ⚠️ Aggressive timeline (6 weeks to decision)

**Mitigation Strategies:**
- Schedule CTO meeting this week
- Provide reliability case studies and references
- Expedite POC to demonstrate stability
- Emphasize fast implementation timeline

## Recommended Next Steps

**Immediate Actions (This Week):**
1. Request meeting with CTO (John to coordinate) - by March 18
2. Send reliability case studies and uptime statistics - by March 16
3. Provide 3 customer references with similar use cases - by March 17

**Short-term Actions (Next 2 Weeks):**
1. Schedule technical deep dive to discuss architecture - March 22
2. Begin POC planning and setup - by March 25
3. Create custom demo focused on month-end reporting scenarios

**Resources Needed:**
- Sales engineer for technical deep dive
- Customer references in similar industry
- Executive sponsor for CTO-level conversation

## Key Questions to Answer

**Still Unknown:**
- [ ] What's CTO's biggest concern or criteria for approval?
- [ ] What specifically causes the month-end crashes?
- [ ] What's the current contract end date with existing vendor?
- [ ] Why are they evaluating these specific competitors?
- [ ] Who on their team will manage the implementation?

**How to Get Answers:**
- Schedule follow-up call with John to dive deeper on technical issues
- Request to meet with technical team who experiences the crashes
- Ask about current vendor contract in next conversation

## Notes

Strong opportunity with clear pain point. John is engaged and has urgency.
Need to move fast given competitive situation and tight timeline. CTO
meeting is critical - don't move forward without it.
```

## Tips for better lead qualification

**Listen for budget signals:**
Not just "Do you have budget?" but "When was it approved?" "Who approved it?"

**Map the decision process:**
Decision maker ≠ only stakeholder. Find everyone who can say no.

**Quantify the pain:**
Ask "What does this problem cost you?" in time, money, or lost opportunity.

**Challenge vague timelines:**
"Q2" or "Soon" isn't specific enough. Find the real driver.

**Note what's NOT said:**
If they avoid budget talk or timeline questions, that's a red flag.

**Update after every interaction:**
Qualification isn't one-and-done. Update as you learn more.
