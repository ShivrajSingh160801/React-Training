import React from "react";
import "../css/certificate.css";

const Certificates = (props) => {
  return (
    <>
      <div className="row certificateRow">
        <div className="col-md-6 text-center pe-5 columnborder certificateColumn">
          <p className="fw-bold mt-5 certificate">
            {props.certificateinfo.certificate1}
          </p>
          <p className="fw-bold certificate">
          {props.certificateinfo.certificate2}
          </p>
          <p className="fw-bold certificate">{props.certificateinfo.certificate3}</p>
          <p className="fw-bold certificate">
          {props.certificateinfo.certificate4}
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center certificateHeading">
          <p>
          {props.certificateinfo.certificateTitle} <i className=" fa fa-award"></i>
          </p>
        </div>
      </div>
    </>
  );
};
export default Certificates;