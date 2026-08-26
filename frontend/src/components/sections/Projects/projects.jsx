import { useState } from "react";
import "./Projects.css";
import { projects } from "../../../data/projects";

function Projects() {
  // Number of projects displayed at one time
  const visibleCount = 3;

  const [startIndex, setStartIndex] = useState(0);

  // Last possible starting position
  const maxStartIndex = Math.max(
    0,
    projects.length - visibleCount
  );

  // Move one project forward
  const nextProjects = () => {
    setStartIndex((current) =>
      Math.min(current + 1, maxStartIndex)
    );
  };

  // Move one project backward
  const previousProjects = () => {
    setStartIndex((current) =>
      Math.max(current - 1, 0)
    );
  };

  // Projects currently visible
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="projects" id="projects">

      <div className="container">

        {/* =========================
            PROJECT HEADER
        ========================== */}

        <div className="projects-header">

          <div className="projects-heading">

            <p className="projects-label">
              PROJECTS
            </p>

            <h2>
              Things I've <span>built.</span>
            </h2>

            <p className="projects-description">
              A collection of machine learning, data science,
              and AI applications built through hands-on work.
            </p>

          </div>


          {/* View all projects */}

          {projects.length > visibleCount && (
            <a
              href="/projects"
              className="view-all-projects"
            >
              <span>View all projects</span>
              <strong>→</strong>
            </a>
          )}

        </div>


        {/* =========================
            PROJECT CAROUSEL
        ========================== */}

        <div className="projects-carousel">

          {/* LEFT ARROW */}

          <button
            className="project-arrow"
            onClick={previousProjects}
            disabled={startIndex === 0}
            aria-label="Previous projects"
          >
            ←
          </button>


          {/* PROJECT CARDS */}

          <div className="projects-track">

            {visibleProjects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* =====================
                    IMAGE
                ====================== */}

                <div className="project-image">

                  {project.image ? (

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                  ) : (

                    <div className="project-placeholder">
                      {project.title}
                    </div>

                  )}

                </div>


                {/* =====================
                    CONTENT
                ====================== */}

                <div className="project-content">

                  {/* Top row */}

                  <div className="project-top">

                    <span className="project-number">
                      {String(
                        startIndex + index + 1
                      ).padStart(2, "0")}
                    </span>

                    <span className="project-category">
                      AI / DATA
                    </span>

                  </div>


                  {/* Title */}

                  <h3>
                    {project.title}
                  </h3>


                  {/* Subtitle */}

                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>


                  {/* Description */}

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* =====================
                      TECHNOLOGIES
                  ====================== */}

                  <div className="project-technologies">

                    {project.technologies
                      .slice(0, 5)
                      .map((technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      ))}

                  </div>


                  {/* =====================
                      LINKS
                  ====================== */}

                  <div className="project-footer">

                    <div className="project-links">

                      {/* GitHub */}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}


                      {/* Live */}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live ↗
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            className="project-arrow"
            onClick={nextProjects}
            disabled={
              startIndex === maxStartIndex
            }
            aria-label="Next projects"
          >
            →
          </button>

        </div>


        {/* =========================
            DOTS
        ========================== */}

        {projects.length > visibleCount && (

          <div className="project-dots">

            {Array.from({
              length: maxStartIndex + 1,
            }).map((_, index) => (

              <button
                key={index}
                className={
                  index === startIndex
                    ? "project-dot active"
                    : "project-dot"
                }
                onClick={() =>
                  setStartIndex(index)
                }
                aria-label={`Show project group ${
                  index + 1
                }`}
              />

            ))}

          </div>

        )}



      </div>

    </section>
  );
}

export default Projects;