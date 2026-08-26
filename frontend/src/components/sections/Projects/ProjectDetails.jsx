import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import { projects } from "../../../data/projects";


/* =========================================
   CREATE SLUG FROM PROJECT TITLE
========================================= */

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};


/* =========================================
   PROJECT DETAILS
========================================= */

function ProjectDetails() {
  const { projectId } = useParams();


  /* =========================================
     FIND PROJECT
  ========================================== */

  const projectIndex = projects.findIndex(
    (project) =>
      (project.slug || createSlug(project.title)) ===
      projectId
  );


  const project = projects[projectIndex];


  /* =========================================
     PROJECT NOT FOUND
  ========================================== */

  if (!project) {
    return (
      <main className="project-details-page">

        <div className="project-details-container project-not-found">

          <Link
            to="/projects"
            className="project-back-link"
          >
            ← Back to Projects
          </Link>


          <p className="details-label">
            ERROR 404
          </p>


          <h1>
            Project not found.
          </h1>


          <p>
            The project you're looking for
            doesn't exist.
          </p>

        </div>

      </main>
    );
  }


  /* =========================================
     CURRENT PROJECT SLUG
  ========================================== */

  const currentSlug =
    project.slug || createSlug(project.title);


  /* =========================================
     PREVIOUS PROJECT
  ========================================== */

  const previousProject =
    projectIndex > 0
      ? projects[projectIndex - 1]
      : null;


  /* =========================================
     NEXT PROJECT
  ========================================== */

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;


  return (
    <main className="project-details-page">


      {/* =====================================
          HEADER
      ===================================== */}

      <section className="project-details-header">

        <div className="project-details-container">


          {/* BACK */}

          <Link
            to="/projects"
            className="project-back-link"
          >
            ← Back to Projects
          </Link>


          {/* META */}

          <div className="project-details-meta">

            <span>
              {String(projectIndex + 1).padStart(2, "0")}
            </span>

            <span>
              AI / DATA
            </span>

          </div>


          {/* TITLE */}

          <h1>
            {project.title}
          </h1>


          {/* SUBTITLE */}

          {project.subtitle && (
            <p className="project-details-subtitle">
              {project.subtitle}
            </p>
          )}

        </div>

      </section>



      {/* =====================================
          MAIN PROJECT
      ===================================== */}

      <section className="project-details-main">

        <div className="project-details-container">


          {/* =================================
              PROJECT IMAGE
          ================================= */}

          {project.image && (

            <div className="project-details-image">

              <img
                src={project.image}
                alt={`${project.title} project`}
              />

            </div>

          )}


          {/* =================================
              PROJECT CONTENT
          ================================= */}

          <div className="project-details-content">


            {/* =================================
                LEFT STORY
            ================================= */}

            <div className="project-details-story">


              {/* OVERVIEW */}

              <section className="details-section">

                <p className="details-label">
                  OVERVIEW
                </p>

                <h2>
                  About the project
                </h2>

                <p>
                  {project.description}
                </p>

                {project.longDescription && (
                  <p>
                    {project.longDescription}
                  </p>
                )}

              </section>



              {/* OBJECTIVE */}

              {project.objective && (

                <section className="details-section">

                  <p className="details-label">
                    OBJECTIVE
                  </p>

                  <h2>
                    What I wanted to solve
                  </h2>

                  <p>
                    {project.objective}
                  </p>

                </section>

              )}



              {/* FEATURES */}

              {project.features?.length > 0 && (

                <section className="details-section">

                  <p className="details-label">
                    KEY FEATURES
                  </p>

                  <h2>
                    What it does
                  </h2>


                  <div className="project-features">

                    {project.features.map(
                      (feature, index) => (

                        <div
                          className="project-feature"
                          key={index}
                        >

                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p>
                            {feature}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </section>

              )}



              {/* CHALLENGES */}

              {project.challenges && (

                <section className="details-section">

                  <p className="details-label">
                    CHALLENGES & LEARNING
                  </p>

                  <h2>
                    What I learned
                  </h2>

                  <p>
                    {project.challenges}
                  </p>

                </section>

              )}



              {/* =================================
                  OPTIONAL EXTRA INFORMATION
              ================================= */}

              {project.results && (

                <section className="details-section">

                  <p className="details-label">
                    RESULTS
                  </p>

                  <h2>
                    Outcome
                  </h2>

                  <p>
                    {project.results}
                  </p>

                </section>

              )}

            </div>



            {/* =================================
                RIGHT SIDEBAR
            ================================= */}

            <aside className="project-details-sidebar">


              {/* TECHNOLOGIES */}

              <div className="details-sidebar-block">

                <p className="details-label">
                  TECHNOLOGIES
                </p>


                <div className="details-technologies">

                  {project.technologies?.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>



              {/* PROJECT TYPE */}

              <div className="details-sidebar-block">

                <p className="details-label">
                  PROJECT TYPE
                </p>

                <p className="details-sidebar-text">
                  Machine Learning / AI
                </p>

              </div>



              {/* STATUS */}

              <div className="details-sidebar-block">

                <p className="details-label">
                  STATUS
                </p>

                <p className="details-sidebar-text">
                  Completed
                </p>

              </div>



              {/* LINKS */}

              <div className="details-sidebar-block">

                <p className="details-label">
                  PROJECT LINKS
                </p>


                <div className="details-links">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  )}


                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                  )}

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>



      {/* =====================================
          PREVIOUS / NEXT PROJECTS
      ===================================== */}

      <section className="project-details-navigation">

        <div className="project-details-container">

          <div className="project-navigation-inner">


            {/* PREVIOUS */}

            {previousProject ? (

              <Link
                to={`/projects/${
                  previousProject.slug ||
                  createSlug(previousProject.title)
                }`}
                className="project-navigation-link"
              >

                <span>
                  ← Previous
                </span>

                <strong>
                  {previousProject.title}
                </strong>

              </Link>

            ) : (

              <span />

            )}



            {/* NEXT */}

            {nextProject ? (

              <Link
                to={`/projects/${
                  nextProject.slug ||
                  createSlug(nextProject.title)
                }`}
                className="project-navigation-link next"
              >

                <span>
                  Next →
                </span>

                <strong>
                  {nextProject.title}
                </strong>

              </Link>

            ) : (

              <span />

            )}

          </div>

        </div>

      </section>



      {/* =====================================
          CURRENT PROJECT INFO
      ===================================== */}

      <div
        className="project-details-current"
        data-project={currentSlug}
      />

    </main>
  );
}

export default ProjectDetails;