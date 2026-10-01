import type { ReactElement } from 'react';

/**
 * Skill icons.
 *
 * These are DRAWN, not supplied. An audit of Ramya Portfolio Images turned up no
 * icon assets of any kind — the folder holds 16 files and the only Skills file is
 * the 1672x941 background ground, which is a clean white canvas with the corner
 * collages and curved lines inside it and no pills or glyphs. `item.icon` in
 * ../../data/skills.ts is therefore null everywhere, and every pill would render
 * an empty 24px slot with the label floating after it.
 *
 * So each Strategic Expertise id gets a 24x24 line glyph here: 1.4px stroke, round
 * joins, no fill, in the panel's own #163F82. That is the section's existing language
 * (the divider rules and the header star are the same thin stroke), and it makes the
 * cards read as the reference does — a glyph anchoring the left of every pill, label
 * to its right, nothing floating. The four toolkit ids are products rather than
 * disciplines, so they live in BRAND_LOGOS below and come through BrandLogo.
 *
 * `item.icon` still wins when set, so dropping in the real PNGs remains a
 * data-only change and these glyphs are simply bypassed.
 */

/** Keyed by `SkillItem.id`. Every id in data/skills.ts has an entry. */
export const SKILL_ICONS: Record<string, ReactElement> = {
  // ——— Strategic Expertise ———
  'retail-merchandising': (
    <>
      <path d="M9.6 6.6a2 2 0 1 1 2.6 1.9V10" />
      <path d="M12.2 10 3.6 16.1c-.7.5-.4 1.4.4 1.4h16c.8 0 1.1-.9.4-1.4L12.2 10Z" />
    </>
  ),
  'visual-merchandising': (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9.2h18" />
      <path d="M12 9.2V20" />
    </>
  ),
  'trend-analysis': (
    <>
      <path d="M3.5 20h17" />
      <path d="M5.5 15.5 9.5 11l3.4 2.8L19 6.6" />
      <path d="M15.2 6.6H19v3.8" />
    </>
  ),
  'brand-management': (
    <>
      <path d="M11.2 3H4v7.2l9.4 9.4a1.6 1.6 0 0 0 2.3 0l4.3-4.3a1.6 1.6 0 0 0 0-2.3L11.2 3Z" />
      <circle cx="7.9" cy="7.9" r="1.3" />
    </>
  ),
  'fashion-marketing': (
    <>
      <path d="M4 10.2v3.6a1 1 0 0 0 1 1h1.8l7.4 4V5.2l-7.4 4H5a1 1 0 0 0-1 1Z" />
      <path d="M17.6 9.4a3.6 3.6 0 0 1 0 5.2" />
      <path d="M6.8 14.8V20" />
    </>
  ),
  'market-research': (
    <>
      <circle cx="10.5" cy="10.5" r="6.6" />
      <path d="m15.4 15.4 5.1 5.1" />
      <path d="M7.6 12.4v-1.5M10.5 12.4V8.4M13.4 12.4V9.9" />
    </>
  ),
  'consumer-behaviour': (
    <>
      <circle cx="9" cy="7.9" r="3.2" />
      <path d="M3.4 19.2c.5-3.3 2.8-5.1 5.6-5.1s5.1 1.8 5.6 5.1" />
      <path d="M16.1 5.2a3.2 3.2 0 0 1 0 5.2" />
      <path d="M17 14.3c2.1.6 3.3 2.4 3.5 4.9" />
    </>
  ),
  'product-development': (
    <>
      <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7L12 2.8Z" />
      <path d="M3.5 7 12 11.3 20.5 7" />
      <path d="M12 11.3v9.9" />
    </>
  ),

};

