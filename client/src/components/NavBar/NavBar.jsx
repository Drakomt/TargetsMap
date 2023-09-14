import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        TargetsMap
      </Link>
      <Link to="/info" className="nav-link-small">
        Info
      </Link>
    </nav>
  );
};

export default NavBar;
