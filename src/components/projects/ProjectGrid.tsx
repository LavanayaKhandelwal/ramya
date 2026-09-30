import { projectsIndex } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

/** The four-card grid. One map, one card component — the brief's recommendation. */
export function ProjectGrid() {
  return (
    <section className="projects-grid" aria-label="Selected projects">
      {projectsIndex.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
