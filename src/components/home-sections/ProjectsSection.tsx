import { ProjectGrid } from '../projects/ProjectGrid';
import { ProjectsHeader } from '../projects/ProjectsHeader';

/**
 * My Projects — a section of the home page, built from the supplied artwork only.
 *
 * This began life as a page of its own at /projects. It is a fixed 100vh
 * composition, which makes it a section rather than a route: the artwork is
 * sized against the viewport and the reader arrives by scrolling, not by being
 * sent somewhere. Dropping it into the home scroll changed where it lives, not
 * how it is composed — it keeps its own ground and its own overflow, so the
 * background still fills the block and the corner curves are still cut by the
 * window edges.
 *
 * Like the About section above it, it therefore sits OUTSIDE the 1100px column
 * the surrounding home blocks are set in. Inside a centred column it would be
 * boxed in on both sides and its edges would stop being edges. The home page is
 * therefore a sequence of blocks: About, the internship column, this, then the
 * skills and contact column.
 *
 * Three of the brief's assets exist and are used as files. Two of its layers are
 * CSS the brief specifies itself, and four of its card layers have no supplied
 * asset at all — the four project photographs, the binder clip, the gingham tape
 * and the wax seal. Those render as empty, correctly-sized layers. See
 * ../../data/projects.ts.
 *
 * `id="projects"` is what the nav and footer point at, the same way `about` is.
 */
export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-label="My Projects">
      <img
        className="projects-background"
        src="/ramya-portfolio-images/hero-section-background.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      <img
        className="projects-decoration projects-decoration-top-left"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      <img
        className="projects-decoration projects-decoration-bottom-right"
        src="/ramya-portfolio-images/hero-section-top-design-element.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      <ProjectsHeader />
      <ProjectGrid />
    </section>
  );
}
