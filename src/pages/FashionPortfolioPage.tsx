import { CoverSection } from '../components/fashion/CoverSection';
import { WhyMeSection } from '../components/fashion/WhyMeSection';

/**
 * Fashion portfolio plate — mirrors lavanaya FashionPortfolioPage:
 * exactly two stacked full-screen sections (wireframe).
 */
export function FashionPortfolioPage() {
  return (
    <div data-wireframe="FashionPortfolioPage">
      <CoverSection />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
        <WhyMeSection />
      </div>
    </div>
  );
}
