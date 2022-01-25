import React, {useState} from 'react';
import "./Header.scss";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {fetchAsyncEpisode, fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice';

export default function Header() {
    const [term,
        setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") {
            return alert("Search text is EMPTY, Please enter something!!");
        }
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        dispatch(fetchAsyncEpisode(term));
        setTerm("");

    }
    return (
        <div className="header">

            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search your fevourite Movies, Series or Episodes"
                        onChange={(e) => setTerm(e.target.value)}/>
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src="/assets/user.png" alt="user"/>
            </div>
        </div>
    );
}
