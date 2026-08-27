import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { projects } from "../../../data/projects";

function Projects() {
  const visibleCount = 3;

  const [startIndex, setStartIndex] = useState(0);

  /*
    If there are fewer than 3 projects,
    just show all of them.
  */
  const hasCarousel = projects.length > visibleCount;

  /*
    Move forward
  */
  const nextProjects = () => {
    if (!hasCarousel) return;

    setStartIndex((current) => {
      if (current >= projects.length - visibleCount) {
        return 0;
      }

      return current + 1;
    });
  };

  /*
    Move backward
  */
  const previousProjects = () => {
    if (!hasCarousel) return;

    setStartIndex((current) => {
      if (current <= 0) {
        return projects.length - visibleCount;
      }

      return current - 1;
    });
  };

  /*
    Projects currently visible
  */
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + visibleCount
  );

  /*
    If we reach the end,
    keep 3 cards visible.
  */
  const displayedProjects =
    visibleProjects.length === visibleCount
      ? visibleProjects
      : [
          ...visibleProjects,
          ...projects.slice(
            0,
            visibleCount - visibleProjects.length
          ),
        ];

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="projects-header">

          <div className="projects-heading">

            <p className="projects-label">
              PROJECTS
            </p>

            <h2>
              Things I've{" "}
              <span>built.</span>
            </h2>

            <p className="projects-description">
              A collection of machine learning,
              data science, and AI applications
              built through hands-on work.
            </p>

          </div>


          {/* =================================
              VIEW ALL PROJECTS
          ================================= */}

          {projects.length > visibleCount && (
            <Link
              to="/projects"
              className="view-all-projects"
            >
              <span>
                View all projects
              </span>

              <strong>
                →
              </strong>
            </Link>
          )}

        </div>


        {/* =================================
            CAROUSEL
        ================================= */}

        <div className="projects-carousel">

          {/* PREVIOUS */}

          {hasCarousel && (
            <button
              type="button"
              className="project-arrow"
              onClick={previousProjects}
              aria-label="Previous projects"
            >
              ←
            </button>
          )}


          {/* =================================
              PROJECT CARDS
          ================================= */}

          <div className="projects-track">

            {displayedProjects.map(
              (project, index) => (

                <article
                  className="project-card"
                  key={`${project.title}-${index}`}
                >

                  {/* =================================
                      CLICKABLE PROJECT AREA
                  ================================= */}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-card-link"
                  >

                    {/* IMAGE */}

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


                    {/* CONTENT */}

                    <div className="project-content">

                      {/* TOP */}

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


                      {/* TITLE */}

                      <h3>
                        {project.title}
                      </h3>


                      {/* SUBTITLE */}

                      {project.subtitle && (
                        <p className="project-subtitle">
                          {project.subtitle}
                        </p>
                      )}


                      {/* DESCRIPTION */}

                      <p className="project-description">
                        {project.description}
                      </p>


                      {/* TECHNOLOGIES */}

                      {project.technologies?.length > 0 && (
                        <div className="project-technologies">

                          {project.technologies
                            .slice(0, 5)
                            .map((technology) => (
                              <span
                                key={technology}
                              >
                                {technology}
                              </span>
                            ))}

                        </div>
                      )}

                    </div>

                  </Link>


                  {/* =================================
                      PROJECT LINKS
                  ================================= */}

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

                </article>

              )
            )}

          </div>


          {/* NEXT */}

          {hasCarousel && (
            <button
              type="button"
              className="project-arrow"
              onClick={nextProjects}
              aria-label="Next projects"
            >
              →
            </button>
          )}

        </div>


        {/* =================================
            DOTS
        ================================= */}

        {hasCarousel && (
          <div className="project-dots">

            {projects.map((_, index) => (
              <button
                type="button"
                key={index}
                className={
                  index === startIndex
                    ? "project-dot active"
                    : "project-dot"
                }
                onClick={() =>
                  setStartIndex(
                    Math.min(
                      index,
                      projects.length - visibleCount
                    )
                  )
                }
                aria-label={`Show project ${
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