import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
const cx = classNames.bind(styles);

function MovieCard({ item, request, ...props }) {
    const _path = request.search("/popular");
    const path = request.slice(0, _path);

    return (
        <li className={cx("col l-2 c-4 m-4 m-t-24", "hover")}>
            <div>
                <Link path={path} to={`/${path}/detail/${item.id}`}>
                    <div className={cx("poster")}>
                        <img
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                        />
                    </div>
                    <p>{item.name || item.original_title}</p>
                </Link>
                <p className={cx("time")}>
                    {item.first_air_date || item.release_date}
                </p>
            </div>
        </li>
    );
}

export default MovieCard;
