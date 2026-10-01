// Skills section data — the two panels on the home page.
//
// Both panels are populated from these arrays rather than from duplicated markup:
// SkillPill maps one item, and SkillsPanel maps the grid. Adding a skill is a
// line here and nothing else.
//
// ——— WHAT IS AND IS NOT SUPPLIED ———
//
// All three Skills headings ARE now supplied, and all three are transparent
// artwork, so none of them is set in type any more:
//
//   skills-title.png (2087x753)            the header lockup — both rules, both
//                                         sparkles, the SKILLS wordmark and the
//                                         subtitle, as one file. SkillsHeader.
//   strategic-expertise-title.png (1821x864)  left panel heading.
//   creative-toolkit-title.png (2008x783)     right panel heading.
//
// The two panel files each carry their divider rule as ink in the file itself
// (a 292x11 and a 298x11 bar below the wordmark), so `dividerWidth` and the
// `.skills-panel-divider` rule are gone — the artwork draws that rule, and
// leaving the CSS one put a second, shorter rule under the real one.
//
// `icon` is still null on every entry, and that is still a statement about the
// folder rather than a placeholder waiting to be filled in with a guess. The
// only Skills artwork in the folder is the three headings above and
// `skills-section-background.png`, the 1672x941 ground this section uses as its
// background; there are no skill-pill icons.
//
// The null icons do NOT leave the pills bare. The two panels fall back differently,
// both in ../components/skills/skillIcons.tsx: the eight Strategic Expertise rows
// are disciplines, so they get a 24x24 line glyph in the section's #163F82, while
// the four toolkit rows are named products and get brand marks — the Microsoft
// four-pane, the Canva ring, a database cylinder for ERP, a brain for the AI tools —
// which is what lets the reader recognise an app at a glance rather than infer it
// from a generic symbol. Every pill therefore carries a mark, and the cards read as
// the reference does rather than as labels floating in empty space.
// Nothing here invents a filename. Drop the real PNGs into
// public/ramya-portfolio-images/ and replace the nulls with their paths: the pills
// give way to the real icons, data-only.

export interface SkillItem {
  /** Stable key; also the alt-text handle for the icon. */
  id: string;
  /** Pill text. `\n` is honoured and rendered as a line break. */
  label: string;
  /** Icon file. null until the asset is supplied. */
  icon: string | null;
  /** Alt text for the icon, kept on the data so it arrives with the file. */
  iconDescription: string;
}

export interface SkillsPanelData {
  /** Heading text, used when `titleAsset` is null. */
  title: string;
  /** Heading as a supplied transparent PNG. null falls back to HTML text. */
  titleAsset: string | null;
  /** Small uppercase description set to the right of the heading. */
  description: string;
  /** Pill rows. Two columns on desktop, one on mobile. */
  items: SkillItem[];
}

/** Left panel — Strategic Expertise. */
export const strategicExpertise: SkillsPanelData = {
  title: 'Strategic Expertise',
  titleAsset: '/ramya-portfolio-images/strategic-expertise-title.png',
  description:
    'INSIGHTS, PLANNING AND\nMARKET UNDERSTANDING\nTO CREATE MEANINGFUL\nFASHION EXPERIENCES.',
  items: [
    { id: 'retail-merchandising', label: 'Retail & Merchandising', icon: null, iconDescription: 'retail and merchandising' },
    { id: 'visual-merchandising', label: 'Visual Merchandising', icon: null, iconDescription: 'visual merchandising' },
    { id: 'trend-analysis', label: 'Trend Analysis', icon: null, iconDescription: 'trend analysis' },
    { id: 'brand-management', label: 'Brand Management', icon: null, iconDescription: 'brand management' },
    { id: 'fashion-marketing', label: 'Fashion Marketing', icon: null, iconDescription: 'fashion marketing' },
    { id: 'market-research', label: 'Market Research', icon: null, iconDescription: 'market research' },
    { id: 'consumer-behaviour', label: 'Consumer Behaviour', icon: null, iconDescription: 'consumer behaviour' },
    { id: 'product-development', label: 'Product Development', icon: null, iconDescription: 'product development' },
  ],
};

/** Right panel — Creative & Digital Toolkit. */
export const creativeToolkit: SkillsPanelData = {
  title: 'Creative & Digital Toolkit',
  titleAsset: '/ramya-portfolio-images/creative-toolkit-title.png',
  description:
    'THE TOOLS AND\nTECHNOLOGIES I USE\nTO BRING IDEAS TO LIFE\nAND STAY AHEAD.',
  items: [
    { id: 'ms-office', label: 'MS Office\n(Word, Excel, PowerPoint)', icon: null, iconDescription: 'Microsoft Office' },
    { id: 'canva', label: 'Canva', icon: null, iconDescription: 'Canva' },
    { id: 'erp', label: 'ERP', icon: null, iconDescription: 'ERP' },
    { id: 'ai-tools', label: 'AI Tools\n(ChatGPT, Claude)', icon: null, iconDescription: 'AI tools' },
  ],
};