/**
 * Brand marks for the Creative & Digital Toolkit.
 *
 * The eight Strategic Expertise rows are disciplines, so they keep the thin line
 * glyphs in ./skillIcons. These four are named products, and a database cylinder
 * beside the word "ERP" says nothing — the reader is meant to recognise the app at
 * a glance, so these are drawn as filled brand marks in the products' own colours
 * rather than in the panel's single #163F82. That mix is deliberate: it is what
 * makes the right panel read as "tools I actually use" rather than a second copy
 * of the left panel.
 *
 * These are hand-drawn SVG approximations, not the vendors' official logo files —
 * no logo assets are supplied in the assets folder, and the marks are reproduced
 * here rather than fetched. They are recognisable at 34px. If you want the exact
 * official artwork, drop the SVGs/PNGs into public/ and set `icon` in
 * ../../data/skills.ts, which takes priority over everything in this file.
 */

/** Keyed by `SkillItem.id` for the toolkit panel only. */
export const BRAND_LOGOS: Record<string, ReactElement> = {
  // Microsoft's four-pane mark, in the four official quadrant colours.
  'ms-office': (
    <>
      <rect x="1" y="1" width="10" height="10" rx="0.6" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" rx="0.6" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" rx="0.6" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" rx="0.6" fill="#FFB900" />
    </>
  ),

  // Canva: the ring with the "C" counter, in the brand's cyan→violet gradient.
  canva: (
    <>
      <defs>
        <linearGradient id="canva-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#canva-mark)" />
      <path
        d="M17.4 7.6a6.8 6.8 0 1 0 0 8.8"
        fill="none"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </>
  ),

  // ERP: a filled database cylinder. Two tones rather than one, so the stacked
  // discs read as separate platters instead of a single blue blob.
  erp: (
    <>
      <path
        d="M4 6.2v11.6c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4V6.2Z"
        fill="#12346E"
      />
      <ellipse cx="12" cy="6.2" rx="8" ry="3.4" fill="#2C5FA8" />
      <path
        d="M4 12c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4"
        fill="none"
        stroke="#9FC0EA"
        strokeWidth="1.1"
      />
    </>
  ),

  // AI Tools: a two-lobe brain with fold lines, plus a small node. Kept in the
  // section's #163F82 — ChatGPT and Claude are named in the label, and there is
  // no single house colour for "AI", so this one stays with the section palette
  // instead of inventing one.
  'ai-tools': (
    <>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4.2v15.6" />
        <path d="M12 4.2c-1.2-1-3.1-.6-3.9.8-1.7 0-3 1.3-3 3-1.4.8-1.9 2.6-1.1 4-1.1 1.4-.6 3.3.9 4.1 0 1.7 1.3 3 3 3 .8 1.4 2.9 1.8 4.1 1.1" />
        <path d="M12 4.2c1.2-1 3.1-.6 3.9.8 1.7 0 3 1.3 3 3 1.4.8 1.9 2.6 1.1 4 1.1 1.4.6 3.3-.9 4.1 0 1.7-1.3 3-3 3-.8 1.4-2.9 1.8-4.1 1.1" />
        <path d="M8.4 9.4c1.4-.3 2.6.6 2.6 1.9M9 14.4c1.2 0 2.2.8 2.4 1.9" />
        <path d="M15.6 9.4c-1.4-.3-2.6.6-2.6 1.9M15 14.4c-1.2 0-2.2.8-2.4 1.9" />
      </g>
      <circle cx="20.6" cy="3.6" r="1.3" fill="currentColor" />
    </>
  ),
};

/** The brand mark for a toolkit item, or undefined if that id has none. */
export function BrandLogo({ id }: { id: string }) {
  const logo = BRAND_LOGOS[id];

  if (!logo) return null;

  return (
    <svg className="skill-glyph" viewBox="0 0 24 24" aria-hidden focusable="false">
      {logo}
    </svg>
  );
}

/** The glyph for a skill id, or undefined if that id has none drawn. */
export function SkillGlyph({ id }: { id: string }) {
  const glyph = SKILL_ICONS[id];

  if (!glyph) return null;

  return (
    <svg
      className="skill-glyph"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
