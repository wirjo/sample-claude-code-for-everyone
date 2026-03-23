---
name: content-calendar
description: Create content calendar from themes and frequency requirements
---

# Content Calendar Generator

Transform content themes and strategy into a detailed, actionable content calendar with topics, formats, and distribution schedule.

## What this skill does

Takes your content strategy and creates:
- Month-by-month content schedule
- Specific topics aligned with themes
- Format recommendations for each piece
- Distribution channel plan
- Owner assignments and deadlines
- Balance across content types and themes

## How to use

1. Define your content themes and goals
2. Run `:code[/content-calendar]{showCopyAction=true}`
3. Provide your content strategy notes (themes, frequency, channels)
4. Get a complete calendar ready to execute

**Time saved:** Creating a quarterly content calendar manually takes 3-4 hours. With this skill: 15 minutes.

## Input format

Strategy notes including:
- Content themes or pillars
- Publishing frequency (e.g., "3 blog posts per week")
- Channels (blog, social, email, etc.)
- Target audience
- Any upcoming events or campaigns
- Format preferences

## Output structure

```
# Content Calendar: [Time Period]

## Overview

**Period:** [Q2 2025 / April-June / etc.]
**Themes:** [List of content pillars]
**Publishing Frequency:** [Schedule summary]
**Primary Channels:** [Where content will be distributed]

---

## Monthly Breakdown

### April 2025

**Monthly Theme:** [Primary focus for this month]

#### Week 1 (April 1-7)

**Blog Post - [Title/Topic]**
- **Theme:** [Which pillar this supports]
- **Format:** Long-form guide (2,000 words)
- **Target Audience:** [Persona]
- **Key Points:** [Main takeaways]
- **SEO Keywords:** [Primary keywords]
- **CTA:** [What action we want readers to take]
- **Owner:** [Name]
- **Due Date:** April 1
- **Distribution:**
  - LinkedIn post (April 1)
  - Email newsletter (April 3)
  - Twitter thread (April 2)

**Social Content - [Topic]**
- **Theme:** [Pillar]
- **Format:** Carousel post (8 slides)
- **Platform:** LinkedIn
- **Owner:** [Name]
- **Publish Date:** April 3

**Video Content - [Topic]**
- **Theme:** [Pillar]
- **Format:** 3-minute demo video
- **Platform:** YouTube, LinkedIn
- **Owner:** [Name]
- **Publish Date:** April 5

---

#### Week 2 (April 8-14)

[Repeat structure for each week]

---

### May 2025

[Repeat structure for each month]

---

## Content by Theme

### Theme 1: [Name]

**Goal:** [What this theme achieves]

**Planned Content:**
1. [Date] - [Title] - [Format]
2. [Date] - [Title] - [Format]
3. [Date] - [Title] - [Format]

### Theme 2: [Name]

[Repeat for each theme]

---

## Content by Format

### Blog Posts
- April 1: [Title]
- April 8: [Title]
- April 15: [Title]

### Videos
- April 5: [Title]
- April 19: [Title]

### Social Content
[List of social posts with dates]

### Email Newsletters
[List of email content with send dates]

---

## Production Schedule

**Week of [Date]:**
- [ ] [Content piece 1] - First draft due [date]
- [ ] [Content piece 2] - Review due [date]
- [ ] [Content piece 3] - Final approval due [date]
- [ ] [Content piece 4] - Published [date]

[Repeat for each week showing production pipeline]

---

## Resource Needs

**Internal Resources:**
- Writers: [Number] pieces per week
- Designers: [Number] assets per week
- Video: [Number] videos per month

**External Resources:**
- SME interviews: [Number] per month
- Guest contributors: [Number] pieces

**Tools/Platforms:**
- [Tool 1]: [Purpose]
- [Tool 2]: [Purpose]

---

## Success Metrics

**Content Performance Goals:**
- Blog traffic: [Target page views]
- Social engagement: [Target engagement rate]
- Email open rate: [Target %]
- Lead generation: [Target MQLs from content]

**Tracking:**
- [Dashboard or tool used]
- [Reporting cadence]

---

## Special Dates & Events

- **April 15:** Industry conference - create related content
- **May 1:** Product launch - amplify with content series
- **June 10:** Webinar - supporting blog posts and social

---

## Backup Content

**Evergreen Posts Ready to Publish:**
1. [Topic] - Use if timely content falls through
2. [Topic] - Can be published any time
3. [Topic] - Backup for gaps

---

## Approval Process

- [ ] Content calendar approved by: [Name] - [Date]
- [ ] Budget approved by: [Name] - [Date]
- [ ] Resource allocation confirmed by: [Name] - [Date]
```

## Example

**Input:**
```
Q2 content calendar. Themes: Product education, Customer success stories,
Industry trends. Publish 2 blog posts per week, 5 LinkedIn posts per week,
1 video per month. Focus on mid-market companies. Product launch in May
needs content support.
```

