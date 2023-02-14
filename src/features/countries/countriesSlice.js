import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  searchByName,
  searchByRegion,
} from "./countriesAction";

const initialState = {
  loading: false,
  countries: [],
  country: [],
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;

      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.countries = [];
        state.error = true;
        state.message = action.payload;
      })
      .addCase(searchByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.loading = false;
        state.country = action.payload;
        state.success = true;
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.country = "";
        state.message = action.payload;
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.success = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.countries = [];
        state.message = action.payload;
      });
  },
});

export const { reset, searchCountryByName } = countriesSlice.actions;

export default countriesSlice.reducer;
