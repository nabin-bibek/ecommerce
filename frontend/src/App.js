import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import PageNotFound from "./pages/404Page";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchUserInfoAsync, selectUserInfo } from "./features/user/userSlice";
import LogOut from "./features/auth/components/LogOut";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectLoggedUser);
  useEffect(() => {
    dispatch(fetchItemsByUserIdAsync());
    dispatch(fetchUserInfoAsync());
  }, [navigate ]);
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
        <Route
          path="/order-success/:id"
          element={
            <Protected>
              <OrderSuccessPage />
            </Protected>
          }
        />
        <Route
          path="/user-orders"
          element={
            <Protected>
              <UserOrdersPage />
            </Protected>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Protected>
              <UserProfilePage />
            </Protected>
          }
        />
        <Route
          path="/logout"
          element={
              <LogOut />
          }
        />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminHome />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/product-detail/:id"
          element={
            <ProtectedAdmin>
              <AdminProductDetailPage />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/product-form"
          element={
            <ProtectedAdmin>
              <AdminProductFormPage />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedAdmin>
              <AdminOrdersPage />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/product-form/edit/:id"
          element={
            <ProtectedAdmin>
              <AdminProductFormPage />
            </ProtectedAdmin>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