**Output:**
```
# Content Calendar: Q2 2025 (April-June)

## Overview

**Period:** April 1 - June 30, 2025
**Themes:**
- Product Education (40% of content)
- Customer Success Stories (30% of content)
- Industry Trends (30% of content)

**Publishing Frequency:**
- Blog: 2 posts per week (24 total)
- LinkedIn: 5 posts per week (60 total)
- Video: 1 per month (3 total)

**Primary Channels:** Company blog, LinkedIn, YouTube, Email newsletter

---

## Monthly Breakdown

### April 2025

**Monthly Theme:** Product Education - Building Foundation

#### Week 1 (April 1-7)

**Blog Post - Getting Started with Real-Time Analytics**
- **Theme:** Product Education
- **Format:** Beginner's guide (1,500 words)
- **Target Audience:** New prospects, evaluating solutions
- **Key Points:**
  - What real-time analytics means
  - Common use cases
  - How to evaluate solutions
- **SEO Keywords:** "real-time analytics", "business intelligence tools"
- **CTA:** Schedule demo
- **Owner:** Content team
- **Due Date:** April 1
- **Distribution:**
  - LinkedIn post with key stats (April 1)
  - Email newsletter segment (April 3)
  - Twitter thread with highlights (April 2)

**LinkedIn Post - Customer Spotlight: TechCorp**
- **Theme:** Customer Success
- **Format:** Case study carousel (6 slides)
- **Key Stats:** 12-day implementation, 75% faster reporting
- **Platform:** LinkedIn
- **Owner:** Marketing
- **Publish Date:** April 2

**Blog Post - 5 Signs You've Outgrown Your Current Analytics Tool**
- **Theme:** Industry Trends
- **Format:** Listicle (1,200 words)
- **Target Audience:** Mid-market companies with scaling issues
- **Key Points:**
  - Performance degradation signals
  - Cost inefficiency indicators
  - Feature gaps impacting growth
- **CTA:** Download comparison guide
- **Owner:** Content team
- **Due Date:** April 4
- **Distribution:**
  - LinkedIn (April 4)
  - Email to existing database (April 5)

**LinkedIn Posts (Week 1):**
- April 1: Blog post promotion
- April 2: TechCorp case study carousel
- April 3: Product tip Tuesday (customization feature)
- April 4: Blog post promotion
- April 5: Friday feature spotlight (real-time dashboards)

---

#### Week 2 (April 8-14)

**Blog Post - How to Build Your First Dashboard in Under 10 Minutes**
- **Theme:** Product Education
- **Format:** Tutorial with screenshots (1,800 words)
- **Target Audience:** New users, trial signups
- **Key Points:**
  - Step-by-step dashboard creation
  - Template recommendations
  - Customization tips
- **SEO Keywords:** "create dashboard", "dashboard tutorial"
- **CTA:** Start free trial
- **Owner:** Product Marketing
- **Due Date:** April 8

**Video - Dashboard 2.0 Overview and Demo**
- **Theme:** Product Education
- **Format:** 3-minute product demo
- **Platform:** YouTube, LinkedIn, embedded in blog
- **Script:** Product team
- **Production:** Video team
- **Publish Date:** April 10
- **Promotion:** LinkedIn post, email blast, blog embed

**Blog Post - The True Cost of Slow Analytics**
- **Theme:** Industry Trends
- **Format:** Data-driven analysis (2,000 words)
- **Target Audience:** Decision makers evaluating ROI
- **Key Points:**
  - Time wasted waiting for reports
  - Missed opportunities from delayed insights
  - Productivity impact calculations
- **SEO Keywords:** "analytics ROI", "business intelligence cost"
- **CTA:** ROI calculator download
- **Owner:** Content team
- **Due Date:** April 11

**LinkedIn Posts (Week 2):**
- April 8: Blog tutorial promotion
- April 9: Behind-the-scenes: How we built feature X
- April 10: Video demo launch announcement
- April 11: Blog post with cost calculator
- April 12: Customer testimonial quote graphic

[Continue for remaining weeks...]

---

### May 2025

**Monthly Theme:** Product Launch & Customer Proof

**Major Event:** Dashboard 2.0 Launch (May 1)

#### Launch Week Content (May 1-7)

**Pre-Launch:**
- April 29: Teaser blog post
- April 30: Countdown social posts

**Launch Day (May 1):**
- Blog: "Introducing Dashboard 2.0" announcement post
- LinkedIn: Launch announcement with video
- Email: Launch email to full database
- Twitter: Launch thread

**Launch Week:**
- May 2: Blog: "What's New in Dashboard 2.0" feature breakdown
- May 3: Video: Dashboard 2.0 demo and walkthrough
- May 4-7: Daily LinkedIn posts highlighting key features

[Continue with post-launch content...]

---

### June 2025

**Monthly Theme:** Customer Success & Community

[Continue monthly breakdown...]

---

## Content by Theme

### Product Education (40% of content)

**Goal:** Help users understand and get value from the product

**Planned Content:**
1. April 1 - Getting Started with Real-Time Analytics - Blog
2. April 8 - Build Your First Dashboard in 10 Minutes - Tutorial
3. April 10 - Dashboard 2.0 Demo - Video
4. April 15 - Advanced Customization Tips - Blog
[Continue list...]

### Customer Success Stories (30% of content)

**Goal:** Build trust through social proof and use case examples

**Planned Content:**
1. April 2 - TechCorp Case Study - LinkedIn Carousel
2. April 22 - Acme Corp Success Story - Blog
3. May 5 - Video Testimonial: DataCo - Video
[Continue list...]

[Additional sections continue...]
```

## Tips for better content calendars

**Balance your themes:**
Don't cluster all educational content in one month. Spread it out.

**Plan around events:**
Product launches, industry conferences, holidays—build content around these.

**Build in buffer time:**
Don't schedule content with zero-day turnaround. Allow for reviews and revisions.

**Reuse and repurpose:**
One blog post becomes LinkedIn carousel, email segment, and social posts.

**Track performance:**
Note which topics perform well so you can create more like them.

**Keep it flexible:**
Leave room to respond to news, trends, or unexpected opportunities.

**Assign owners early:**
Don't wait until deadline week to assign content pieces.
