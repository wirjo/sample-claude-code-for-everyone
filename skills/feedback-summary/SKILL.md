---
name: feedback-summary
description: Synthesize feedback from multiple sources into actionable themes and priorities
---

# Feedback Summary Generator

Synthesize feedback from multiple sources (stakeholders, user testing, surveys, design reviews) into organized themes with clear priorities and action items.

## What this skill does

Takes scattered feedback from various sources and creates:
- Organized feedback themes and patterns
- Prioritized list of changes
- Conflicting feedback identified and reconciled
- Actionable recommendations
- Clear next steps with owners

## How to use

1. Collect feedback from all sources (meeting notes, emails, surveys, design reviews)
2. Run `:code[/feedback-summary]{showCopyAction=true}`
3. Provide all feedback inputs
4. Get organized summary with themes and priorities

**Time saved:** Manually organizing feedback from 5+ stakeholders takes 2-3 hours. With this skill: 15-20 minutes.

## Input format

Feedback from any sources:
- Design review meeting notes
- User testing observations
- Survey responses
- Email feedback
- Slack messages
- Stakeholder comments
- Analytics or usability data

## Output structure

```
# Feedback Summary: [Design/Feature Name]

**Project:** [Name]
**Feedback Period:** [Dates]
**Sources:** [List of where feedback came from]
**Compiled by:** [Your name]
**Date:** [Date]

---

## Executive Summary

[2-3 paragraph overview of key findings]

**Highlights:**
- ✅ [What's working well]
- ⚠️ [What needs attention]
- 🔄 [What needs significant rework]
- 💡 [Unexpected insights or opportunities]

**Recommended Actions:**
[Top 3-5 most important changes to make]

---

## Feedback Sources

| Source | Date | Participants/Respondents |
|--------|------|--------------------------|
| Design Review | [Date] | [Names/roles] |
| User Testing | [Date] | [# participants] |
| Stakeholder Survey | [Date] | [# respondents] |
| Email Feedback | [Date range] | [Names] |

**Total Feedback Points:** [Number of distinct pieces of feedback received]

---

## Themes & Patterns

### Theme 1: [Name of theme - e.g., "Navigation Clarity"]

**Priority:** 🔴 High / 🟡 Medium / 🟢 Low

**What We Heard:**
[Summary of feedback related to this theme]

**Quotes:**
- "[Direct quote from stakeholder/user]" - [Source]
- "[Another relevant quote]" - [Source]

**Frequency:**
Mentioned by [X] out of [Y] sources

**Impact:**
[How this affects users, business goals, or project success]

**Recommendation:**
[Specific action to address this feedback]

**Effort Estimate:**
[Low/Medium/High or Small/Medium/Large]

---

### Theme 2: [Another theme - e.g., "Performance Concerns"]

[Repeat structure for each theme]

---

## Positive Feedback

**What's Working Well:**

**1. [Aspect that received positive feedback]**
- Mentioned by: [Sources]
- Key quote: "[Quote]"
- Why it matters: [Impact]
- Recommendation: Keep and potentially amplify

**2. [Another positive aspect]**
[Repeat structure]

---

## Areas for Improvement

**Categorized by Priority:**

### 🔴 Critical (Must Fix)

**1. [Issue description]**
- **Feedback:** [What people said]
- **Sources:** [Who mentioned it]
- **User Impact:** [How this affects users]
- **Business Impact:** [How this affects business goals]
- **Recommendation:** [What to do]
- **Owner:** [Who should fix it]
- **Timeframe:** [When to fix it]

**2. [Another critical issue]**
[Repeat structure]

---

### 🟡 Important (Should Fix)

**1. [Issue description]**
[Use same structure as critical items]

---

### 🟢 Nice to Have (Consider for Future)

**1. [Issue description]**
[Use same structure]

---

## Conflicting Feedback

**Issue: [Description of conflict]**

**Perspective A:**
- Who said it: [Sources]
- Their reasoning: [Why they think this]

**Perspective B:**
- Who said it: [Sources]
- Their reasoning: [Why they disagree]

**Analysis:**
[Your assessment of the conflict]

**Recommendation:**
[How to resolve - pick one, compromise, test both, etc.]

---

## User Segments

### [Segment 1 - e.g., "Power Users"]

**Unique Feedback:**
- [Feedback specific to this segment]

**Priorities:**
- [What matters most to this segment]

**Implications:**
[How their needs might differ from other segments]

---

### [Segment 2 - e.g., "New Users"]

[Repeat structure for each significant user segment]

---

## Quantitative Data

### Survey Ratings

| Aspect | Average Rating | Responses |
|--------|----------------|-----------|
| Overall Design | 4.2 / 5 | 45 |
| Ease of Use | 3.8 / 5 | 45 |
| Visual Appeal | 4.5 / 5 | 45 |
| Feature Completeness | 3.5 / 5 | 45 |

### Task Success Rates (User Testing)

| Task | Success Rate | Avg Time |
|------|--------------|----------|
| [Task 1] | 85% | 2:30 |
| [Task 2] | 60% | 4:15 |
| [Task 3] | 95% | 1:45 |

**Key Insights:**
[What the numbers tell us]

---

## Accessibility Feedback

**Issues Identified:**
- [Accessibility concern 1]
- [Accessibility concern 2]

**Priority:**
[High/Medium/Low based on impact]

**WCAG Compliance:**
- [Any specific WCAG criteria at risk]

**Recommendations:**
[How to address accessibility issues]

---

## Technical Feasibility

**Engineering Feedback:**

**Easy to Implement:**
- [Feedback items that are technically straightforward]

**Complex to Implement:**
- [Items requiring significant technical work]
- [Estimated effort for each]

**Technical Constraints:**
- [Limitations that affect design decisions]

**Recommendations:**
[Prioritization based on effort vs impact]

---

## Timeline & Phasing

### Phase 1: Quick Wins (1-2 weeks)
- [ ] [High-impact, low-effort changes]
- [ ] [Another quick fix]

### Phase 2: Important Improvements (3-4 weeks)
- [ ] [Medium-effort, high-impact changes]
- [ ] [Another important change]

### Phase 3: Future Enhancements (Post-Launch)
- [ ] [Nice-to-haves or complex changes]
- [ ] [Items for next iteration]

---

## Action Items

**Immediate Next Steps:**

- [ ] [Action 1] - [Owner] by [Date]
  - Dependencies: [What's needed first]
  - Blocked by: [Any blockers]

- [ ] [Action 2] - [Owner] by [Date]

- [ ] [Action 3] - [Owner] by [Date]

**Follow-up Needed:**

- [ ] [Clarification needed on item X] - [Who to ask] by [Date]
- [ ] [User testing on specific aspect] - [Owner] by [Date]
- [ ] [Stakeholder alignment on decision Y] - [Who] by [Date]

---

## Questions & Unknowns

**Still Need to Determine:**

1. [Question 1 that needs answering]
   - Why it matters: [Impact]
   - How to answer: [Approach]
   - Who decides: [Decision maker]

2. [Question 2]
   [Same structure]

---

## Appendix: Raw Feedback

### Design Review (March 10)

**Product Team (Sarah):**
"[Full feedback notes or quotes]"

**Engineering Team (Mike):**
"[Full feedback notes]"

**Sales Team (Tom):**
"[Full feedback notes]"

---

### User Testing Sessions (March 12-14)

**Participant 1 (Power User):**
"[Observations and quotes]"

**Participant 2 (New User):**
"[Observations and quotes]"

[Include all detailed feedback for reference]

---

## Version History

**v1.0 - [Date]:**
Initial feedback compilation

**v1.1 - [Date]:**
[Updates after additional feedback or clarifications]
```

