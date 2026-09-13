import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { portfolioData } from './data/portfolioData.js';
import Experience from './components/Experience.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link visually-hidden-focusable" href="#main-content">
        Skip to main content
      </a>

      <Header siteName={portfolioData.siteName} navigation={portfolioData.navigation} />

      <main id="main-content">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
          <Experience data={portfolioData.experienceSection} experiences={portfolioData.experience}/>
        <Projects data={portfolioData.projectsSection} projects={portfolioData.projects} />
        <Skills data={portfolioData.skillsSection} groups={portfolioData.skillGroups} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer siteName={portfolioData.siteName} />
    </>
  );
}
