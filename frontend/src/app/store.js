import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product/productSlice';
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice"
import orderReducer from "../features/order/orderSlice"
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
    user: userReducer,
  },
});
