import {
    faEllipsis,
    faEllipsisVertical,
    faPlay,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Trailer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircleLeft } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Trailer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("cover")}></div>
            <div className={cx("inner")}>
                <div className={cx("row no-gutters")}>
                    <h2 className={cx("title")}>Lastest Trailer</h2>
                </div>
                <div className={cx("content")}>
                    <a href="#" className={cx("image")}>
                        <img src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/zNugnnR5KEmq9EzLcl0Me1UmHYk.jpg" />
                        <i>
                            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                        </i>
                    </a>
                    <div className={cx("information")}>
                        <a href="#">Gia Đình × Điệp Viên</a>
                        <h5>Gia Đình Điệp Viên || Trailer Chính Thức</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trailer;
