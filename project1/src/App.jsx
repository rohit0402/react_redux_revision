import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useState } from 'react';
import ProductContext from './Context/UserContext';
import Cart from './Components/Cart';


export default function App() {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  return (
    <ProductContext.Provider value={{products,setProducts,cart,setCart}}>
    <Router>
      <Navbar  setProducts={setProducts}/>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/cart' element={<Cart  />}/>
      </Routes>
    </Router>
    </ProductContext.Provider>
  )
}
