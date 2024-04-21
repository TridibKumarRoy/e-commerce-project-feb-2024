import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { AuthContext, useAuth } from '../../../store/store';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);



  const { removeTokenAndCookie } = useAuth(); //! Destructure removeTokenAndCookie from the useAuth hook
  //* Define a function to handle logout
  const handleLogout = () => {
    //* Call setToken with null to clear the token and log the user out
    removeTokenAndCookie(); //! Destructure removeTokenAndCookie from the useAuth hook
  };

  const { isloggedIn } = useAuth();
  // console.log(isloggedIn);

  //!getting user data
  const { user, token } = useAuth();
  // console.log('user data : ', user);

  // console.log(token);

  //!getting user data end

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <div className="navbar-logo">
          <img src=".\logo.png" alt="Logo" />
        </div></a>

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


          {isloggedIn ? (
            <>
              <button onClick={handleLogout} className="loginregister">Logout</button>
              <a href="#">
                <img src="./profile.png" alt="profile" className="profile" />
                <span className="username-b-p">{user.name}</span>
              </a>
            </>

          ) : (

            <a href="/login" className="loginregister">
              Login/SignUp
            </a>

          )}




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

// export default Header