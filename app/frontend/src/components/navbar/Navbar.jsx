import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constant/path";

const Navbar = () => {
  const { pathname } = window.location;
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light navigation">
              <Link className="navbar-brand" to="/">
                <img src="/images/bhoom-logo.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto main-nav ">
                  {NAV_LINKS.map((item, i) => (
                    <li
                    onClick={() => setActivePath(item.path)}
                      key={i}
                      className={`nav-item ${
                        activePath === item.path ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <Link className="nav-link login-button" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white add-button"
                      href="ad-listing.html"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
