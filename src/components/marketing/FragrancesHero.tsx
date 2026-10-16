import React from 'react';
import { project4Image } from '../../data/artwork';
import { SectionImage } from './SectionImage';
import { UniqloLogo } from './UniqloLogo';

/**
 * Project 4 — Section 01: "BEYOND THE EVERYDAY" hero.
 * Full-bleed background + centered UNIQLO wordmark and editorial typography.
 */
export function FragrancesHero() {
  return (
    <section className="px4-hero" aria-label="Project 4 — UNIQLO Fragrances">
      <SectionImage
        src={project4Image('4A')}
        alt="Four UNIQLO fragrance bottles — HANA, KAZE, MIZU and SORA — on a sunlit stone surface with pale sky and water reflections"
        className="px4-hero__bg"
        tint="#E7E1D6"
      />
      <div className="px4-hero__content">
        <UniqloLogo size={54} />
        <h1 className="px4-hero__title">
          <span>Beyond</span>
          <span>The Everyday</span>
        </h1>
        <p className="px4-hero__subtitle">UNIQLO FRAGRANCES</p>
        <span className="px4-hero__divider" aria-hidden="true" />
        <p className="px4-hero__tagline">Simple scents for a more meaningful tomorrow</p>
      </div>
    </section>
  );
}
