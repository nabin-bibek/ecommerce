import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/auth/components/Protected";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { selectLoggedUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
   const user = useSelector(selectLoggedUser);
   
  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/cart"
          element={
            <Protected>
              <CartPage />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckOut />
            </Protected>
          }
        />

        <Route
          path="/product-detail/:id"
          element={
            <Protected>
              <ProductDetailsPage />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
