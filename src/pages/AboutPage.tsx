import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';
import { siteData } from '../data/site';

/** Mirrors lavanaya AboutPage spread (wireframe). */
export function AboutPage() {
  return (
    <PageShell
      breadcrumb="HOME / ABOUT ME"
      eyebrow="ABOUT ME"
      title={siteData.student.degree}
      intro={siteData.student.secondaryStatement}
    >
      <WireBlock label="About — profile spread" minHeight={200}>
        <ul>
          <li>[Institution / year / location]</li>
          <li>[Statement + secondary statement + focus]</li>
          <li>[Interests chips + Exploring chips]</li>
          <li>[Approach plate + handwritten statement]</li>
        </ul>
      </WireBlock>
      <WireBlock label="About — next: internship CTA → /internship/experience" minHeight={80} />
    </PageShell>
  );
}
