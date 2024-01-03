import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchOrdersOfUser } from './userAPI';

const initialState = {
  userOrders: [],
  status: 'idle',
};

export const fetchOrdersOfUserAsync = createAsyncThunk(
  "user/fetchOrdersOfUser",
  async (id) => {
    const response = await fetchOrdersOfUser(id);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersOfUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrdersOfUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrders = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectUserOrders = (state) => state.user.userOrders;
export default counterSlice.reducer;
