# Image Placeholder Mapping Table

Every regular image placement across the four project pages (plus the four
project index cards) has been replaced with a neutral, alphanumeric-labelled
placeholder PNG. This table is the authoritative reference for locating each
image, restoring the final artwork, and communicating replacements with the client.

## Numbering convention

| Project | ID prefix | Sequence | Placements |
|---------|-----------|----------|------------|
| Project 1 — Fashion Merchandising | `1` | `1A` → `1AR` | 44 |
| Project 2 — UNIQLO *Threading the Trend* | `2` | `2A` → `2BA` | 53 |
| Project 3 — *Beyond the Floral* Visual Merchandising | `3` | `3A` → `3AB` | 28 |
| Project 4 — UNIQLO Fragrances | `4` | `4A` → `4AD` | 30 |
| **Total** | | | **155** |

- Identifiers are assigned in **document (scroll) order** within each project and are
  **unique per placement** — the same source image used in several slots receives a
  distinct ID for every slot (no de-duplication).
- `Original Image Path` is the asset that rendered there **before** this change
  (read from git history). `— (none …)` means the slot was previously an empty
  tinted `SectionImage` placeholder with no image file — the client still needs to
  supply a photo there.
- `Original Rendered Dimensions` is the rendered width × height of the image box
  (CSS-determined; see *Layout preservation* below).
- **Original assets were not removed or overwritten** — they remain in
  `public/ramya-portfolio-images/`.

## Layout preservation

Every replacement was made in place: the `<img>` / `<SectionImage>` element, its
container, classes, `object-fit`/`object-position`, border-radius, borders, shadows,
margins and responsive behaviour are unchanged. Placeholders were sized to their CSS
box so no layout shift is introduced:

- Case-study images sit in **fixed / aspect-ratio / absolute / grid-sized boxes with
  `object-fit: cover`**, so the box dimensions are set by CSS regardless of the
  image's intrinsic size — swapping `src` cannot move anything.
- The only `height: auto` images are the four **index cards** (`1AR`, `2BA`, `3AB`,
  `4AD`); their placeholders are generated at the exact original size **1501 × 1048**
  so the rendered height is identical.
- `src/index.css` is **unchanged from the original** — no CSS was added, removed or
  edited. Previously-empty `SectionImage` slots rendered a tinted `<div>`; with a
  `src` supplied they render an `<img>` instead. Both use the shared
  `.section-img { width: 100%; height: 100%; object-fit: cover }` rule, and the old
  placeholder `<div>` used `box-sizing: border-box` padding/border, so the **outer
  box footprint is identical** either way — only the pixel content inside it changes.
  Because the tinted `<div>` and the `<img>` are mutually exclusive branches, no
  descriptive label text renders alongside the baked-in ID (no overlap, no extra rule
  needed). `alt` text and this table preserve the original image descriptions.
- No CSS background images existed to preserve (the codebase contains no photo
  `background-image`/`url()` rules); logos, icons and inline SVGs were left untouched.

## Mapping table

