import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./authAPI";

const initialState = {
  user: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  status: "idle",
};

export const login = createAsyncThunk(
  "auth/fetchUser",
  async ({ email, password, isLoggedIn }) => {
    const response = await fetchUser({ email, password, isLoggedIn });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
        email: "",
        password: "",
        isLoggedIn: false,
      };

      // remove user info if saved
      if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";

        state.user = { ...action.payload };
      });
  },
});

// select user state
export const selectUser = (state) => state.auth.user;

export const { logout } = authSlice.actions;
