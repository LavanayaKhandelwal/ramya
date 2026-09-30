import { WireBlock } from '../components/WireBlock';
import { AboutSection } from '../components/home-sections/AboutSection';
import { ProjectsSection } from '../components/home-sections/ProjectsSection';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { siteData } from '../data/site';

/**
 * Home — wireframe, with two designed sections in place.
 * Mirrors lavanaya HomePage sections:
 * 1. About Me → 2. Internship feature callout → 3. Selected projects (4-up) →
 * 4. Skills → 5. Contact.
 *
 * The order above is unchanged. What changed is that sections 1 and 3 are no
 * longer wireframes — About Me and the project index are both real designs now —
 * and both are fixed 100vh compositions whose artwork is sized against the
 * viewport. So they sit OUTSIDE the 1100px column the remaining blocks are set
 * in, and the page becomes a sequence:
 *
 *   About Me          full-bleed
 *   internship        1100px column
 *   My Projects       full-bleed
 *   skills + contact  1100px column
 *
 * Inside a centred column they would be boxed in on both sides and their edges
 * would stop being edges. Each brings its own ground and its own overflow.
 *
 * About Me leads the page, straight after the fashion cover that precedes it in
 * App, so the reader meets it before the internship and the project index rather
 * than halfway down. The project index sits in its original position, between
 * the internship and the skills.
 */
export function HomePage() {
  return (
    <>
      <AboutSection />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
        <WireBlock label="Home — 2. Internship feature callout" minHeight={160}>
          <p>
            [{siteData.internship.company} — {siteData.internship.role}]
          </p>
          <ul>
            <li>[Eyebrow + headline + overview]</li>
            <li>[Highlight chips]</li>
            <li>[CTA → /internship/experience + /internship/learnings]</li>
          </ul>
        </WireBlock>
      </div>

      <ProjectsSection />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
