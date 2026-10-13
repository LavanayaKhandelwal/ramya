# Prompts

This directory contains AI image-generation prompts for each **section** of each project page.

## Structure

Each project has **one page** in the portfolio. That page is composed of multiple **sections**, each with its own image prompt.

```
prompts/
├── project-1/          # Convertible Resort Wear Collection
│   ├── section-01.md   # Hero — "ONE DRESS. MORE POSSIBILITIES."
│   ├── section-02.md   # The Beginning — A Need Turned Into a Possibility
│   ├── section-03.md   # Finding the Direction
│   ├── section-04.md   # Building the Collection — From Idea to a Visual Board
│   ├── section-05.md   # ONE BASE, TWO LENGTHS — The Hero Garment
│   └── section-06.md   # A Learning Journey — Four Stages of the Design Process
├── project-2/          # UNIQLO — Threading the Trend
│   ├── section-01.md   # Hero — "THREADING THE TREND"
│   ├── section-02.md   # Understanding the Consumer
│   ├── section-03.md   # From Everyday Choices to Deeper Insights
│   ├── section-04.md   # Same Simplicity, New Possibilities
│   ├── section-05.md   # From Insight to Everyday — Botanical Whispers
│   └── section-06.md   # Key Learnings
├── project-3/          # Cover Story × Future Florals
│   ├── section-01.md   # Hero — "FUTURE FLORALS"
│   ├── section-02.md   # 01 — Florals Reimagined
│   ├── section-03.md   # Experience in Bloom
│   └── section-04.md   # A Window into the Future
└── project-4/          # UNIQLO Fragrances
    ├── section-01.md   # Hero — "BEYOND THE EVERYDAY"
    ├── section-02.md   # 02 — Why Fragrances Now?
    ├── section-03.md   # 03 — The Fragrance Expression
    ├── section-04.md   # 04 — Real People, Real Insights
    └── section-05.md   # 05 — Turning Insights into Impact
```

## Naming Convention

- Each folder = one project = **one portfolio page**
- Each file = one **section** within that page (scroll-based, not a separate route)
- Files were previously named `page-XX.md` — they are now correctly named `section-XX.md`
