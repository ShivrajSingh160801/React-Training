import logo from './logo.svg';
import './App.css';
import FormProduct from './components/form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<FormProduct></FormProduct>}></Route>
            <Route path='/Table' element={<Table></Table>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
