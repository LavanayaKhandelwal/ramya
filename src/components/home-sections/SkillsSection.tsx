import { ExpertisePanel } from '../skills/ExpertisePanel';
import { ToolkitPanel } from '../skills/ToolkitPanel';
import { SkillsHeader } from '../skills/SkillsHeader';

/**
 * Skills — the last designed section of the home page.
 *
 * This replaces the "Home — Skills matrix (Business / Digital / Certifications)"
 * wireframe block. It is a fixed 100vh composition sized against the viewport,
 * which makes it a section rather than a route, so for the same reason as About
 * and Projects it sits OUTSIDE the 1100px column the remaining home blocks are
 * set in: inside a centred column its edges would stop being edges and the
 * background collage would be boxed in on both sides.
 *
 * The background is the supplied `skills-section-background.png` (1672x941),
 * used whole — object-fit:cover, one layer, nothing drawn over or behind it. It
 * already carries the white canvas, the top-right and bottom-left collages and
 * the curved blue lines, so none of that is recreated in CSS: the panels are
 * translucent (rgba(255,255,255,0.15)) specifically so the collage stays
 * visible through them, and the centre gap between them stays clean.
 *
 * Composition is the brief's, written out literally: header at top 5% / left 5%,
 * both panels at top 33% / height 59% (so their bottoms land at 92%), each 43%
 * wide at left 6.5% and right 6.5%, a 90px arch on the two top corners and
 * square below. The panels match by construction — one component rendered twice.
 *
 * `id="skills"` is what the nav and footer point at, the same way `about` and
 * `projects` are.
 *
 * See ../../data/skills.ts for which of the brief's assets exist in the folder
 * and which are rendered as empty layers until they are supplied.
 */
export function SkillsSection() {
  return (
    <main className="skills-page" id="skills" aria-label="Skills">
      <img
        className="skills-background"
        src="/ramya-portfolio-images/skills-section-background.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      <SkillsHeader />

      <ExpertisePanel />
      <ToolkitPanel />
    </main>
  );
}
