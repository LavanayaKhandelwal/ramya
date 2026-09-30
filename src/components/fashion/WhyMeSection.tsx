import { WireBlock } from '../WireBlock';

/** Mirrors lavanaya WhyMeSection — about-me plate (wireframe). */
export function WhyMeSection() {
  return (
    <section data-wireframe="FashionPortfolio.WhyMeSection">
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
