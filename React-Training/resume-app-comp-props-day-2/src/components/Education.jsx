import React from "react";
import "../css/education.css";

const education = (props) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 d-flex align-items-center justify-content-center eduHeading">
          <p>
            {props.eduinfo.eduheading} <i class="fa fa-book"></i>
          </p>
        </div>
        <div className="col-md-6 ps-5 leftColumn">
          <p className="fw-bold degree">
            {props.eduinfo.degree1} <i class="fa fa-graduation-cap"></i>
          </p>
          <p className="fst-italic">{props.eduinfo.degree1_college}</p>
          <p className="fw-bold degree">
            {props.eduinfo.degree2} <i class="fa fa-graduation-cap"></i>
          </p>
          <p className="fst-italic">{props.eduinfo.degree2_college}</p>
          <p className="fw-bold degree">
            {props.eduinfo.degree3} <i class="fa fa-graduation-cap"></i>
          </p>
          <p className="fst-italic">{props.eduinfo.degree3_college}</p>
        </div>
      </div>
    </>
  );
};

export default education;
