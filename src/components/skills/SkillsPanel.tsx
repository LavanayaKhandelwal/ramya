import { SkillPill } from './SkillPill';
import type { SkillsPanelData } from '../../data/skills';

/**
 * The shared rounded-top panel: both halves of the Skills page are this
 * component with a different record from ../../data/skills.ts, which is what
 * keeps the two panels the same size, the same radius and the same internal
 * rhythm. Left/right placement is passed in rather than hard-coded, so the same
 * panel can sit on either side without a modifier class.
 *
 * The heading is supplied artwork, never substituted type:
 *
 *   titleAsset set  → the transparent PNG, which carries the wordmark AND the
 *                     divider rule beneath it as ink in the file
 *   titleAsset null → HTML text in the portfolio's display serif, plus the
 *                     `.skills-panel-divider` rule below
 *
 * There is deliberately no separate divider element here any more. The rule is
 * inside both supplied PNGs (a 292x11 and a 298x11 bar), so rendering the CSS
 * one as well put a second, shorter rule directly beneath the real one. The
 * fallback path is the only case that would need a rule drawn, and it is a
 * null-check away — re-add the div guarded on `!panel.titleAsset` if a panel
 * ever ships without artwork.
 *
 * `headingId` lands on whichever element carries the words, so the section's
 * aria-labelledby resolves in both branches.
 */
export function SkillsPanel({
  panel,
  panelClass,
  headingId,
}: {
  panel: SkillsPanelData;
  panelClass: string;
  headingId: string;
}) {
  return (
    <section className={`skills-panel ${panelClass}`} aria-labelledby={headingId}>
      <div className="skills-panel-header">
        {panel.titleAsset ? (
          <img
            className="skills-panel-title"
            id={headingId}
            src={panel.titleAsset}
            alt={panel.title}
            draggable={false}
          />
        ) : (
          <p className="skills-panel-title" id={headingId}>
            {panel.title}
          </p>
        )}

        <p className="skills-panel-description">{panel.description}</p>
      </div>

      <div className="skills-panel-grid">
        {panel.items.map((item) => (
          <SkillPill key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}