import Hero from '../components/sections/Hero';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
