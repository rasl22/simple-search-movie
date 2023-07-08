import imdb from "../img/header/imdb.svg";

function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    return (
        <div key={imdbID} className="card">
            <img className="card-img" src={Poster} alt="Card img" />
            <div className="card-body">
                <span className="card-movie-year"> USA, {Year}</span>
                <p className="card-movie-name">{Title}</p>
                <span className="card-movie-imdb">IMDb</span>
                <span className="card-movie-score">86.0 / 100</span>
                <img className="img-apple" src={imdb} alt="img-imdb" />
                <span className="card-movie-precent">97%</span> <br />
                <span className="genre">{Type}</span>
            </div>
        </div>
    );
}

export default Movie;
