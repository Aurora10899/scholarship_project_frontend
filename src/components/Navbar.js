import React from "react";
import "../css/Navbar.css";
import logo from "../images/favicon-32x32.png";

const Navbar = ({ activePage }) => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Unified Scholarship Portal</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">
            <button className={activePage === "Home" ? "nav-btn active" : "nav-btn"}>
              Home
            </button>
          </a>
        </li>
        <li>
          <a href="/nationalScholarship">
            <button className={activePage === "National" ? "nav-btn active" : "nav-btn"}>
              National
            </button>
          </a>
        </li>
        <li>
          <a href="/internationalScholarship">
            <button className={activePage === "International" ? "nav-btn active" : "nav-btn"}>
              International
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
