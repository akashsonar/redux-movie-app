import React from 'react';
import {useSelector} from 'react-redux';
import {getAllEpisode, getAllMovies, getAllShows} from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import Slider from 'react-slick';
import {Settings} from '../../common/settings';
import "./MovieListing.scss";

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const episode = useSelector(getAllEpisode);

    let renderMovies = "",
        renderShows = "",
        renderEpisode = "";

    renderMovies = movies.Response === "True"
        ? (movies.Search.map((movie, index) => (<MovieCard key={index} data={movie}/>)))
        : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows = shows.Response === "True"
        ? (shows.Search.map((movie, index) => (<MovieCard key={index} data={movie}/>)))
        : (
            <div className="movies-error">
                <h3>{shows.Error}</h3>
            </div>
        );

    renderEpisode = episode.Response === "True"
        ? (episode.Search.map((movie, index) => (<MovieCard key={index} data={movie}/>)))
        : (
            <div className="movies-error">
                <h3>{episode.Error}</h3>
            </div>
        );
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="show-list">
                <hr/>
                <h2>Series</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
            <div className="episode-list">
                <hr/>
                <h2>Episode</h2>
                <div className="movie-container">
                    <Slider {...Settings}>{renderEpisode}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;
