import { CoverSection } from '../components/fashion/CoverSection';

/**
 * Fashion portfolio plate — just the cover.
 *
 * It used to carry the about-me plate as a second section, which rendered at the
 * top of the home page while the real About Me section sat four sections further
 * down. That plate has moved to the home page, directly above the real About Me
 * section, so this is one full-screen section rather than two.
 */
export function FashionPortfolioPage() {
  return (
    <div data-wireframe="FashionPortfolioPage">
      <CoverSection />
    </div>
  );
}
