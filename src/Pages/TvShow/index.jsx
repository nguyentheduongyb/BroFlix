import { Fragment } from "react";
import { useState, useEffect } from "react";
import MovieCard from "~/Components/Page/Movies/MovieCard";
import classNames from "classnames/bind";
import styles from "./TvShow.module.scss";
import tmdb from "~/API/tmdb";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await tmdb.get("tv/popular/");
            setMovies(data.results);
        };
        fetchMovies();
    }, [fetch]);
    return (
        <div className={cx("grid wide")}>
            <h2 className={cx("m-t-48 m-b-24")}>Tv Show</h2>
            <ul className={cx("list")}>
                {movies.map((item, index) => (
                    <li key={index} className={cx("col l-2 c-4 m-4")}>
                        <div>
                            <Link>
                                <img
                                    className={cx("poster")}
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                                />
                                <p>{item.name || item.original_title}</p>
                            </Link>
                            <p className={cx("time")}>
                                {item.first_air_date || item.release_date}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            <Link className={cx("load", "m-b-48 m-t-24")}>
                <button className={cx("btn")}>Load More</button>
            </Link>
        </div>
    );
}

export default Movies;
