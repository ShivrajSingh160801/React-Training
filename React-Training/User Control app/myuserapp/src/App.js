import logo from './logo.svg';
import './App.css';
import SignInForm from './components/signInform';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Homepage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/home" element={<Navbar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
