---
name: meeting-notes
description: Process meeting transcripts into structured notes with action items
---

# Meeting Notes Processor

Process raw meeting notes or transcripts into structured, actionable summaries.

## What this skill does

Takes unstructured meeting notes and creates:
- List of attendees
- Key decisions made
- Action items with owners and due dates
- Next steps and timeline
- Parking lot items (if any)

## How to use

1. Have your meeting notes in a text file or paste them directly
2. Run `:code[/meeting-notes]{showCopyAction=true}` or mention this skill
3. Provide the meeting notes when prompted
4. Review the structured output

## Input format

Any text containing:
- Meeting discussion
- Decisions made
- Tasks or action items
- People mentioned

## Output format

```
Meeting: [Title]
Date: [Date]

Attendees:
- Person 1
- Person 2

Key Decisions:
1. Decision 1
2. Decision 2

Action Items:
- [ ] Task 1 (Owner: Name, Due: Date)
- [ ] Task 2 (Owner: Name, Due: Date)

Next Steps:
- Next meeting date
- Follow-up required

Parking Lot:
- Topic to revisit later
```

## Example

**Input:**
```
Team sync yesterday. Sarah, Mike, and Lisa discussed the new feature.
Mike will handle backend (2 weeks). Lisa designs UI (1 week).
Launch target: end of month.
```

**Output:**
```
Meeting: Team Sync

Attendees:
- Sarah
- Mike
- Lisa

Key Decisions:
- New feature launch target: end of month

Action Items:
- [ ] Backend development (Owner: Mike, Due: 2 weeks)
- [ ] UI design (Owner: Lisa, Due: 1 week)
```

## Customization tips

You can adjust the output format by adding instructions like:
- "Include a summary section at the top"
- "Add a risks and blockers section"
- "Format as markdown for GitHub"
- "Export as CSV for project management tool"
