import './App.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={< Home />}/>
                    <Route path="/movie/:imdbID" element={< MovieDetail />}/>
                    <Route element={< PageNotFound />}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}