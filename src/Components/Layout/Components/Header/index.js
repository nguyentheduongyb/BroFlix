/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import { DisplayContext } from "~/Components/Layout/Components/Header/DisplayProvider";
import images from "~/assets/images/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import Search from "~/Components/Page/Search";

const cx = ClassNames.bind(styles);

function Header() {
    const display = useContext(DisplayContext);
    const loginRef = useRef();
    const avatarRef = useRef();
    useEffect(() => {
        if (display.isLogin) {
            loginRef.current.style.display = "none";
            avatarRef.current.style.display = "block";
        }
    });

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to="/BroFlix" className={cx("logo")}>
                    <img src={images.broflix} alt="TikTok" />
                </Link>
                <ul className={cx("navigation")}>
                    <li className={cx("nav_item")}>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className={cx("nav_item")}>
                        <Link to="/tvshow">TV Show</Link>
                    </li>
                    <li className={cx("nav_item")}>
                        <Link to="/people">People</Link>
                    </li>
                    <li className={cx("nav_item")}>
                        <Link to="/more">More</Link>
                    </li>
                </ul>
                <Search />
                <div className={cx("actions")}>
                    <div className={cx("language")}>VI</div>
                    <div
                        ref={loginRef}
                        onClick={display.toggleDisplay}
                        className={cx("login")}
                    >
                        Login
                    </div>

                    <div className={cx("avatar")} ref={avatarRef}>
                        <img src={images.ntd}></img>
                    </div>

                    <i className={cx("more")}>
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faEllipsisVertical}
                        />
                    </i>
                </div>
            </div>
        </header>
    );
}

export default Header;
