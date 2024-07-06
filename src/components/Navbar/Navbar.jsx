import React from 'react';
import "./Navbar.scss";
import MobileNav from '../MobileNav/MobileNav';
import { useState } from 'react';

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src="./assets/images/logo.png" alt="" />
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li> 
                    <li>
                        <a className='menu-item'>Work-Experience</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact</a>
                    </li>
                    <button className='contact-btn' onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>
                <button className='menu-btn' onClick={toggleMenu}>
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
}

export default Navbar;
