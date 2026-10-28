import React from 'react';
import { FragrancesHero } from '../components/marketing/FragrancesHero';
import { WhyFragrancesNow } from '../components/marketing/WhyFragrancesNow';
import { FragranceExpression } from '../components/marketing/FragranceExpression';
import { RealPeopleRealInsights } from '../components/marketing/RealPeopleRealInsights';
import { TurningInsightsIntoImpact } from '../components/marketing/TurningInsightsIntoImpact';

/**
 * Project 4 Case Study Page — UNIQLO Fragrances.
 * Section 1: Hero — "BEYOND THE EVERYDAY"
 * Section 2: "02 — WHY FRAGRANCES NOW?"
 * Section 3: "03 — THE FRAGRANCE EXPRESSION"
 * Section 4: "04 — REAL PEOPLE, REAL INSIGHTS"
 * Section 5: "05 — TURNING INSIGHTS INTO IMPACT"
 */
export function ProjectFourPage() {
  return (
    <main className="project-case-study-page">
      <FragrancesHero />
      <WhyFragrancesNow />
      <FragranceExpression />
      <RealPeopleRealInsights />
      <TurningInsightsIntoImpact />
    </main>
  );
}
