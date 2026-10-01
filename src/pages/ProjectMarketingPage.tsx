import React from 'react';
import { Project1HeroSection } from '../components/marketing/Project1HeroSection';
import { Project1BeginningSection } from '../components/marketing/Project1BeginningSection';
import { Project1DirectionSection } from '../components/marketing/Project1DirectionSection';
import { Project1CollectionSection } from '../components/marketing/Project1CollectionSection';
import { Project1HeroGarmentSection } from '../components/marketing/Project1HeroGarmentSection';

/**
 * Project 1 Case Study Page — Fashion Merchandising & Production Processes.
 * Section 1: Full-screen Hero Section ("ONE DRESS. MORE POSSIBILITIES.")
 * Section 2: "THE BEGINNING - A NEED TURNED INTO A POSSIBILITY"
 * Section 3: "FINDING THE DIRECTION - HOW INSIGHTS TURNED INTO TRENDS AND OPPORTUNITIES"
 * Section 4: "BUILDING THE COLLECTION - FROM IDEA TO A VISUAL WORLD"
 * Section 5: "ONE BASE, TWO LENGTHS - THE HERO GARMENT & TECHNICAL DOCUMENTATION"
 */
export function ProjectMarketingPage() {
  return (
    <main className="project-case-study-page">
      <Project1HeroSection />
      <Project1BeginningSection />
      <Project1DirectionSection />
      <Project1CollectionSection />
      <Project1HeroGarmentSection />
    </main>
  );
}
