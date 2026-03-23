---
name: competitive-analysis
description: Analyze competitor features and create comparison matrix from research notes
---

# Competitive Analysis Skill

Transform competitor research notes into structured analysis with feature comparison, gaps, and opportunities.

## What this skill does

Takes your competitor research and creates:
- Feature comparison matrix
- Competitive positioning map
- Gap analysis (what they have that we don't)
- Opportunity analysis (what we have that they don't)
- Strategic recommendations

## How to use

1. Gather competitor research (website reviews, demo notes, customer feedback)
2. Run `:code[/competitive-analysis]{showCopyAction=true}`
3. Provide your research notes
4. Get structured analysis with actionable insights

## Input format

Any notes about competitors including:
- Feature lists
- Pricing information
- Customer reviews or feedback
- Strengths and weaknesses
- Market positioning

## Output structure

```
# Competitive Analysis: [Your Product] vs Market

## Executive Summary
[High-level competitive landscape]
[Our position in the market]

## Competitor Overview

### Competitor A
- **Position:** [Market position]
- **Strengths:** [What they do well]
- **Weaknesses:** [Where they fall short]
- **Pricing:** [Pricing model and range]
- **Target Market:** [Who they target]

[Repeat for each competitor]

## Feature Comparison Matrix

| Feature | Our Product | Comp A | Comp B | Comp C |
|---------|-------------|---------|---------|---------|
| Feature 1 | ✅ | ✅ | ❌ | ✅ |
| Feature 2 | ✅ | ❌ | ✅ | ✅ |
| Feature 3 | ✅ | ✅ | ✅ | ❌ |

Legend:
- ✅ Available
- ❌ Not available
- ⚠️ Limited/partial support

## Gap Analysis

**Features they have that we don't:**
1. [Gap 1] - Priority: High/Medium/Low
   - Impact: [Why this matters]
   - Recommendation: [Should we build it?]

## Opportunity Analysis

**Features we have that they don't:**
1. [Differentiator 1]
   - Competitive advantage: [Why this matters]
   - Marketing angle: [How to position this]

## Strategic Recommendations

### Short-term (0-3 months)
1. [Action item based on analysis]

### Medium-term (3-6 months)
2. [Strategic initiative]

### Long-term (6-12 months)
3. [Strategic direction]

## Market Positioning

**Our unique value proposition:**
[What makes us different and better]

**Best use cases for us vs competitors:**
- Choose us when: [Scenarios where we win]
- Choose Competitor A when: [Where they might be better fit]
```

## Example

**Input:**
```
Competitor A: Strong enterprise features, expensive ($50K+), slow to implement (3 months)
Competitor B: Great UX, limited customization, $25K/year
Competitor C: Full-featured but complex, requires training, $40K/year
Our product: Fast implementation (2 weeks), flexible, $30K/year
```

**Output:**
```
# Competitive Analysis: Our Analytics Platform

## Executive Summary
We operate in a competitive market with 3 major players. Our key
differentiator is speed of implementation (2 weeks vs 3 months) combined
with flexibility at competitive pricing.

## Competitor Overview

### Competitor A
- **Position:** Enterprise market leader
- **Strengths:** Comprehensive features, established brand, strong enterprise support
- **Weaknesses:** Expensive, slow implementation, rigid customization
- **Pricing:** $50K+ annually
- **Target Market:** Large enterprises (5000+ employees)

[Additional competitors...]

## Feature Comparison Matrix

| Feature | Us | Comp A | Comp B | Comp C |
|---------|-----|---------|---------|---------|
| Real-time dashboards | ✅ | ✅ | ✅ | ✅ |
| Custom reporting | ✅ | ✅ | ❌ | ✅ |
| Fast implementation | ✅ | ❌ | ✅ | ❌ |
| No-code customization | ✅ | ❌ | ⚠️ | ❌ |

## Gap Analysis

**Features they have that we don't:**
1. Advanced AI/ML predictions (Competitor A) - Priority: Medium
   - Impact: Enterprise customers asking for predictive analytics
   - Recommendation: Add to roadmap for Q3

## Opportunity Analysis

**Features we have that they don't:**
1. 2-week implementation timeline
   - Competitive advantage: Fastest time-to-value in market
   - Marketing angle: "Get results in weeks, not months"

## Strategic Recommendations

### Short-term
1. Emphasize implementation speed in all sales conversations
2. Create case studies showing fast deployment times
3. Develop competitive battlecards for sales team

[Additional recommendations...]
```

## Tips for better competitive analysis

**Focus on differentiation:**
Don't just list features - explain why differences matter to customers.

**Use customer language:**
Frame features in terms of customer problems and benefits.

**Stay objective:**
Acknowledge where competitors are stronger, builds credibility.

**Keep it current:**
Update quarterly as competitors evolve and new players emerge.

**Make it actionable:**
Every insight should lead to a product, marketing, or sales action.
