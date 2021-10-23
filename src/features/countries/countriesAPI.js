import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/all",
    }),
    getCountry: builder.query({
      query: (code) => `/alpha/${code}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryQuery } = countriesApi;
