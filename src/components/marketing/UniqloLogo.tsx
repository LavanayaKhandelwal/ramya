import React from 'react';

/** UNIQLO red square wordmark — stacked white uppercase letters. */
export function UniqloLogo({ size = 54 }: { size?: number }) {
  return (
    <span
      className="uniqlo-logo"
      style={{ width: size, height: size }}
      aria-label="UNIQLO"
      role="img"
    >
      <span>UNI</span>
      <span>QLO</span>
    </span>
  );
}
