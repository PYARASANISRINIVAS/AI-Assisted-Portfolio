import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/skills";
import Projects from "./components/sections/Projects/projects";
import EducationAndCertifications  from "./components/sections/EducationAndCertifications/EducationAndCertifications";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationAndCertifications />
      <Contact />
    </>
  );
}

export default App;