import React from 'react';
import { project3Image } from '../../data/artwork';

const P3_BG = project3Image('3A'); // Project 3 hero bg (also exported for context)

/**
 * Project 3 — Section 01: "BEYOND THE FLORAL" hero.
 * Text overlay on the Cover Story × Future Florals installation image from public/Project 3.
 */
export function FutureFloralsHero() {
  return (
    <section className="px3-hero" aria-label="Project 3 — Beyond the Floral">
      <img
        className="px3-hero__bg"
        src={P3_BG}
        alt="Cover Story × Future Florals retail installation with a floral-dressed mannequin and iridescent sculptural flowers"
        draggable={false}
      />
      <div className="px3-hero__content">
        <h1 className="px3-hero__headline">
          <span className="px3-hero__beyond">Beyond</span>
          <span className="px3-hero__floral">The Floral</span>
        </h1>
        <p className="px3-hero__label">Cover Story &times; Future Florals</p>
        <span className="px3-hero__divider" aria-hidden="true" />
        <p className="px3-hero__statement">
          Familiar florals.
          <br />
          A new perspective.
        </p>
        <p className="px3-hero__desc">
          Exploring how florals can evolve through light, material and form to create a fresh,
          contemporary in-store experience for Cover Story.
        </p>
        <ul className="px3-hero__meta">
          <li>Spring / Summer</li>
          <li>Florals Reimagined</li>
          <li>Contemporary</li>
        </ul>
      </div>
    </section>
  );
}

export { P3_BG };
