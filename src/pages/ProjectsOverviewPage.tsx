import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectsHeader } from '../components/projects/ProjectsHeader';

/**
 * Projects index — recreated from the supplied artwork.
 *
 * A fixed 100vh composition: a warped blue-and-cream checkerboard ground, the
 * "My PROJECTS" typography, a sparkle divider, and four scrapbook cards over a
 * pair of corner curves.
 *
 * Three of the brief's assets exist and are used as files. Two of its layers are
 * CSS the brief specifies itself, and four of its card layers have no supplied
 * asset at all — the four project photographs, the binder clip, the gingham tape
 * and the wax seal. Those render as empty, correctly-sized layers. See
 * src/data/projects.ts.
 *
 * This is a <section>, not the <main> the brief names, because App.tsx already
 * wraps every route in a <main> and two main landmarks on a page is invalid.
 */
export function ProjectsOverviewPage() {
  return (
    <section className="projects-page" aria-label="My Projects">
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
