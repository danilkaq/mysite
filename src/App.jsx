import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroStatsSection from './components/HeroStatsSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import ProjectsSection from './components/ProjectsSection';
import VisualizationSection from './components/VisualizationSection';
import EquipmentSection from './components/EquipmentSection';
import PackagesSection from './components/PackagesSection';
import ReviewsSection from './components/ReviewsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import './styles/app.css';

function App() {
  return (
    <MotionConfig reducedMotion="always">
      <div className="app-shell">
        <Header />
        <main>
          <HeroSection />
          <HeroStatsSection />
          <AboutSection />
          <WhyUsSection />
          <ProjectsSection />
          <VisualizationSection />
          <EquipmentSection />
          <PackagesSection />
          <ReviewsSection />
          <PartnersSection />
          <ContactSection />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
