import React from 'react';
import { RealPeopleRealInsightsTop } from '../components/marketing/RealPeopleRealInsightsTop';
import { WhyFragrancesNow } from '../components/marketing/WhyFragrancesNow';
import { FragranceExpression } from '../components/marketing/FragranceExpression';
import { RealPeopleRealInsights } from '../components/marketing/RealPeopleRealInsights';
import { TurningInsightsIntoImpact } from '../components/marketing/TurningInsightsIntoImpact';

/**
 * Project 4 Case Study Page — UNIQLO Fragrances.
 * Section 1: Hero — "REAL PEOPLE, REAL INSIGHTS" (survey image, no background)
 * Section 2: "02 — WHY FRAGRANCES NOW?"
 * Section 3: "03 — THE FRAGRANCE EXPRESSION"
 * Section 4: "04 — REAL PEOPLE, REAL INSIGHTS"
 * Section 5: "05 — TURNING INSIGHTS INTO IMPACT"
 */
export function ProjectFourPage() {
  return (
    <main className="project-case-study-page">
      <RealPeopleRealInsightsTop />
      <WhyFragrancesNow />
      <FragranceExpression />
      <RealPeopleRealInsights />
      <TurningInsightsIntoImpact />
    </main>
  );
}
