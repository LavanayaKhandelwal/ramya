import type { ProjectCardData } from '../../data/projects';
import { ProjectButton } from './ProjectButton';

/**
 * One project card — a layered scrapbook composition.
 *
 * The brief asks for one reusable card driven by the data, not four hard-coded
 * ones, so this is written once and mapped over. Structure is identical across
 * cards; only the photograph, the label text and the seal icon vary.
 *
 * Layer order below is the brief's z-index order, top of file to bottom of
 * paint: paper, photo shadow, photo, envelope, label, tape, binder clip, seal,
 * button.
 *
 * Four of the nine layers have no supplied asset — the photograph, the binder
 * clip, the tape and the seal. Their <img> elements are present and carry the
 * exact briefed geometry, but src is null so React omits the attribute and the
 * layer renders empty instead of broken. Each one is commented. The back paper,
 * the photo shadow and the label are the brief's own CSS, not assets, so they
 * are drawn here as specified.
 */

interface ProjectCardProps {
  project: ProjectCardData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-back-paper" aria-hidden />

      <div className="project-photo-shadow" aria-hidden />

      {/* Photograph — asset not yet supplied, so this layer is empty. */}
      <img
        className="project-photo"
        src={project.image ?? undefined}
        alt={project.image ? project.imageDescription : ''}
        aria-hidden={project.image ? undefined : true}
        draggable={false}
      />

      <img
        className="project-envelope"
        src="/ramya-portfolio-images/project-holder.png"
        alt=""
        aria-hidden
        draggable={false}
      />

      <div className="project-label">
        <span>{project.label}</span>
      </div>

      {/* Gingham tape — asset not yet supplied. */}
      <img className="project-tape" src={project.tape ?? undefined} alt="" aria-hidden draggable={false} />

      {/* Binder clip — asset not yet supplied. */}
      <img
        className="project-binder-clip"
        src={project.binderClip ?? undefined}
        alt=""
        aria-hidden
        draggable={false}
      />

      {/* Wax seal — asset not yet supplied. It is meant to carry the
          project-specific icon (hanger / bag / analytics / bulb). */}
      <img className="project-seal" src={project.seal ?? undefined} alt="" aria-hidden draggable={false} />

      <ProjectButton to={project.slug} label={project.buttonLabel} />
    </article>
  );
}
