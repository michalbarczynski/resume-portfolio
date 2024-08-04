import React, { useState } from "react";
import "./Navbar.scss";
import MobileNav from "../MobileNav/MobileNav";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id, offset = 0) => {
    setOpenMenu(false);
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src={logo}
            alt="Logo"
          />
          <ul>
            <li>
              <a
                className="menu-item"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home", -100);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills", -150);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#work-experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("work-experience", -150);
                }}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact", -150);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <i className="fas fa-times" style={{ fontSize: "1.8rem" }}></i>
            ) : (
              <i className="fas fa-bars" style={{ fontSize: "1.8rem" }}></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
