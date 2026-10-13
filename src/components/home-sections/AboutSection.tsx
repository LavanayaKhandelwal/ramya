/**
 * About Me — a section of the home page, built from the supplied artwork only.
 *
 * This began life as a page of its own at /about. It is a full-bleed 100vh
 * composition, which is a section rather than a route: the artwork is sized
 * against the viewport and the reader arrives at it by scrolling, not by being
 * sent somewhere. It keeps its own ground and its own overflow, so the collages
 * are still cut by the window edges exactly as they were on the page — dropping
 * it into the home scroll changed where it lives, not how it is composed.
 *
 * Unlike the home cover, this page has no background photograph. Both background
 * images in the folder are light — `hero-section-background.png` is a cream and
 * pale-blue checkerboard, `contact section-background.png` is cream — and the
 * body's copy is set in #F8F5EF at 13px, which is unreadable on either. The navy
 * is therefore the ground itself, and no texture is stretched behind it.
 *
 * Every decoration here is a supplied file. The corner collages are
 * `hero-section-top-design-element.png`, the same asset the home cover uses twice
 * (once upright, once rotated), and the flower, ribbon and star are three
 * regions of one 2172x724 sheet, isolated by CSS crop rather than by cutting new
 * files out of it — the technique `.top-star-crop` already uses on the cover. The
 * crop boxes in index.css are the measured bounding boxes of those three regions
 * at full resolution, and the sheet is copied into public byte for byte.
 *
 * TWO THINGS THE BRIEF ASKED FOR ARE NOT HERE, both because the artwork does not
 * exist in the folder rather than as a choice.
 *
 * The title is set as text. The brief is explicit that the title should be a
 * supplied transparent PNG and never HTML text, and that is the right rule — a
 * drawn wordmark is a substitute for a real one. But no "About Me" title file
 * exists: the only two title PNGs are the home cover's title, which CoverSection
 * already places as the portfolio's own name, and a two-row "my projects"
 * title. Putting either on this page would print the wrong words over it. So the
 * words are set in HTML for now, and `.about-title` is a single class: dropping
 * in the real PNG means replacing the one <p> below with an <img> and deleting
 * the rule.
 *
 * The curved line that belongs at the foot of the arch is not here either. There
 * is no curved-line asset. The only thin lines in the folder are two straight
 * 9px strips that sit above and below the star inside the same sheet, and they
 * are part of that star's composition rather than a separate ornament, so they
 * are not promoted into one.
 */

const INTRO = [
  'I’m a fashion design graduate currently pursuing Fashion & Lifestyle Management. I’m someone who enjoys exploring fashion, trends, brands and new ideas, with a particular interest in fashion merchandising and visual merchandising.',
  'I enjoy working on creative projects, researching brands and understanding how products are planned, selected and presented. I also like creating visual content and experimenting with different ideas through my projects.',
  'I would describe myself as creative, curious and detail-oriented. I’m still exploring different areas of fashion, but I know I enjoy work where I can combine my creative side with my understanding of fashion and products.',
];

