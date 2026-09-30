import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';

/**
 * Standalone slide — mirrors lavanaya MakingIdeaRealSlide (wireframe).
 * Route: /projects/marketing/making-idea-real
 */
export function MakingIdeaRealSlide() {
  return (
    <PageShell
      breadcrumb="PROJECT 1 / SLIDE — MAKING THE IDEA REAL"
      eyebrow="SLIDE 03 — PORTRAIT"
      title="[Making the Idea Real]"
      intro="[4-fragrance collection — Hana / Mizu / Kaze / Sora]"
    >
      <WireBlock label="Slide — hero product image" minHeight={140} />
      <WireBlock label="Slide — 4 images (sketch / prototype / packaging / final)" minHeight={140} />
      <WireBlock label="Slide — caption (minimal / functional / japanese)" minHeight={60} />
    </PageShell>
  );
}
