import React from 'react';

/**
 * Project 1 — Section 2: "THE BEGINNING - A NEED TURNED INTO A POSSIBILITY"
 * Precise two-page editorial spread:
 * - Left Page (~52%): Full-bleed Mediterranean resort photographic story with editorial typography.
 * - Right Page (~48%): Structured modular research & case-study page with 4 defined sections.
 */
export function Project1BeginningSection() {
  return (
    <section className="p1-beginning-spread" aria-label="Project 1 — The Beginning Research Spread">
      {/* LEFT PAGE — Full-bleed photographic editorial hero */}
      <div className="p1-spread-left">
        <img
          src="/ramya-portfolio-images/project1-beginning-hero.jpg"
          alt="Mediterranean coastal resort scene with woman in light cream resort outfit"
          className="p1-left-bg-img"
          draggable={false}
        />

        {/* Main Title Group (Upper Left) */}
        <div className="p1-left-title-group">
          <h2 className="p1-left-main-title">
            THE<br />BEGINNING
          </h2>
          <div className="p1-left-title-rule" aria-hidden="true" />
          <p className="p1-left-subtitle">
            A NEED TURNED<br />INTO A POSSIBILITY.
          </p>
        </div>

        {/* Handwritten Phrase (Upper Right over Sky/Ocean region) */}
        <div className="p1-left-script-group">
          <p className="p1-left-script-text">
            Explore<br />
            Adapt<br />
            Reimagine
          </p>
          <div className="p1-left-script-rule" aria-hidden="true" />
        </div>

        {/* Quote Group (Lower Left Middle) */}
        <div className="p1-left-quote-group">
          <blockquote className="p1-left-quote">
            &ldquo;Same destinations.<br />
            Different outfits.<br />
            A smarter way<br />
            to dress.&rdquo;
          </blockquote>
          <div className="p1-left-quote-rule" aria-hidden="true" />
        </div>

        {/* Bottom Left Keywords */}
        <div className="p1-left-keywords">
          TRAVEL &nbsp;&bull;&nbsp; STYLE &nbsp;&bull;&nbsp; SUSTAINABILITY &nbsp;&bull;&nbsp; VERSATILITY
        </div>
      </div>

      {/* RIGHT PAGE — Structured modular editorial research grid */}
      <div className="p1-spread-right">
        {/* Top Page Number */}
        <div className="p1-right-page-number">02</div>

        {/* SECTION 01: THE BRIEF */}
        <div className="p1-right-sec p1-sec-brief">
          <div className="p1-sec-header">
            <span className="p1-sec-num">01</span>
            <h3 className="p1-sec-title">THE BRIEF</h3>
            <div className="p1-sec-rule p1-rule-brief" aria-hidden="true" />
          </div>

          <div className="p1-brief-grid">
            <div className="p1-brief-card">
              <p>
                To develop a resort wear collection for 2027 by exploring how resort wear can be more{' '}
                <strong>versatile</strong>, <strong>functional</strong> <strong>and travel-friendly</strong> while
                remaining stylish and relevant for today&rsquo;s consumer.
              </p>
            </div>
            <div className="p1-brief-img-wrap">
              <img
                src="/ramya-portfolio-images/project1-flatlay-brief.jpg"
                alt="Resort flat-lay with straw hat, sunglasses, palm leaf, and note"
                className="p1-brief-img"
              />
            </div>
          </div>
        </div>

        {/* SECTION 02: WHAT WE RESEARCHED */}
        <div className="p1-right-sec p1-sec-researched">
          <div className="p1-sec-header">
            <span className="p1-sec-num">02</span>
            <h3 className="p1-sec-title">WHAT WE RESEARCHED</h3>
            <div className="p1-sec-rule p1-rule-researched" aria-hidden="true" />
          </div>

          <div className="p1-research-cols">
            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <rect x="3" y="12" width="4" height="8" rx="1" />
                  <rect x="10" y="8" width="4" height="12" rx="1" />
                  <rect x="17" y="4" width="4" height="16" rx="1" />
                </svg>
              </div>
              <span className="p1-research-label">
                TREND<br />FORECASTING
              </span>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
                </svg>
              </div>
              <span className="p1-research-label">
                CONSUMER<br />NEEDS
              </span>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </div>
              <span className="p1-research-label">
                COMPETITOR<br />ANALYSIS
              </span>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <path d="M9 18h6m-4 3h2M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.3 6 .4.3.7.8.7 1.3V17h6v-.7c0-.5.3-1 .7-1.3A7 7 0 0 0 12 2z" />
                </svg>
              </div>
              <span className="p1-research-label">
                MARKET<br />GAP
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 03: WHAT WE FOUND */}
        <div className="p1-right-sec p1-sec-found">
          <div className="p1-sec-header">
            <span className="p1-sec-num">03</span>
            <h3 className="p1-sec-title">WHAT WE FOUND</h3>
            <div className="p1-sec-rule p1-rule-found" aria-hidden="true" />
          </div>

          <div className="p1-finding-flow">
            <div className="p1-finding-card p1-fc-1">
              <p>
                Most existing resort wear is <strong>single-function</strong> with limited versatility.
              </p>
            </div>
            <div className="p1-finding-arrow" aria-hidden="true">
              &rarr;
            </div>
            <div className="p1-finding-card p1-fc-2">
              <p>
                Consumers want fashion that is <strong>versatile</strong>, <strong>travel-friendly</strong> and{' '}
                <strong>sustainable</strong>.
              </p>
            </div>
            <div className="p1-finding-arrow" aria-hidden="true">
              &rarr;
            </div>
            <div className="p1-finding-card p1-fc-3">
              <p>
                There is an opportunity for <strong>adaptable</strong> resort wear that offers{' '}
                <strong>more value from</strong> <strong>one garment</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 04: THE QUESTION */}
        <div className="p1-right-sec p1-sec-question">
          <div className="p1-sec-header">
            <span className="p1-sec-num">04</span>
            <h3 className="p1-sec-title">THE QUESTION</h3>
            <div className="p1-sec-rule p1-rule-question" aria-hidden="true" />
          </div>

          <div className="p1-question-grid">
            <div className="p1-question-card">
              <h4 className="p1-question-text">
                CAN ONE GARMENT<br />DO MORE THAN ONE JOB?
              </h4>
              <div className="p1-question-rule" aria-hidden="true" />
              <p className="p1-question-keywords">CASUAL &nbsp;|&nbsp; TRAVEL &nbsp;|&nbsp; RESORT</p>
            </div>

            <div className="p1-question-img-wrap">
              <img
                src="/ramya-portfolio-images/project1-beach-question.jpg"
                alt="Mediterranean beach with straw parasol and lounge chair"
                className="p1-question-img"
              />
              <div className="p1-question-overlay-text">
                LESS<br />
                TO CARRY.<br />
                MORE TO<br />
                EXPERIENCE.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
