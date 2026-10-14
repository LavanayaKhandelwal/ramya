import React from 'react';

/**
 * Project 1 Hero Section — Fashion Merchandising & Production Processes
 * Full-bleed Mediterranean campaign photograph with left-hand editorial typography.
 * Copy is limited to the reference: headline, divider, statement, and footer rail.
 */
export function Project1HeroSection() {
  return (
    <section className="project1-hero-wrapper" aria-label="Project 1 Hero - Convertible Resort Wear">
      <div className="project1-hero-canvas">
        {/* Background photograph — full-bleed canvas */}
        <img
          src="/Project%201/1A.png"
          alt="Woman wearing pale yellow convertible resort dress in Mediterranean architectural setting"
          className="project1-bg-image"
          draggable={false}
        />

        {/* Left Typography Group (Headline + Divider + Statement) */}
        <div className="project1-left-content">
          <h1 className="project1-main-title">
            <span className="title-line title-upright">ONE DRESS.</span>
            <span className="title-line title-italic">MORE</span>
            <span className="title-line title-italic">POSSIBILITIES.</span>
          </h1>

          <div className="project1-separator" aria-hidden="true" />

          <p className="project1-editorial-statement">
            Designed around the idea<br />
            of adaptability.
          </p>
        </div>

        {/* Bottom Left Metadata */}
        <div className="project1-bottom-left-metadata">
          TRAVEL &nbsp;/ &nbsp;STYLE &nbsp;/ &nbsp;REPEAT
        </div>
      </div>
    </section>
  );
}
