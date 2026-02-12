
import { useState } from 'react';
import Navbar from './components/Navbar';
import DotNavigation from './components/DotNavigation';
import Section from './components/Section';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative">
      <Navbar />
      <DotNavigation activeSection={activeSection} />

      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black text-white">
        <Section id="home" onActive={setActiveSection} className="bg-transparent">
          <Home />
        </Section>

        <Section id="about" onActive={setActiveSection} className="bg-zinc-900">
          <About />
        </Section>

        <Section id="projects" onActive={setActiveSection} className="bg-zinc-800">
          <Projects />
        </Section>

        <Section id="skills" onActive={setActiveSection} className="bg-zinc-700">
          <Skills />
        </Section>

        <Section id="contact" onActive={setActiveSection} className="bg-zinc-600">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
