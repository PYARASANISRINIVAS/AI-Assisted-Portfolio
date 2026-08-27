import { useEffect, useState } from "react";
import "./Navbar.css";
import { navbarLinks } from "../../../data/profile";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================
     CLOSE MOBILE MENU ON SCROLL
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [menuOpen]);


  /* =========================================
     HANDLE NAVIGATION
  ========================================== */

  const handleNavigation = (event, link) => {

    /*
      External links such as Resume
      should work normally.
    */

    if (link.external) {
      setMenuOpen(false);
      return;
    }


    /*
      Internal section navigation
    */

    event.preventDefault();


    const targetId =
      link.path.replace("#", "");


    const target =
      document.getElementById(targetId);


    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }


    /* Close mobile menu */

    setMenuOpen(false);
  };


  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container navbar-container">


        {/* =================================
            LOGO
        ================================= */}

        <a
          className="navbar-brand navbar-logo"
          href="#home"
          onClick={(event) =>
            handleNavigation(event, {
              path: "#home",
              external: false,
            })
          }
        >

          <img
            src="/images/profile/logo.png"
            alt="Pyarasani Srinivas"
          />

        </a>


        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          className={`navbar-toggler ${
            menuOpen ? "menu-open" : ""
          }`}
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-controls="portfolioNavbar"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        {/* =================================
            NAVIGATION
        ================================= */}

        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
          id="portfolioNavbar"
        >

          <div className="navbar-nav ms-auto">

            {navbarLinks.map((link) => (

              <a
                key={link.name}
                href={link.path}
                className="nav-link"

                target={
                  link.external
                    ? "_blank"
                    : undefined
                }

                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }

                onClick={(event) =>
                  handleNavigation(
                    event,
                    link
                  )
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