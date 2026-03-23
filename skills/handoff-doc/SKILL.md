---
name: handoff-doc
description: Create comprehensive development handoff documentation from design files and notes
---

# Development Handoff Documentation Generator

Transform design files and notes into comprehensive handoff documentation that gives developers everything they need to implement your design accurately.

## What this skill does

Takes your designs and creates complete handoff documentation with:
- Implementation overview and context
- Component specifications
- Asset inventory with export instructions
- Interaction and animation details
- Responsive behavior guidelines
- Accessibility requirements
- Edge case documentation
- Testing checklist

## How to use

1. Have your design files ready (Figma, Sketch, Adobe XD, or descriptions)
2. Run `:code[/handoff-doc]{showCopyAction=true}`
3. Provide design files and any implementation notes
4. Get complete handoff documentation

**Time saved:** Creating handoff docs manually takes 3-4 hours. With this skill: 20-30 minutes of review and refinement.

## Input format

Design materials including:
- Links to design files (Figma, Sketch, etc.)
- Screenshots or mockups
- Component descriptions
- Interaction notes
- Animation specifications
- Responsive behavior requirements
- Any technical constraints

## Output structure

```
# Development Handoff: [Feature Name]

**Version:** 1.0
**Designer:** [Your name]
**Date:** [Date]
**Status:** Ready for Development

---

## Quick Links

- **Design Files:** [Link to Figma/Sketch/XD]
- **Prototype:** [Link to interactive prototype]
- **Assets:** [Link to asset folder]
- **Component Library:** [Link if applicable]
- **Style Guide:** [Link to design system]

---

## Overview

**What We're Building:**
[Clear description of what this feature is and does]

**Why We're Building It:**
[Business context and user problem being solved]

**Success Criteria:**
[How we'll know the implementation is successful]

**User Story:**
As a [user type], I want [goal] so that [benefit]

---

## Design Approach

**Key Design Decisions:**
1. [Decision 1 and reasoning]
2. [Decision 2 and reasoning]
3. [Decision 3 and reasoning]

**Design Principles Applied:**
- [Principle 1 - e.g., "Mobile-first approach"]
- [Principle 2 - e.g., "Accessibility by default"]

---

## Scope & Phases

### Phase 1 (MVP - This Handoff)
- [ ] [Feature/Component 1]
- [ ] [Feature/Component 2]
- [ ] [Feature/Component 3]

### Future Phases (Post-Launch)
- [ ] [Future enhancement 1]
- [ ] [Future enhancement 2]

**Out of Scope:**
- [Explicitly what we're NOT building in this phase]

---

## User Flow

**Entry Points:**
[How users get to this feature]

**Primary Flow:**
1. [Step 1 - what happens]
2. [Step 2 - user action and system response]
3. [Step 3 - outcome]

**Alternative Flows:**
- [Alt flow 1 - when/why it happens]
- [Alt flow 2]

**Exit Points:**
[How users leave or complete the flow]

---

## Page/Screen Breakdown

### [Screen 1 Name]

**Purpose:** [What this screen does]

**Layout:**
[Description of overall layout structure]

**Components:**
- [Component 1] - [Brief description]
- [Component 2] - [Brief description]
- [Component 3] - [Brief description]

**Design File Location:**
[Specific frame/artboard name in design tool]

**Responsive Behavior:**
- Desktop: [How it looks]
- Tablet: [Changes from desktop]
- Mobile: [Changes from tablet]

**States to Handle:**
- Loading
- Error
- Empty
- Success

---

### [Screen 2 Name]

[Repeat structure for each screen]

---

## Component Specifications

### [Component 1 - e.g., Primary Button]

**Design File Location:** [Frame name in Figma]

**Visual Specifications:**
- Width: [auto / fixed value]
- Height: [value]px
- Padding: [top/right/bottom/left]
- Border: [width] [style] [color or variable]
- Border radius: [value]px
- Background: [color or gradient]
- Text: [font-family], [size]px, [weight], [color]

**States:**
| State | Background | Border | Text | Cursor |
|-------|------------|--------|------|--------|
| Default | #0066CC | none | #FFFFFF | pointer |
| Hover | #0052A3 | none | #FFFFFF | pointer |
| Active | #003D7A | none | #FFFFFF | pointer |
| Disabled | #CCCCCC | none | #999999 | not-allowed |
| Focus | #0066CC | 2px solid #0066CC | #FFFFFF | pointer |

**Interactions:**
- On click: [What happens]
- Loading state: [Show spinner, disable button]
- Animation: [Details of any transitions]

**Accessibility:**
- ARIA role: button
- Must have descriptive text or aria-label
- Focus indicator: 2px solid outline, 2px offset
- Keyboard: Activate with Enter or Space

**Code Notes:**
```
- Use <button> element, not <div>
- Disable during loading to prevent double-submission
- Maintain min-width to prevent layout shift during loading
```

---

### [Component 2]

[Repeat structure for each component]

---

## Interactions & Animations

### [Interaction 1 - e.g., Modal Open/Close]

**Trigger:**
[What causes this interaction]

**Animation Sequence:**
1. [Step 1] - Duration: [ms], Easing: [function]
2. [Step 2] - Duration: [ms], Easing: [function]
3. [Step 3] - Duration: [ms], Easing: [function]

**CSS Properties:**
- Transform: [translateY, scale, etc.]
- Opacity: [0 to 1]
- Timing function: [ease-out, cubic-bezier(), etc.]
- Duration: [ms]

**Prototype Reference:**
[Link to specific prototype showing this interaction]

**Accessibility Note:**
- Respect prefers-reduced-motion
- Focus management: [Where focus goes]

---

### [Interaction 2]

[Repeat for each interaction]

---

## Responsive Breakpoints

### Breakpoint Strategy

- **Mobile:** < 768px (Primary: 375px iPhone)
- **Tablet:** 768px - 1023px (Primary: 768px iPad)
- **Desktop:** 1024px - 1439px (Primary: 1280px)
- **Large Desktop:** 1440px+ (Primary: 1440px)

### Layout Changes

**Mobile (< 768px):**
- [Navigation becomes hamburger menu]
- [Sidebar hidden, accessible via menu]
- [Cards stack vertically]
- [Font sizes: [adjustments if any]]
- [Spacing reduced to: [values]]

**Tablet (768px - 1023px):**
- [2-column layout]
- [Sidebar collapsible]
- [Touch targets minimum 44x44px]

**Desktop (1024px+):**
- [Full layout with sidebar]
- [3-4 column grid]
- [Hover states active]

### Responsive Images

**Approach:**
[Describe approach: picture element, srcset, CSS, etc.]

**Image Sizes:**
- Mobile: [dimensions]
- Tablet: [dimensions]
- Desktop: [dimensions]

---

## States & Edge Cases

### Loading States

**What Shows During Load:**
- [Skeleton screens for content]
- [Spinner for buttons]
- [Disabled state for forms]

**Duration Consideration:**
- < 1 second: [Minimal indicator]
- 1-5 seconds: [Progress indicator]
- > 5 seconds: [Progress bar with message]

---

### Empty States

**Scenario 1: No Data Yet**
- Icon: [Description or asset name]
- Heading: "[Text]"
- Body: "[Text explaining why empty]"
- CTA: "[Button text]" - [What it does]

**Scenario 2: No Search Results**
[Similar structure]

---

### Error States

**Types of Errors:**

**1. Validation Error (user fixable)**
- Inline error message below field
- Red color (#D32F2F)
- Error icon
- Message: "[Specific, actionable text]"
- Keep user input (don't clear form)

**2. System Error (server/network)**
- Error banner at top of page
- Message: "[User-friendly explanation]"
- Action: "Retry" button or "Contact Support"
- Log error details for debugging

**3. Permission Error (user can't access)**
- Empty state with lock icon
- Message: "[Why they can't access]"
- Action: "[What they can do - upgrade, request access, etc.]"

---

### Success States

**Confirmation After Action:**
- Toast notification (or banner)
- Success icon and color (green #00A86B)
- Message: "[Confirmation of what happened]"
- Duration: [How long it shows - typically 3-5 seconds]
- Dismissible: [Yes/No]

---

## Accessibility Requirements

### Semantic HTML

**Required Structure:**
```html
<header> - Page header with logo and navigation
<nav> - Navigation menu
<main> - Primary content
<aside> - Sidebar content
<footer> - Page footer
```

### ARIA Landmarks & Roles

- Use semantic HTML first (nav, main, aside, etc.)
- Add ARIA roles only when semantic HTML isn't sufficient
- Required ARIA for [specific components]

### Keyboard Navigation

**Tab Order:**
[Describe expected tab order through interface]

**Keyboard Shortcuts:**
- [Shortcut]: [Action]
- [Shortcut]: [Action]

**Focus Management:**
- All interactive elements must be keyboard accessible
- Focus indicator: 2px solid #0066CC, 2px offset
- Modal opens: Move focus to modal
- Modal closes: Return focus to trigger element

### Screen Readers

**Required:**
- Alt text for all images (decorative images: alt="")
- Labels for all form inputs
- Error messages associated with inputs (aria-describedby)
- Button text descriptive (not just icons)
- Loading states announced (aria-live)

**Testing:**
Test with [VoiceOver on Mac / NVDA on Windows / JAWS]

### Color & Contrast

**Contrast Ratios (WCAG AA):**
- Normal text: 4.5:1 minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- UI components: 3:1 minimum

**Color Usage:**
- Don't use color alone to convey information
- Example: Error states use both red color AND error icon
- Example: Success uses green color AND checkmark icon

### Motion & Animation

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable animations, use instant transitions */
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Assets

### Icons

**Icon Library:** [Heroicons / Feather / Custom]

**Icons Used:**
| Icon Name | Size | Usage | Color |
|-----------|------|-------|-------|
| check-circle | 24px | Success messages | #00A86B |
| alert-triangle | 24px | Warning messages | #F59E0B |
| x-circle | 24px | Error messages | #D32F2F |
| info-circle | 24px | Info messages | #0066CC |
| arrow-right | 16px | Button icons | Current text color |

**Format:** SVG (preferred), PNG for fallback

**Export Location:** [assets/icons/ or specific path]

---

### Images

**Images Required:**
| Image | Dimensions | Format | Location | Notes |
|-------|------------|--------|----------|-------|
| Hero image | 1440x600 | JPG | /images/hero.jpg | Optimize < 200KB |
| Logo | 200x80 | SVG/PNG | /images/logo.svg | Transparent background |
| Empty state | 300x300 | SVG | /images/empty.svg | Illustration |

**Optimization:**
- JPG: Quality 80-85%, progressive
- PNG: TinyPNG or similar compression
- SVG: Optimize with SVGO

---

### Fonts

**Font Stack:**
- Primary: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Monospace: "Courier New", Courier, monospace

**Weights Used:**
- Regular (400)
- Medium (500)
- Semibold (600)
- Bold (700)

**Font Loading:**
[Strategy: CDN, self-hosted, font-display: swap, etc.]

---

## Browser Support

**Supported Browsers:**
- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions

**Mobile Browsers:**
- iOS Safari: iOS 14+
- Chrome Mobile: Latest

**Graceful Degradation:**
- [Feature 1]: Fallback is [alternative]
- [Feature 2]: Fallback is [alternative]

---

## Performance Considerations

**Page Load:**
- Target: < 3 seconds on 3G
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms

**Optimization Requirements:**
- Lazy load images below the fold
- Code splitting for route-based loading
- Minimize render-blocking resources
- Use CSS transitions over JavaScript when possible

---

## Testing Checklist

### Visual QA

- [ ] Matches design on Desktop (1440px)
- [ ] Matches design on Tablet (768px)
- [ ] Matches design on Mobile (375px)
- [ ] All hover states implemented
- [ ] All focus states visible
- [ ] All animations smooth (60fps)
- [ ] Loading states implemented
- [ ] Error states implemented
- [ ] Empty states implemented
- [ ] Spacing/typography matches spec

### Functional Testing

- [ ] All interactions work as specified
- [ ] Form validation works correctly
- [ ] Error handling works
- [ ] Success confirmations appear
- [ ] Navigation functions properly
- [ ] Links go to correct destinations

### Accessibility Testing

- [ ] Keyboard navigation works (all interactive elements reachable)
- [ ] Focus indicators visible
- [ ] Screen reader tested ([tool name])
- [ ] Color contrast meets WCAG AA
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA landmarks present

### Responsive Testing

- [ ] Mobile (375px, 414px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1280px, 1440px, 1920px)
- [ ] Touch targets 44x44px minimum on mobile

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Mobile

### Performance Testing

- [ ] Page load < 3 seconds on 3G
- [ ] LCP < 2.5 seconds
- [ ] No layout shifts (CLS < 0.1)
- [ ] Images optimized

---

## Known Issues & Limitations

**Current Limitations:**
1. [Limitation 1 and why it exists]
2. [Limitation 2 and potential future solution]

**Browser-Specific Issues:**
- [Browser]: [Issue and workaround]

---

## Questions & Open Items

**Questions for Engineering:**
- [ ] [Question 1 about technical approach]
- [ ] [Question 2 about feasibility]

**Decisions Needed:**
- [ ] [Decision point 1 - options and recommendation]
- [ ] [Decision point 2]

---

## Implementation Notes

**Suggested Approach:**
1. [Start with component library if available]
2. [Build responsive layout structure first]
3. [Implement core functionality]
4. [Add interactions and animations]
5. [Polish and accessibility pass]

**Technical Considerations:**
- [Note about specific implementation approach]
- [Warning about potential pitfall]
- [Suggestion for efficient solution]

**Dependencies:**
- [External library or service needed]
- [API endpoint required]

---

## Communication

**Design Support:**
- **Slack:** [Your Slack handle or channel]
- **Email:** [Your email]
- **Office Hours:** [When you're available for questions]

**Design Review:**
Once implemented, request design review by tagging [your name] in [tool/channel]

**Feedback:**
Found something unclear or missing? Add comments to [Figma file / doc / ticket]

---

## Version History

**v1.0 - [Date]:**
Initial handoff for Phase 1

**v1.1 - [Date]:**
[Updates based on engineering feedback or changes]
```

