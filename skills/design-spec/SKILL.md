---
name: design-spec
description: Create detailed design specifications from sketches, notes, or descriptions
---

# Design Specification Generator

Transform design sketches, notes, or descriptions into comprehensive design specifications ready for development handoff.

## What this skill does

Takes your design work and notes to create:
- Detailed component specifications
- Style guide references
- Interaction descriptions
- Responsive behavior notes
- Accessibility requirements
- Technical implementation notes
- Asset inventory and requirements

## How to use

1. Have your design files, sketches, or detailed notes ready
2. Run `:code[/design-spec]{showCopyAction=true}`
3. Provide your design materials and descriptions
4. Get a structured specification document

**Time saved:** Creating handoff documentation manually takes 2-3 hours per feature. With this skill: 15-20 minutes of review.

## Input format

Can be any of:
- Design file descriptions (Figma, Sketch, Adobe XD)
- Sketches or wireframe notes
- Mockup annotations
- Interaction flow descriptions
- Style and component details

## Output structure

```
# Design Specification: [Feature Name]

**Version:** [1.0]
**Designer:** [Your name]
**Date:** [Date]
**Status:** [Draft / Ready for Development / In Development]

---

## Overview

**Purpose:**
[What this design does and why]

**User Story:**
As a [user type], I want [goal] so that [benefit]

**Design Goals:**
- [Goal 1]
- [Goal 2]
- [Goal 3]

---

## Visual Design

### Layout

**Desktop (1440px+):**
- [Layout description]
- Key measurements and spacing
- Grid structure

**Tablet (768px-1439px):**
- [Layout adjustments]
- How content reflows

**Mobile (< 768px):**
- [Mobile-specific layout]
- Touch target considerations

### Typography

**Headings:**
- **H1:** [Font family], [Size], [Weight], [Line height], [Color]
  - Used for: [Context]
- **H2:** [Specifications]
  - Used for: [Context]

**Body Text:**
- **Regular:** [Font family], [Size], [Weight], [Line height], [Color]
- **Small:** [Specifications]
- **Caption:** [Specifications]

### Colors

**Primary Palette:**
- Primary: [#HEX] / [RGB] / [Variable name]
  - Used for: [CTA buttons, key actions]
- Secondary: [#HEX]
  - Used for: [Supporting elements]

**Semantic Colors:**
- Success: [#HEX] - Confirmation messages, success states
- Warning: [#HEX] - Warning messages, alerts
- Error: [#HEX] - Error messages, failed states
- Info: [#HEX] - Informational messages

**Neutral Palette:**
- [List of grays/neutrals with uses]

### Spacing

**Base Unit:** [8px / 4px / other]

**Spacing Scale:**
- XXS: [4px]
- XS: [8px]
- S: [16px]
- M: [24px]
- L: [32px]
- XL: [48px]
- XXL: [64px]

---

## Components

### [Component 1 Name - e.g., Primary Button]

**Description:**
[What this component is and when to use it]

**States:**
- **Default:** [Visual description]
- **Hover:** [What changes on hover]
- **Active/Pressed:** [What happens when clicked]
- **Disabled:** [How disabled state looks]
- **Focus:** [Keyboard focus indicator]

**Specifications:**
- Size: [Width] x [Height] px
- Padding: [Top/Right/Bottom/Left]
- Border: [Width] [Style] [Color]
- Border radius: [Value]
- Background: [Color in each state]
- Text: [Color, size, weight]
- Icon: [If applicable, size and color]

**Behavior:**
- [Click/tap behavior]
- [Loading state if applicable]
- [Animation details]

**Accessibility:**
- ARIA role: button
- Must have visible focus indicator
- Minimum touch target: 44x44px
- Color contrast ratio: 4.5:1 minimum

**Variants:**
- Primary (default)
- Secondary: [How it differs]
- Tertiary/Text: [How it differs]

---

### [Component 2 Name - e.g., Input Field]

[Repeat structure for each component]

---

## Interactions

### [Interaction 1 - e.g., Form Submission]

**Trigger:**
[What initiates this interaction]

**Flow:**
1. [Step 1 - what happens first]
2. [Step 2 - next action]
3. [Step 3 - final state]

**Animations:**
- [Animation description]
- Duration: [milliseconds]
- Easing: [ease-in, ease-out, etc.]

**Loading States:**
- [What user sees during processing]
- Progress indication if applicable

**Success State:**
- [What user sees on success]
- Duration: [How long success message shows]

**Error State:**
- [What user sees on error]
- Error message format
- Recovery actions available

---

### [Interaction 2 - e.g., Navigation]

[Repeat for each major interaction]

---

## Responsive Behavior

### Breakpoints

- Desktop: 1440px+
- Tablet: 768px - 1439px
- Mobile: < 768px

### Key Changes by Breakpoint

**Desktop → Tablet:**
- [What changes]
- [Component adjustments]

**Tablet → Mobile:**
- [Navigation becomes hamburger menu]
- [Stacked layouts]
- [Font size adjustments]

---

## States

### Empty State

**When:**
[Condition that triggers empty state]

**What to Show:**
- [Illustration or icon]
- [Heading text]
- [Body text explaining why it's empty]
- [Call-to-action to fill with content]

### Loading State

**When:**
[What's happening during load]

**What to Show:**
- [Skeleton screens, spinners, or other loading indicators]
- [Where they appear]

### Error State

**When:**
[What causes errors]

**What to Show:**
- [Error icon and color]
- [Error message format]
- [Action user can take]

---

## Accessibility Requirements

**Keyboard Navigation:**
- Tab order: [Expected tab order through interface]
- Keyboard shortcuts: [Any shortcuts]
- Focus indicators: [Must be clearly visible]

**Screen Readers:**
- All images need alt text
- Form inputs need labels
- Buttons need descriptive text (not just icons)
- ARIA landmarks: [Header, nav, main, footer]

**Color and Contrast:**
- Text contrast: Minimum 4.5:1 for normal text, 3:1 for large text
- Don't rely on color alone to convey information
- Color-blind safe palette

**Motion:**
- Respect prefers-reduced-motion setting
- Provide alternatives to animation-only feedback

---

## Assets Needed

**Images:**
- [Image 1]: [Dimensions], [Format], [Description]
- [Image 2]: [Specifications]

**Icons:**
- [Icon set name or list of specific icons]
- Size: [24x24px or specify]
- Format: SVG preferred

**Illustrations:**
- [List any illustrations with specs]

---

## Technical Notes

**Frameworks/Libraries:**
- [Any specific component libraries to use]

**Performance Considerations:**
- [Image optimization requirements]
- [Lazy loading recommendations]

**Browser Support:**
- [Required browser versions]

**Dependencies:**
- [Any external libraries or fonts]

---

## Design Files

**Figma:** [Link to Figma file]
**Prototype:** [Link to interactive prototype]
**Assets:** [Link to asset folder or zip]

---

## Open Questions

- [ ] [Question 1 that needs clarification]
- [ ] [Question 2 for engineering review]
- [ ] [Question 3 for stakeholder decision]

---

## Version History

**v1.0 - [Date]**
- Initial specification

**v1.1 - [Date]**
- [Changes made]
```

