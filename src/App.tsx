import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RevealOnScroll } from './components/RevealOnScroll';
import { ScrollToTop } from './components/ScrollToTop';
import { BringingConceptToLifeSlide } from './pages/BringingConceptToLifeSlide';
import { ContactPage } from './pages/ContactPage';
import { FashionPortfolioPage } from './pages/FashionPortfolioPage';
import { HomePage } from './pages/HomePage';
import { InternshipExperiencePage } from './pages/InternshipExperiencePage';
import { InternshipLearningsPage } from './pages/InternshipLearningsPage';
import { MakingIdeaRealSlide } from './pages/MakingIdeaRealSlide';
import { MappingOpportunitySlide } from './pages/MappingOpportunitySlide';
import { ProjectFourPage } from './pages/ProjectFourPage';
import { ProjectMarketingPage } from './pages/ProjectMarketingPage';
import { ProjectThreePage } from './pages/ProjectThreePage';
import { ProjectVisualMerchandisingPage } from './pages/ProjectVisualMerchandisingPage';

/**
 * Routes mirror lavanaya/src/App.tsx 1:1 — structure only, no design.
 * Home (/) = FashionPortfolio plate + Home sections, like the original.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealOnScroll />
      {/* The header and footer are gone site-wide, so this column is just the
          page box: main still grows to fill it, which keeps the flex:1 below
          meaningful on a short route like the 404 wireframe. */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FashionPortfolioPage />
                  <HomePage />
                </>
              }
            />
            {/* No /projects route: the project index is a section of the home page,
                reached as /#projects. The four project pages below still exist. */}
            <Route path="/internship/experience" element={<InternshipExperiencePage />} />
            <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
            <Route path="/projects/marketing" element={<ProjectMarketingPage />} />
            <Route
              path="/projects/marketing/mapping-opportunity"
              element={<MappingOpportunitySlide />}
            />
            <Route
              path="/projects/marketing/bringing-concept-to-life"
              element={<BringingConceptToLifeSlide />}
            />
            <Route path="/projects/marketing/making-idea-real" element={<MakingIdeaRealSlide />} />
            <Route
              path="/projects/visual-merchandising"
              element={<ProjectVisualMerchandisingPage />}
            />
            <Route path="/projects/project-3" element={<ProjectThreePage />} />
            <Route path="/projects/project-4" element={<ProjectFourPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fashion-portfolio" element={<FashionPortfolioPage />} />
            <Route path="*" element={<div style={{ padding: 48 }}>[404 — wireframe]</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
