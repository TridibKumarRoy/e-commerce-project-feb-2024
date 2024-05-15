import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constant/path";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../utils/axios";

const Navbar = () => {
  const { pathname } = window.location;
  const [activePath, setActivePath] = useState(pathname);
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    setUser(null);
    window.localStorage.removeItem("token");
    axiosInstance.defaults.headers.common["Authorization"] = "";
  };
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                  {!user ? (
                    <>
                      {" "}
                      <li className="nav-item">
                        <Link className="nav-link login-button" to="/login">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link text-white add-button"
                          to="/register"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <button
                        onClick={handleLogout}
                        style={{ border: "none", outline: "none" }}
                        className="nav-link add-button"
                      >
                        Logout
                      </button>
                    </li>
                  )}
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
