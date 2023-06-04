import React from "react";
import '../css/objective.css'

const objective = (props) => {
    return (
        <>
        <div className='row text-center'>
          <p className='fst-italic fw-lighter objectiveHeading'>
            {props.objectInfo.objectiveHeading}
          </p>
        </div>
        <div className='row text-center fw-bolder'>
          <p className='fst-italic text-muted objectiveDescription'>
           {props.objectInfo.description}
          </p>
        </div>
        </>
    )
}

export default objective;