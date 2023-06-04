import React from "react";
import profile from "../images/profile 2.jpg";
import "../css/header.css";

const Header = (props) => {
  return (
    <>
      <section>
        <div className="row headerRow">
          <div className="col-md-3 ms-3 mt-3 mb-3 d-flex justify-content-center">
            <img
              src={profile}
              className="rounded-circle"
              alt="Profile"
              width={250}
              height={210}
            />
          </div>
          <div className="col-md-8 text-center me-3 mt-3">
            <p
              className="fw-bold fst-italic Name"
            >
              Simba
            </p>
            <hr className="headerHorizontalLine"></hr>
            <div className="row">
              <div className="col-md-4 address">
                <p className="font-monospace">
                  Address :
                  <p className="fw-light">{props.personalInfo.address}</p>
                </p>
              </div>
              <div className="col-md-4 phone">
                <p className="font-monospace">
                  Phone :<p className="fw-light">{props.personalInfo.phone}</p>
                </p>
              </div>
              <div className="col-md-4 email">
                <p className="font-monospace">
                  Email :<p className="fw-light">{props.personalInfo.email}</p>
                </p>
              </div>
            </div>
            <hr></hr>
            <div className="row d-flex justify-content-center">
              <p>
                <i className="fab fa-linkedin me-3 headerIcon"></i>
                <i className="fab fa-facebook headerIcon"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
