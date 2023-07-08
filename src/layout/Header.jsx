import React from "react";

import logo from "../img/header/logo.svg";
import srcIcon from "../img/header/searc-icon.svg";
import menu from "../img/header/Menu.svg";
import imdb from "../img/header/imdb.svg";
import slide1 from "../img/header/header-slider-1.svg";
import play from "../img/header/Play.svg";

import "./Header.css";

class Header extends React.Component {
    state = {
        search: "",
        type: 'all'

    };

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovie(this.state.search);
        }
    };

    render() {
        return (
            <div className="header-section">
                <div
                    className="slides"
                    style={{ backgroundImage: `url(${slide1})` }}>
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo-wrapper">
                                <a href="!#" className="logo-link">
                                    <img src={logo} alt="logo-img" />
                                    <h3 className="logo-name">MovieBox</h3>
                                </a>
                            </div>
                            <div className="src-box">
                                <input
                                    type="Search"
                                    placeholder="What do you want to watch?"
                                    className="src-input"
                                    value={this.state.search}
                                    onChange={(e) =>
                                        this.setState({
                                            search: e.target.value,
                                        })
                                    }
                                    onKeyDown={this.handleKey}
                                />
                                <img
                                    src={srcIcon}
                                    alt="src-icon"
                                    className="src-img"
                                />
                            </div>
                            <div className="menu-items">
                                <h3 className="menu-sign">Sign in</h3>
                                <div className="menu-btn">
                                    <img src={menu} alt="menu" />
                                </div>
                            </div>
                        </div>
                        <div className="desc-box">
                            <h1 className="box-title">
                                John Wick 3 : <br /> Parabellum
                            </h1>
                            <span className="score-imdb">IMDb</span>
                            <span className="score-num">86.0 / 100</span>
                            <img
                                className="img-apple"
                                src={imdb}
                                alt="img-imdb"
                            />
                            <span className="score-procent">97%</span>
                            <p className="desc-text">
                                John Wick is on the run after killing a member
                                of the international assassins' guild, and with
                                a $14 million price tag on his head, he is the
                                target of hit men and women everywhere.
                            </p>
                            <button className="desc-box__btn">
                                <img src={play} alt="" />
                                WATCH TRAILER
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="selec-movies">
                        <input type="radio" id="all" name="type-movie" value="all" />
                        <label for="all">All</label>
                        <input type="radio" id="movies" name="type-movie" value="movies" />
                        <label for="movies">Movies only</label>
                        <input type="radio" id="series" name="type-movie" value="series" />
                        <label for="series">Series</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
