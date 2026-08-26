import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about-content">

                {/* Right Image */}
          <div className="about-image">
            <img
              src="/images/profile/about.png"
              alt="Pyarasani Srinivas"
            />
          </div>



          {/* Left Content */}
          <div className="about-text">

            <p className="about-label">ABOUT ME</p>

            <h2>
              The journey from
              <br />
              <span>data to intelligence.</span>
            </h2>

            <p className="about-intro">
              I’m Pyarasani Srinivas, a Computer Science graduate
              passionate about Data Science, Artificial Intelligence,
              and building practical technology solutions.
            </p>

            <div className="about-highlights">

              <div className="about-highlight">
                <span className="highlight-number">01</span>

                <div>
                  <h3>Data & Analytics</h3>
                  <p>
                    Exploring data, discovering patterns, and turning
                    information into meaningful insights.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">02</span>

                <div>
                  <h3>AI & Machine Learning</h3>
                  <p>
                    Building and experimenting with machine learning
                    models and intelligent applications.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="highlight-number">03</span>

                <div>
                  <h3>Building & Learning</h3>
                  <p>
                    Continuously learning new technologies and turning
                    ideas into practical solutions.
                  </p>
                </div>
              </div>

            </div>

          </div>

      
        </div>

      </div>
    </section>
  );
}

export default About;