## Example

**Input:**
```
New dashboard feature. Cards showing key metrics. White background, shadow
on hover. Primary action button in bottom right. Three sizes: small (300px),
medium (400px), large (600px). Dark blue for primary color (#0066CC).
Hover should lift card with shadow. Click opens detail view with slide-in
animation. Mobile should stack vertically.
```

**Output:**
```
# Design Specification: Dashboard Metric Cards

**Version:** 1.0
**Designer:** [Your name]
**Date:** March 15, 2025
**Status:** Ready for Development

---

## Overview

**Purpose:**
Metric cards provide at-a-glance visibility into key performance indicators
with the ability to drill into detailed views on demand.

**User Story:**
As a dashboard user, I want to quickly scan my key metrics and dive deeper
when needed so that I can monitor performance efficiently.

**Design Goals:**
- Scannable: Users can understand metrics at a glance
- Interactive: Clear affordance for drilling into details
- Flexible: Cards work in various dashboard layouts
- Responsive: Adapts gracefully to all screen sizes

---

## Visual Design

### Layout

**Desktop (1440px+):**
- Cards displayed in grid layout with 24px gap
- 2-4 cards per row depending on size variant
- Cards maintain aspect ratio across all sizes

**Tablet (768px-1439px):**
- 2-3 cards per row
- Reduced to 16px gap
- Card sizes scale proportionally

**Mobile (< 768px):**
- Cards stack vertically (1 per row)
- Full width minus 16px margins on each side
- Maintain proportional height

### Typography

**Card Title:**
- **Font:** Inter, 16px, Semibold (600), 24px line height, #1A1A1A
- Used for: Metric name

**Metric Value:**
- **Font:** Inter, 32px, Bold (700), 40px line height, #0066CC
- Used for: Primary metric display

**Metric Change:**
- **Font:** Inter, 14px, Medium (500), 20px line height
- Color: #00A86B (positive) or #D32F2F (negative)
- Used for: Percentage change indicator

**Card Description:**
- **Font:** Inter, 14px, Regular (400), 20px line height, #666666
- Used for: Supporting context text

### Colors

**Primary:**
- Primary Blue: #0066CC
  - Used for: Metric values, primary buttons, focus states

**Semantic:**
- Success Green: #00A86B - Positive metric changes
- Error Red: #D32F2F - Negative metric changes
- Neutral: #666666 - Supporting text

**Neutrals:**
- Background: #FFFFFF (card background)
- Border: #E0E0E0 (card border in default state)
- Shadow Default: rgba(0, 0, 0, 0.08)
- Shadow Hover: rgba(0, 0, 0, 0.16)

### Spacing

**Base Unit:** 8px

**Card Padding:**
- All sizes: 24px padding on all sides

**Element Spacing:**
- Title to Metric: 8px
- Metric to Change: 4px
- Change to Description: 12px
- Description to Action Button: 24px

---

## Components

### Dashboard Metric Card

**Description:**
Card component displaying a single metric with optional trend indicator,
description, and drill-down action.

**States:**
- **Default:** White background, subtle border, low shadow
- **Hover:** Elevated appearance (increased shadow, moves up 4px),
  border color changes to Primary Blue
- **Active/Pressed:** Shadow reduces, card moves down 2px
- **Loading:** Skeleton loader with animated shimmer
- **Error:** Red border, error icon, error message in place of metric

**Specifications:**

**Small Variant:**
- Size: 300px width x 200px height
- Padding: 24px all sides
- Border: 1px solid #E0E0E0
- Border radius: 8px
- Background: #FFFFFF
- Shadow (default): 0 2px 8px rgba(0, 0, 0, 0.08)
- Shadow (hover): 0 8px 16px rgba(0, 0, 0, 0.16)

**Medium Variant:**
- Size: 400px x 240px
- [Same styling as small, different dimensions]

**Large Variant:**
- Size: 600px x 280px
- [Same styling, different dimensions]

**Behavior:**
- On hover: Card elevates 4px with transform and increased shadow over
  200ms ease-out
- On click: Slide-in detail panel from right side over 300ms ease-out
- Loading: Skeleton replaces content, animated shimmer effect
- Error: Shake animation (3 times, 50ms each), red border appears

**Accessibility:**
- ARIA role: button (if clickable) or article (if read-only)
- Keyboard: Tab to focus, Enter/Space to open detail view
- Focus indicator: 2px solid #0066CC outline, 2px offset
- Minimum touch target (mobile): 44x44px for action button
- Screen reader: Announces metric name, value, and change

**Variants:**
- With action button (default)
- Read-only (no action button, not clickable)
- Compact (reduced padding for dense layouts)

---

### Action Button (Secondary)

**Description:**
Small button in bottom-right of card for accessing details

**Specifications:**
- Size: 32px x 32px (icon only) or auto-width for text
- Icon: Arrow right, 16px, #0066CC
- Background: Transparent (default), rgba(0, 102, 204, 0.08) (hover)
- Border: None
- Border radius: 4px

**States:**
- Default: Icon only, primary blue color
- Hover: Light blue background fades in
- Active: Background darkens slightly
- Focus: 2px solid outline

---

## Interactions

### Drill-Down to Detail View

**Trigger:**
Click/tap on card or action button

**Flow:**
1. User clicks anywhere on card or specifically on action button
2. 300ms slide-in animation from right edge of screen
3. Detail panel overlays dashboard with backdrop
4. Detail panel shows expanded metric data, historical trends, filters
5. Close button (X) in top-right of detail panel
6. Click backdrop or close button to dismiss, slide-out animation

**Animations:**
- Slide-in: translateX(100%) to translateX(0) over 300ms ease-out
- Backdrop: Fade in over 200ms
- Card hover: translateY(-4px) and shadow increase over 200ms ease-out

**Loading States:**
- While metric data loads: Skeleton card with shimmer animation
- While detail view loads: Loading spinner in center of detail panel

**Success State:**
- Card displays metric data
- Smooth transitions between states

**Error State:**
- Card border turns red
- Error icon (!) appears in top-right
- Metric value replaced with "Unable to load"
- Action button changes to "Retry" text button

---

## Responsive Behavior

### Breakpoints

- Desktop: 1440px+
- Tablet: 768px - 1439px
- Mobile: < 768px

### Key Changes by Breakpoint

**Desktop → Tablet:**
- Card grid adjusts from 4 columns to 2-3 columns
- Gap reduces from 24px to 16px
- Font sizes remain the same
- Detail panel width reduces from 600px to 480px

**Tablet → Mobile:**
- Cards stack vertically (1 column)
- Cards become full-width (minus 16px margins)
- Detail panel becomes full-screen overlay
- Font sizes remain the same (already optimized for readability)
- Touch targets increase to minimum 44x44px

---

## States

### Empty State

**When:**
No metric data available to display

**What to Show:**
- Card outline remains
- Icon: Chart with X overlay (24px, gray)
- Heading: "No data available"
- Body text: "Metric data will appear here once available"
- No action button

### Loading State

**When:**
Fetching metric data from API

**What to Show:**
- Skeleton card: Gray rectangles with shimmer animation
- Title placeholder: 120px wide x 20px high
- Metric placeholder: 200px wide x 40px high
- Description placeholder: Full width x 40px high (2 lines)

### Error State

**When:**
API error or failed data fetch

**What to Show:**
- Red 2px border on card
- Error icon (!) in red, 24px, top-right corner
- Heading: "Unable to load metric"
- Error message: Brief description (e.g., "Connection error")
- Action button changes to "Retry" text button

---

## Accessibility Requirements

**Keyboard Navigation:**
- Tab order: Cards should be in logical reading order (left-to-right,
  top-to-bottom)
- Tab to focus card, Enter or Space to open detail view
- Within detail panel: Tab through interactive elements, Escape to close
- Focus indicators: 2px solid #0066CC outline, 2px offset from element

**Screen Readers:**
- Card announces as: "[Metric name], [Value], [Change percentage and
  direction], clickable card, button"
- Example: "Revenue, $150,000, up 12%, clickable card, button"
- Detail panel: Focus moves to panel heading when opened
- Error states clearly announced

**Color and Contrast:**
- Metric value (#0066CC on white): 8.2:1 (exceeds WCAG AAA)
- Body text (#666666 on white): 5.7:1 (exceeds WCAG AA)
- Success green: 4.6:1 (meets WCAG AA)
- Error red: 4.5:1 (meets WCAG AA)
- Don't rely solely on color for positive/negative (include ▲/▼ icons)

**Motion:**
- Respect prefers-reduced-motion setting
- When enabled: Disable elevation animations, use instant transitions
- Maintain state changes (hover styling) without animation

---

## Assets Needed

**Icons:**
- Arrow right: 16px, available in icon library
- Up/down trend arrows: 12px, available in icon library
- Error icon: 24px, available in icon library
- Loading spinner: 32px, custom or from library

**No images or illustrations needed for this component**

---

## Technical Notes

**Frameworks/Libraries:**
- Use existing design system component library if available
- Icon library: [Specify - e.g., Heroicons, Feather, custom]

**Performance Considerations:**
- Use CSS transforms (not top/left) for smooth animations
- Lazy load detail panel content until user clicks
- Debounce hover states to avoid excessive re-renders
- Use CSS transitions for simple animations (avoid JS when possible)

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
- CSS Grid for card layout
- Flexbox for card internal layout

**Dependencies:**
- Chart library for detail view visualizations (if applicable)
- Animation library: None (use CSS transitions)

---

## Design Files

**Figma:** [Link to Figma file]
**Prototype:** [Link to interactive prototype showing hover and click behavior]
**Assets:** [Link to exported icons and any custom assets]

---

## Open Questions

- [ ] Should large cards support multiple metrics, or remain single-metric?
- [ ] Do we need a "favorite" or "pin" feature for cards?
- [ ] Should cards support drag-and-drop reordering?
- [ ] What's the maximum number of cards we expect on one dashboard?

---

## Version History

**v1.0 - March 15, 2025**
- Initial specification
- Defined three size variants
- Specified interaction patterns and accessibility requirements
```

## Real-world application: Anthropic's design workflow

According to Anthropic's blog post, their Product Design team "Feeds Figma
files to Claude Code" to build features. The design team also found that
Claude Code "fundamentally improves initial design quality and saves hours
of debugging" by mapping error states, logic flows, and edge cases during
the design phase.

This shows how Claude Code helps designers think through implementation
details early, creating better specs and reducing back-and-forth with
engineering.

## Tips for better design specs

**Be specific with measurements:**
"Large padding" is ambiguous. "24px padding on all sides" is clear.

**Define all states:**
Default, hover, active, focus, disabled, loading, error, empty. Don't leave
gaps for engineering to guess.

**Think responsive early:**
Don't design desktop-only. Specify how it works on tablet and mobile.

**Call out accessibility:**
Make it explicit, not an afterthought. Include keyboard nav, screen readers,
contrast ratios.

**Include the why:**
Not just "use this color" but "use primary blue to indicate interactive
elements."

**Document edge cases:**
What happens with really long text? Empty data? Errors? Design for reality,
not just the happy path.

**Link to live examples:**
Include prototype links, not just static images. Let engineers interact
with it.
