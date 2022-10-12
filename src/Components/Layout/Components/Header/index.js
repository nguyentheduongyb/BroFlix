/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, Navigate } from "react-router-dom";
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
                <Link to="/" className={cx("logo")}>
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
                        <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/259076201_1248556908985478_8962996158046790778_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qg_D1vSMtT4AX-w1X0i&tn=7kgjvxKSaMNwo-jt&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8Dvn20zDICdgjfVuL7o2tUmK844AbVSyobaGFbOshd7Q&oe=634498DA"></img>
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
