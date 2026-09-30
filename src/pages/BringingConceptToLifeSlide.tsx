import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';

/**
 * Standalone slide — mirrors lavanaya BringingConceptToLifeSlide (wireframe).
 * Route: /projects/marketing/bringing-concept-to-life
 */
export function BringingConceptToLifeSlide() {
  return (
    <PageShell
      breadcrumb="PROJECT 1 / SLIDE — BRINGING THE CONCEPT TO LIFE"
      eyebrow="SLIDE — 16:9"
      title="[Bringing the Concept to Life]"
      intro="[Marketing pitch + process flow]"
    >
      <WireBlock label="Slide — left col (pitch + 4-step flow)" minHeight={140} />
      <WireBlock label="Slide — mid/right cols (photos + metric + role)" minHeight={160} />
      <WireBlock label="Slide — bottom nav" minHeight={60} />
    </PageShell>
  );
}