## Example

**Input:**
```
Design review feedback collected:

Sarah (PM): Overall direction great. Need filtering options. Color scheme
might be too bright. Consider dark mode.

Mike (Engineering): Animations look good but might impact performance.
Need to clarify data refresh intervals. Some interactions complex to
implement.

Tom (Sales): Customers will love it. Export functionality needs to be
prominent. Acme Corp wants PDF export with branding. Mobile view critical.

Lisa (Design): Positive overall with minor adjustments. Spacing inconsistent.
Font sizes in tables too small. Need better loading states.

User testing (5 participants): Navigation confusing (3 mentions). Love the
clean interface (all 5). Want more customization (4 mentions). Mobile view
needs work (2 mentions).
```

**Output:**
```
# Feedback Summary: Dashboard Redesign v2.0

**Project:** Dashboard Platform Redesign
**Feedback Period:** March 10-15, 2025
**Sources:** Design review, User testing (5 participants), Stakeholder emails
**Compiled by:** Design Team
**Date:** March 16, 2025

---

## Executive Summary

Feedback on Dashboard Redesign v2.0 is overwhelmingly positive, with all
stakeholders and users praising the clean, modern interface. However,
several critical themes emerged that need addressing before launch:
navigation clarity (mentioned by 3/5 users), mobile optimization (raised
by sales and users), and export functionality prominence (sales requirement).

The proposed features are technically feasible with minor complexity concerns
around animations and real-time updates. Engineering estimates 2-3 weeks for
critical fixes, 1 week for design refinements.

**Highlights:**
- ✅ Clean, modern interface praised universally
- ⚠️ Navigation needs simplification for new users
- 🔄 Mobile view requires significant rework
- 💡 Opportunity: Dark mode highly requested, could be differentiator

**Recommended Actions:**
1. Simplify navigation with collapsible sidebar (Week 1)
2. Redesign mobile/tablet views with focus on touch targets (Week 2)
3. Make export functionality more prominent (Week 1)
4. Add dark mode to backlog for future release (Post-launch)
5. Fix spacing and typography inconsistencies (Week 1)

---

## Feedback Sources

| Source | Date | Participants/Respondents |
|--------|------|--------------------------|
| Design Review Meeting | March 10 | 4 stakeholders (PM, Eng, Sales, Design) |
| User Testing Sessions | March 12-14 | 5 participants (3 power users, 2 new users) |
| Sales Team Email | March 13 | Tom (Sales), customer quotes |

**Total Feedback Points:** 27 distinct pieces of feedback

---

## Themes & Patterns

### Theme 1: Navigation & Information Architecture

**Priority:** 🔴 High

**What We Heard:**
Users find the current navigation structure confusing, particularly new users
who aren't familiar with the product. The left sidebar takes up significant
space and isn't collapsible. Users expect common patterns (hamburger menu
on mobile, collapsible nav on desktop).

**Quotes:**
- "I couldn't figure out where to go to create a new dashboard" - User Testing Participant 2
- "The left sidebar takes up too much space on smaller screens" - Sarah (PM)
- "Navigation should be collapsible" - Sarah (PM)

**Frequency:**
Mentioned by 4 out of 7 sources (3 users, 1 stakeholder)

**Impact:**
Navigation issues create friction for new users and affect adoption. If users
can't find features easily, the product feels more complex than it is.

**Recommendation:**
Make navigation collapsible with persistent icons. Add hamburger menu for
mobile. Consider onboarding tour for first-time users.

**Effort Estimate:**
Medium (1 week design + 2 weeks development)

---

### Theme 2: Export Functionality

**Priority:** 🔴 High

**What We Heard:**
Export features (PDF, Excel) need to be more prominent and discoverable.
Sales team reports that customers specifically ask about export capabilities
early in sales conversations. PDF exports need white-labeling/branding
options.

**Quotes:**
- "Export functionality needs to be prominent - this comes up on every demo" - Tom (Sales)
- "Acme Corp specifically asked for PDF export with company branding" - Tom (Sales)

**Frequency:**
Mentioned by sales team multiple times, customer feedback

**Impact:**
Export is a deal requirement for enterprise customers. If not prominent,
prospects assume it doesn't exist.

**Recommendation:**
Add prominent "Export" button in dashboard header. Implement company branding
options for PDF exports (logo, company name). Create export options modal.

**Effort Estimate:**
Medium (Export button: Low, Branding: Medium)

---

### Theme 3: Mobile & Tablet Experience

**Priority:** 🔴 High

**What We Heard:**
Current mobile view is cramped and difficult to use. Tablet view (iPad)
specifically mentioned as important for executives who want to review
dashboards on the go. Touch targets need to be larger.

**Quotes:**
- "Mobile view is critical - several customers access on tablets" - Tom (Sales)
- "The mobile view feels cramped" - User Testing Participant 4
- "Hard to tap buttons on my phone" - User Testing Participant 5

**Frequency:**
Mentioned by 3 sources (1 stakeholder, 2 users)

**Impact:**
With remote work, executives view dashboards on tablets frequently. Poor
mobile experience limits use cases and creates impression of incomplete
product.

**Recommendation:**
Redesign mobile/tablet views prioritizing touch targets (44x44px minimum),
readable font sizes, and comfortable spacing. Consider mobile-first design
approach.

**Effort Estimate:**
High (2 weeks design + 3 weeks development)

---

### Theme 4: Performance & Technical Feasibility

**Priority:** 🟡 Medium

**What We Heard:**
Engineering team concerned about animation performance on older devices.
Real-time data update intervals need clarification. Some proposed interactions
may be technically complex.

**Quotes:**
- "Animations look good but might impact performance on older devices" - Mike (Engineering)
- "Need to clarify data refresh intervals" - Mike (Engineering)
- "Some interactions complex to implement" - Mike (Engineering)

**Frequency:**
Raised by engineering team

**Impact:**
Performance issues could negate benefits of beautiful design. Complex
implementation could delay launch.

**Recommendation:**
Make animations optional based on device capability (use prefers-reduced-motion).
Define specific refresh intervals (every 30 seconds for real-time, every 5
minutes for historical). Simplify complex interactions or phase for v2.

**Effort Estimate:**
Low to Medium (performance optimization: ongoing, simplification: varies by
interaction)

---

### Theme 5: Visual Design Details

**Priority:** 🟢 Low

**What We Heard:**
Minor inconsistencies in spacing, font sizes need adjustment, loading states
need polish. These don't block launch but should be addressed for overall
quality.

**Quotes:**
- "Spacing between cards needs to be more consistent" - Lisa (Design)
- "Font sizes in data tables are too small" - Lisa (Design)
- "Loading states need more polish" - Lisa (Design)

**Frequency:**
Identified by design team during review

**Impact:**
Minor impact on usability but affects overall polish and professional feel.

**Recommendation:**
Create systematic spacing scale, increase table font sizes from 12px to 14px,
design polished skeleton loaders for all loading states.

**Effort Estimate:**
Low (1 week total for all fixes)

---

## Positive Feedback

**What's Working Well:**

**1. Clean, Modern Interface**
- Mentioned by: All 5 users, all 4 stakeholders
- Key quote: "Love the clean interface" - Multiple users
- Why it matters: Strong positive signal that overall direction is right
- Recommendation: Maintain this direction, build on success

**2. Card-Based Layout**
- Mentioned by: Sarah (PM), 4/5 users
- Key quote: "Card-based approach works really well" - Sarah (PM)
- Why it matters: Validates core UI pattern choice
- Recommendation: Keep card pattern, extend to other areas

**3. Color Palette**
- Mentioned by: Design team, 3/5 users
- Key quote: "Chart colors are great" - User Testing Participant 1
- Why it matters: Though brightness concern noted, overall positive
- Recommendation: Keep palette, add dark mode variant option

**4. Dark Mode Design**
- Mentioned by: Sarah (PM), 2/5 users
- Key quote: "Dark mode is excellent - much easier on the eyes" - User Testing Participant 3
- Why it matters: Differentiator, improves usability for long sessions
- Recommendation: Prioritize for launch if possible, otherwise shortly after

---

## Areas for Improvement

**Categorized by Priority:**

### 🔴 Critical (Must Fix Before Launch)

**1. Navigation Clarity**
- **Feedback:** Confusing for new users, takes too much space, not collapsible
- **Sources:** 3 users, 1 stakeholder (4 total)
- **User Impact:** Users can't find features, creates friction
- **Business Impact:** Affects adoption, increases support burden
- **Recommendation:** Make sidebar collapsible, add clear icons, implement
  hamburger menu for mobile
- **Owner:** Design (Lisa), Engineering (Mike)
- **Timeframe:** Week 1-2

**2. Export Prominence**
- **Feedback:** Customers assume it doesn't exist if not visible
- **Sources:** Sales team, customer feedback
- **User Impact:** Users don't discover export capability
- **Business Impact:** Deal blocker for enterprise customers
- **Recommendation:** Prominent export button in header, branding options
  for PDF
- **Owner:** Design (Lisa), Engineering (Mike)
- **Timeframe:** Week 1

**3. Mobile/Tablet Optimization**
- **Feedback:** Cramped, hard to use, touch targets too small
- **Sources:** 2 users, sales team
- **User Impact:** Poor experience on mobile devices
- **Business Impact:** Limits use cases, especially for executive users
- **Recommendation:** Redesign mobile views, 44x44px touch targets, better
  spacing
- **Owner:** Design (Lisa)
- **Timeframe:** Week 2-3

---

### 🟡 Important (Should Fix)

**1. Performance Optimization**
- **Feedback:** Animations may impact older devices, refresh intervals unclear
- **Sources:** Engineering team
- **User Impact:** Potential lag or poor experience on older hardware
- **Business Impact:** User frustration, potential churn
- **Recommendation:** Optional animations, defined refresh intervals, test
  on range of devices
- **Owner:** Engineering (Mike)
- **Timeframe:** Week 2-3

**2. Visual Design Consistency**
- **Feedback:** Spacing inconsistent, font sizes need adjustment
- **Sources:** Design team
- **User Impact:** Minor usability issues, affects polish
- **Business Impact:** Professional appearance
- **Recommendation:** Systematic spacing scale, increase table fonts, polish
  loading states
- **Owner:** Design (Lisa)
- **Timeframe:** Week 1

---

### 🟢 Nice to Have (Consider for Future)

**1. Customization Options**
- **Feedback:** Users want to customize dashboard layout and widgets
- **Sources:** 4/5 users
- **User Impact:** Increased personalization and relevance
- **Business Impact:** Potential differentiator
- **Recommendation:** Add to post-launch roadmap, research scope
- **Owner:** Product (Sarah)
- **Timeframe:** Post-launch

**2. Dark Mode**
- **Feedback:** Highly requested, already designed
- **Sources:** PM, 2 users
- **User Impact:** Reduced eye strain, modern expectation
- **Business Impact:** Differentiator, improved UX
- **Recommendation:** Evaluate for launch or shortly after
- **Owner:** Design (Lisa), Engineering (Mike)
- **Timeframe:** Week 3 or post-launch

---

## Conflicting Feedback

**Issue: Color Scheme Brightness**

**Perspective A: Too Bright**
- Who said it: Sarah (PM)
- Their reasoning: "Might be too bright for long sessions"

**Perspective B: Colors Are Great**
- Who said it: 3/5 users, design team
- Their reasoning: "Chart colors are great", "Clean and modern"

**Analysis:**
This is likely a personal preference rather than fundamental issue. Dark mode
addresses the concern for users sensitive to brightness.

**Recommendation:**
Keep current color palette (majority positive), but prioritize dark mode
option to give users choice. Monitor post-launch feedback to validate.

---

## User Segments

### Power Users (3 participants)

**Unique Feedback:**
- Want keyboard shortcuts for common actions
- Request advanced filtering and sorting options
- Appreciate customization potential

**Priorities:**
- Efficiency and speed matter most
- Want to avoid mouse clicks where possible
- Value flexibility over simplicity

**Implications:**
Power users will push limits of customization. Consider progressive
disclosure - simple by default, advanced options available.

---

### New Users (2 participants)

**Unique Feedback:**
- Navigation most confusing for this group
- Needed guidance on where to start
- Appreciated clean, uncluttered interface

**Priorities:**
- Clarity and simplicity
- Onboarding and help
- Common patterns over innovation

**Implications:**
Focus on discoverability and clear information architecture. Consider
onboarding tour or contextual help for first-time users.

---

## Quantitative Data

### Survey Ratings

(User testing survey, n=5)

| Aspect | Average Rating | Responses |
|--------|----------------|-----------|
| Overall Design | 4.4 / 5 | 5 |
| Ease of Use | 3.6 / 5 | 5 |
| Visual Appeal | 4.8 / 5 | 5 |
| Feature Completeness | 3.8 / 5 | 5 |

### Task Success Rates (User Testing)

| Task | Success Rate | Avg Time |
|------|--------------|----------|
| Create new dashboard | 60% | 4:15 |
| Export to PDF | 80% | 2:30 |
| Customize dashboard | 40% | 5:45 |
| Navigate to settings | 60% | 3:00 |

**Key Insights:**
- Visual appeal rated highest (4.8/5) - validates design direction
- Ease of use lower (3.6/5) - confirms navigation issues
- Creating dashboard and customization had lowest success rates - priority
  areas for improvement
- Export relatively successful but still needs to be more discoverable

---

## Accessibility Feedback

**Issues Identified:**
- Table font sizes too small (12px - below WCAG recommendation of 14px+)
- Some color combinations may not meet contrast requirements
- Keyboard navigation unclear in some areas

**Priority:**
High - accessibility is table stakes for enterprise customers

**WCAG Compliance:**
- Font size: Currently at risk (WCAG AA recommends 14px minimum for body text)
- Color contrast: Need to verify all combinations meet 4.5:1 ratio
- Keyboard nav: Need clear focus indicators throughout

**Recommendations:**
- Increase table fonts from 12px to 14px
- Run full color contrast audit and fix any failing combinations
- Implement visible focus indicators on all interactive elements (2px solid outline)
- Test with screen reader to ensure proper ARIA labels

---

## Technical Feasibility

**Engineering Feedback:**

**Easy to Implement:**
- Export button prominence (1-2 days)
- Collapsible sidebar (2-3 days)
- Font size increases (1 day)
- Spacing fixes (2-3 days)

**Complex to Implement:**
- PDF branding/white-labeling (1-2 weeks)
- Mobile redesign (3 weeks)
- Real-time refresh optimization (1-2 weeks)
- Dashboard customization (4+ weeks - future)

**Technical Constraints:**
- Animation performance limited on older devices - use progressive enhancement
- Real-time updates require WebSocket infrastructure - define refresh strategy
- Customization requires complex state management - phase 2

**Recommendations:**
Prioritize quick wins (export prominence, collapsible nav, visual fixes)
while design works on mobile redesign. Parallel-track complex items. Consider
phasing customization features for post-launch.

---

## Timeline & Phasing

### Phase 1: Quick Wins (Week 1)
- [ ] Make sidebar collapsible
- [ ] Add prominent export button
- [ ] Fix spacing and typography inconsistencies
- [ ] Increase table font sizes
- [ ] Add clear focus indicators

**Impact:** Addresses critical usability and accessibility issues with minimal
effort.

### Phase 2: Important Improvements (Week 2-3)
- [ ] Redesign mobile and tablet views
- [ ] Implement PDF branding options
- [ ] Optimize animation performance
- [ ] Define and implement data refresh strategy
- [ ] User testing validation round

**Impact:** Addresses remaining critical feedback before launch.

### Phase 3: Future Enhancements (Post-Launch)
- [ ] Dashboard customization features
- [ ] Keyboard shortcuts for power users
- [ ] Advanced filtering options
- [ ] Onboarding tour for new users

**Impact:** Nice-to-have features that enhance experience but not launch-blockers.

---

## Action Items

**Immediate Next Steps:**

- [ ] Update mockups with collapsible sidebar - Lisa by March 20
  - Dependencies: None
  - Blocked by: None

- [ ] Design prominent export button and modal - Lisa by March 20
  - Dependencies: None
  - Blocked by: None

- [ ] Run color contrast audit - Lisa by March 21
  - Dependencies: None
  - Blocked by: None

- [ ] Create mobile/tablet redesign mockups - Lisa by March 27
  - Dependencies: Feedback incorporation
  - Blocked by: None

- [ ] Define data refresh intervals - Mike & Sarah by March 22
  - Dependencies: Product requirements clarification
  - Blocked by: None

- [ ] Increase table font sizes to 14px - Mike by March 23
  - Dependencies: Design approval
  - Blocked by: None

**Follow-up Needed:**

- [ ] Customer validation on PDF branding requirements - Tom by March 24
  - Get specific requirements from Acme Corp

- [ ] User testing on revised navigation - Lisa by March 28
  - Test with 3 new users to validate fixes

- [ ] Performance testing on older devices - Mike by March 30
  - Test on range of hardware to validate optimization

---

## Questions & Unknowns

**Still Need to Determine:**

1. **Dark mode timing: Launch or post-launch?**
   - Why it matters: Highly requested, could be differentiator, but adds scope
   - How to answer: Estimate effort vs. benefit with engineering, make
     priority decision with product
   - Who decides: Sarah (PM) with Mike (Engineering) input
   - Deadline: March 20

2. **Level of customization to support initially**
   - Why it matters: Users want it, but complex to build
   - How to answer: Define MVP customization vs. full customization
   - Who decides: Sarah (PM)
   - Deadline: March 22 (for roadmap planning)

3. **Mobile-first vs. desktop-first for future designs**
   - Why it matters: Affects design approach going forward
   - How to answer: Review usage analytics, stakeholder discussion
   - Who decides: Design + Product teams
   - Deadline: March 25

---

## Version History

**v1.0 - March 16, 2025:**
Initial feedback compilation from design review and user testing
```

## Tips for better feedback summaries

**Organize by themes, not sources:**
Don't just list "Person A said X, Person B said Y." Group related feedback together.

**Quantify when possible:**
"3 out of 5 users mentioned navigation issues" is more impactful than "some users."

**Separate fact from opinion:**
"Users couldn't complete the task" (fact) vs. "Users might not like it" (speculation).

**Identify patterns:**
Look for themes across different sources. Consensus suggests importance.

**Acknowledge conflict:**
When feedback contradicts, call it out explicitly and recommend how to resolve.

**Prioritize ruthlessly:**
Not all feedback is equal. Critical issues vs. nice-to-haves vs. future considerations.

**Make it actionable:**
Every piece of feedback should lead somewhere - fix it, test it further, or document why you're not addressing it.

**Include the positive:**
Don't just focus on problems. Knowing what works is equally valuable.
