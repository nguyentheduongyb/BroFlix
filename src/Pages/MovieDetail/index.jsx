import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./MovieDetail.module.scss";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSave, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CastList from "~/Components/Page/Cast/CastList";
import Shortcut from "~/Components/Page/Shortcut";

import { Fragment } from "react";
import tmdb from "~/API/tmdb";

const cx = classNames.bind(styles);

function MovieDetail() {
    const { id } = useParams();
    const { path } = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const { data } = await tmdb.get(`/${path}/${id}`);
            setMovie(data);
        };
        fetchMovie();
    }, [id]);
    const [sectionToggle, setSectionToggle] = useState({
        first: "On TV",
        second: "In Theaters",
        third: "To Day",
        forth: "This Week",
    });
    return (
        <Fragment>
            <Shortcut />

            <div className={cx("m-b-24 grid")}>
                <div
                    className={cx("infor")}
                    style={{
                        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
                    }}
                >
                    <div className={cx("cover")}>
                        <div className={cx("wrapper")}>
                            <div className={cx("col l-3 m-r-24 m-l-48 m-b-24")}>
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                ></img>
                            </div>
                            <div className={cx("col m-6", "flex-1")}>
                                <h2 className={cx("title")}>
                                    {movie.original_name ||
                                        movie.original_title}
                                </h2>
                                <div>
                                    <button className={cx("certification")}>
                                        TV-14
                                    </button>
                                    <span className={cx("genres")}>
                                        {movie.genres &&
                                            movie.genres.map(
                                                (genre) => genre.name + ", ",
                                            )}
                                        {movie.episode_run_time + "minutes"}.
                                    </span>
                                </div>
                                <div className={cx("actions", "m-t-24 m-b-24")}>
                                    <button className={cx("btn", "percent")}>
                                        77%
                                    </button>
                                    <button className={cx("btn", "score")}>
                                        User <br />
                                        Score
                                    </button>
                                    <button className={cx("btn", "addlist")}>
                                        <FontAwesomeIcon icon={faList} />
                                    </button>
                                    <button className={cx("btn", "favourrite")}>
                                        <FontAwesomeIcon
                                            className={cx("icon")}
                                            icon={faHeart}
                                        />
                                    </button>
                                    <button className={cx("btn", "save")}>
                                        <FontAwesomeIcon icon={faSave} />
                                    </button>
                                    <button className={cx("btn", "vote")}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </button>
                                </div>
                                <h4 className={cx("tagline")}>
                                    {movie.tagline}
                                </h4>
                                <div
                                    className={cx("overview", "m-t-24 m-b-48")}
                                >
                                    <h3>Overview</h3>
                                    <p>{movie.overview}</p>
                                </div>
                                <div className={cx("row no-gutters")}>
                                    {movie.created_by &&
                                        movie.created_by.map((item, index) => (
                                            <div
                                                key={index}
                                                className={cx("m-l-48")}
                                            >
                                                <h3>{item.name}</h3>
                                                <p>Creator</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("grid wide")}>
                    <div className={cx("row no-gutters space-bw m-t-24")}>
                        <CastList id={id} path={path} page="1" />

                        <div className={cx("l-2 m-t-24 m-l-24", "contact")}>
                            <a href="" className={cx("link-social")}>
                                <FontAwesomeIcon
                                    className={cx("ic-social")}
                                    icon={faFacebook}
                                />
                            </a>
                            <a href="" className={cx("link-social")}>
                                <FontAwesomeIcon
                                    className={cx("ic-social")}
                                    icon={faTwitter}
                                />
                            </a>
                            <a href="" className={cx("link-social")}>
                                <FontAwesomeIcon
                                    className={cx("ic-social")}
                                    icon={faInstagram}
                                />
                            </a>
                            <a href="" className={cx("link-heart")}>
                                <FontAwesomeIcon
                                    className={cx("ic-social")}
                                    icon={faHeart}
                                />
                            </a>
                            <h3 className={cx("m-t-24")}>Facts</h3>
                            <h3 className={cx("m-t-24")}>Original Name</h3>
                            <p>House of the Dragon</p>
                            <h3 className={cx("m-t-24")}>Status</h3>
                            <p>Returning Series</p>
                            <h3 className={cx("m-t-24")}>Network</h3>
                            <h1>HBO</h1>
                            <h3 className={cx("m-t-24")}>Type</h3>
                            <p>Scripted</p>
                            <h3 className={cx("m-t-24")}>Original Language</h3>
                            <p>English</p>
                            <h3 className={cx("m-t-24")}>Keywords</h3>
                            <p>dragon, fantasy world</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MovieDetail;
