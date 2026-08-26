import "./Education.css";
import { education } from "../../../data/education";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-container">

        {/* Section Heading */}
        <div className="education-heading">

          <p className="education-label">
            EDUCATION & JOURNEY
          </p>

          <h2>
            Building the{" "}
            <span>foundation.</span>
          </h2>

        </div>


        {/* Timeline */}
        <div className="education-timeline">

          {education.map((item, index) => (

            <div
              className="education-item"
              key={`${item.degree}-${item.year}`}
            >

              {/* Left side year */}
              <div className="education-year">
                {item.year}
              </div>


              {/* Center line + dot */}
              <div className="education-line">

                <span className="education-dot"></span>

              </div>


              {/* Right content */}
              <div className="education-details">

                <span className="education-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p className="education-location">
                  {item.location}
                </p>

                {item.result && (
                  <span className="education-result">
                    {item.result}
                  </span>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;