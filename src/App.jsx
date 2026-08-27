import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DotNavigation from './components/DotNavigation';
import Section from './components/Section';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import AllProjects from './pages/AllProjects';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // If we are on a separate page (like /projects), we might not want the snap scrolling layout
  if (location.pathname === '/projects') {
    return (
      <div className="relative h-screen bg-[#050505] text-white overflow-y-auto">
        <Navbar />
        <Routes>
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    );
  }

  // Main landing page with snap scrolling
  return (
    <div className="relative">
      <Navbar />
      <DotNavigation activeSection={activeSection} />

      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[#050505] text-white">
        <Section id="home" onActive={setActiveSection} className="bg-black">
          <Home />
        </Section>

        <Section id="about" onActive={setActiveSection} className="bg-[#050505]">
          <About />
        </Section>

        <Section id="projects" onActive={setActiveSection} className="bg-[#050505]">
          <Projects />
        </Section>

        <Section id="skills" onActive={setActiveSection} className="bg-[#050505]">
          <Skills />
        </Section>

        <Section id="contact" onActive={setActiveSection} className="bg-[#050505]">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
