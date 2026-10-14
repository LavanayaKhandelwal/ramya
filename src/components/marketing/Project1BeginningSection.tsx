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
          src="/ramya-portfolio-images/placeholders/1B.png"
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
      </div>

      {/* RIGHT PAGE — Structured modular editorial research grid */}
      <div className="p1-spread-right">
        {/* Top Page Number */}
        <div className="p1-right-page-number">02</div>

        {/* SECTION 01: THE VISION */}
        <div className="p1-right-sec p1-sec-vision">
          <div className="p1-sec-header">
            <span className="p1-sec-num">01</span>
            <h3 className="p1-sec-title">THE VISION</h3>
            <div className="p1-sec-rule p1-rule-brief" aria-hidden="true" />
          </div>

          <div className="p1-brief-grid">
            <div className="p1-brief-card">
              <p>
                To create a resort wear collection for 2027 that reimagines vacation dressing through{' '}
                <strong>versatility</strong>, <strong>functionality</strong> and <strong>effortless style</strong>,
                while staying modern, feminine and relevant for today&rsquo;s conscious consumer.
              </p>
            </div>
            <div className="p1-brief-img-wrap">
              <img
                src="/ramya-portfolio-images/placeholders/1C.png"
                alt="Resort flat-lay with straw hat, sunglasses, palm leaf, and note"
                className="p1-brief-img"
              />
            </div>
          </div>
        </div>

        {/* SECTION 02: OUR EXPLORATION */}
        <div className="p1-right-sec p1-sec-exploration">
          <div className="p1-sec-header">
            <span className="p1-sec-num">02</span>
            <h3 className="p1-sec-title">OUR EXPLORATION</h3>
            <div className="p1-sec-rule p1-rule-researched" aria-hidden="true" />
          </div>
          <p className="p1-sec-subtitle">INSIGHTS THAT SHAPED THE COLLECTION</p>

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
                TREND<br />DIRECTIONS
              </span>
              <p className="p1-research-desc">
                Emerging styles &amp;<br />seasonal cues for 2027
              </p>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
                </svg>
              </div>
              <span className="p1-research-label">
                CONSUMER<br />PERSPECTIVES
              </span>
              <p className="p1-research-desc">
                Needs, preferences<br />&amp; lifestyle behaviours
              </p>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </div>
              <span className="p1-research-label">
                MARKET<br />LANDSCAPE
              </span>
              <p className="p1-research-desc">
                Existing offerings,<br />gaps &amp; opportunities
              </p>
            </div>

            <div className="p1-research-item">
              <div className="p1-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="#201C19" strokeWidth="1.5" fill="none">
                  <path d="M9 18h6m-4 3h2M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.3 6 .4.3.7.8.7 1.3V17h6v-.7c0-.5.3-1 .7-1.3A7 7 0 0 0 12 2z" />
                </svg>
              </div>
              <span className="p1-research-label">
                COMPETITIVE<br />INSPIRATION
              </span>
              <p className="p1-research-desc">
                What brands are doing<br />and where we can differ
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 03: KEY INSIGHTS */}
        <div className="p1-right-sec p1-sec-found">
          <div className="p1-sec-header">
            <span className="p1-sec-num">03</span>
            <h3 className="p1-sec-title">KEY INSIGHTS</h3>
            <div className="p1-sec-rule p1-rule-found" aria-hidden="true" />
          </div>
          <p className="p1-sec-subtitle">WHAT WE DISCOVERED</p>

          <div className="p1-finding-flow">
            <div className="p1-finding-card p1-fc-1">
              <p>
                Current resort wear is often <strong>single-use</strong> with <strong>limited versatility</strong>.
              </p>
            </div>
            <div className="p1-finding-arrow" aria-hidden="true">
              &rarr;
            </div>
            <div className="p1-finding-card p1-fc-2">
              <p>
                Today&rsquo;s consumer seeks fashion that is <strong>versatile</strong>,{' '}
                <strong>travel-friendly</strong> and <strong>sustainable</strong>.
              </p>
            </div>
            <div className="p1-finding-arrow" aria-hidden="true">
              &rarr;
            </div>
            <div className="p1-finding-card p1-fc-3">
              <p>
                There is a strong opportunity for <strong>adaptable resort wear</strong> that offers{' '}
                <strong>more value</strong> from <strong>one garment</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 04: THE BIG QUESTION */}
        <div className="p1-right-sec p1-sec-question">
          <div className="p1-sec-header">
            <span className="p1-sec-num">04</span>
            <h3 className="p1-sec-title">THE BIG QUESTION</h3>
            <div className="p1-sec-rule p1-rule-question" aria-hidden="true" />
          </div>

          <div className="p1-question-grid">
            <div className="p1-question-card">
              <h4 className="p1-question-text">
                CAN ONE DRESS<br />TAKE YOU FURTHER?
              </h4>
              <div className="p1-question-rule" aria-hidden="true" />
              <p className="p1-question-keywords">ONE DRESS &nbsp;|&nbsp; MORE LOOKS &nbsp;|&nbsp; ENDLESS DESTINATIONS</p>
            </div>

            <div className="p1-question-img-wrap">
              <img
                src="/ramya-portfolio-images/placeholders/1D.png"
                alt="Mediterranean beach with straw parasol and lounge chair"
                className="p1-question-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
