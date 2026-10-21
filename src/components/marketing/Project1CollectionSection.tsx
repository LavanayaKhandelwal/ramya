import React from 'react';

/**
 * Project 1 — Section 4: "BUILDING THE COLLECTION — FROM IDEA TO A VISUAL WORLD"
 * Precise Page 04 Editorial Presentation Slide Layout:
 * - Left Editorial Panel (~24%): Full-height Mediterranean photographic panel with editorial storytelling.
 * - Right Content Area (~76%): Structured 2x2 visual direction board:
 *   1. THE MOOD
 *   2. THE THEME
 *   3. THE COLOUR STORY
 *   4. THE FABRIC DIRECTION
 */
export function Project1CollectionSection() {
  return (
    <section className="p1-collection-spread" aria-label="Project 1 — Building the Collection Slide">
      {/* LEFT PANEL — ~24% width full-height photographic panel */}
      <div className="p1-col-left">
        <img
          src="/ramya-portfolio-images/placeholders/1N.png"
          alt="Mediterranean resort architecture with terracotta planter, straw hat, and flowing ivory dress"
          className="p1-col-left-bg-img"
          draggable={false}
        />

        {/* Top Identifier */}
        <div className="p1-col-top-id">
          <span className="p1-col-id-num">04</span>
          <span className="p1-col-id-rule" aria-hidden="true" />
        </div>

        {/* Main Title Group */}
        <div className="p1-col-title-group">
          <h2 className="p1-col-main-title">
            BUILDING<br />THE COLLECTION.
          </h2>
          <div className="p1-col-title-rule" aria-hidden="true" />
          <p className="p1-col-subtitle">
            FROM IDEA TO<br />A VISUAL WORLD.
          </p>
        </div>

        {/* Body Copy */}
        <div className="p1-col-body-copy">
          <p>
            The research and trend direction<br />
            were translated into a visual<br />
            language for the collection through<br />
            mood, theme, colour and fabric.
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT AREA — Full-width editorial boards stacked one at a time */}
      <div className="p1-col-right">
        {/* Page Metadata */}
        <div className="p1-col-top-meta">S/S 2027</div>

        {/* SECTION 01: THE MOOD */}
        <div className="p1-col-sec p1-sec-full p1-sec-mood">
          <div className="p1-sec-header">
            <span className="p1-sec-num">01</span>
            <h3 className="p1-sec-title">THE MOOD</h3>
            <div className="p1-sec-rule p1-rule-mood" aria-hidden="true" />
          </div>

          <div className="p1-mood-collage">
            <img
              src="/Project 1/1AS.jpg"
              alt="Collection mood board — palm shadows, coastal view, resort outfit and beach scene"
              className="p1-sec-photo"
              draggable={false}
            />
          </div>
        </div>

        {/* SECTION 02: THE COLOUR STORY */}
        <div className="p1-col-sec p1-sec-full p1-sec-color">
          <div className="p1-sec-header">
            <span className="p1-sec-num">02</span>
            <h3 className="p1-sec-title">THE COLOUR STORY</h3>
            <div className="p1-sec-rule p1-rule-color" aria-hidden="true" />
          </div>

          <div className="p1-color-grid">
            <img
              src="/Project 1/1AU.jpg"
              alt="Collection colour story board — design story, theme concept, and silhouette overview"
              className="p1-sec-photo"
              draggable={false}
            />
            <img
              src="/Project 1/1AU-below.jpg"
              alt="Collection colour palette, fabric inspiration, and convertible tier dress sketches"
              className="p1-sec-photo"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
