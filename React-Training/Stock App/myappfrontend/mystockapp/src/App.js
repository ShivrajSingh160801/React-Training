import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import StockPage from './components/StockPage'
import Customer from './components/Customer'

function App() {
  return (
    <>
      <div className='container-fluid'>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<StockPage></StockPage>}></Route>
            <Route path='/Customer' element={<Customer></Customer>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
