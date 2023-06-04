
import React from 'react';
import logo from './logo.svg';
import './App.css';
import profile from "./profile 2.jpg";

function App() {
  return (
    <div className="container-fluid">
      <section>
        <div
          className="row"
          style={{
            background: "linear-gradient(143deg, rgb(3 133 216 / 66%) 13%, rgb(216 12 241 / 8%) 56%, rgb(255 226 0 / 39%) 82%)",
          }}
        >
          <div className="col-md-3 ms-3 mt-3 mb-3 d-flex justify-content-center">
            <img src={profile} className="rounded-circle" alt="Profile" width={250} height={210} />
          </div>
          <div className="col-md-8 text-center me-3 mt-3">
            <p
              className="fw-bold fst-italic"
              style={{
                fontSize: "45px",
              }}
            >
              Simba
            </p>
            <hr style={{ opacity: 5 }}></hr>
            <div className="row">
              <div className="col-md-4" style={{ fontSize: "18px" }}>
                <p className="font-monospace">
                  Address : <p className="fst-italic fw-light">Pride Rock, Savanna Kingdom</p>
                </p>
              </div>
              <div className="col-md-4" style={{ fontSize: "18px" }}>
                <p className="font-monospace">
                  Phone : <p className="fst-italic fw-light"> +1-123-456-7890</p>
                </p>
              </div>
              <div className="col-md-4" style={{ fontSize: "18px" }}>
                <p className="font-monospace">
                  Email: <p className="fst-italic fw-light"> lion@roar.com</p>
                </p>
              </div>
            </div>
            <hr></hr>
            <div className='row d-flex justify-content-center'>
           
           <p><i className="fab fa-linkedin me-3" style={{fontSize : "35px"}}></i><i className="fab fa-facebook" style={{fontSize : "35px"}}></i></p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-3 mx-5' style={{background : "linear-gradient(143deg, rgb(113 188 236 / 15%) 13%, rgb(12 188 241 / 61%) 56%, rgba(255, 226, 0, 0.65) 82%);"}}>
        <div className='row text-center'>
          <p className='fst-italic fw-lighter' style={{ fontSize: "35px" }}>
            Objective :-
          </p>
        </div>
        <div className='row text-center '>
          <p className='fst-italic text-muted' style={{ fontSize: "25px" }}>
            Highly motivated and skilled lion seeking a challenging position that utilizes my natural leadership abilities, strong hunting instincts, and exceptional communication skills. Eager to contribute to a dynamic organization where my strength, agility, and strategic thinking can make a significant impact.
          </p>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6 d-flex align-items-center justify-content-center' style={{ color: "#173b6c", fontSize: "40px" }}>
            <p >Education <i class="fa fa-book"></i></p> 
          </div>
          <div className='col-md-6 ps-5' style={{ borderLeft: '2px solid', height: '250px' }}>
            <p className='fw-bold' style={{ fontSize: "20px" }}> Master of Science in Wildlife Management <i class="fa fa-graduation-cap"></i></p>
            <p className='fst-italic'> Sunderban University | West Bengal </p>
            <p className='fw-bold' style={{ fontSize: "20px" }}> Master of Wildlife Ecology <i class="fa fa-graduation-cap"></i></p>
            <p className='fst-italic'>Wilderness University | Savanna Kingdom</p>
            <p className='fw-bold' style={{ fontSize: "20px" }}> Bachelor of Science in Animal Behavior <i class="fa fa-graduation-cap"></i></p>
            <p className='fst-italic'>Sunderban University | West Bengal  </p>
          </div>
        </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-6 text-center pe-5' style={{ borderRight: '2px solid', height: '300px' }}>
          <p className='fw-bold' style={{ fontSize: "20px" }}>Leadership <i className="fa fa-crown"></i></p>
          <p className='fst-italic'> Extensive experience leading and managing a pride, ensuring effective coordination, delegation, and decision-making.</p>
          <p className='fw-bold' style={{ fontSize: "20px" }}>Adaptability <i className="fa fa-cogs"></i></p>
          <p className='fst-italic'>Highly adaptable to changing environments and able to handle various challenges. Comfortable in both grasslands and forested areas.</p>
          <p className='fw-bold' style={{ fontSize: "20px" }}> Territory Management <i className="fa fa-users"></i></p>
          <p className='fst-italic'>Expert in marking, defending, and patrolling territories to ensure the safety and well-being of the pride. Skilled in boundary enforcement.</p>
        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center' style={{ color: "#173b6c", fontSize: "40px" }}>
           <p>Skills <i className='fa fa-puzzle-piece'></i></p>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-6 d-flex align-items-center justify-content-center' style={{ color: "#173b6c", fontSize: "40px" }}>
         <p>Professional Experience <i className="fa fa-briefcase"></i></p> 
        </div>
        <div className='col-md-6 ps-5 text-center' style={{ borderLeft: '2px solid', height: '450px' }}>
          <p className='fw-bold' style={{ fontSize: "20px" }}> Pride Leader | Conqueror Pride | Gir Forest <i class="fa fa-trophy"></i></p>
          <p className='fst-italic'> Led a pride of 20 members, ensuring unity and effective decision-making.  </p>
          <p className='fst-italic'>Successfully coordinated hunting efforts, resulting in a high success rate and ample food supply. </p>
          <p className='fst-italic'> Maintained pride hierarchy and resolved conflicts within the group.</p>
          <p className='fst-italic'> Defended and protected the pride's territory from external threats, including rival prides and predators.</p>
          <p className='fw-bold' style={{ fontSize: "20px" }}>Senior Hunter | Kaziranga Forest <i class="fa fa-bullseye"></i></p>

          <p className='fst-italic'>Developed and executed hunting strategies for various prey species, ensuring the pride's sustenance.</p>
          <p className='fst-italic'>Mentored younger lions, passing on hunting techniques and survival skills.</p>
          <p className='fst-italic'>Adapted to different environments and prey behaviors, optimizing success rates.</p>
          <p className='fst-italic'>Collaborated with other pride members to maximize hunting efficiency.</p>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-6 text-center pe-5' style={{ borderRight: '2px solid', height: '300px' }}>
          <p className='fw-bold mt-5 certificate' style={{ fontSize: "20px" }}>Advanced Leadership in the Wild</p>
          <p className='fw-bold certificate' style={{ fontSize: "20px" }}>Effective Communication in the Animal Kingdom</p>
          <p className='fw-bold certificate' style={{ fontSize: "20px" }}>Tactical Hunting Techniques</p>
          <p className='fw-bold certificate' style={{ fontSize: "20px" }}>Wildlife Conservation and Ecosystem Preservation</p>
        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center' style={{ color: "#173b6c", fontSize: "40px" }}>
        <p>Certifications <i className=" fa fa-award"></i></p>  
        </div>
      </div>
      <hr></hr>
      </section>
    </div>
  );
}

export default App;