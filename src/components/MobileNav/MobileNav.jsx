import React from "react";
import "./MobileNav.scss";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work-Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
