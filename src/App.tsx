import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { AboutPage } from './pages/AboutPage';
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
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';

/**
 * Routes mirror lavanaya/src/App.tsx 1:1 — structure only, no design.
 * Home (/) = FashionPortfolio plate + Home sections, like the original.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsOverviewPage />} />
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}