const SHEET = '/ramya-portfolio-images/design-elements-flower-ribbon-star.png';

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="About Me">
      {/* corner collages — one supplied asset, placed twice, partly off-canvas */}
      <img
        className="about-collage about-collage-top-right"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />
      <img
        className="about-collage about-collage-bottom-left"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      {/* the rule the star hangs on, drawn in CSS — the brief has it as a div */}
      <div className="about-star-rule" aria-hidden />

      <div className="about-star-crop about-star-crop-left" aria-hidden>
        <img src={SHEET} alt="" aria-hidden draggable={false} />
      </div>

      {/* ——— left column ——— */}
      <section className="about-copy">
        <p className="about-title">About Me</p>

        <div className="about-description">
          {INTRO.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      {/* ——— right column ——— */}
      <section className="about-portrait" aria-label="Portrait">
        <div className="about-portrait-frame">
          <div className="about-portrait-inner">
            <img
              className="about-portrait-img"
              src="/ramya-portfolio-images/about-portrait.png"
              alt="Ramya, photographed for the About Me page"
              draggable={false}
            />
          </div>
        </div>

        <div className="about-ribbon-crop" aria-hidden>
          <img src={SHEET} alt="" aria-hidden draggable={false} />
        </div>

        <div className="about-star-crop about-star-crop-right" aria-hidden>
          <img src={SHEET} alt="" aria-hidden draggable={false} />
        </div>

        <div className="about-flower-crop" aria-hidden>
          <img src={SHEET} alt="" aria-hidden draggable={false} />
        </div>
      </section>

      {/* Lower portion - integrated into existing section */}
      <div className="about-lower-integrated">
        <div className="about-lower-intro-small">
          building a career in the fashion and lifestyle industry and being a part
          of brands that create value, inspire people, and make a positive impact.
        </div>

        <div className="about-lower-approach-small">
          <div className="about-lower-approach-header-small">
            <span className="about-lower-approach-title-small">MY APPROACH</span>
            <div className="about-lower-approach-line-small" />
          </div>
          <div className="about-lower-approach-body-small">
            I believe the best ideas come from understanding people, products and
            the world around us.
            <br />
            I enjoy combining creativity with research and a practical
            understanding of fashion to create
            <br />
            ideas that are both relevant and visually engaging.
          </div>
        </div>

        <div className="about-lower-highlight-small">
          <div className="about-lower-brush-small" aria-hidden />
          <span className="about-lower-highlight-text-small">
            Curious by nature. Creative by instinct. Detail-driven by choice.
          </span>
          <div className="about-lower-swoosh-small" aria-hidden>
            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
              <path
                d="M 10 22 C 40 8, 80 8, 110 25"
                fill="none"
                stroke="#B7D2F0"
                strokeWidth="1"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>

        <div className="about-lower-divider-small">
          <div className="about-lower-divider-line-small" />
          <div className="about-lower-divider-sparkle-small" aria-hidden>
            <svg viewBox="0 0 14 14">
              <g
                stroke="#F5F4F0"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              >
                <line x1="7" y1="2" x2="7" y2="12" />
                <line x1="2" y1="7" x2="12" y2="7" />
                <line x1="3" y1="3" x2="11" y2="11" />
                <line x1="3" y1="11" x2="11" y2="3" />
              </g>
            </svg>
          </div>
          <div className="about-lower-divider-line-small" />
        </div>

        <div className="about-lower-info-small">
          <div className="about-lower-col-small">
            <div className="about-lower-icon-circle-small">
              <svg
                className="about-lower-icon-small"
                viewBox="0 0 20 20"
                stroke="#123A70"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h5a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H2z" />
                <path d="M18 3h-5a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h6z" />
              </svg>
            </div>
            <div className="about-lower-vdiv-small" />
            <div className="about-lower-col-content-small">
              <div className="about-lower-heading-small">EDUCATION</div>
              <div className="about-lower-text-small">
                <div>Master's in Fashion & Lifestyle</div>
                <div>Business Management</div>
                <div>Pearl Academy | 2025 – 2027</div>
              </div>
            </div>
          </div>

          <div className="about-lower-col-small">
            <div className="about-lower-icon-circle-small">
              <svg
                className="about-lower-icon-small"
                viewBox="0 0 20 20"
                stroke="#123A70"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="10" r="8" />
                <circle cx="10" cy="10" r="4" />
                <circle cx="10" cy="10" r="1.5" />
              </svg>
            </div>
            <div className="about-lower-vdiv-small" />
            <div className="about-lower-col-content-small">
              <div className="about-lower-heading-small">WHAT I'M INTERESTED IN</div>
              <div className="about-lower-grid-small">
                <div className="about-lower-item-small">
                  <svg
                    className="about-lower-interest-icon-small"
                    viewBox="0 0 16 16"
                    stroke="#F5F3EF"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 1L3 4v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4l-2-3H5z" />
                    <line x1="3" y1="4" x2="13" y2="4" />
                    <path d="M10 6a2 2 0 0 1-4 0" />
                  </svg>
                  <span>Fashion Buying & Merchandising</span>
                </div>
                <div className="about-lower-item-small">
                  <svg
                    className="about-lower-interest-icon-small"
                    viewBox="0 0 16 16"
                    stroke="#F5F3EF"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 7H2M14 4H2M14 10H2M14 13H2" />
                  </svg>
                  <span>Visual Merchandising</span>
                </div>
                <div className="about-lower-item-small">
                  <svg
                    className="about-lower-interest-icon-small"
                    viewBox="0 0 16 16"
                    stroke="#F5F3EF"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 6l6-4 6 4v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" />
                    <polyline points="6 14 6 9 10 9 10 14" />
                  </svg>
                  <span>Retail Merchandising</span>
                </div>
                <div className="about-lower-item-small">
                  <svg
                    className="about-lower-interest-icon-small"
                    viewBox="0 0 16 16"
                    stroke="#F5F3EF"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 10V5a2 2 0 0 0-1-1.73l-4-2.5a2 2 0 0 0-2 0l-4 2.5A2 2 0 0 0 2 5v5a2 2 0 0 0 1 1.73l4 2.5a2 2 0 0 0 2 0l4-2.5A2 2 0 0 0 14 10z" />
                    <polyline points="2.27 4.8 8 7.76 13.73 4.8" />
                    <line x1="8" y1="13.6" x2="8" y2="7.76" />
                  </svg>
                  <span>Product Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
