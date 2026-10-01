import React from 'react';

/**
 * Project 1 — Section 5: "ONE BASE, TWO LENGTHS — THE HERO GARMENT & TECHNICAL DOCUMENTATION"
 * Precise Page 05 Editorial Presentation Layout:
 * - Top Header: Title, metadata, intro copy, script annotation, right statement.
 * - Column 1 (~32%): "01 THE HERO" — Side-by-side Mini vs Maxi comparison portrait photos.
 * - Column 2 (~22%): "02 THE TRANSFORMATION" — Vertical stacked step process & summary.
 * - Column 3 (~46%):
 *   - Top: "03 WHAT MAKES IT WORK ?" — 4 detail feature cards.
 *   - Bottom Left: "04 TECHNICAL THINKING" — Technical flat drawing board.
 *   - Bottom Right: "05 THE DESIGN DECISION" — Quote card & statement.
 * - Bottom Footer: "ONE GARMENT. MORE POSSIBILITIES."
 */
export function Project1HeroGarmentSection() {
  return (
    <section className="p1-hero-garment-spread" aria-label="Project 1 — Hero Garment & Technical Documentation">
      {/* TOP HEADER AREA */}
      <div className="p1-hg-header">
        <div className="p1-hg-top-row">
          <div className="p1-hg-meta-left">
            <span className="p1-hg-num">05</span>
            <span className="p1-hg-rule" aria-hidden="true" />
            <span className="p1-hg-label">RESORT WEAR COLLECTION</span>
          </div>
          <div className="p1-hg-meta-right">
            CONVERTIBLE RESORT WEAR &nbsp;&bull;&nbsp; S/S 2027
          </div>
        </div>

        <div className="p1-hg-title-row">
          <div className="p1-hg-title-left">
            <h2 className="p1-hg-main-title">ONE BASE, TWO LENGTHS.</h2>
            <p className="p1-hg-intro-copy">
              The concept was translated into a hero garment: a strapless ruched dress with detachable tiers.<br />
              The modular construction allows the wearer to change the length according to the occasion.
            </p>
          </div>

          <div className="p1-hg-script-note">
            &ldquo;Change the<br />
            Length,<br />
            Not the Look.&rdquo;
          </div>

          <div className="p1-hg-right-statement">
            SAME DRESS.<br />
            DIFFERENT<br />
            OCCASIONS.<br />
            MORE YOU.
          </div>
        </div>
      </div>

      {/* MAIN 3-COLUMN CONTENT AREA */}
      <div className="p1-hg-columns">
        {/* COLUMN 1 (~32% Width): THE HERO */}
        <div className="p1-hg-col p1-hg-col-1">
          <div className="p1-sec-header">
            <span className="p1-sec-num">01</span>
            <h3 className="p1-sec-title">THE HERO</h3>
            <div className="p1-sec-rule p1-rule-hero" aria-hidden="true" />
          </div>
          <p className="p1-col-subtitle-text">THE DRESS THAT CHANGES WITH YOU</p>

          <div className="p1-hero-compare-grid">
            {/* MINI ITEM */}
            <div className="p1-compare-card">
              <div className="p1-compare-img-wrap">
                <img
                  src="/ramya-portfolio-images/project3-left-hero.jpg"
                  alt="Model wearing strapless ruched mini resort dress"
                  className="p1-compare-img"
                />
              </div>
              <div className="p1-compare-label">
                <h4>MINI</h4>
                <span>Light &bull; Easy &bull; Day-ready</span>
              </div>
              <p className="p1-compare-desc">
                The shorter version works for casual resort moments, daytime plans and travel.
              </p>
            </div>

            {/* MAXI ITEM */}
            <div className="p1-compare-card">
              <div className="p1-compare-img-wrap">
                <img
                  src="/ramya-portfolio-images/project1-beginning-hero.jpg"
                  alt="Model wearing strapless ruched maxi resort dress transformed with detachable tier"
                  className="p1-compare-img"
                />
              </div>
              <div className="p1-compare-label">
                <h4>MAXI</h4>
                <span>Flowing &bull; Elevated &bull; Evening-ready</span>
              </div>
              <p className="p1-compare-desc">
                With the detachable tier added, the same base transforms into a longer silhouette suitable for vacation evenings and relaxed occasions.
              </p>
            </div>
          </div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 2 (~22% Width): THE TRANSFORMATION */}
        <div className="p1-hg-col p1-hg-col-2">
          <div className="p1-sec-header">
            <span className="p1-sec-num">02</span>
            <h3 className="p1-sec-title">THE TRANSFORMATION</h3>
            <div className="p1-sec-rule p1-rule-trans" aria-hidden="true" />
          </div>

          <div className="p1-trans-flow-stack">
            <div className="p1-trans-step-card">
              <h4>MINI</h4>
              <p>A fresh, effortless look for the day.</p>
            </div>
            <div className="p1-trans-arrow">&darr;</div>

            <div className="p1-trans-step-card">
              <h4>DETACHABLE TIER</h4>
              <p>Add or remove with ease.</p>
            </div>
            <div className="p1-trans-arrow">&darr;</div>

            <div className="p1-trans-step-card">
              <h4>MAXI</h4>
              <p>A flowing silhouette for elevated moments.</p>
            </div>
          </div>

          <p className="p1-trans-explanation">
            Instead of creating a completely new garment for every occasion, the design uses one base silhouette and a detachable extension to create a different length.
          </p>

          <div className="p1-trans-summary-card">
            ONE BASE &rarr; TWO LENGTHS &rarr; MORE USE
          </div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 3 (~46% Width): FEATURES, TECHNICAL & DECISION */}
        <div className="p1-hg-col p1-hg-col-3">
          {/* TOP SECTION: 03 WHAT MAKES IT WORK ? */}
          <div className="p1-hg-sec-top">
            <div className="p1-sec-header">
              <span className="p1-sec-num">03</span>
              <h3 className="p1-sec-title">WHAT MAKES IT WORK ?</h3>
              <div className="p1-sec-rule p1-rule-work" aria-hidden="true" />
            </div>

            <div className="p1-work-features-grid">
              <div className="p1-work-feature-item">
                <img src="/ramya-portfolio-images/project3-fabric-linen.jpg" alt="Ruched bodice texture" className="p1-wf-img" />
                <h4>RUCHED BODICE</h4>
                <p>Creates a fitted yet comfortable upper silhouette while adding texture and structure.</p>
              </div>

              <div className="p1-work-feature-item">
                <img src="/ramya-portfolio-images/project1-flatlay-brief.jpg" alt="Detachable tier button attachment" className="p1-wf-img" />
                <h4>DETACHABLE TIER</h4>
                <p>The key functional element that allows the dress to transform from mini to maxi.</p>
              </div>

              <div className="p1-work-feature-item">
                <img src="/ramya-portfolio-images/project1-hero-section-background.png" alt="Flowing skirt volume" className="p1-wf-img" />
                <h4>FLOWING SILHOUETTE</h4>
                <p>Keeps the garment relaxed and suitable for resort and warm-weather dressing.</p>
              </div>

              <div className="p1-work-feature-item">
                <img src="/ramya-portfolio-images/project1-beach-question.jpg" alt="Minimal finishing details" className="p1-wf-img" />
                <h4>MINIMAL FINISHING</h4>
                <p>Keeps the design clean and easy to style.</p>
              </div>
            </div>
          </div>

          {/* BOTTOM SUB-SPLIT: 04 TECHNICAL THINKING & 05 THE DESIGN DECISION */}
          <div className="p1-hg-sec-bottom-split">
            {/* 04 TECHNICAL THINKING (LEFT) */}
            <div className="p1-hg-sub-col p1-sub-tech">
              <div className="p1-sec-header">
                <span className="p1-sec-num">04</span>
                <h3 className="p1-sec-title">TECHNICAL THINKING</h3>
              </div>
              <p className="p1-tech-subhead">FROM CONCEPT TO CONSTRUCTION</p>

              {/* Technical Flat Board */}
              <div className="p1-tech-board">
                <div className="p1-tech-sketch-row">
                  {/* Front Flat SVG Drawing */}
                  <div className="p1-tech-sketch">
                    <svg viewBox="0 0 100 150" className="p1-tech-svg">
                      <path d="M 30 20 L 70 20 L 68 45 L 32 45 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                      <line x1="30" y1="27" x2="70" y2="27" stroke="#888" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="31" y1="35" x2="69" y2="35" stroke="#888" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M 32 45 L 20 80 L 80 80 L 68 45 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                      <line x1="20" y1="80" x2="80" y2="80" stroke="#8D867E" strokeWidth="1" strokeDasharray="3,2" />
                      <path d="M 20 80 L 10 135 L 90 135 L 80 80 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                    </svg>
                    <span>FRONT FLAT</span>
                  </div>

                  {/* Back Flat SVG Drawing */}
                  <div className="p1-tech-sketch">
                    <svg viewBox="0 0 100 150" className="p1-tech-svg">
                      <path d="M 30 20 L 70 20 L 68 45 L 32 45 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                      <line x1="50" y1="20" x2="50" y2="45" stroke="#4B4945" strokeWidth="0.8" strokeDasharray="2,2" />
                      <path d="M 32 45 L 20 80 L 80 80 L 68 45 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                      <line x1="20" y1="80" x2="80" y2="80" stroke="#8D867E" strokeWidth="1" strokeDasharray="3,2" />
                      <path d="M 20 80 L 10 135 L 90 135 L 80 80 Z" fill="none" stroke="#4B4945" strokeWidth="1.2" />
                    </svg>
                    <span>BACK FLAT</span>
                  </div>
                </div>
              </div>

              <p className="p1-tech-desc">
                The modular construction makes the garment suitable for technical development because the base pattern remains consistent while the detachable tier works as an extension.
              </p>

              <p className="p1-tech-footer-list">
                BODICE &nbsp;|&nbsp; TIER ATTACHMENT &nbsp;|&nbsp; SEAM DETAILS &nbsp;|&nbsp; CLOSURE &nbsp;|&nbsp; MEASUREMENTS
              </p>
            </div>

            {/* 05 THE DESIGN DECISION (RIGHT) */}
            <div className="p1-hg-sub-col p1-sub-decision">
              <div className="p1-sec-header">
                <span className="p1-sec-num">05</span>
                <h3 className="p1-sec-title">THE DESIGN DECISION</h3>
                <div className="p1-sec-rule p1-rule-dec" aria-hidden="true" />
              </div>

              <div className="p1-decision-quote-card">
                <blockquote className="p1-dec-quote">
                  &ldquo;Why create<br />
                  two dresses<br />
                  when one can<br />
                  become both?&rdquo;
                </blockquote>
                <div className="p1-dec-rule" aria-hidden="true" />
                <div className="p1-dec-principles">
                  ADAPTABILITY<br />
                  FUNCTIONALITY<br />
                  COMFORT<br />
                  REPEAT WEAR
                </div>
              </div>

              <h4 className="p1-dec-closing-stmt">
                DESIGNED TO TRANSFORM.<br />STYLED TO MOVE.
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="p1-hg-footer">
        <span className="p1-hg-footer-text">ONE GARMENT. MORE POSSIBILITIES.</span>
        <div className="p1-hg-footer-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
