import React from "react";
import "../css/skill.css";

const Skills = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 text-center pe-5 columnBorder">
          <p className="fw-bold skill">
            {props.skillinfo.skill1} <i className="fa fa-crown"></i>
          </p>
          <p className="fst-italic">{props.skillinfo.skill1_description}</p>
          <p className="fw-bold skill">
            {props.skillinfo.skill2} <i className="fa fa-cogs"></i>
          </p>
          <p className="fst-italic">{props.skillinfo.skill2_description}</p>
          <p className="fw-bold skill">
            {props.skillinfo.skill3} <i className="fa fa-users"></i>
          </p>
          <p className="fst-italic">{props.skillinfo.skill3_description}</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center skillHeading">
          <p>
            {props.skillinfo.skillheading}{" "}
            <i className="fa fa-puzzle-piece"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;


