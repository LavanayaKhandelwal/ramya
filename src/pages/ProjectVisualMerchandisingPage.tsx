import React from 'react';
import { ThreadingTheTrendHero } from '../components/marketing/ThreadingTheTrendHero';
import { WhatConsumersLookFor } from '../components/marketing/WhatConsumersLookFor';
import { EverydayChoicesToInsights } from '../components/marketing/EverydayChoicesToInsights';
import { SameSimplicityNewPossibilities } from '../components/marketing/SameSimplicityNewPossibilities';
import { BotanicalWhispers } from '../components/marketing/BotanicalWhispers';
import { KeyLearnings } from '../components/marketing/KeyLearnings';

/**
 * Project 2 — UNIQLO "Threading the Trend".
 * Section 01: Hero — "THREADING THE TREND"
 * Section 02: Understanding the Consumer
 * Section 03: From Everyday Choices to Deeper Insights
 * Section 04: Same Simplicity, New Possibilities
 * Section 05: From Insight to Everyday — Botanical Whispers
 * Section 06: Key Learnings
 */
export function ProjectVisualMerchandisingPage() {
  return (
    <main className="project-case-study-page">
      <ThreadingTheTrendHero />
      <WhatConsumersLookFor />
      <EverydayChoicesToInsights />
      <SameSimplicityNewPossibilities />
      <BotanicalWhispers />
      <KeyLearnings />
    </main>
  );
}
