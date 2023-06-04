import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { InfoCards } from './components/InfoCards';

function App() {
  return (
    <>
      <div className='container-fluid' >
        <Header />
        <hr></hr>
        <InfoCards />
      </div>

    </>
  );
}

export default App;
