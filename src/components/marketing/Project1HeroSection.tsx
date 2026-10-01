import React from 'react';

/**
 * Project 1 Hero Section — Fashion Merchandising & Production Processes
 * Uses the exact uploaded background photograph as locked base canvas.
 * Renders editorial typography overlays matching high-contrast Didot/Bodoni serif specs,
 * precise letter spacing, hierarchy, negative space, and layout relationships.
 */
export function Project1HeroSection() {
  return (
    <section className="project1-hero-wrapper" aria-label="Project 1 Hero - Convertible Resort Wear">
      <div className="project1-hero-canvas">
        {/* Background image — locked exact canvas, unedited */}
        <img
          src="/ramya-portfolio-images/project1-hero-section-background.png"
          alt="Woman wearing pale yellow convertible resort dress in Mediterranean architectural setting"
          className="project1-bg-image"
          draggable={false}
        />

        {/* Top Left Label */}
        <div className="project1-top-left-label">
          FASHION MERCHANDISING &amp;<br />
          PRODUCTION PROCESSES
        </div>

        {/* Left Section Typography Group (Main Title + Subtitle + Separator + Editorial Statement) */}
        <div className="project1-left-content">
          <h1 className="project1-main-title">
            <span className="title-line title-upright">ONE DRESS.</span>
            <span className="title-line title-italic">MORE</span>
            <span className="title-line title-italic">POSSIBILITIES.</span>
          </h1>

          <p className="project1-subtitle">
            CONVERTIBLE RESORT WEAR · 2027
          </p>

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

        {/* Right Top Header Group (Resort Wear Collection + S/S 2027 + Line) */}
        <div className="project1-right-top-group">
          <div className="project1-right-top-label">
            RESORT WEAR COLLECTION
          </div>
          <div className="project1-right-secondary-row">
            <span className="project1-right-secondary-label">S/S 2027</span>
            <span className="project1-right-rule" aria-hidden="true" />
          </div>
        </div>

        {/* Right Editorial Phrase over Ocean Area */}
        <div className="project1-right-editorial-phrase">
          SAME<br />
          FEELINGS.<br />
          DIFFERENT<br />
          DESTINATIONS.
        </div>
      </div>
    </section>
  );
}
