import type { ProjectCardData } from '../../data/projects';
import { ProjectButton } from './ProjectButton';

/**
 * One project card.
 *
 * The card is a single supplied image — the whole scrapbook composition
 * (envelope, photographs, tape, binder clip, wax seal and the script label)
 * is already baked into the artwork, so none of it is rebuilt in markup.
 * Only the pill button is live UI, because it has to navigate.
 *
 * Structure is identical across all four cards; only the artwork and the
 * button label vary, both of which come from the data.
 */

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        className="project-card-image"
        src={project.image}
        alt={project.imageDescription}
        draggable={false}
      />

      <ProjectButton to={project.slug} label={project.buttonLabel} />
    </article>
  );
}
