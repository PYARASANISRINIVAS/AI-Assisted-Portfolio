import { Link } from "react-router-dom";
import "./AllProjects.css";
import { projects } from "../../data/projects";

function AllProjects() {
  return (
    <section className="all-projects">

      <div className="all-projects-container">

        {/* Header */}

        <div className="all-projects-header">

          <div>
            <p className="all-projects-label">
              PROJECTS
            </p>

            <h1>
              All the things I've <span>built.</span>
            </h1>

            <p>
              Explore my collection of machine learning,
              data science, and AI projects.
            </p>
          </div>

          <Link
            to="/"
            className="back-home"
          >
            ← Back home
          </Link>

        </div>


        {/* Projects */}

        <div className="all-projects-grid">

          {projects.map((project, index) => (

            <article
              className="all-project-card"
              key={project.title}
            >

              {/* Image */}

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


              {/* Content */}

              <div className="all-project-content">

                <div className="all-project-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <small>
                    AI / DATA
                  </small>

                </div>


                <h2>
                  {project.title}
                </h2>


                <h3>
                  {project.subtitle}
                </h3>


                <p>
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="all-project-technologies">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* Links */}

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
  );
}

export default AllProjects;