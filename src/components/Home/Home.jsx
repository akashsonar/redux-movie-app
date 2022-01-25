import React, {useEffect} from 'react';
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from 'react-redux';
import {fetchAsyncEpisode, fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice';

export default function Home() {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showsText = "Friends";
    const episodeText = "Felina";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showsText));
        dispatch(fetchAsyncEpisode(episodeText));

    }, [dispatch]);

    return (
        <div>
            <div className="banner-img">
                <MovieListing/>
            </div>
        </div>
    );
}
