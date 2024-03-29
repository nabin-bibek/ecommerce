import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchOrdersOfUser, updateUser, fetchUserInfo, signOut } from "./userAPI";

const initialState = {
  userOrders: [],
  status: 'idle',
  userInfo: null,
};

export const fetchOrdersOfUserAsync = createAsyncThunk(
  "user/fetchOrdersOfUser",
  async (id) => {
    const response = await fetchOrdersOfUser(id);
    return response.data;
  }
);
export const fetchUserInfoAsync = createAsyncThunk("user/fetchUserInfo", async (id) => {
  const response = await fetchUserInfo(id);
  return response.data;
});
export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);
export const signOutAsync = createAsyncThunk("user/signOut", async () => {
  const response = await signOut();
  return response.data;
});
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.userInfo = null;

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
      })
      .addCase(fetchUserInfoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserInfoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(signOutAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = null;
        localStorage.removeItem("token");
      });
   
  },
});


export const selectUserOrders = (state) => state.user.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;

export default counterSlice.reducer;
