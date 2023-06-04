import React from "react";
import logo from "../pngwing.com.png";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-expand-lg"
        style={{
          background:
            "radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(128,158,226,1) 100%)",
        }}
      >
        <div className="container-fluid ps-5">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Profile" width={200} height={50} />
          </a>
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link
                  className="nav-link fw-bold fst-italic active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold fst-italic "
                  aria-current="page"
                  to="/User"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fst-italic" to="/Posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fst-italic" to="/Comments">
                  Comments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fst-italic" to="/Photos">
                  Photos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fst-italic" to="/Albums">
                  Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fst-italic" to="/ToDOs">
                  ToDos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
