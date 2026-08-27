import { Link } from "react-router-dom";
import "./AllProjects.css";
import { projects } from "../../../data/projects";

function AllProjects() {
  return (
    <main className="all-projects-page">

      {/* =================================
          HEADER
      ================================= */}

      <section className="all-projects-header">

        <div className="all-projects-container">

          <Link
            to="/#projects"
            className="back-to-projects"
          >
            ← Back to Projects
          </Link>


          <p className="all-projects-label">
            PROJECTS
          </p>


          <h1>
            Things I've{" "}
            <span>built.</span>
          </h1>


          <p className="all-projects-description">
            A collection of machine learning,
            data science, and AI applications
            built through hands-on work.
          </p>

        </div>

      </section>


      {/* =================================
          PROJECT LIST
      ================================= */}

      <section className="all-projects-list">

        <div className="all-projects-container">

          <div className="all-projects-grid">

            {projects.map((project, index) => (

              <article
                className="all-project-card"
                key={project.slug || project.title}
              >

                {/* =================================
                    CLICKABLE PROJECT AREA
                ================================= */}

                <Link
                  to={`/projects/${project.slug}`}
                  className="all-project-card-link"
                >

                  {/* IMAGE */}

                  <div className="all-project-image">

                    {project.image ? (

                      <img
                        src={project.image}
                        alt={project.title}
                      />

                    ) : (

                      <div className="all-project-placeholder">
                        {project.title}
                      </div>

                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="all-project-content">

                    {/* TOP */}

                    <div className="all-project-top">

                      <span className="all-project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="all-project-category">
                        AI / DATA
                      </span>

                    </div>


                    {/* TITLE */}

                    <h2>
                      {project.title}
                    </h2>


                    {/* SUBTITLE */}

                    {project.subtitle && (
                      <p className="all-project-subtitle">
                        {project.subtitle}
                      </p>
                    )}


                    {/* DESCRIPTION */}

                    <p className="all-project-description">
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    {project.technologies?.length > 0 && (

                      <div className="all-project-technologies">

                        {project.technologies.map(
                          (technology) => (

                            <span
                              key={technology}
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                    )}

                  </div>

                </Link>


                {/* =================================
                    EXTERNAL LINKS
                ================================= */}

                <div className="all-project-footer">

                  <div className="all-project-links">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}


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

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default AllProjects;