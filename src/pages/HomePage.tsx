import { AboutSection } from '../components/home-sections/AboutSection';
import { ProjectsSection } from '../components/home-sections/ProjectsSection';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';

/**
 * Home — a sequence of full-bleed designed sections.
 *
 *   About Me          full-bleed
 *   My Projects       full-bleed
 *   Skills            full-bleed
 *   contact           full-bleed
 *
 * Every block is a fixed 100vh composition whose artwork is sized against the
 * viewport, so they all sit OUTSIDE the 1100px column and the page is one
 * uninterrupted run of them. Inside a centred column they would be boxed in on
 * both sides and their edges would stop being edges. Each brings its own ground
 * and its own overflow.
 *
 * About Me leads the page, straight after the fashion cover that precedes it in
 * App, so the reader meets it before the project index rather than halfway down.
 *
 * The internship callout that used to sit between About and Projects is gone —
 * it was the last 1100px wireframe left on the page, and it was the only thing
 * interrupting the run of full-bleed sections. With it removed the page is four
 * designed sections end to end. The two internship ROUTES
 * (/internship/experience, /internship/learnings) are untouched and still render
 * their own boards; only the home-page teaser is gone.
 */
export function HomePage() {
  return (
    <>
      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </>
  );
}
