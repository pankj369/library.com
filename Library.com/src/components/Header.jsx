import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Custom styles (optional)

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        {/* Website Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="logo.png" // Replace with dynamic import if needed
            alt="Success Library Logo"
            className="logo-img"
            style={{ height: "50px" }}
          />
        </Link>

        {/* Responsive Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary me-2" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary text-white" to="/register">
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
