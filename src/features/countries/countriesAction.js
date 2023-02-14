import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// show all countries
export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      //   console.log(response.data);
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data.message) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// search by cioc code
export const searchByName = createAsyncThunk(
  "countries/searchByName",
  async (code, thunkAPI) => {
    try {
      //   const response = await axios.get(
      //     `https://restcountries.com/v3.1/name/${name}`
      //   );

      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data.message) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// search by region
export const searchByRegion = createAsyncThunk(
  "countries/searchByRegion",
  async (region, thunkAPI) => {
    try {
      //   const response = await axios.get(
      //     `https://restcountries.com/v3.1/name/${name}`
      //   );

      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data.message) || err.message;

      // rejectWithValue sends the error message as a payload
      return thunkAPI.rejectWithValue(message);
    }
  }
);
