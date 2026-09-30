import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';

/**
 * Standalone slide — mirrors lavanaya MappingOpportunitySlide (wireframe).
 * Route: /projects/marketing/mapping-opportunity
 */
export function MappingOpportunitySlide() {
  return (
    <PageShell
      breadcrumb="PROJECT 1 / SLIDE — MAPPING THE OPPORTUNITY"
      eyebrow="SLIDE 02 — 16:9"
      title="[Mapping the Opportunity]"
      intro="[Market / consumer / competitive landscape]"
    >
      <WireBlock label="Slide — header (title + still-life image)" minHeight={120} />
      <WireBlock label="Slide — 3-col grid (market / consumer / competitive)" minHeight={160} />
      <WireBlock label="Slide — footer nav (research lens)" minHeight={80} />
    </PageShell>
  );
}
