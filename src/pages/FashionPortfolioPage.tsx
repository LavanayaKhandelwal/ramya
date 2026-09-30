import { CoverSection } from '../components/fashion/CoverSection';

/**
 * Fashion portfolio plate — just the cover.
 *
 * It used to carry a 3-column about-me plate as a second section. That plate is
 * gone; the navy About Me section on the home page is the about block now, and
 * this is one full-screen section rather than two.
 */
export function FashionPortfolioPage() {
  return (
    <div data-wireframe="FashionPortfolioPage">
      <CoverSection />
    </div>
  );
}
