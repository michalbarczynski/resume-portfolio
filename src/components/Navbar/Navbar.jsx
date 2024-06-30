import React from 'react';
import "./Navbar.scss";


const Navbar = () => {
  return (
    <>
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
                <button className='menu-btn' onClick={() => {}}>
                  <i className="fas fa-bars" style={{ fontSize: "1.8rem" }}></i>
                </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
