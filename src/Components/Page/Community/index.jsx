import styles from "./Community.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Community() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("cover")}>
                <div className={cx("inner")}>
                    <h2 className={cx("title")}>Join Today</h2>
                    <div className={cx("row no-gutters", "content")}>
                        <div className={cx("col l-7 m-12 ")}>
                            <p>
                                Get access to maintain your own custom personal
                                lists, track what you've seen and search and
                                filter for what to watch next—regardless if it's
                                in theatres, on TV or available on popular
                                streaming services like .
                            </p>
                            <button className={cx("btn")}>Sign In</button>
                        </div>
                        <ul>
                            <li>Enjoy TMDB ad free</li>
                            <li>Maintain a personal watchlist</li>
                            <li>Maintain a personal watchlist</li>
                            <li>Maintain a personal watchlist</li>
                            <li>Maintain a personal watchlist</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
