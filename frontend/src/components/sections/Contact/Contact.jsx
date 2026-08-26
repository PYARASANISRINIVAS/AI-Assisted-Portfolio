import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-intro">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something{" "}
            <span>meaningful.</span>
          </h2>

          <div className="contact-line"></div>

          <p className="contact-description">
            I'm always open to discussing new opportunities,
            interesting projects, collaborations, and ideas
            around AI, Data Science, and technology.
          </p>


          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <div className="contact-detail">
              <span className="contact-detail-label">
                EMAIL
              </span>

              <a href="mailto:your-email@gmail.com">
                your-email@gmail.com
              </a>
            </div>


            <div className="contact-detail">
              <span className="contact-detail-label">
                LOCATION
              </span>

              <p>
                Hyderabad, Telangana, India
              </p>
            </div>


            <div className="contact-detail">
              <span className="contact-detail-label">
                AVAILABILITY
              </span>

              <p>
                Open to Opportunities
              </p>
            </div>

          </div>


          {/* BUTTONS */}
          <div className="contact-buttons">

            <a
              href="mailto:your-email@gmail.com"
              className="contact-button primary"
            >
              Email Me
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button secondary"
            >
              LinkedIn
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-message">

          <div className="message-header">

            <span className="message-icon">
              ↗
            </span>

            <div>
              <h3>
                Send a Message
              </h3>

              <p>
                Have an idea or opportunity?
              </p>
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-row">

              <div className="form-group">
                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>


              <div className="form-group">
                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>


            <div className="form-group">
              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="What would you like to discuss?"
              />
            </div>


            <div className="form-group">
              <label>
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell me a little about it..."
              ></textarea>
            </div>


            <button
              type="submit"
              className="send-button"
            >
              Send Message
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;