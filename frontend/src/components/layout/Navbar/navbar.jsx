import "./Navbar.css";
import { navbarLinks } from "../../../data/profile";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-container">

        {/* Logo */}
        <a className="navbar-brand navbar-logo" href="#home">
          <img
            src="/images/profile/logo.png"
            alt="Pyarasani Srinivas"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="portfolioNavbar"
        >
          <div className="navbar-nav ms-auto">
            {navbarLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="nav-link"
                target={link.external ? "_blank" : undefined}
                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;