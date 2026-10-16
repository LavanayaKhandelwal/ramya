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

      {/* RIGHT CONTENT AREA — ~76% width structured 2x2 visual direction board */}
      <div className="p1-col-right">
        {/* Page Metadata */}
        <div className="p1-col-top-meta">S/S 2027</div>

        {/* TOP ROW: SECTION 01 & SECTION 02 */}
        <div className="p1-col-row p1-col-row-top">
          {/* SECTION 01: THE MOOD */}
          <div className="p1-col-sec p1-sec-mood">
            <div className="p1-sec-header">
              <span className="p1-sec-num">01</span>
              <h3 className="p1-sec-title">THE MOOD</h3>
              <div className="p1-sec-rule p1-rule-mood" aria-hidden="true" />
            </div>

            <div className="p1-mood-collage">
              <img
                src="/ramya-portfolio-images/placeholders/1AS.png"
                alt="Collection mood board — palm shadows, coastal view, resort outfit and beach scene"
                className="p1-sec-photo"
                draggable={false}
              />
            </div>
          </div>

          {/* SECTION 02: THE THEME */}
          <div className="p1-col-sec p1-sec-theme">
            <div className="p1-sec-header">
              <span className="p1-sec-num">02</span>
              <h3 className="p1-sec-title">THE THEME</h3>
              <div className="p1-sec-rule p1-rule-theme" aria-hidden="true" />
            </div>

            <div className="p1-theme-layout">
              <img
                src="/ramya-portfolio-images/placeholders/1AT.png"
                alt="Collection theme board — effortless escape, relaxed resort silhouettes"
                className="p1-sec-photo"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: SECTION 03 & SECTION 04 */}
        <div className="p1-col-row p1-col-row-bottom">
          {/* SECTION 03: THE COLOUR STORY */}
          <div className="p1-col-sec p1-sec-color">
            <div className="p1-sec-header">
              <span className="p1-sec-num">03</span>
              <h3 className="p1-sec-title">THE COLOUR STORY</h3>
              <div className="p1-sec-rule p1-rule-color" aria-hidden="true" />
            </div>

            <div className="p1-color-grid">
              <img
                src="/ramya-portfolio-images/placeholders/1AU.png"
                alt="Collection colour story board — corn gold, blush pink, turquoise, dusty orange, coral and jet black"
                className="p1-sec-photo"
                draggable={false}
              />
            </div>
          </div>

          {/* SECTION 04: THE FABRIC DIRECTION */}
          <div className="p1-col-sec p1-sec-fabrics">
            <div className="p1-sec-header">
              <span className="p1-sec-num">04</span>
              <h3 className="p1-sec-title">THE FABRIC DIRECTION</h3>
              <div className="p1-sec-rule p1-rule-fabrics" aria-hidden="true" />
            </div>

            <div className="p1-fabric-grid">
              <img
                src="/ramya-portfolio-images/placeholders/1AV.png"
                alt="Collection fabric direction board — linen, cotton-linen, voile, chiffon, georgette and satin"
                className="p1-sec-photo"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
