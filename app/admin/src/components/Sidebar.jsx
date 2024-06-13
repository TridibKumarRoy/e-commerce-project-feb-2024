import React from "react";
import { SIDEBAR_LINKS } from "../constant/path";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isActive = (path) => {
    
  console.log(pathname, path)
    return path === pathname;
  };

  return (
    <div class="sidebar" data-background-color="dark">
      <div class="sidebar-logo">
        <div class="logo-header" data-background-color="dark">
          <a href="index.html" class="logo">
            <img
              src="/assets/img/bhoom-logo.png"
              alt="navbar brand"
              class="navbar-brand"
              height="50"
            />
          </a>
          <div class="nav-toggle">
            <button class="btn btn-toggle toggle-sidebar">
              <i class="gg-menu-right"></i>
            </button>
            <button class="btn btn-toggle sidenav-toggler">
              <i class="gg-menu-left"></i>
            </button>
          </div>
          <button class="topbar-toggler more">
            <i class="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
          <ul class="nav nav-secondary">
            {SIDEBAR_LINKS?.map((item, i) => (
              <li key={i} class={`nav-item  ${isActive(item.path) ? "active" : ""}`}>
                <Link
                  to={item.path}
                >
                  <i class={item.icon}></i>
                  <p>{item?.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
