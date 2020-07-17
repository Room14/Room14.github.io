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
                to={REACTPATH.Weather}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="fas fa-cloud-sun mr-1"></i>
                Weather
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Notices}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="fas fa-newspaper mr-1"></i>
                FIS Notices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Newsletters}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="far fa-newspaper mr-1"></i>
                FIS Newsletters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Calendar}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="far fa-calendar-alt mr-1"></i>
                FIS Calendar
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={REACTPATH.Rm14newsletters}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="fas fa-paper-plane mr-1"></i>
                Room 14 Newsletters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={REACTPATH.Website}
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="fas fa-graduation-cap mr-1"></i>
                Room 14 Classwork
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="https://room14.github.io/login.html"
                className="nav-link"
                onClick={() => hideNavbar("")}
              >
                <i className="fas fa-sign-in-alt mr-1"></i>
                Room 14 Classwork
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPresent;
