import type { ReactNode } from 'react';

/** Page scaffold: breadcrumb + title + intro + children sections. */
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
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 16px' }}>
      <p style={{ fontSize: 12, color: '#666' }}>[Breadcrumb] {breadcrumb}</p>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em' }}>
        [{eyebrow}]
      </p>
      <h1 style={{ fontSize: 40, margin: '8px 0 12px' }}>{title}</h1>
      {intro && <p style={{ color: '#444', maxWidth: 700 }}>{intro}</p>}
      <div style={{ marginTop: 32 }}>{children}</div>
    </div>
  );
}
