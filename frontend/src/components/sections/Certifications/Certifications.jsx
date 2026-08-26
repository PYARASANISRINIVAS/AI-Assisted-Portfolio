import "./Certifications.css";
import { certifications } from "../../../data/certifications";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        {/* Section Header */}
        <div className="certifications-header">

          <div className="certifications-title">
            <p className="certifications-label">
              CERTIFICATIONS
            </p>

            <h2>
              Learning that{" "}
              <span>keeps moving.</span>
            </h2>
          </div>

          <p className="certifications-intro">
            Certifications and credentials that reflect
            continuous learning and technical growth.
          </p>

        </div>


        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((certificate, index) => (
            <article
              className="certification-card"
              key={certificate.title}
            >

              <div className="certification-card-top">

                <span className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="certification-year">
                  {certificate.year}
                </span>

              </div>


              <h3>
                {certificate.title}
              </h3>


              <p className="certification-issuer">
                Given by{" "}
                <strong>
                  {certificate.issuer}
                </strong>
              </p>


              <div className="certification-footer">

                {certificate.credential ? (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    Verify ↗
                  </a>
                ) : (
                  <span className="verify-link disabled">
                    Verification unavailable
                  </span>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;