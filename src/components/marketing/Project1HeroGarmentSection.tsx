import React from 'react';

/**
 * Project 1 — Section 5: "ONE BASE, TWO LENGTHS."
 * 1-on-1 exact recreation of the slide design (renders/project1-section-05.html):
 * - Canvas Background: Warm editorial sand (#F7EEDD) with botanical & geometric SVG accents.
 * - Header: "ONE BASE, TWO LENGTHS.", modular dress subtitle, and script annotation "Change the Length. Not the Look."
 * - Column 1 (01 THE HERO): Heading badge, subtitle, Hero mini/maxi dress collage (/Project 1/Page 5.jpg), and Mini/Maxi description cards.
 * - Column 2 (02 THE TRANSFORMATION): Heading badge, 3-step vertical card flow with arrows + transformation statement, paired beside the transformation product collage (/Project 1/Page 5(1).jpg).
 * - Column 3 (03 & 04 THE DESIGN DECISION): Heading badge 03, italic quote card + copy, heading badge 04, principles box, and closing statement.
 */
export function Project1HeroGarmentSection() {
  return (
    <section className="p1-hero-garment-spread" aria-label="Project 1 — One Base, Two Lengths">
      {/* Decorative SVG background layer */}
      <svg className="p1-hg-deco" viewBox="0 0 1062 708" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <line x1="27" y1="16" x2="27" y2="134" stroke="#A49F91" strokeWidth="1" />
        <line x1="15" y1="30" x2="243" y2="30" stroke="#A49F91" strokeWidth="1" />
        <path d="M234 24 L237 30 L234 38 L231 30 Z" fill="#A49F91" />

        <g opacity="0.55">
          <path d="M700 6 C790 26 880 -4 960 12 C1010 22 1042 10 1062 2" stroke="#A49F91" strokeWidth="1.1" />
          <ellipse cx="905" cy="30" rx="30" ry="10" fill="#EFE0C7" transform="rotate(-22 905 30)" />
          <ellipse cx="960" cy="16" rx="22" ry="8" fill="#DCCFB6" opacity="0.7" transform="rotate(12 960 16)" />
          <ellipse cx="1000" cy="42" rx="26" ry="9" fill="#EFE0C7" transform="rotate(-8 1000 42)" />
          <ellipse cx="860" cy="12" rx="18" ry="6" fill="#DCCFB6" opacity="0.6" transform="rotate(28 860 12)" />
          <ellipse cx="1030" cy="24" rx="16" ry="6" fill="#EFE0C7" opacity="0.8" transform="rotate(-16 1030 24)" />
        </g>

        <g opacity="0.8">
          <path d="M-6 692 C60 660 130 704 200 688" stroke="#A49F91" strokeWidth="1.3" />
          <ellipse cx="58" cy="698" rx="30" ry="10" fill="#E3D3B6" transform="rotate(12 58 698)" />
          <ellipse cx="124" cy="708" rx="22" ry="8" fill="#D5C4A6" opacity="0.7" transform="rotate(-16 124 708)" />
        </g>

        <g opacity="0.8">
          <path d="M1066 646 C1000 682 946 662 890 694 C862 708 840 700 820 696" stroke="#A49F91" strokeWidth="1.3" />
          <ellipse cx="1000" cy="690" rx="26" ry="9" fill="#E3D3B6" transform="rotate(-14 1000 690)" />
          <ellipse cx="944" cy="702" rx="20" ry="7" fill="#D5C4A6" opacity="0.7" transform="rotate(18 944 702)" />
        </g>
      </svg>

      {/* TOP HEADER AREA */}
      <header className="p1-hg-header">
        <div className="p1-hg-title-row">
          <div className="p1-hg-title-left">
            <h2 className="p1-hg-main-title">ONE BASE, TWO LENGTHS.</h2>
            <p className="p1-hg-intro-copy">
              The concept was translated into a hero garment: a strapless ruched dress with detachable tiers.<br />
              The modular construction allows the wearer to change the length according to the occasion.
            </p>
          </div>
        </div>
      </header>

      {/* MAIN 3-COLUMN CONTENT AREA */}
      <div className="p1-hg-columns">
        {/* COLUMN 1: THE HERO */}
        <div className="p1-hg-col p1-hg-col-1">
          <div className="p1-sec-header">
            <div className="p1-hg-badge">01</div>
            <div className="p1-sec-head-text">
              <h3 className="p1-sec-title">THE HERO</h3>
              <div className="p1-sec-rule" aria-hidden="true" />
            </div>
          </div>
          <p className="p1-col-subtitle-text">THE DRESS THAT CHANGES WITH YOU</p>

          <figure className="p1-hero-collage-wrap">
            <img
              src="/Project%201/Page%205.jpg"
              alt="Model wearing the strapless ruched dress in mini and maxi lengths"
              className="p1-hero-collage-img"
              draggable={false}
            />
          </figure>

          <div className="p1-hero-caps">
            <div className="p1-hero-cap">
              <h4>MINI</h4>
              <span className="p1-hero-cap-sub">Light &bull; Easy &bull; Day-ready</span>
              <p>The shorter version works for casual resort moments, daytime plans and travel.</p>
            </div>
            <div className="p1-hero-cap">
              <h4>MAXI</h4>
              <span className="p1-hero-cap-sub">Flowing &bull; Elevated &bull; Evening-ready</span>
              <p>With the detachable tier added, the same base transforms into a longer silhouette suitable for vacation evenings and relaxed occasions.</p>
            </div>
          </div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 2: THE TRANSFORMATION */}
        <div className="p1-hg-col p1-hg-col-2">
          <div className="p1-sec-header">
            <div className="p1-hg-badge">02</div>
            <div className="p1-sec-head-text">
              <h3 className="p1-sec-title">THE TRANSFORMATION</h3>
              <div className="p1-sec-rule" aria-hidden="true" />
            </div>
          </div>

          <div className="p1-trans-content">
            <div className="p1-trans-flow-col">
              <div className="p1-trans-step-card">
                <h4>MINI</h4>
                <p>A fresh, effortless look for the day.</p>
              </div>
              <div className="p1-trans-arrow" aria-hidden="true">&darr;</div>

              <div className="p1-trans-step-card">
                <h4>DETACHABLE TIER</h4>
                <p>Add or remove with ease.</p>
              </div>
              <div className="p1-trans-arrow" aria-hidden="true">&darr;</div>

              <div className="p1-trans-step-card">
                <h4>MAXI</h4>
                <p>A flowing silhouette for elevated moments.</p>
              </div>

              <p className="p1-trans-explanation">
                Instead of creating a completely new garment for every occasion, the design uses one base silhouette and a detachable extension to create a different length.
              </p>

              <div className="p1-trans-statement">ONE BASE &rarr; TWO LENGTHS &rarr; MORE USE</div>
            </div>

            <figure className="p1-trans-collage-wrap">
              <img
                src="/Project%201/Page%205(1).jpg"
                alt="Product details of convertible dress transformation"
                className="p1-trans-collage-img"
                draggable={false}
              />
            </figure>
          </div>
        </div>

        <div className="p1-col-divider" aria-hidden="true" />

        {/* COLUMN 3: 03 + 04 THE DESIGN DECISION */}
        <div className="p1-hg-col p1-hg-col-3">
          <div className="p1-sec-header">
            <div className="p1-hg-badge">03</div>
            <div className="p1-sec-head-text">
              <h3 className="p1-sec-title">THE DESIGN DECISION</h3>
            </div>
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
            A versatile design that adapts to your plans, your mood and your destination &mdash; because style should move with you.
          </p>

          <div className="p1-sec-header p1-sec-header--second">
            <div className="p1-hg-badge">04</div>
            <div className="p1-sec-head-text">
              <h3 className="p1-sec-title">THE DESIGN DECISION</h3>
            </div>
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
