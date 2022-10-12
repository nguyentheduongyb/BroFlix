import ClassNames from "classnames/bind";
import styles from "./Discovery.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const cx = ClassNames.bind(styles);
function Discovery({ children }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1>Welcome!</h1>
                <h2>Unlimited Movies, TV Show And More</h2>
                {children}
            </div>
        </div>
    );
}

export default Discovery;
