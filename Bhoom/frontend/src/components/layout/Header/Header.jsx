import React, { useState } from "react";
import "./navbar.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src=".\logo.png" alt="Logo" />
      </div>

      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <input type="text" placeholder="Search" />
        <div className="nav-menu">
          <div className="navbar-dropdown">
            <button onClick={toggleMenu2}>Store&#9662;</button>
            <div className="dropdown-content">
              <a href="#">Products</a>
              <a href="#">Services</a>
              <a href="#">Become seller</a>
            </div>
          </div>
          {/* <a href="#">Store</a>
                    <a href="#">Services</a> */}
          <a href="#">Community</a>
        </div>

        <div className="navbar-auth">
          <a href="#" className="cart">
            &#x1F6D2;
          </a>
          <a href="#" className="loginregister">
            Login/SignUp
          </a>
          <a href="#">
            <img src="./profile.png" alt="profile" className="profile" />
          </a>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Header