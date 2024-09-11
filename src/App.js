import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CartPage from './Components/Cart';
import { useState } from 'react';

function App() {
  // const [cart,setCart]=useState([])
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
       {/* <Route path='/'  exact element={<Home cart={cart} setCart={setCart}/>}/> */}
       <Route path='/'  exact element={<Home />}/>
        
      
       {/* <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/> */}
       <Route path='/cart' element={<CartPage />}/>
     
      
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
