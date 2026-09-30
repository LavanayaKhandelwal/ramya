import { PageShell } from '../components/PageShell';
import { EverydayAthleisurePageOne } from '../components/marketing/EverydayAthleisurePageOne';
import { EverydayAthleisurePageTwo } from '../components/marketing/EverydayAthleisurePageTwo';
import { WireBlock } from '../components/WireBlock';

/** Mirrors lavanaya ProjectThreePage — everyday athleisure startup (wireframe). */
export function ProjectThreePage() {
  return (
    <PageShell
      breadcrumb="PROJECTS / 03 STARTUP"
      eyebrow="STARTUP — PROJECT 03"
      title="[Everyday Athleisure]"
      intro="[Consumer research → physical MVP intro]"
    >
      <EverydayAthleisurePageOne />
      <EverydayAthleisurePageTwo />
      <WireBlock label="Project 3 — footer (marks + next → /projects/project-4)" minHeight={80} />
    </PageShell>
  );
}
