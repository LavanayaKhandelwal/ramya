import React from 'react';

/**
 * Project 1 — Section 3: "FINDING THE DIRECTION — HOW INSIGHTS TURNED INTO TRENDS AND OPPORTUNITIES"
 * Precise Page 03 Editorial Presentation Slide Layout:
 * - Left Panel (31%): Full-height Mediterranean photographic editorial storytelling panel.
 * - Right Panel (69%): 5 modular research & strategy sections (Macro/Micro trend, fabric direction, concept chain).
 */
export function Project1DirectionSection() {
  return (
    <section className="p1-direction-spread" aria-label="Project 1 — Finding the Direction Slide">
      {/* LEFT PANEL — 31% width photographic editorial */}
      <div className="p1-dir-left">
        <img
          src="/ramya-portfolio-images/project3-left-hero.jpg"
          alt="Woman in ivory open-back resort dress looking out over Mediterranean coastline"
          className="p1-dir-left-bg-img"
          draggable={false}
        />

        {/* Top Identifier */}
        <div className="p1-dir-top-id">
          <span className="p1-dir-id-num">03</span>
          <span className="p1-dir-id-rule" aria-hidden="true" />
        </div>

        {/* Main Title Group */}
        <div className="p1-dir-title-group">
          <h2 className="p1-dir-main-title">
            FINDING<br />THE DIRECTION.
          </h2>
          <p className="p1-dir-subtitle">
            HOW INSIGHTS TURNED INTO TRENDS<br />AND OPPORTUNITIES.
          </p>
        </div>

        {/* Quote */}
        <div className="p1-dir-quote-group">
          <blockquote className="p1-dir-quote">
            &ldquo;Real needs<br />
            lead to<br />
            relevant<br />
            fashion.&rdquo;
          </blockquote>
        </div>

        {/* Bottom Keywords */}
        <div className="p1-dir-keywords">
          TRAVEL &nbsp;&bull;&nbsp; PEOPLE &nbsp;&bull;&nbsp; PURPOSE &nbsp;&bull;&nbsp; POSSIBILITIES
        </div>
      </div>

      {/* RIGHT PANEL — 69% width structured research slide */}
      <div className="p1-dir-right">
        {/* Top Metadata */}
        <div className="p1-dir-top-meta">S/S 2027</div>

        {/* TOP ROW: SECTION 01 & SECTION 02 */}
        <div className="p1-dir-row p1-dir-row-top">
          {/* SECTION 01: WHAT DID THE RESEARCH REVEAL? */}
          <div className="p1-dir-sec p1-sec-reveal">
            <div className="p1-sec-header">
              <span className="p1-sec-num">01</span>
              <h3 className="p1-sec-title">WHAT DID THE RESEARCH REVEAL?</h3>
              <div className="p1-sec-rule p1-rule-reveal" aria-hidden="true" />
            </div>
            <p className="p1-dir-desc">
              Our research highlighted key shifts in how people live, travel and dress, leading to a growing need for adaptable fashion.
            </p>

            <div className="p1-reveal-grid">
              <div className="p1-reveal-col">
                <img
                  src="/ramya-portfolio-images/project1-beach-question.jpg"
                  alt="Mediterranean coastal village"
                  className="p1-reveal-img"
                />
                <div className="p1-reveal-caption">
                  <h4>CHANGING LIFESTYLES</h4>
                  <p>Consumers are balancing multiple roles and occasions.</p>
                </div>
              </div>

              <div className="p1-reveal-col">
                <img
                  src="/ramya-portfolio-images/project1-beginning-hero.jpg"
                  alt="Mediterranean architectural terrace"
                  className="p1-reveal-img"
                />
                <div className="p1-reveal-caption">
                  <h4>NEED FOR VALUE</h4>
                  <p>Consumers want products with longer usability.</p>
                </div>
              </div>

              <div className="p1-reveal-col">
                <img
                  src="/ramya-portfolio-images/project3-research-rack.jpg"
                  alt="Resort clothing rack"
                  className="p1-reveal-img"
                />
                <div className="p1-reveal-caption">
                  <h4>LESS SINGLE-USE</h4>
                  <p>There is a growing need for versatile and multifunctional fashion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 02: THE MACRO TREND */}
          <div className="p1-dir-sec p1-sec-macro">
            <div className="p1-sec-header">
              <span className="p1-sec-num">02</span>
              <h3 className="p1-sec-title">THE MACRO TREND</h3>
              <div className="p1-sec-rule p1-rule-macro" aria-hidden="true" />
            </div>
            <p className="p1-dir-desc">These insights aligned with the macro trend:</p>

            <h4 className="p1-macro-trend-title">FLEX&ndash;STABILITY &middot; 2027</h4>
            <p className="p1-macro-trend-sub">
              A trend that celebrates adaptability, durability and a balanced, evolving lifestyle.
            </p>

            <div className="p1-macro-flex-wrap">
              <img
                src="/ramya-portfolio-images/project3-fabric-linen.jpg"
                alt="Ivory linen fabric with palm shadow"
                className="p1-macro-img"
              />
              <div className="p1-macro-flow-card">
                <span>CHANGING LIFESTYLES</span>
                <span className="flow-arrow">&darr;</span>
                <span>NEED FOR ADAPTABILITY</span>
                <span className="flow-arrow">&darr;</span>
                <span>LONGER USAGE</span>
                <span className="flow-arrow">&darr;</span>
                <strong>FLEX&ndash;STABILITY</strong>
              </div>
            </div>

            <p className="p1-macro-bottom-caption">
              Fashion that moves with you, through every phase.
            </p>
          </div>
        </div>

        {/* MIDDLE ROW: SECTION 03 & SECTION 04 */}
        <div className="p1-dir-row p1-dir-row-mid">
          {/* SECTION 03: FROM MACRO TO MICRO */}
          <div className="p1-dir-sec p1-sec-macro-micro">
            <div className="p1-sec-header">
              <span className="p1-sec-num">03</span>
              <h3 className="p1-sec-title">FROM MACRO TO MICRO</h3>
              <div className="p1-sec-rule p1-rule-m2m" aria-hidden="true" />
            </div>
            <p className="p1-dir-desc">We translated the macro trend into a product-level direction.</p>

            <div className="p1-m2m-flow-container">
              <div className="p1-m2m-block p1-mb-macro">
                <span className="p1-m2m-tag">MACRO TREND</span>
                <h5>FLEX&ndash;STABILITY</h5>
                <p>Core idea: Fashion should adapt.</p>
              </div>

              <div className="p1-m2m-mid-list">
                <span>ADJUSTABLE</span>
                <span>&bull;</span>
                <span>MODULAR</span>
                <span>&bull;</span>
                <span>MULTIFUNCTIONAL</span>
                <span>&bull;</span>
                <span>TRANSFORMABLE</span>
              </div>

              <div className="p1-m2m-block p1-mb-micro">
                <span className="p1-m2m-tag">MICRO TREND</span>
                <h5>CONVERTIBLE CLOTHING</h5>
                <p>Using detachable, interchangeable or adjustable elements to create more possibilities from one garment.</p>
              </div>
            </div>

            <div className="p1-m2m-thumbs-wrap">
              <div className="p1-m2m-thumbs">
                <img src="/ramya-portfolio-images/project3-left-hero.jpg" alt="Tie-back convertible construction detail" />
                <img src="/ramya-portfolio-images/project1-beginning-hero.jpg" alt="Ivory fabric tie detail" />
                <img src="/ramya-portfolio-images/project3-research-rack.jpg" alt="Convertible garment element" />
              </div>
              <div className="p1-m2m-note">
                &ldquo;One Garment.<br />More Ways.&rdquo;
              </div>
            </div>
          </div>

          {/* SECTION 04: ANOTHER KEY DIRECTION */}
          <div className="p1-dir-sec p1-sec-fabric-dir">
            <div className="p1-sec-header">
              <span className="p1-sec-num">04</span>
              <h3 className="p1-sec-title">ANOTHER KEY DIRECTION</h3>
              <div className="p1-sec-rule p1-rule-fabric" aria-hidden="true" />
            </div>
            <p className="p1-dir-desc">
              For our S/S 2027 resort collection, we explored natural fabrics that support the trend direction.
            </p>

            <div className="p1-fabric-flex">
              <img
                src="/ramya-portfolio-images/project3-fabric-linen.jpg"
                alt="Close-up macro linen texture"
                className="p1-fabric-img"
              />
              <div className="p1-fabric-card">
                <h4>LINEN +<br />NATURAL FABRICS</h4>
                <div className="p1-fabric-attrs">
                  <div className="p1-fabric-attr">
                    <div className="p1-attr-circle">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="#201C19" strokeWidth="1.5" fill="none">
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.5 9 8 10 0-3 1.5-6 4-8.5S20 9.5 20 7c0-2.8-3.6-5-8-5z" />
                      </svg>
                    </div>
                    <span>LIGHTWEIGHT</span>
                  </div>

                  <div className="p1-fabric-attr">
                    <div className="p1-attr-circle">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="#201C19" strokeWidth="1.5" fill="none">
                        <path d="M4 8h16M4 12h16M4 16h12" />
                      </svg>
                    </div>
                    <span>BREATHABLE</span>
                  </div>

                  <div className="p1-fabric-attr">
                    <div className="p1-attr-circle">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="#201C19" strokeWidth="1.5" fill="none">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      </svg>
                    </div>
                    <span>WARM-WEATHER<br />COMFORT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: SECTION 05 */}
        <div className="p1-dir-row p1-dir-row-bottom">
          <div className="p1-dir-sec p1-sec-takeus">
            <div className="p1-sec-header">
              <span className="p1-sec-num">05</span>
              <h3 className="p1-sec-title">WHERE DID THIS TAKE US?</h3>
              <div className="p1-sec-rule p1-rule-takeus" aria-hidden="true" />
            </div>
            <p className="p1-dir-desc">A clear design opportunity emerged.</p>

            <div className="p1-chain-wrap">
              <div className="p1-chain-node">
                <span className="p1-node-title">FLEX&ndash;<br />STABILITY</span>
                <span className="p1-node-sub">(Macro)</span>
              </div>
              <div className="p1-chain-arrow">&rarr;</div>

              <div className="p1-chain-node">
                <span className="p1-node-title">CONVERTIBLE<br />CLOTHING</span>
                <span className="p1-node-sub">(Micro)</span>
              </div>
              <div className="p1-chain-arrow">&rarr;</div>

              <div className="p1-chain-node">
                <span className="p1-node-title">DETACHABLE<br />ELEMENTS</span>
                <span className="p1-node-sub">(Design Direction)</span>
              </div>
              <div className="p1-chain-arrow">&rarr;</div>

              <div className="p1-chain-node p1-node-highlight">
                <span className="p1-node-title">MINI &rarr; MAXI</span>
                <span className="p1-node-sub">(Product Opportunity)</span>
              </div>
            </div>

            <p className="p1-closing-statement">
              &ldquo;The trend was no longer just something to follow &mdash; it became a design problem to solve.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
