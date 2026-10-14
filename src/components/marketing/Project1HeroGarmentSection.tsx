import React from 'react';

/**
 * Project 1 — Section 5: "ONE BASE. TWO LENGTHS."
 * Editorial board layout (matches renders/project1-section-05.html):
 * - Header: title, intro copy, script annotation.
 * - Column 1: "01 THE HERO" — Mini vs Maxi comparison.
 * - Column 2: "02 THE TRANSFORMATION" — stacked step flow + statement.
 * - Column 3: "03 THE DESIGN DECISION" (quote) + "04 THE DESIGN DECISION" (principles).
 */
export function Project1HeroGarmentSection() {
  return (
    <section className="p1-hero-garment-spread" aria-label="Project 1 — One Base, Two Lengths">
      {/* TOP HEADER AREA */}
      <div className="p1-hg-header">
        <div className="p1-hg-title-row">
          <div className="p1-hg-title-left">
            <h2 className="p1-hg-main-title">ONE BASE. TWO LENGTHS.</h2>
            <p className="p1-hg-intro-copy">
              The concept was translated into a hero garment: a strapless ruched dress with detachable tiers.<br />
              The modular construction allows the wearer to change the length according to the occasion.
            </p>
          </div>

          <div className="p1-hg-script-note">
            &ldquo;Change the<br />
            Length.<br />
            Not the Look.&rdquo;
          </div>
        </div>
      </div>

      {/* MAIN 3-COLUMN CONTENT AREA */}
      <div className="p1-hg-columns">
        {/* COLUMN 1: THE HERO */}
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
                  src="/ramya-portfolio-images/placeholders/1AH.png"
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
                  src="/ramya-portfolio-images/placeholders/1AI.png"
                  alt="Model wearing strapless ruched maxi resort dress transformed with detachable tier"
                  className="p1-compare-img"
                />
              </div>
              <div className="p1-compare-label">
                <h4>MAXI</h4>
                <span>Flowing &bull; Elevated &bull; Evening-ready</span>
              </div>
              <p className="p1-compare-desc">
                With the detachable tier added, the same base transforms into a longer silhouette suitable for
                vacation evenings and relaxed occasions.
              </p>
            </div>
          </div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 2: THE TRANSFORMATION */}
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

          <div className="p1-trans-photos">
            <img src="/ramya-portfolio-images/placeholders/1AH.png" alt="Mini length resort dress" />
            <img src="/ramya-portfolio-images/placeholders/1AI.png" alt="Maxi length resort dress with tier" />
          </div>

          <p className="p1-trans-explanation">
            Instead of creating a completely new garment for every occasion, the design uses one base silhouette and a
            detachable extension to create a different length.
          </p>

          <div className="p1-trans-summary-card">ONE BASE &rarr; TWO LENGTHS &rarr; MORE USE</div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 3: 03 + 04 THE DESIGN DECISION */}
        <div className="p1-hg-col p1-hg-col-3">
          <div className="p1-sec-header">
            <span className="p1-sec-num">03</span>
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
          </div>

          <p className="p1-dec-qcopy">
            A versatile design that adapts to your plans, your mood and your destination &mdash; because style should
            move with you.
          </p>

          <div className="p1-sec-header p1-sec-header--second">
            <span className="p1-sec-num">04</span>
            <h3 className="p1-sec-title">THE DESIGN DECISION</h3>
            <div className="p1-sec-rule p1-rule-dec" aria-hidden="true" />
          </div>

          <div className="p1-dec-principles-card">
            ADAPTABILITY<br />
            FUNCTIONALITY<br />
            COMFORT<br />
            REPEAT WEAR
          </div>

          <div className="p1-dec-bottom-rule" aria-hidden="true" />

          <h4 className="p1-dec-closing-stmt">
            DESIGNED TO TRANSFORM.<br />
            STYLED TO MOVE.
          </h4>
        </div>
      </div>
    </section>
  );
}
