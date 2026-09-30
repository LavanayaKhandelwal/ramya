import { WireBlock } from '../WireBlock';

/** Mirrors lavanaya CoverSection — full-screen cover plate (wireframe). */
export function CoverSection() {
  return (
    <section data-wireframe="FashionPortfolio.CoverSection">
      <WireBlock label="Cover — full-screen hero" minHeight={300}>
        <ul>
          <li>[Background image — full bleed]</li>
          <li>[Masthead — "Portfolio" wordmark]</li>
          <li>[Byline — name left / year right]</li>
          <li>[Qualification strip — bottom edge]</li>
        </ul>
      </WireBlock>
    </section>
  );
}
