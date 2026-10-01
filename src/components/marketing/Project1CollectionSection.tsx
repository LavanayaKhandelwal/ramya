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
          src="/ramya-portfolio-images/project1-hero-section-background.png"
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

        {/* Handwritten Note */}
        <div className="p1-col-script-note">
          &ldquo;Inspired<br />
          by places,<br />
          designed<br />
          for possibilities.&rdquo;
        </div>

        {/* Bottom Keywords */}
        <div className="p1-col-keywords">
          TRAVEL &nbsp;&bull;&nbsp; NATURE &nbsp;&bull;&nbsp; MOVEMENT &nbsp;&bull;&nbsp; STYLE
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
              <div className="p1-mood-grid">
                <img src="/ramya-portfolio-images/project1-beginning-hero.jpg" alt="Palm shadows on stucco" className="p1-mg-img p1-mg-1" />
                <img src="/ramya-portfolio-images/project1-beach-question.jpg" alt="Mediterranean coastal view" className="p1-mg-img p1-mg-2" />
                <img src="/ramya-portfolio-images/project3-left-hero.jpg" alt="Woman walking in resort outfit" className="p1-mg-img p1-mg-3" />
                <img src="/ramya-portfolio-images/project1-flatlay-brief.jpg" alt="Beach parasols and lounge chairs" className="p1-mg-img p1-mg-4" />
                
                <div className="p1-mood-script-card">
                  &ldquo;Good<br />Outfits<br />Brighter<br />Days&rdquo;
                </div>

                <div className="p1-mood-vert-text">
                  SUN &bull; SALT &bull; STYLE &bull; REPEAT
                </div>
              </div>
            </div>

            <p className="p1-mood-desc">
              Travel, warm destinations, movement and effortless dressing shaped the mood of the collection.
            </p>
            <p className="p1-mood-kw">
              TRAVEL &nbsp;|&nbsp; FREEDOM &nbsp;|&nbsp; SUNLIGHT &nbsp;|&nbsp; MOVEMENT
            </p>
          </div>

          {/* SECTION 02: THE THEME */}
          <div className="p1-col-sec p1-sec-theme">
            <div className="p1-sec-header">
              <span className="p1-sec-num">02</span>
              <h3 className="p1-sec-title">THE THEME</h3>
              <div className="p1-sec-rule p1-rule-theme" aria-hidden="true" />
            </div>

            <div className="p1-theme-layout">
              <div className="p1-theme-left-card">
                <h4>EFFORTLESS<br />ESCAPE</h4>
                <div className="p1-theme-rule" aria-hidden="true" />
                <p>
                  A relaxed resort<br />
                  lifestyle with<br />
                  feminine and<br />
                  easy-to-wear<br />
                  silhouettes.
                </p>
              </div>

              <div className="p1-theme-right-collage">
                <img src="/ramya-portfolio-images/project1-beginning-hero.jpg" alt="Flowing sheer curtains & villa" className="p1-th-img p1-th-1" />
                <img src="/ramya-portfolio-images/project3-left-hero.jpg" alt="Open back resort dress detail" className="p1-th-img p1-th-2" />
                <img src="/ramya-portfolio-images/project1-flatlay-brief.jpg" alt="Palm leaf in warm sunlight" className="p1-th-img p1-th-3" />

                <div className="p1-theme-note">
                  &ldquo;Same Places.<br />New Perspectives.&rdquo;
                </div>
              </div>
            </div>

            <p className="p1-theme-kw">
              RELAXED &nbsp;|&nbsp; FEMININE &nbsp;|&nbsp; NATURAL &nbsp;|&nbsp; EASY
            </p>
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
              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#E8D09A' }} />
                <span className="p1-color-name">CORN<br />CONFLECTION</span>
                <img src="/ramya-portfolio-images/project1-beginning-hero.jpg" alt="Corn gold context" className="p1-color-thumb" />
              </div>

              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#D29E9D' }} />
                <span className="p1-color-name">PINK<br />COSMOS</span>
                <img src="/ramya-portfolio-images/project1-flatlay-brief.jpg" alt="Blush pink context" className="p1-color-thumb" />
              </div>

              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#7798AA' }} />
                <span className="p1-color-name">BLUE<br />TURQUOISE</span>
                <img src="/ramya-portfolio-images/project1-beach-question.jpg" alt="Turquoise sea context" className="p1-color-thumb" />
              </div>

              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#C78256' }} />
                <span className="p1-color-name">DUSTY<br />ORANGE</span>
                <img src="/ramya-portfolio-images/project1-hero-section-background.png" alt="Dusty orange context" className="p1-color-thumb" />
              </div>

              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#D98A69' }} />
                <span className="p1-color-name">SUN-KISSED<br />CORAL</span>
                <img src="/ramya-portfolio-images/project3-left-hero.jpg" alt="Coral context" className="p1-color-thumb" />
              </div>

              <div className="p1-color-card">
                <div className="p1-color-swatch" style={{ backgroundColor: '#292A29' }} />
                <span className="p1-color-name">JET<br />BLACK</span>
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Jet black context" className="p1-color-thumb" />
              </div>
            </div>

            <p className="p1-color-desc">
              A fresh and versatile palette inspired by nature, travel and warm destinations, keeping the collection visually cohesive.
            </p>
          </div>

          {/* SECTION 04: THE FABRIC DIRECTION */}
          <div className="p1-col-sec p1-sec-fabrics">
            <div className="p1-sec-header">
              <span className="p1-sec-num">04</span>
              <h3 className="p1-sec-title">THE FABRIC DIRECTION</h3>
              <div className="p1-sec-rule p1-rule-fabrics" aria-hidden="true" />
            </div>

            <div className="p1-fabric-grid">
              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Linen texture" className="p1-fab-img" />
                <span className="p1-fab-name">LINEN</span>
              </div>

              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Cotton-Linen texture" className="p1-fab-img" style={{ filter: 'brightness(1.05)' }} />
                <span className="p1-fab-name">COTTON-LINEN</span>
              </div>

              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Voile texture" className="p1-fab-img" style={{ filter: 'brightness(1.15) contrast(0.9)' }} />
                <span className="p1-fab-name">VOILE</span>
              </div>

              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Chiffon texture" className="p1-fab-img" style={{ filter: 'sepia(0.3) hue-rotate(60deg) brightness(0.9)' }} />
                <span className="p1-fab-name">CHIFFON</span>
              </div>

              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Georgette texture" className="p1-fab-img" style={{ filter: 'sepia(0.3) hue-rotate(-20deg) brightness(0.95)' }} />
                <span className="p1-fab-name">GEORGETTE</span>
              </div>

              <div className="p1-fabric-swatch-card">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Satin texture" className="p1-fab-img" style={{ filter: 'sepia(0.4) hue-rotate(15deg) contrast(1.1)' }} />
                <span className="p1-fab-name">SATIN</span>
              </div>
            </div>

            <p className="p1-fabric-desc">
              Lightweight and breathable natural fabrics, ideal for warm-weather dressing.
            </p>

            <div className="p1-fabric-bottom-row">
              <p className="p1-fabric-kw">LIGHTWEIGHT &nbsp;|&nbsp; BREATHABLE &nbsp;|&nbsp; COMFORTABLE</p>
              <span className="p1-fabric-closing">NATURAL TEXTURES. ENDLESS POSSIBILITIES.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
