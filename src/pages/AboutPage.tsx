/**
 * About Me — navy-and-cream editorial spread, built from the supplied artwork only.
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
  'Hi, I’m Ramya! I’m a Fashion and Lifestyle Management student with a deep passion for fashion, retail, and brand strategy. I enjoy understanding consumer behaviour, exploring trends, and turning creative ideas into meaningful products and experiences.',
  'With a background in fashion design, I have a strong aesthetic sense and a curiosity for the business side of fashion — from merchandising and product development to brand management and marketing. I love working on projects that combine creativity with data-driven insights to create relevant and impactful solutions.',
  'I’m always eager to learn, experiment, and take on new challenges, with the goal of building a career in the fashion and lifestyle industry and being a part of brands that create value, inspire people, and make a positive impact.',
];

const SHEET = '/ramya-portfolio-images/design-elements-flower-ribbon-star.png';

export function AboutPage() {
  return (
    <main className="about-page" aria-label="About Me">
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
    </main>
  );
}
