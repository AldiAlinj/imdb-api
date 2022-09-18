import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (parameters) => {
    const url = `https://imdb-api.com/API/AdvancedSearch/k_q5l4s2fc?groups=top_250&count=250&release_date=${parameters.startDate},${parameters.endDate}&genres=${parameters.genre},&user_rating=${parameters.minRating},${parameters.maxRating}&title=${parameters.title}`;
    console.log(url);
    const response = await axios.get(url);

    return response.data;
  }
);

const initialState = {
  movies: {},
  loading: true,
  film: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      console.log("Movies Pending");
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Movies fetched");
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Movies Rejected");
    },
  },
});

export const getMovies = (state) => state.movies.movies;
export const getLoading = (state) => state.movies.loading;
export default movieSlice.reducer;
