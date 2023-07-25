import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./People.module.scss";

const cx = classNames.bind(styles);
function People() {
    return (
        <div className={cx("grid wide")}>
            <h2 className={cx("m-t-48 m-b-24")}>Group Members</h2>
            <ul className={cx("row no-gutters")} style={{ justifyContent: "center" }}>
                <li className={cx("col l-6 c-12 m-6")}>
                    <div className={cx("members")}>
                        <img
                            className={cx("avatar", "m-b-24")}
                            src={images.entidy}
                            alt=""
                        />
                        <h2>Nguyễn Thế Dương</h2>
                        <h3>Ngày sinh: 07/03/2002</h3>
                        <p>Khoa: Công nghệ thông tin</p>
                        <p>Nghành: Lập trình Website</p>
                        <div className="row">
                            <a href="https://www.facebook.com/ntd.7302/">
                                <img
                                    className={cx("icon")}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.instagram.com/ntd.7302/">
                                <img
                                    alt=""
                                    className={cx("icon")}
                                    src="https://cdn-icons-png.flaticon.com/512/3621/3621435.png"
                                />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default People;
