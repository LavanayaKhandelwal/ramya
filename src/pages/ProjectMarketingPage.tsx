import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';
import { MappingOpportunitySection } from '../components/marketing/MappingOpportunitySection';
import { ConceptToLifeSection } from '../components/marketing/ConceptToLifeSection';
import { ProjectLearnedSection } from '../components/marketing/ProjectLearnedSection';

/** Mirrors lavanaya ProjectMarketingPage (wireframe). */
export function ProjectMarketingPage() {
  return (
    <PageShell
      breadcrumb="PROJECTS / 01 MARKETING"
      eyebrow="MARKETING MANAGEMENT PROJECT — PAGE 1"
      title="[A New Dimension of Lifewear]"
      intro="[Project intro — context paragraph]"
    >
      <WireBlock label="Project 1 — cover hero (full bleed image)" minHeight={160} />
      <MappingOpportunitySection />
      <WireBlock label="Project 1 — design decisions (fragrance variants + list)" minHeight={160} />
      <ConceptToLifeSection />
      <ProjectLearnedSection />
    </PageShell>
  );
}
