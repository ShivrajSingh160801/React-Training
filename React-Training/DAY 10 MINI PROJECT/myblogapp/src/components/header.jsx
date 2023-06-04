import React from "react";
import logo from "../../src/pngwing.com.png";
import { Link } from "react-router-dom";
import MyDrawer from "./drawer";
import TableDrawer from "./tabledrawer";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-expand-lg"
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
                <MyDrawer></MyDrawer>
              </li>
              <li className="nav-item ps-2">
                <TableDrawer></TableDrawer>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
