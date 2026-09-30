/**
 * Projects header — title, divider, subtitle.
 *
 * Two of the three parts are supplied artwork. The title is the "My PROJECTS"
 * PNG (the brief forbids redrawing it as text). The divider's four-point sparkle
 * has no standalone file: it lives inside the supplied 2172x724 three-element
 * sheet at x1810 y249, 153x153, so it is isolated by the same CSS-crop technique
 * already used by the hero's .top-star-crop and the About section's
 * .about-star-crop. The sheet itself is untouched — the crop is a window onto it,
 * not an edit of it.
 *
 * Only the subtitle is text, because the brief supplies no artwork for it.
 */

const TITLE = '/ramya-portfolio-images/my-projects-title.png';
const SHEET = '/ramya-portfolio-images/design-elements-flower-ribbon-star.png';

export function ProjectsHeader() {
  return (
    <section className="projects-header" aria-label="Projects">
      <img
        className="projects-title"
        src={TITLE}
        alt="My Projects"
        draggable={false}
      />

      <div className="title-divider" aria-hidden>
        <div className="divider-line" />
        <div className="divider-star-crop">
          <img src={SHEET} alt="" aria-hidden draggable={false} />
        </div>
        <div className="divider-line" />
      </div>

      <p className="projects-subtitle">Explore my work</p>
    </section>
  );
}
