import React from 'react';

interface SectionImageProps {
  /** Optional real asset path. When absent a styled placeholder is rendered. */
  src?: string;
  /** Alt text / placeholder label describing the intended photograph. */
  alt: string;
  /** Extra class names applied to the wrapper. */
  className?: string;
  /** Placeholder tint (CSS colour). Defaults to a warm neutral. */
  tint?: string;
}

/**
 * Renders a photographic asset, or a clean labelled placeholder when the
 * intended photograph has not yet been supplied. Keeps every image a separate,
 * individually replaceable element per the prompt specs.
 */
export function SectionImage({ src, alt, className = '', tint }: SectionImageProps) {
  if (src) {
    return <img src={src} alt={alt} className={`section-img ${className}`.trim()} loading="lazy" draggable={false} />;
  }
  return (
    <div
      className={`section-img section-img--placeholder ${className}`.trim()}
      role="img"
      aria-label={alt}
      style={tint ? { background: tint } : undefined}
    >
      <span className="section-img__label">{alt}</span>
    </div>
  );
}
