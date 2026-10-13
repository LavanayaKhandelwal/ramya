import { AboutSection } from '../components/home-sections/AboutSection';
import { ProjectsSection } from '../components/home-sections/ProjectsSection';
import { SkillsSection } from '../components/home-sections/SkillsSection';
import { ContactSection } from '../components/home-sections/ContactSection';

/**
 * Home — a sequence of full-bleed designed sections.
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
