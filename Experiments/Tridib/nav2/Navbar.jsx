import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
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
                <img src="\logo.ico" alt="Logo" />
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>

                    <input type="text" placeholder="Search" className='navsearch' />
                 {/* <div className="nav-manu"> */}
                    <a href="#">Store</a>
                    <a href="#">Services</a>
                    <a href="#">Community</a>
                    <div className="navbar-dropdown">
                        <button onClick={toggleMenu2}>Dropdown</button>
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                {/* </div> */}
                    </div>

                <div className="navbar-auth">
                    <a href="#" className='loginregister'>Login/SignUp</a>
                    <a href="#">Account</a>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