## Example

**Input:**
```
New dashboard metric cards feature. Design in Figma. Cards show key metrics,
three sizes, hover effect lifts card, click opens detail panel. Need
handoff doc for engineering.
```

**Output:**
```
# Development Handoff: Dashboard Metric Cards

**Version:** 1.0
**Designer:** [Your name]
**Date:** March 15, 2025
**Status:** Ready for Development

---

## Quick Links

- **Design Files:** https://figma.com/file/dashboard-cards
- **Prototype:** https://figma.com/proto/dashboard-cards
- **Assets:** https://drive.google.com/dashboard-assets
- **Component Library:** https://storybook.ourcompany.com
- **Style Guide:** https://design.ourcompany.com

---

## Overview

**What We're Building:**
Interactive metric cards for the dashboard that display key performance
indicators with the ability to drill into detailed views.

**Why We're Building It:**
Users need at-a-glance visibility into metrics without cluttering the
dashboard. Cards provide scannable, organized presentation with on-demand
details.

**Success Criteria:**
- Cards load in < 1 second
- Hover and click interactions feel responsive and smooth
- All three card sizes work in various dashboard layouts
- Mobile experience is touch-friendly
- Accessible via keyboard and screen reader

**User Story:**
As a dashboard user, I want to quickly scan my key metrics and dive deeper
when needed so that I can monitor performance efficiently without information
overload.

---

## Design Approach

**Key Design Decisions:**
1. Card-based UI pattern provides scannable, modular layout that users recognize
2. Elevation on hover signals interactivity without explicit "click here" text
3. Three size variants support different metric complexity and dashboard layouts
4. Slide-in detail panel (not modal) maintains context of the dashboard

**Design Principles Applied:**
- Progressive disclosure: Show summary first, details on demand
- Feedback: Hover and loading states provide clear system feedback
- Mobile-first: Touch-friendly targets and stacked layout on small screens

---

## Scope & Phases

### Phase 1 (MVP - This Handoff)
- [ ] Three card size variants (small, medium, large)
- [ ] Hover elevation effect
- [ ] Click to open detail panel
- [ ] Loading and error states
- [ ] Responsive behavior (desktop, tablet, mobile)

### Future Phases (Post-Launch)
- [ ] Drag-and-drop card reordering
- [ ] Custom metric selection
- [ ] Export card data

**Out of Scope:**
- Real-time data updates (Phase 2)
- Card customization UI (Phase 2)
- Sharing individual cards (Future)

---

## User Flow

**Entry Points:**
- User navigates to dashboard from main navigation
- Dashboard loads with default metric cards

**Primary Flow:**
1. User views dashboard with multiple metric cards displaying
2. User hovers over card of interest - card elevates
3. User clicks card or action button
4. Detail panel slides in from right showing expanded data
5. User reviews details, clicks close or backdrop to dismiss
6. Detail panel slides out, focus returns to card

**Alternative Flows:**
- Keyboard user: Tab to card, Enter to open detail panel
- Mobile user: Tap card (no hover state), detail panel becomes full-screen
- Error state: Card shows error message, "Retry" button instead of drill-down

**Exit Points:**
- User closes detail panel and continues viewing dashboard
- User navigates away from dashboard via main nav

---

[Continue with Page/Screen Breakdown, Component Specifications, etc.
following the full template shown above]
```

