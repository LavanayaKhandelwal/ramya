/**
 * Portfolio hero — pixel-faithful recreation from supplied assets only.
 * - background: full-viewport checkerboard image (no CSS recreation)
 * - title: transparent typography PNG (no HTML text redraw)
 * - decorations: supplied curved-line + star PNG (no regenerated graphics)
 */
export function CoverSection() {
  return (
    <main className="portfolio-hero" aria-label="Ramya Portfolio hero">
      {/* background layer */}
      <img
        className="hero-background"
        src="/ramya-portfolio-images/hero-section-background.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      {/* top-left decoration */}
      <img
        className="decoration decoration-top-left"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      {/* bottom-right decoration (same asset, rotated 180deg) */}
      <img
        className="decoration decoration-bottom-right"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      {/* centered title + subtitle */}
      <section className="hero-title-group" aria-label="Portfolio title">
        <img
          className="portfolio-title"
          src="/ramya-portfolio-images/hero-section-title.png"
          alt="Ramya Portfolio"
          draggable={false}
        />

        <div className="subtitle-group">
          {/* star isolated from the supplied decoration asset via CSS crop only */}
          <div className="top-star-crop" aria-hidden>
            <img
              src="/ramya-portfolio-images/hero-section-top-design-element.png"
              alt=""
              aria-hidden
              draggable={false}
            />
          </div>
          <p className="subtitle">
            MASTERS IN FASHION AND
            <br />
            LIFESTYLE BUSINESS MANAGEMENT
          </p>
          <div className="bottom-line" aria-hidden />
        </div>
      </section>
    </main>
  );
}
