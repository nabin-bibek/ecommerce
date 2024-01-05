import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser,checkUser, signOut } from "./authAPI";

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);


export const checkUserAsync = createAsyncThunk("user/checkUser", async (loginInfo) => {
  const response = await checkUser(loginInfo);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.loggedInUser = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
        localStorage.setItem("token", action.payload.token);

      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
   
  },
});


export const { logOut } = userSlice.actions;

export const selectLoggedUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;
export default userSlice.reducer;
