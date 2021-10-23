import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { fetchUser } from "./authAPI";

const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.cca3,
});

export const authSlice = createSlice({
  name: "countries",
  initialState: countriesAdapter.getInitialState(),
  reducers: {},
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
