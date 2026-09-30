import { Link } from 'react-router-dom';
import { PageShell } from '../components/PageShell';
import { WireBlock } from '../components/WireBlock';
import { siteData } from '../data/site';

/** Mirrors lavanaya ProjectsOverviewPage index (wireframe). */
export function ProjectsOverviewPage() {
  return (
    <PageShell
      breadcrumb="HOME / SELECTED PROJECTS"
      eyebrow="CURATED WORKS ARCHIVE"
      title="Selected Projects"
      intro="[4 projects across marketing, visual merchandising, startup, activation]"
    >
      {siteData.selectedProjects.map((p) => (
        <WireBlock key={p.id} label={`Projects index — ${p.number} ${p.title}`} minHeight={140}>
          <ul>
            <li>[{p.category}]</li>
            <li>[Summary + brief / research / contribution / learnings]</li>
            <li>[Image + core focus]</li>
            <li>
              <Link to={`/projects/${p.slug}`}>[Read → /projects/{p.slug}]</Link>
            </li>
          </ul>
        </WireBlock>
      ))}
    </PageShell>
  );
}
