import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import { InfoCards } from './components/User';
import { Post } from './components/Post';
import { Photos } from './components/Images';
import { Comments } from './components/Comments';
import { Albums } from './components/Albums';
import { ToDOs } from './components/ToDOs';
import Home from './components/Homepage'

function App() {
  return (
    <>
    <div className='container-fluid'>
  
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Posts' element={<Post></Post>}></Route>
          <Route path='/User' element={<InfoCards></InfoCards>}></Route>
          <Route path='/Photos' element={<Photos></Photos>}></Route>
          <Route path='/Comments' element={<Comments></Comments>}></Route>
          <Route path='/Albums' element={<Albums></Albums>}></Route>
          <Route path='/ToDOs' element={<ToDOs></ToDOs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
