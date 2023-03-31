import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar${showLinks ? " show-links" : ""}`}>
      <Link to="/" className="navbar-logo">
        DreamScapeAI
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/dream-analysis">Dream Analysis</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
      <div className="menu-icon" onClick={toggleLinks}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
