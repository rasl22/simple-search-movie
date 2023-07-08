import React from "react";
import Movies from "../components/Movies";
import Header from "./Header";

import "./Header.css";

class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=553a09f2&s=john wick")
            .then((res) => res.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=553a09f2&s=${str}`)
            .then((res) => res.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        return (
            <div>
                <Header searchMovie={this.searchMovies} />
                <div className="container">
                    {/* <div className="selec-movies">
                        <input type="radio" id="all" name="type-movie" value="all" />
                        <label for="all">All</label>
                        <input type="radio" id="movies" name="type-movie" value="movies" />
                        <label for="movies">Movies only</label>
                        <input type="radio" id="series" name="type-movie" value="series" />
                        <label for="series">Series</label>
                    </div> */}
                    <div className="movie-header">
                        <h1 className="movie-header-title">Featured Movie</h1>
                        <span className="movie-header-seemore">See more</span>
                    </div>
                    <Movies movies={this.state.movies} />;
                </div>
            </div>
        );
    }
}

export default Main;
