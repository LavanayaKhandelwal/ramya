# ramya

A new project — `ramya`.

## Getting Started

```bash
git clone https://github.com/LavanayaKhandelwal/ramya.git
cd ramya
npm install
npm run dev     # http://localhost:3000
```

## Wireframe structure (no design yet)

Same page structure as `lavanaya`, rebuilt as dummy wireframe blocks.
Designs will be provided later.

### Routes (mirrors lavanaya 1:1)

| Route | Page |
|---|---|
| `/` | FashionPortfolio plate + Home sections |
| `/fashion-portfolio` | Cover + About-me plate |
| `/about` | Profile spread |
| `/projects` | Selected projects index (01–04) |
| `/internship/experience` | Social board + Commerce board |
| `/internship/learnings` | 4 learning outcomes |
| `/projects/marketing` | Project 1 — marketing |
| `/projects/marketing/mapping-opportunity` | Slide 02 |
| `/projects/marketing/bringing-concept-to-life` | Slide — pitch flow |
| `/projects/marketing/making-idea-real` | Slide 03 |
| `/projects/visual-merchandising` | Project 2 |
| `/projects/project-3` | Project 3 — athleisure startup |
| `/projects/project-4` | Project 4 — activation |
| `/contact` | Correspondence + socials |

### Structure

```
src/
├── main.tsx / App.tsx / index.css
├── data/site.ts              # [bracketed] placeholder copy
├── components/
│   ├── WireBlock.tsx         # dashed placeholder box
│   ├── PageShell.tsx         # breadcrumb + title + sections
│   ├── ScrollToTop / RevealOnScroll   (no site header or footer)
│   ├── fashion/              # CoverSection, WhyMeSection
│   ├── home-sections/        # SkillsSection, ContactSection
│   ├── internship/           # SocialBoard, CommerceBoard
│   └── marketing/            # per-project section blocks
└── pages/                    # one file per route
```

Every visual block is a `WireBlock` with a `data-wireframe` label so you
can map each box to the design when it arrives. No images, fonts, colors,
or animations — intentional.
