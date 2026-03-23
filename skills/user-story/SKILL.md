---
name: user-story
description: Convert requirements into well-formatted user stories with acceptance criteria
---

# User Story Generator

Convert feature requirements into properly formatted user stories with clear acceptance criteria.

## What this skill does

Takes feature descriptions or requirements and creates:
- Properly formatted user stories (As a... I want... So that...)
- Specific acceptance criteria for each story
- Story prioritization (Must-Have, Should-Have, Nice-to-Have)
- Story point estimates (optional)
- Dependencies between stories

## How to use

1. Have your feature requirements or descriptions ready
2. Run `:code[/user-story]{showCopyAction=true}`
3. Provide the requirements
4. Get formatted user stories ready for your backlog

## Input format

Can be any of:
- Feature descriptions ("Users need to export reports")
- Meeting notes about features
- Customer feedback or requests
- Bullet points of functionality needed

## Output structure

```
## User Story 1: [Brief Title]

**As a** [user type],
**I want** [capability],
**So that** [benefit/value]

**Acceptance Criteria:**
- [ ] Specific, testable condition 1
- [ ] Specific, testable condition 2
- [ ] Specific, testable condition 3

**Priority:** Must-Have / Should-Have / Nice-to-Have
**Estimated Effort:** [Story points or t-shirt size]
**Dependencies:** [Related stories or requirements]

---

[Repeat for additional stories]
```

## Example

**Input:**
```
Users need to export dashboard data to Excel and PDF. They want to schedule
automated reports to be emailed weekly. Export should include all filters
and date ranges currently applied. Customers specifically asked for company
branding on PDF exports.
```

**Output:**
```
## User Story 1: Export Dashboard to Excel

**As a** dashboard user,
**I want** to export my current dashboard view to Excel,
**So that** I can perform additional analysis and share data with my team

**Acceptance Criteria:**
- [ ] Export button is prominently displayed on dashboard
- [ ] Excel file includes all data from current dashboard view
- [ ] Applied filters and date ranges are preserved in export
- [ ] Export completes in under 10 seconds for datasets up to 10K rows
- [ ] File naming includes dashboard name and export date

**Priority:** Must-Have
**Estimated Effort:** 3 story points
**Dependencies:** None

---

## User Story 2: Export Dashboard to Branded PDF

**As a** dashboard user,
**I want** to export my dashboard to a PDF with my company branding,
**So that** I can share professional-looking reports with executives and clients

**Acceptance Criteria:**
- [ ] PDF export option available alongside Excel
- [ ] PDF includes company logo from user profile settings
- [ ] Charts and visualizations render clearly in PDF format
- [ ] PDF is optimized for printing (proper page breaks, margins)
- [ ] Export includes header with company name and report date

**Priority:** Should-Have
**Estimated Effort:** 5 story points
**Dependencies:** Requires company branding settings in user profile

---

## User Story 3: Schedule Automated Reports

**As a** dashboard user,
**I want** to schedule reports to be automatically emailed weekly,
**So that** I don't have to manually export and send reports each week

**Acceptance Criteria:**
- [ ] User can configure report schedule (daily, weekly, monthly)
- [ ] User can specify email recipients
- [ ] User can choose export format (Excel, PDF, or both)
- [ ] Email includes report as attachment and brief summary in body
- [ ] User receives confirmation when report is sent
- [ ] User can view history of sent reports

**Priority:** Nice-to-Have
**Estimated Effort:** 8 story points
**Dependencies:** Stories 1 and 2 (export functionality must exist first)

---

## Summary

**Total Stories:** 3
**Must-Have:** 1
**Should-Have:** 1
**Nice-to-Have:** 1
**Total Estimated Effort:** 16 story points
```

## Tips for better user stories

**Follow the format:**
"As a [who] I want [what] so that [why]" - the "why" is crucial for understanding value.

**Make acceptance criteria specific:**
Use measurable conditions (e.g., "completes in under 10 seconds" not "is fast").

**One story per capability:**
Don't try to fit too much in one story. Break down complex features.

**Include the user benefit:**
The "so that" clause should explain real value, not just restate the want.

**Consider edge cases:**
Add acceptance criteria for error states, empty states, and edge cases.

**Size appropriately:**
If a story feels too large (>8 points), break it into smaller stories.