## Real-world example: Anthropic's handoff approach

Anthropic's Product Design team "Feeds Figma files to Claude Code, sets up
autonomous loops for writing code, running tests, iterating" and found that
Claude Code "fundamentally improves initial design quality and saves hours of
debugging" by thinking through implementation details during the design phase.

Thorough handoff documentation creates this same benefit—reducing ambiguity,
preventing back-and-forth, and ensuring designs are implemented accurately
the first time.

## Tips for better handoff documentation

**Be specific with measurements:**
Don't say "some padding." Say "24px padding on all sides."

**Document all states:**
Default, hover, focus, active, loading, error, disabled, empty. If you don't
specify, engineering will guess.

**Think like a developer:**
What questions would they have? Answer them preemptively in the doc.

**Link to everything:**
Design files, prototypes, assets, style guide. Make it easy to find resources.

**Show, don't just tell:**
Screenshots, code examples, prototype links. Visual references reduce ambiguity.

**Call out edge cases:**
Really long text, no data, errors, slow networks. Design for reality, not just
the happy path.

**Make it scannable:**
Developers will skim first. Use headers, tables, checklists, and clear sections.

**Include the "why":**
Not just "use this pattern" but "we chose this because [reason]." Context
helps developers make good decisions when facing edge cases.

**Test your own doc:**
Can someone unfamiliar with the project understand what to build from this doc
alone? If not, add more detail.
