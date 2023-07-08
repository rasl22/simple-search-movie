import Movie from "./Movie";

function Movies(props) {
    const { movies } = props;
    // const movies = props.movies;
    return (
        <div className="movies">
            {movies.map((movie) => (
                <Movie
                    key={movie.imdbID}
                    // {...movie}
                    Title={movie.Title}
                    Year={movie.Year}
                    Type={movie.Type}
                    Poster={movie.Poster}
                />
            ))}
        </div>
    );
}

export default Movies;
