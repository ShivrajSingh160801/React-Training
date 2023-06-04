import React from "react";
import '../css/experience.css'

const Experience = (props) => {
    return ( <>
     <div className='row'>
        <div className='col-md-6 d-flex align-items-center justify-content-center expHeading'>
         <p>{props.experienceinfo.experienceHeading} <i className="fa fa-briefcase"></i></p> 
        </div>
        <div className='col-md-6 ps-5 text-center columnBorder'>
          <p className='fw-bold exptitle'>{props.experienceinfo.experienceTitle1} <i class="fa fa-trophy"></i></p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description1}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description2}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description3}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description4}</p>
          <p className='fw-bold exptitle'>{props.experienceinfo.experienceTitle2} <i class="fa fa-bullseye"></i></p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description1}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description2}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description3}</p>
          <p className='fst-italic'>{props.experienceinfo.experienceTitle1Description4}</p>
        </div>
      </div>
    </>)
}

export default Experience;