| Project | Image ID | Section/Component | Original Image Path | Placeholder Path | Original Rendered Dimensions | Notes |
|---------|----------|-------------------|---------------------|------------------|------------------------------|-------|
| Project 1 | **1A** | Hero | /ramya-portfolio-images/project1-hero-section-background.png | /ramya-portfolio-images/placeholders/1A.png | 1612 × 976 | Woman wearing pale yellow convertible resort dress in Mediterranean architectural setting; full-bleed bg, object-fit: cover |
| Project 1 | **1B** | The Beginning | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1B.png | 1200 × 896 | Mediterranean coastal resort scene with woman in light cream resort outfit |
| Project 1 | **1C** | The Beginning | /ramya-portfolio-images/project1-flatlay-brief.jpg | /ramya-portfolio-images/placeholders/1C.png | 340 × 300 | Resort flat-lay with straw hat, sunglasses, palm leaf, and note |
| Project 1 | **1D** | The Beginning | /ramya-portfolio-images/project1-beach-question.jpg | /ramya-portfolio-images/placeholders/1D.png | 340 × 380 | Mediterranean beach with straw parasol and lounge chair |
| Project 1 | **1E** | Finding the Direction | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1E.png | 928 × 1152 | Woman in ivory open-back resort dress looking out over Mediterranean coastline |
| Project 1 | **1F** | Finding the Direction | /ramya-portfolio-images/project1-beach-question.jpg | /ramya-portfolio-images/placeholders/1F.png | 260 × 273 | Mediterranean coastal village |
| Project 1 | **1G** | Finding the Direction | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1G.png | 260 × 273 | Mediterranean architectural terrace |
| Project 1 | **1H** | Finding the Direction | /ramya-portfolio-images/project3-research-rack.jpg | /ramya-portfolio-images/placeholders/1H.png | 260 × 273 | Resort clothing rack |
| Project 1 | **1I** | Finding the Direction | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1I.png | 260 × 260 | Ivory linen fabric with palm shadow |
| Project 1 | **1J** | Finding the Direction | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1J.png | 55 × 55 | Tie-back convertible construction detail |
| Project 1 | **1K** | Finding the Direction | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1K.png | 55 × 55 | Ivory fabric tie detail |
| Project 1 | **1L** | Finding the Direction | /ramya-portfolio-images/project3-research-rack.jpg | /ramya-portfolio-images/placeholders/1L.png | 55 × 55 | Convertible garment element |
| Project 1 | **1M** | Finding the Direction | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1M.png | 200 × 260 | Close-up macro linen texture |
| Project 1 | **1N** | Building the Collection | /ramya-portfolio-images/project1-hero-section-background.png | /ramya-portfolio-images/placeholders/1N.png | 1612 × 976 | Mediterranean resort architecture with terracotta planter, straw hat, and flowing ivory dr |
| Project 1 | **1O** | Building the Collection | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1O.png | 92 × 92 | Palm shadows on stucco |
| Project 1 | **1P** | Building the Collection | /ramya-portfolio-images/project1-beach-question.jpg | /ramya-portfolio-images/placeholders/1P.png | 92 × 92 | Mediterranean coastal view |
| Project 1 | **1Q** | Building the Collection | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1Q.png | 92 × 92 | Woman walking in resort outfit |
| Project 1 | **1R** | Building the Collection | /ramya-portfolio-images/project1-flatlay-brief.jpg | /ramya-portfolio-images/placeholders/1R.png | 92 × 92 | Beach parasols and lounge chairs |
| Project 1 | **1S** | Building the Collection | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1S.png | 180 × 108 | Flowing sheer curtains & villa |
| Project 1 | **1T** | Building the Collection | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1T.png | 180 × 108 | Open back resort dress detail |
| Project 1 | **1U** | Building the Collection | /ramya-portfolio-images/project1-flatlay-brief.jpg | /ramya-portfolio-images/placeholders/1U.png | 180 × 108 | Palm leaf in warm sunlight |
| Project 1 | **1V** | Building the Collection | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1V.png | 96 × 45 | Corn gold context |
| Project 1 | **1W** | Building the Collection | /ramya-portfolio-images/project1-flatlay-brief.jpg | /ramya-portfolio-images/placeholders/1W.png | 96 × 45 | Blush pink context |
| Project 1 | **1X** | Building the Collection | /ramya-portfolio-images/project1-beach-question.jpg | /ramya-portfolio-images/placeholders/1X.png | 96 × 45 | Turquoise sea context |
| Project 1 | **1Y** | Building the Collection | /ramya-portfolio-images/project1-hero-section-background.png | /ramya-portfolio-images/placeholders/1Y.png | 96 × 45 | Dusty orange context |
| Project 1 | **1Z** | Building the Collection | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1Z.png | 96 × 45 | Coral context |
| Project 1 | **1AA** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AA.png | 96 × 45 | Jet black context |
| Project 1 | **1AB** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AB.png | 190 × 140 | Linen texture |
| Project 1 | **1AC** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AC.png | 190 × 140 | Cotton-Linen texture |
| Project 1 | **1AD** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AD.png | 190 × 140 | Voile texture |
| Project 1 | **1AE** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AE.png | 190 × 140 | Chiffon texture |
| Project 1 | **1AF** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AF.png | 190 × 140 | Georgette texture |
| Project 1 | **1AG** | Building the Collection | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AG.png | 190 × 140 | Satin texture |
| Project 1 | **1AH** | Hero Garment & Tech Doc | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/1AH.png | 620 × 340 | Model wearing strapless ruched mini resort dress |
| Project 1 | **1AI** | Hero Garment & Tech Doc | /ramya-portfolio-images/project1-beginning-hero.jpg | /ramya-portfolio-images/placeholders/1AI.png | 620 × 340 | Model wearing strapless ruched maxi resort dress transformed with detachable tier |
| Project 1 | **1AJ** | Hero Garment & Tech Doc | /ramya-portfolio-images/project3-fabric-linen.jpg | /ramya-portfolio-images/placeholders/1AJ.png | 92 × 92 | Ruched bodice texture |
| Project 1 | **1AK** | Hero Garment & Tech Doc | /ramya-portfolio-images/project1-flatlay-brief.jpg | /ramya-portfolio-images/placeholders/1AK.png | 92 × 92 | Detachable tier button attachment |
| Project 1 | **1AL** | Hero Garment & Tech Doc | /ramya-portfolio-images/project1-hero-section-background.png | /ramya-portfolio-images/placeholders/1AL.png | 92 × 92 | Flowing skirt volume |
| Project 1 | **1AM** | Hero Garment & Tech Doc | /ramya-portfolio-images/project1-beach-question.jpg | /ramya-portfolio-images/placeholders/1AM.png | 92 × 92 | Minimal finishing details |
| Project 1 | **1AN** | Learning Journey | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/1AN.png | 320 × 385 | Resort-wear trend research notebook flat lay with Mediterranean references and palette swa; was an empty tinted placeholder (no prior image file) |
| Project 1 | **1AO** | Learning Journey | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/1AO.png | 320 × 385 | Butter-yellow convertible tiered dress on a mannequin in a resort-wear showroom; was an empty tinted placeholder (no prior image file) |
| Project 1 | **1AP** | Learning Journey | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/1AP.png | 320 × 385 | Product-development flat lay with technical dress sketch, fabric swatches and lace samples; was an empty tinted placeholder (no prior image file) |
| Project 1 | **1AQ** | Learning Journey | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/1AQ.png | 320 × 385 | Close-up of yellow garment being stitched with white floral lace trim at a sewing machine; was an empty tinted placeholder (no prior image file) |
| Project 1 | **1AR** | Index project card | /ramya-portfolio-images/project1-card.png | /ramya-portfolio-images/placeholders/1AR.png | 1501 × 1048 | index card, height:auto — matches original aspect exactly |
| Project 2 | **2A** | Hero (Threading the Trend) | /ramya-portfolio-images/project2-hero-section-background.png | /ramya-portfolio-images/placeholders/2A.png | 1536 × 1024 | UNIQLO Threading the Trend hero with embroidered garments, wooden chair and natural flower; full-bleed bg, object-fit: cover |
| Project 2 | **2B** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2B.png | 400 × 700 | Natural wooden clothing rail with neutral garments, white linen and a kraft-paper tag; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2C** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2C.png | 760 × 560 | Woman in a white relaxed-fit shirt carrying a canvas tote, photographed from behind in sun; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2D** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2D.png | 380 × 280 | Close-up of textured neutral fabric; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2E** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2E.png | 380 × 300 | Botanical shadows on a warm ivory wall; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2F** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2F.png | 300 × 170 | Close-up of folded beige and olive linen fabrics; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2G** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2G.png | 300 × 170 | Minimalist book reading ; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2H** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2H.png | 300 × 170 | Botanical branches casting soft shadows on an ivory wall; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2I** | Understanding the Consumer | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2I.png | 300 × 170 | Close-up of relaxed neutral trousers and natural fabric folds; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2J** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2J.png | 340 × 227 | Row of neutral everyday garments on wooden hangers along a natural rail; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2K** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2K.png | 340 × 227 | Calm lifestyle workspace with laptop, notebook, coffee cup and rattan chair; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2L** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2L.png | 340 × 227 | Flat lay of blush pleated fabric, cream sneakers, denim and a beige shoulder bag; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2M** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2M.png | 96 × 96 | Macro photograph of textured beige linen fabric; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2N** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2N.png | 96 × 96 | Soft blush fabric falling into elegant natural folds; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2O** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2O.png | 96 × 96 | Small pastel flowers embroidered onto textured neutral fabric; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2P** | Everyday Choices → Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2P.png | 280 × 280 | Cluster of small white and yellow daisy-like flowers against a textured cream wall; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2Q** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2Q.png | 380 × 200 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2R** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2R.png | 380 × 200 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2S** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2S.png | 380 × 200 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2T** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2T.png | 380 × 200 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2U** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2U.png | 380 × 200 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2V** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2V.png | 320 × 213 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2W** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2W.png | 320 × 213 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2X** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2X.png | 320 × 213 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2Y** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2Y.png | 320 × 213 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2Z** | Same Simplicity New Possibilities | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2Z.png | 320 × 213 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AA** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AA.png | 190 × 130 | Delicate flowering branches with soft pink blossoms; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AB** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AB.png | 100 × 184 | Delicate lavender blossoms; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AC** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AC.png | 100 × 184 | Neutral linen fabric texture; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AD** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AD.png | 100 × 184 | Soft pink botanical flower arrangement; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AE** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AE.png | 208 × 92 | Green tree canopy and natural sunlight; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AF** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AF.png | 100 × 184 | Flowering branches against a blue sky; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AG** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AG.png | 100 × 92 | Close-up of pastel floral embroidery on linen; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AH** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AH.png | 100 × 184 | Botanical landscape with flowering trees; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AI** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AI.png | 100 × 92 | Embroidery hoop with delicate flower stitching; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AJ** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AJ.png | 208 × 92 | Soft iridescent fabric in pastel colours; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AK** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AK.png | 100 × 184 | Pastel embroidery threads and sewing materials; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AL** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AL.png | 100 × 184 | Floral embroidery sketches on paper; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AM** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AM.png | 100 × 184 | Small botanical colour swatches and pressed flowers; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AN** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AN.png | 96 × 96 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AO** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AO.png | 96 × 96 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AP** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AP.png | 96 × 96 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AQ** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AQ.png | 96 × 96 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AR** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AR.png | 96 × 96 | was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AS** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AS.png | 300 × 225 | Two neutral everyday cotton shirts on mannequins with subtle botanical embroidery; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AT** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AT.png | 120 × 60 | Close-up of a small floral embroidered motif on an ivory shirt; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AU** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AU.png | 120 × 60 | Detailed embroidery and stitching on cotton fabric; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AV** | Botanical Whispers | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AV.png | 120 × 60 | Small botanical embroidery motif on a shirt cuff; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AW** | Key Learnings | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AW.png | 480 × 190 | Overhead fashion research document with garment references, sketches and neutral fabric sw; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AX** | Key Learnings | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AX.png | 480 × 190 | Overlapping natural textile swatches with subtle botanical embroidery; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AY** | Key Learnings | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AY.png | 480 × 190 | Coordinated row of everyday shirts on simple wooden hangers; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2AZ** | Key Learnings | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/2AZ.png | 480 × 190 | Neatly folded everyday garments in clean stacks on a pale stone shelf; was an empty tinted placeholder (no prior image file) |
| Project 2 | **2BA** | Index project card | /ramya-portfolio-images/project2-card.png | /ramya-portfolio-images/placeholders/2BA.png | 1501 × 1048 | index card, height:auto — matches original aspect exactly |
| Project 3 | **3A** | Hero (Beyond the Floral) | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/3A.png | 928 × 1152 | full-bleed bg, object-fit: cover |
| Project 3 | **3B** | Florals Reimagined | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/3B.png | 928 × 1152 | full-bleed bg, object-fit: cover |
| Project 3 | **3C** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3C.png | 64 × 64 | Close-up of a delicate pale pink blossom with a soft cream background; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3D** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3D.png | 64 × 64 | Iridescent pastel material reflecting lavender, pink and blue light; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3E** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3E.png | 64 × 64 | Pale lavender flowers with translucent petals and pearlescent reflections; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3F** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3F.png | 64 × 64 | Blue and pink iridescent floral forms against a soft pastel background; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3G** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3G.png | 190 × 190 | Iridescent flower sculpture; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3H** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3H.png | 92 × 92 | Holographic material close-up; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3I** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3I.png | 190 × 92 | Editorial beauty portrait with luminous pastel makeup; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3J** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3J.png | 92 × 92 | Futuristic fashion portrait with reflective styling; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3K** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3K.png | 92 × 92 | Translucent purple-blue flowers; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3L** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3L.png | 92 × 92 | Flowing iridescent fabric; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3M** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3M.png | 190 × 92 | Pastel fashion silhouettes; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3N** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3N.png | 200 × 72 | Editorial fashion photograph with pastel garments; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3O** | Florals Reimagined | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3O.png | 200 × 72 | Holographic material sample; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3P** | Experience in Bloom | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/3P.png | 928 × 1152 | full-bleed bg, object-fit: cover |
| Project 3 | **3Q** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3Q.png | 340 × 200 | Large translucent holographic flower with reflective petals and an illuminated golden cent; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3R** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3R.png | 520 × 380 | Two people installing flowing iridescent drapes inside a contemporary fashion retail space; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3S** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3S.png | 420 × 380 | Completed Cover Story retail installation with a mannequin in a floral dress and holograph; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3T** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3T.png | 300 × 175 | Close-up of an illuminated holographic flower with translucent reflective petals and a war; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3U** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3U.png | 300 × 175 | Macro photograph of flowing iridescent material with reflective blue, pink, lavender and s; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3V** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3V.png | 900 × 506 | Layered holographic floral forms showing translucent surfaces and reflective petals; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3W** | Experience in Bloom | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3W.png | 480 × 360 | Wider view of the completed installation with flowing iridescent drapes and soft lighting; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3X** | Window Into The Future | /ramya-portfolio-images/project3-left-hero.jpg | /ramya-portfolio-images/placeholders/3X.png | 928 × 1152 | full-bleed bg, object-fit: cover |
| Project 3 | **3Y** | Window Into The Future | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3Y.png | 800 × 540 | Full-height Cover Story retail window with a central floral-dressed mannequin, iridescent ; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3Z** | Window Into The Future | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3Z.png | 250 × 250 | Close-up of a large holographic flower with layered translucent petals and an illuminated ; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3AA** | Window Into The Future | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/3AA.png | 340 × 235 | Close-up of the black mannequin in a floral dress highlighting the print, drape and struct; was an empty tinted placeholder (no prior image file) |
| Project 3 | **3AB** | Index project card | /ramya-portfolio-images/project3-card.png | /ramya-portfolio-images/placeholders/3AB.png | 1501 × 1048 | index card, height:auto — matches original aspect exactly |
| Project 4 | **4A** | Hero (Beyond the Everyday) | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4A.png | 1440 × 900 | Four UNIQLO fragrance bottles — HANA, KAZE, MIZU and SORA — on a sunlit stone surface with; was an empty tinted placeholder (no prior image file); full-bleed bg, object-fit: cover |
| Project 4 | **4B** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4B.png | 620 × 700 | Contemporary UNIQLO store exterior with a red sign on a pale concrete wall, blue sky and l; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4C** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4C.png | 700 × 215 | Modern city skyline at sunset representing fragrance market growth; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4D** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4D.png | 220 × 180 | Close-up of clear blue water with gentle ripples; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4E** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4E.png | 220 × 180 | Sheer white curtains illuminated by sunlight; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4F** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4F.png | 220 × 180 | Small ceramic vessel beside delicate natural branches; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4G** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4G.png | 620 × 188 | Minimal pale architectural wall with a sharp blue-sky opening and soft tree branches; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4H** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4H.png | 280 × 207 | Modern ZARA retail storefront with minimalist architecture and signage; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4I** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4I.png | 280 × 207 | Marks & Spencer retail storefront with visible signage and glass windows; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4J** | Why Fragrances Now? | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4J.png | 340 × 175 | Serene natural stone beside a reflective pool with soft white flowers and warm sunlight; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4K** | The Fragrance Expression | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4K.png | 600 × 300 | HANA fragrance bottle and pink packaging among cherry blossoms on pale stone; was an empty tinted placeholder (no prior image file); landscape asset keeps content-sized row at 46vh floor |
| Project 4 | **4L** | The Fragrance Expression | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4L.png | 600 × 300 | MIZU fragrance bottle and powder-blue packaging against rippling water and pale sky; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4M** | The Fragrance Expression | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4M.png | 600 × 300 | KAZE fragrance bottle with botanical green packaging among green leaves and citrus; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4N** | The Fragrance Expression | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4N.png | 600 × 300 | SORA fragrance bottle and light-blue packaging against an open blue sky; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4O** | Real People Real Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4O.png | 190 × 190 | UNIQLO HANA perfume bottle on rough limestone with white blossoms and botanical shadows; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4P** | Real People Real Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4P.png | 110 × 140 | Pale cherry blossoms, natural daylight and soft blue sky; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4Q** | Real People Real Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4Q.png | 108 × 108 | Close-up of pale ivory fabric with soft natural folds; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4R** | Real People Real Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4R.png | 108 × 108 | Botanical green leaves casting shadows on pale limestone; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4S** | Real People Real Insights | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4S.png | 108 × 108 | Clear blue water with sunlight reflecting on the ripples; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4T** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4T.png | 300 × 190 | Close-up of pale ivory fabric with natural folds and a small white flower; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4U** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4U.png | 300 × 190 | Neutral-colored garments on wooden hangers with soft cherry blossoms; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4V** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4V.png | 300 × 190 | Pale pink cherry blossoms with dark green leaves in warm sunlight; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4W** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4W.png | 300 × 190 | Clear blue water with bright sunlight creating rippling reflections; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4X** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4X.png | 102 × 102 | Magnifying glass resting on printed market research documents; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4Y** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4Y.png | 102 × 102 | Minimal scene with small human figurines on soft pink surfaces; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4Z** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4Z.png | 102 × 102 | Fragrance concept sketch and perfume bottle study on a design desk; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4AA** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4AA.png | 102 × 102 | Open design notebook with visual references and a pencil; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4AB** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4AB.png | 102 × 102 | Neutral fabric swatches arranged in a material development workspace; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4AC** | Turning Insights Into Impact | — (none: CSS tinted placeholder) | /ramya-portfolio-images/placeholders/4AC.png | 102 × 102 | Printed market analysis report with a simple bar chart and a pencil; was an empty tinted placeholder (no prior image file) |
| Project 4 | **4AD** | Index project card | /ramya-portfolio-images/project4-card.png | /ramya-portfolio-images/placeholders/4AD.png | 1501 × 1048 | index card, height:auto — matches original aspect exactly |

---

*Generated as part of the placeholder-replacement pass. 155 placements total:
Project 1 = 44, Project 2 = 53, Project 3 = 28, Project 4 = 30.*
*Repeated source images are intentionally listed once per placement with unique IDs.*
