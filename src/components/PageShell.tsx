import type { ReactNode } from 'react';

/**
 * Page scaffold: breadcrumb + title + intro + children sections.
 *
 * The four pieces of chrome carry class names so the reveal can reach them.
 * They are the only part of a case study or internship page that has no class
 * of its own, and without them the page head arrives instantly while everything
 * below it eases in — which reads as a loading glitch rather than a page.
 */
export function PageShell({
  breadcrumb,
  eyebrow,
  title,
  intro,
  children,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="page-shell"
      style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}
    >
      <p className="page-breadcrumb" style={{ fontSize: 12, color: '#666' }}>
        [Breadcrumb] {breadcrumb}
      </p>
      <p
        className="page-eyebrow"
        style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em' }}
      >
        [{eyebrow}]
      </p>
      <h1 className="page-title" style={{ fontSize: 40, margin: '8px 0 12px' }}>
        {title}
      </h1>
      {intro && (
        <p className="page-intro" style={{ color: '#444', maxWidth: 700 }}>
          {intro}
        </p>
      )}
      <div className="page-body" style={{ marginTop: 32 }}>
        {children}
      </div>
    </div>
  );
}
