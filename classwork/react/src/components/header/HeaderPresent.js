import React from "react";
import { NavLink, Link } from "react-router-dom";
import { REACTPATH, REDUXPATH } from "../../constants/config";

const hideNavbar = (action) => {
  document.getElementById("collapsibleNavbar").classList.remove("show");
};

const HeaderPresent = () => {
  return (
    <div className="container-fluid top-container header">
      <h1 className="text-center text-success">Room 14 FIS</h1>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <NavLink to="/" className="navbar-brand">
          <i className="fab fa-react mr-1"></i>
          Room 14
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Notices}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                FIS Notices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Newsletters}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                FIS Newsletters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Calendar}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                FIS Calendar
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={REACTPATH.Website}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                Room 14 Classwork
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPresent;
