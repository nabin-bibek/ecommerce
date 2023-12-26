import React from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import ProductDetailsPage from './pages/ProductDetailsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/product-detail" element={<ProductDetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
