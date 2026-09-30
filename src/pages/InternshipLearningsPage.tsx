import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';
import { siteData } from '../data/site';

/** Mirrors lavanaya InternshipLearningsPage: 4 learning outcomes (wireframe). */
export function InternshipLearningsPage() {
  return (
    <PageShell
      breadcrumb="INTERNSHIP / KEY LEARNINGS"
      eyebrow="INTERNSHIP SYNTHESIS — PAGE 2"
      title="Key Learnings"
      intro="[Create, plan, present and execute — 4 working principles]"
    >
      <WireBlock label="Learnings — hero image (full bleed)" minHeight={140} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {siteData.internship.learningOutcomes.map((lo) => (
          <WireBlock key={lo.number} label={`Learning ${lo.number} — ${lo.title}`} minHeight={120}>
            <p>{lo.desc}</p>
          </WireBlock>
        ))}
      </div>
      <WireBlock label="Learnings — pagination (back to experience / on to project 1)" minHeight={80} />
    </PageShell>
  );
}
