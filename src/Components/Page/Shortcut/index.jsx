import classNames from "classnames/bind";
import styles from "./Shortcut.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tippy from "@tippyjs/react";
import {
    faArrowAltCircleDown,
    faCaretDown,
    faCircle,
    faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Shortcut() {
    return (
        <ul className={cx("row no-gutters m-t-24 m-b-24", "wrapper")}>
            <li className={cx("item")}>
                Home
                <FontAwesomeIcon className={cx("icon")} icon={faCaretDown} />
                <ul className={cx("group")}>
                    <li className={cx("sub-item")}>
                        <a href="">Cast & Crew</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Episode Groups</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Seasons</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Translations</a>
                    </li>
                    <li className={cx("spacer")}></li>
                    <li className={cx("sub-item")}>
                        <a href="">Change</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Report</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Edit</a>
                    </li>
                </ul>
            </li>
            <li className={cx("item")}>
                Media
                <FontAwesomeIcon className={cx("icon")} icon={faCaretDown} />
                <ul className={cx("group")}>
                    <li className={cx("sub-item")}>
                        <a href="">Backdrop</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Logos</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Poster</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Videos</a>
                    </li>
                </ul>
            </li>
            <li className={cx("item")}>
                Fandom
                <FontAwesomeIcon className={cx("icon")} icon={faCaretDown} />
                <ul className={cx("group")}>
                    <li className={cx("sub-item")}>
                        <a href="">Reviews</a>
                    </li>
                </ul>
            </li>
            <li className={cx("item")}>
                Share
                <FontAwesomeIcon className={cx("icon")} icon={faCaretDown} />
                <ul className={cx("group")}>
                    <li className={cx("sub-item")}>
                        <a href="">Share Link</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Facebook</a>
                    </li>
                    <li className={cx("sub-item")}>
                        <a href="">Twitter</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default Shortcut;
