import type { SkillItem } from '../../data/skills';
import { BrandLogo, SkillGlyph } from './skillIcons';

/**
 * One pill-shaped skill/tool row.
 *
 * Four states for the glyph slot, in priority order:
 *
 *   icon set     → the supplied <img>
 *   brand mark   → the product logo from ./skillIcons BrandLogo (toolkit panel)
 *   line glyph   → the drawn line glyph from ./skillIcons, matched on id
 *   no glyph     → an empty span, so the label still starts on the same axis in
 *                  every row and the column does not reflow
 *
 * The two panels take different branches on purpose. The toolkit rows are named
 * products, so they get brand marks a reader recognises; the expertise rows are
 * disciplines, so they get the thin line glyphs in the section's #163F82, which
 * match the divider rules and the header star. No icon files are supplied, and
 * without either path every pill would render a bare label behind an empty slot.
 * Setting `icon` in the data overrides both, so real PNGs remain a data-only
 * change.
 *
 * The glyph is decorative — the label beside it is the accessible name — so it is
 * aria-hidden and the empty slot is too.
 *
 * `label` may contain \n; `.skill-pill-label` renders it as a real break
 * (white-space: pre-line), which is how the two-line pills — "MS Office (Word,
 * Excel, PowerPoint)" and "AI Tools (ChatGPT, Claude)" — stay two lines inside a
 * fixed 45px pill.
 */
export function SkillPill({ item }: { item: SkillItem }) {
  return (
    <div className="skill-pill">
      {item.icon ? (
        <img
          className="skill-pill-icon"
          src={item.icon}
          alt={item.iconDescription}
          draggable={false}
        />
      ) : (
        <span className="skill-pill-icon">
          {/* An id lives in only one of the two maps, so exactly one of these
              renders; both return null otherwise. */}
          <BrandLogo id={item.id} />
          <SkillGlyph id={item.id} />
        </span>
      )}

      <span className="skill-pill-label">{item.label}</span>
    </div>
  );
}