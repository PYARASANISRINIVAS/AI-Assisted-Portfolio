import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">

          {/* Left side */}
          <div className="hero-text">
            <p className="hero-label">AI ENGINEER</p>

            <h2>
                TURNING DATA INTO INTELLIGENCE WITH AI AND INNOVATION

            </h2>

          </div>

          {/* Right side */}
          <div className="hero-image">
            <img
              src="/images/hero/datascience.png"
              alt="Data Science Life Cycle"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;