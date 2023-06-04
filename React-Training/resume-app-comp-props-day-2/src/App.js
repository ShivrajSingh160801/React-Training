import logo from './logo.svg';
import './css/App.css';
import {ProfileInfo} from './props/headerProps'
import Header from './components/Header'
import { objective } from './props/objectiveProps';
import { education } from './props/educationProps';
import { skills } from './props/skillProps';
import { experience } from './props/experienceProps';
import { certificate } from './props/certificateProps';
import Objective from './components/Objective'
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificate';

function App() {
  return (
<>
<Header personalInfo={ProfileInfo}/>
<section>
<Objective objectInfo={objective}/>
<hr></hr>
<Education eduinfo={education}/>
<hr></hr>
<Skills skillinfo={skills}/>
<hr></hr>
<Experience experienceinfo = {experience}/>
<hr></hr>
<Certificates certificateinfo = {certificate}/>
<hr></hr>
</section>
</>
  );
}

export default App;
