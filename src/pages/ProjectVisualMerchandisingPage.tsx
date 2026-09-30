import { PageShell } from '../components/PageShell';
import { ConceptToShapeSection } from '../components/marketing/ConceptToShapeSection';
import { FutureInBloomCover } from '../components/marketing/FutureInBloomCover';
import { LearningThroughProcessSection } from '../components/marketing/LearningThroughProcessSection';
import { MakingTheUnexpectedSection } from '../components/marketing/MakingTheUnexpectedSection';
import { WireBlock } from '../components/WireBlock';

/** Mirrors lavanaya ProjectVisualMerchandisingPage (wireframe). */
export function ProjectVisualMerchandisingPage() {
  return (
    <PageShell
      breadcrumb="PROJECTS / 02 VISUAL MERCHANDISING"
      eyebrow="VISUAL MERCHANDISING — PROJECT 02"
      title="[Future in Bloom]"
      intro="[Cover Story × Future Florals intro]"
    >
      <FutureInBloomCover />
      <ConceptToShapeSection />
      <MakingTheUnexpectedSection />
      <LearningThroughProcessSection />
      <WireBlock label="Project 2 — footer (marks + next → /projects/project-3)" minHeight={80} />
    </PageShell>
  );
}
