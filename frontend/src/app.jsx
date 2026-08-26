import { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/skills";
import Projects from "./components/sections/Projects/projects";
import EducationAndCertifications from "./components/sections/EducationAndCertifications/EducationAndCertifications";
import Contact from "./components/sections/Contact/Contact";

import ProjectDetails from "./components/sections/Projects/ProjectDetails";
import AllProjects from "./components/sections/Projects/AllProjects";

import AIChat from "./components/AIChat/AIChat";


/* =========================================
   HOME PAGE
========================================= */

function Home() {

  /*
    When the portfolio is opened,
    automatically move to About Me.
  */

  useEffect(() => {

    const timer = setTimeout(() => {

      const aboutSection =
        document.getElementById("about");

      if (aboutSection) {

        aboutSection.scrollIntoView({
          behavior: "instant",
          block: "start",
        });

      }

    }, 100);


    return () => {
      clearTimeout(timer);
    };

  }, []);


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


/* =========================================
   APP
========================================= */

function App() {

  return (
    <BrowserRouter>

      <Routes>


        {/* =================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={
            <Home />
          }
        />


        {/* =================================
            ALL PROJECTS
        ================================= */}

        <Route
          path="/projects"
          element={
            <>
              <Navbar />

              <AllProjects />
            </>
          }
        />


        {/* =================================
            PROJECT DETAILS
        ================================= */}

        <Route
          path="/projects/:projectId"
          element={
            <>
              <Navbar />

              <ProjectDetails />
            </>
          }
        />


      </Routes>


      {/* =====================================
          AI ASSISTANT

          Fixed at bottom-right
          and available on every page.
      ===================================== */}

      <AIChat />


    </BrowserRouter>
  );
}


export default App;