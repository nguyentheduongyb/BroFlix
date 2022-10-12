import classNames from "classnames/bind";
import styles from "./Recommendations.module.scss";
import { useState, useEffect } from "react";
import tmdb from "~/API/tmdb";
const cx = classNames.bind(styles);

function Recommendations({ id, path }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchcasts = async () => {
            const { data } = await tmdb.get(`${path}/${id}/recommendations`);
            setMovies(data.results);
        };
        fetchcasts();
    }, []);
    return (
        <div className={cx("wrapper", "grid m-t-24")}>
            <h2 className="m-b-24">Recommendations</h2>
            <ul className={cx("list")}>
                {movies.map((item, index) => {
                    if (item.backdrop_path)
                        return (
                            <li key={index} className={cx("item")}>
                                <div>
                                    <a href="#">
                                        <img
                                            className={cx("poster")}
                                            src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${item.backdrop_path}`}
                                        />
                                        <p className={cx("name")}>
                                            {item.original_title}
                                        </p>
                                    </a>
                                    <p className={cx("popular")}>
                                        Popularity: {item.popularity}
                                    </p>
                                </div>
                            </li>
                        );
                })}
            </ul>
            <div className={cx("blur")}></div>
        </div>
    );
}

export default Recommendations;
