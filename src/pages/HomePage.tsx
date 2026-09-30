import { Link } from 'react-router-dom';
import { WireBlock } from '../components/WireBlock';
import { AboutSection } from '../components/home-sections/AboutSection';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';
import { siteData } from '../data/site';

/**
 * Home — wireframe.
 * Mirrors lavanaya HomePage sections:
 * 1. Internship feature callout → 2. Selected projects (4-up) → 3. About Me →
 * 4. Skills → 5. Contact.
 *
 * The About section sits OUTSIDE the 1100px column the rest of the page is set
 * in, and that is deliberate. It is a full-bleed 100vh composition whose
 * collages are cut by the window edges and whose columns are sized as
 * percentages of the viewport, so inside a centred column it would be boxed in
 * on both sides and its edges would stop being edges. It brings its own ground
 * and its own overflow, so it reads the same here as it did at /about.
 */
export function HomePage() {
  return (
    <>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
        <WireBlock label="Home — 1. Internship feature callout" minHeight={160}>
          <p>
            [{siteData.internship.company} — {siteData.internship.role}]
          </p>
          <ul>
            <li>[Eyebrow + headline + overview]</li>
            <li>[Highlight chips]</li>
            <li>[CTA → /internship/experience + /internship/learnings]</li>
          </ul>
        </WireBlock>

        <WireBlock label="Home — 2. Selected projects (4-up index)" minHeight={220}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {siteData.selectedProjects.map((p) => (
              <div key={p.id} style={{ border: '1px dashed #999', padding: 12 }}>
                <p>[{p.number} — {p.title}]</p>
                <p>{p.category}</p>
                <p>[Image]</p>
                <p>[Brief / Research / Contribution / Learning]</p>
                <Link to={`/projects/${p.slug}`}>[Read → /projects/{p.slug}]</Link>
              </div>
            ))}
          </div>
        </WireBlock>
      </div>

      <AboutSection />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
}
