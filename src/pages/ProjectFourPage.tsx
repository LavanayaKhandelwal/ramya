import { PageShell } from '../components/PageShell';
import { HunkyHideawayPage } from '../components/marketing/HunkyHideawayPage';
import { WhatITookAwayPage } from '../components/marketing/WhatITookAwayPage';
import { WireBlock } from '../components/WireBlock';

/** Mirrors lavanaya ProjectFourPage — Hunky Hideaway activation (wireframe). */
export function ProjectFourPage() {
  return (
    <PageShell
      breadcrumb="PROJECTS / 04 ACTIVATION"
      eyebrow="CUSTOMER EXPERIENCE — PROJECT 04"
      title="[Hunky Hideaway]"
      intro="[Activation intro]"
    >
      <HunkyHideawayPage />
      <WhatITookAwayPage />
      <WireBlock label="Project 4 — footer (onward → /projects/marketing)" minHeight={80} />
    </PageShell>
  );
}
