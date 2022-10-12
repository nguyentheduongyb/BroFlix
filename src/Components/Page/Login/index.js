/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./Login.module.scss";
import LoginMain from "~/Components/Page/LoginMain";
import { useContext } from "react";
import { DisplayContext } from "~/Components/Layout/Components/Header/DisplayProvider";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import PhoneNumber from "~/Components/Page/LoginMain/PhoneNumber";
import WithFb from "~/Components/Page/LoginMain/LoginFb";
import PhoneNumber from "../LoginMain/PhoneNumber";

const cx = ClassNames.bind(styles);

function Login() {
    const display = useContext(DisplayContext);
    const closeBtn = useRef();
    const displayForm = useRef();
    useEffect(() => {
        if (display.display) {
            displayForm.current.classList.add(cx("showing"));
            displayForm.current.classList.remove(cx("hide"));
        }
        closeBtn.current.onclick = () => {
            displayForm.current.classList.add(cx("hide"));
            displayForm.current.classList.remove(cx("showing"));
        };
    }, [display.display]);
    return (
        <div ref={displayForm} className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("heading")}>
                    <h2>Login to TikTok</h2>
                    <button
                        onClick={display.toggleClose}
                        ref={closeBtn}
                        className={cx("close")}
                    >
                        <FontAwesomeIcon
                            className={cx("icon-close")}
                            icon={faXmark}
                        />
                    </button>
                </div>
                <div className={cx("content")}>
                    {(display.type === "main" && <LoginMain />) ||
                        (display.type === "phone" && <PhoneNumber />)}
                </div>
                <div className={cx("footer")}>
                    You don't have an account ?<a href="#">Register</a>
                </div>
            </div>
        </div>
    );
}
export default Login;
