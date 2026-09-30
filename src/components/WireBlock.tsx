import type { ReactNode } from 'react';

/**
 * Wireframe block — a labelled placeholder box.
 * Every section on every page uses this so the structure
 * is visible before designs arrive.
 */
export function WireBlock({
  label,
  children,
  minHeight = 120,
}: {
  label: string;
  children?: ReactNode;
  minHeight?: number;
}) {
  return (
    <div
      data-wireframe={label}
      style={{
        border: '2px dashed #999',
        borderRadius: 8,
        padding: 16,
        minHeight,
        marginBottom: 16,
        background: '#fafafa',
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: 8,
        }}
      >
        [{label}]
      </div>
      {children ?? <p style={{ color: '#999' }}>Placeholder content</p>}
    </div>
  );
}
