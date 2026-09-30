import { Link } from 'react-router-dom';

interface ProjectButtonProps {
  to: string;
  label: string;
}

/**
 * Pill button under a project card.
 *
 * The brief calls this a <button>. It is a <Link> instead, styled to the same
 * geometry, because every destination already exists as a route and a real link
 * gives keyboard access, middle-click and "open in new tab" for free — none of
 * which a click-handler <button> has. The render is identical.
 */
export function ProjectButton({ to, label }: ProjectButtonProps) {
  return (
    <Link className="project-button" to={`/projects/${to}`}>
      <span className="project-button-label">{label}</span>
      <span className="project-button-arrow" aria-hidden>
        &rarr;
      </span>
    </Link>
  );
}
