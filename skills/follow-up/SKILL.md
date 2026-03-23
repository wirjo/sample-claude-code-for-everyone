---
name: follow-up
description: Generate personalized follow-up emails after sales calls or meetings
---

# Follow-Up Email Generator

Create personalized, professional follow-up emails after sales calls or meetings that reinforce value and drive next steps.

## What this skill does

Takes your meeting or call notes and generates:
- Personalized opening referencing the conversation
- Summary of what was discussed
- Key points or takeaways
- Clear next steps with owners and dates
- Value reinforcement (why what you discussed matters)
- Relevant resources or materials
- Professional close with clear call-to-action

## How to use

1. Have your call or meeting notes ready
2. Run `:code[/follow-up]{showCopyAction=true}`
3. Provide the notes
4. Get a polished follow-up email ready to send

## Input format

Meeting or call notes including:
- Who attended
- What was discussed
- Pain points or needs mentioned
- Next steps agreed upon
- Any materials or resources to share
- Timeline or dates mentioned

## Output structure

```
Subject: [Personalized, relevant subject line]

Hi [First Name],

[Personalized opening referencing something specific from the conversation]

[Brief summary of what was discussed - 1-2 sentences]

**Key Takeaways:**
- [Point 1 relevant to their needs]
- [Point 2 showing how you can help]
- [Point 3 building on conversation]

[Value statement - why this matters to them]

**Next Steps:**
- [Action item 1] - [Owner] by [Date]
- [Action item 2] - [Owner] by [Date]
- [Action item 3] - [Owner] by [Date]

[If applicable: "As discussed, I'm attaching/including..."]
- [Resource 1 with brief description]
- [Resource 2 with brief description]

[Optional: Handle any concerns or questions raised]

[Clear call-to-action: what you want them to do]

Looking forward to [specific next interaction],

[Your name]
[Title]
[Contact information]
```

## Example

**Input:**
```
Call with John Smith from Acme Corp. Discussed their analytics challenges.
Main pain: system crashes during month-end. They have $100K budget approved.
Need to decide by end of April to start May 1. Next step: schedule technical
deep dive for March 22. Send them case studies about reliability. John will
check with CTO about availability.
```

**Output:**
```
Subject: Following up - Acme Corp Analytics Discussion

Hi John,

Thanks for taking the time to walk me through Acme's analytics challenges
today. I appreciate you being candid about the month-end reliability issues
and how they're impacting your reporting cycles.

**Key Takeaways from Our Conversation:**
- Month-end crashes are creating significant workflow disruptions and
  requiring manual workarounds
- You need a solution that reliably handles 500+ concurrent users during
  peak periods
- Timeline is critical - you need to be operational by May 1
- Budget of $100K is approved and allocated

Based on what you shared, our platform's distributed architecture and 99.9%
uptime SLA directly address your reliability concerns. Several of our
customers came to us with similar month-end processing challenges and saw
immediate improvements.

**Next Steps:**
- I'll send calendar invite for technical deep dive - March 22 (pending
  confirmation of CTO availability)
- You'll check CTO's calendar and confirm by end of this week
- I'm sharing case studies below showing how we've solved similar
  reliability challenges

**Relevant Case Studies:**
- TechCorp: Eliminated month-end crashes and improved processing time by 75%
- DataCo: Scaled from 200 to 800 concurrent users with zero downtime
- FinServ Inc: Achieved 99.98% uptime over 18-month period

I've also included our technical architecture overview that explains how
we handle high-concurrency scenarios without performance degradation.

Any questions before our technical deep dive? I want to make sure we cover
everything your CTO will want to see.

Looking forward to the technical discussion on March 22nd,

[Your name]
Account Executive
[Phone]
[Email]
[Calendar link]

P.S. - Let me know if you need anything else to help with internal
discussions before our next call.
```

## Tips for better follow-ups

**Send within 24 hours:**
Strike while the conversation is fresh in everyone's mind.

**Reference something specific:**
Show you were listening by mentioning a detail from the conversation.

**Keep it scannable:**
Use bullet points, short paragraphs, and clear headers.

**Make next steps explicit:**
Who does what by when - no ambiguity about what happens next.

**Reinforce value, don't re-pitch:**
Remind them why this matters to them, don't repeat your sales pitch.

**Include everything they need:**
Attachments, links, calendar invites - make it easy for them to act.

**One clear call-to-action:**
Don't give them five things to do. Pick the most important next step.

**Personalize the subject line:**
"Following up" is boring. "Next steps for Acme Corp analytics project" is better.

## Common follow-up scenarios

**After discovery call:**
- Summarize their challenges and needs
- Confirm you understood correctly
- Propose next steps (demo, deep dive, POC)

**After demo:**
- Highlight features they were most excited about
- Address any concerns that came up
- Move toward proposal or next milestone

**After proposal:**
- Reinforce key value points
- Make it easy to say yes (clear next step)
- Address any lingering questions

**After meeting with new stakeholder:**
- Acknowledge their specific concerns or perspective
- Show how solution addresses their priorities
- Build relationship and credibility

**When they've gone quiet:**
- Reference last conversation
- Provide new relevant information (not just "checking in")
- Easy response path (yes/no question or simple ask)
