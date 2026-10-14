import React from 'react';

/**
 * Project 2 — Section 01: "THREADING THE TREND" hero.
 * Editable text overlay on the existing UNIQLO hero background (unchanged).
 */
export function ThreadingTheTrendHero() {
  return (
    <section className="px2-hero" aria-label="Project 2 — Threading the Trend">
      <img
        className="px2-hero__bg"
        src="/ramya-portfolio-images/placeholders/2A.png"
        alt="UNIQLO Threading the Trend hero with embroidered garments, wooden chair and natural flowers"
        draggable={false}
      />
      <div className="px2-hero__overlay">
        <h1 className="px2-hero__headline">
          <span className="px2-hero__line1">Threading</span>
          <span className="px2-hero__line2">The Trend</span>
        </h1>
        <span className="px2-hero__divider" aria-hidden="true" />
        <p className="px2-hero__subtitle">
          Minimal Pastel Flower Embroidery
          <br />
          Transforming Everyday Apparel
        </p>
      </div>
    </section>
  );
}
