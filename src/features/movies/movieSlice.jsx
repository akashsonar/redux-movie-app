import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import movieApi from "../../common/api/movieApi";
import {APIKey} from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(term) => {
    const type = "movie";

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=${type}`);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async(term) => {
    const type = "series";

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=${type}`);
    return response.data;
});

export const fetchAsyncEpisode = createAsyncThunk('movies/fetchAsyncEpisode', async(term) => {
    const type = "episode";

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=${type}`);
    return response.data;
});

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetail', async(id) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    episode: {},
    description: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

        removeSelectedMovieOrShow: (state) => {
            state.description = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!!");
            return {
                ...state,
                movies: payload
            };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!!");
            return {
                ...state,
                shows: payload
            };
        },
        [fetchAsyncEpisode.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!!");
            return {
                ...state,
                episode: payload
            };
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!!");
            return {
                ...state,
                description: payload
            };
        }

    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllEpisode = (state) => state.movies.episode;
export const getAllDescription = (state) => state.movies.description;

export default movieSlice.reducer;
