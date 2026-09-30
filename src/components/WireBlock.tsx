import type { ReactNode } from 'react';

/**
 * Wireframe block — a labelled placeholder box.
 * Every section on every page uses this so the structure
 * is visible before designs arrive.
 *
 * The border and ground are written as `var(--wire-border, #999)` and
 * `var(--wire-ground, #fafafa)` rather than as flat colours. Both are set inline,
 * and an inline style outranks any stylesheet, so this is the one way motion.css
 * can shift them on hover without an `!important` — see `.wire-block:hover`
 * there. The fallbacks are the values that were here before, so the block is
 * unchanged when no stylesheet is involved.
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
      className="wire-block"
      style={{
        border: '2px dashed var(--wire-border, #999)',
        borderRadius: 8,
        padding: 16,
        minHeight,
        marginBottom: 16,
        background: 'var(--wire-ground, #fafafa)',
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
