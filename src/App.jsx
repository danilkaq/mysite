import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
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
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <VisualizationSection />
        <EquipmentSection />
        <PackagesSection />
        <ReviewsSection />
        <PartnersSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
