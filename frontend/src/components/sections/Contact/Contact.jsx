import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Remove error as user corrects the field
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setStatus("");
  };


  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  };


  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("");
      return;
    }

    /*
      Form is valid.

      We will connect this to an email
      service in the next step.
    */

    setErrors({});

    setStatus(
      "Your message is ready to be sent."
    );
  };


  return (
    <section
      className="contact"
      id="contact"
    >

      <div className="contact-container">

        {/* =================================
            LEFT SIDE
        ================================= */}

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
            I'm always open to discussing new
            opportunities, interesting projects,
            collaborations, and ideas around AI,
            Data Science, and technology.
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


        {/* =================================
            RIGHT SIDE
        ================================= */}

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


          {/* =================================
              FORM
          ================================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* NAME + EMAIL */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={
                    errors.name
                      ? "input-error"
                      : ""
                  }
                />

                {errors.name && (
                  <span className="form-error">
                    {errors.name}
                  </span>
                )}

              </div>


              <div className="form-group">

                <label htmlFor="contact-email">
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={
                    errors.email
                      ? "input-error"
                      : ""
                  }
                />

                {errors.email && (
                  <span className="form-error">
                    {errors.email}
                  </span>
                )}

              </div>

            </div>


            {/* SUBJECT */}

            <div className="form-group">

              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={
                  errors.subject
                    ? "input-error"
                    : ""
                }
              />

              {errors.subject && (
                <span className="form-error">
                  {errors.subject}
                </span>
              )}

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about it..."
                className={
                  errors.message
                    ? "input-error"
                    : ""
                }
              ></textarea>

              {errors.message && (
                <span className="form-error">
                  {errors.message}
                </span>
              )}

            </div>


            {/* STATUS */}

            {status && (
              <div className="form-success">
                {status}
              </div>
            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="send-button"
            >
              Send Message

              <span>
                ↗
              </span>

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;