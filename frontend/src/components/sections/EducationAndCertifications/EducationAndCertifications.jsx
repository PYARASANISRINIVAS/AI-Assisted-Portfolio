import "./EducationAndCertifications.css";
import { education } from "../../../data/education";
import { certifications } from "../../../data/certifications";

function EducationAndCertifications() {
  return (
    <section
      className="education-certifications"
      id="education"
    >
      <div className="education-certifications-container">

        {/* ================= EDUCATION ================= */}

        <div className="education-column">

          <p className="section-label">
            EDUCATION & JOURNEY
          </p>

          <h2>
            Building the{" "}
            <span>foundation.</span>
          </h2>


          <div className="education-timeline">

            {education.map((item, index) => (
              <div
                className="education-item"
                key={`${item.degree}-${item.year}`}
              >

                <div className="education-year">
                  {item.year}
                </div>

                <div className="education-line">
                  <span className="education-dot"></span>
                </div>

                <div className="education-details">

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


        {/* ================= CERTIFICATIONS ================= */}

        <div className="certifications-column">

          <p className="section-label">
            CERTIFICATIONS
          </p>

          <h2>
            Learning that{" "}
            <span>keeps moving.</span>
          </h2>


          <div className="certifications-list">

            {certifications.map((certificate, index) => (

              <article
                className="certificate-item"
                key={certificate.title}
              >

                <div className="certificate-top">

                  <span className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="certificate-year">
                    {certificate.year}
                  </span>

                </div>


                <h3>
                  {certificate.title}
                </h3>


                <p>
                  Given by{" "}
                  <strong>
                    {certificate.issuer}
                  </strong>
                </p>


                {certificate.credential ? (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify ↗
                  </a>
                ) : (
                  <span className="verification-unavailable">
                    Verification unavailable
                  </span>
                )}

              </article>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default EducationAndCertifications;