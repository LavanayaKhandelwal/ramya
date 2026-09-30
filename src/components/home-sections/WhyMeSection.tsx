import { WireBlock } from '../WireBlock';

/**
 * About-me plate — 3 columns (wireframe).
 *
 * Mirrors lavanaya WhyMeSection. It was mounted on the fashion portfolio plate,
 * which put it at the top of the home page while the real About Me section sat
 * four sections further down — two about blocks, far apart, reading as unrelated.
 * It is a home section now, sitting directly above the real About Me section, so
 * the two read as one run of copy: who she is, then how the page is dressed.
 */
export function WhyMeSection() {
  return (
    <section data-wireframe="Home.WhyMeSection">
      <WireBlock label="About-me plate — 3 columns" minHeight={220}>
        <ul>
          <li>[Col 1 — About / journey copy]</li>
          <li>[Col 2 — Portrait image]</li>
          <li>[Col 3 — Education / interests / exploring]</li>
        </ul>
      </WireBlock>
    </section>
  );
}
