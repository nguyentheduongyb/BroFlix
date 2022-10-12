import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faMobileAlt,
    faPhoneAlt,
    faTv,
} from "@fortawesome/free-solid-svg-icons";
import {
    faAndroid,
    faApple,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("brand")}>
                    <img src="https://fptplay.vn/_nuxt/img/logo-fpt-play.06da7da.png" />
                    <img src="https://fptplay.vn/_nuxt/img/logo-fpt-play.06da7da.png" />
                    <img src="https://fptplay.vn/_nuxt/img/logo-fpt-play.06da7da.png" />
                </div>
                <div className={cx("information")}>
                    <div className={cx("header")}>
                        <ul className={cx("legal")}>
                            <li>
                                <a href="">Data</a>
                            </li>
                            <li>
                                <a href="">Advertise</a>
                            </li>
                            <li>
                                <a href="">Service</a>
                            </li>
                            <li>
                                <a href="">Rules</a>
                            </li>
                            <li>
                                <a href="">Policy</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Store</a>
                            </li>
                        </ul>
                        <div className={cx("media")}>
                            <i>
                                <FontAwesomeIcon icon={faGlobe} />
                            </i>
                            <i>
                                <FontAwesomeIcon icon={faTv} />
                            </i>
                            <i>
                                <FontAwesomeIcon icon={faApple} />
                            </i>
                            <i>
                                <FontAwesomeIcon icon={faAndroid} />
                            </i>
                            <i>
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </i>
                        </div>
                    </div>
                    <div className={cx("context")}>
                        <p>Website that allows you to watch movies for free.</p>
                        <p>Copyright: ©EnTiDy, ©DongHipHop</p>
                        <p>Developers: Nguyen The Duong, Nguyen Quang Dong.</p>
                    </div>
                </div>
                <div className={cx("contact")}>
                    <a href="">
                        <FontAwesomeIcon
                            className={cx("ic-facebook")}
                            icon={faFacebook}
                        />
                    </a>
                    <button className={cx("btn")}>
                        <a href="#">
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faMessage}
                            />
                            Support
                        </a>
                    </button>
                    <button className={cx("btn")}>
                        <a href="#">
                            <FontAwesomeIcon
                                className={cx("icon")}
                                icon={faPhoneAlt}
                            />
                            <span>19008000</span>
                        </a>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
