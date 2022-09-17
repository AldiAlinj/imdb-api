import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async(parameters) => {
        const url = `https://imdb-api.com/API/AdvancedSearch/k_q5l4s2fc?groups=top_250&count=250&release_date=${parameters.year}&genres=${parameters.genre}&user_rating=${parameters.rating}`
        console.log(url);
        const response = await axios.get(url)

        return response.data
    }
)


const initialState = {
    movies: {},
    loading: true,
    film: {}
}



const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchAsyncMovies.pending] : () => {
            console.log('Movies Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('Movies fetched');
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log('Movies Rejected');
        },

    }
})


export const getMovies = (state) => state.movies.movies
export default movieSlice.reducer