import React from "react";
import logo from "../../src/pngwing.com.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg" style={{
      background: "radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(128,158,226,1) 100%)"
    }}>
      <div className="container-fluid ps-5">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Profile" width={200} height={50} />
        </NavLink>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-5">
              <NavLink
                exact
                to="/"
                className="nav-link fw-bold fst-italic"
                activeClassName="active"
              >
                Stock Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Customer"
                className="nav-link fw-bold fst-italic"
                activeClassName="active"
              >
                Customer Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
