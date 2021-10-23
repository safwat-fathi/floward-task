import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { countriesApi } from "../features/countries/countriesAPI";

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
