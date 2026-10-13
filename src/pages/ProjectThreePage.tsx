import React from 'react';
import { FutureFloralsHero } from '../components/marketing/FutureFloralsHero';
import { FloralsReimagined } from '../components/marketing/FloralsReimagined';
import { ExperienceInBloom } from '../components/marketing/ExperienceInBloom';
import { WindowIntoTheFuture } from '../components/marketing/WindowIntoTheFuture';

/**
 * Project 3 Case Study Page — Visual Merchandising.
 * Section 1: "BEYOND THE FLORAL" hero
 * Section 2: "01 — FLORALS REIMAGINED"
 * Section 3: "EXPERIENCE IN BLOOM"
 * Section 4: "A WINDOW INTO THE FUTURE"
 */
export function ProjectThreePage() {
  return (
    <main className="project-case-study-page">
      <FutureFloralsHero />
      <FloralsReimagined />
      <ExperienceInBloom />
      <WindowIntoTheFuture />
    </main>
  );
}
