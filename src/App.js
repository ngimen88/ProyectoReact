import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Gallery from './routes/galeria/Gallery';
import Cart from './routes/cart/Cart';
import { CartProvider } from './routes/cart/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/galeria" element={<Gallery />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;





