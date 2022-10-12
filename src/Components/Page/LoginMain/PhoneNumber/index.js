/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./PhoneNumber.module.scss";
import { useReducer, useState } from "react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const cx = ClassNames.bind(styles);

const initState = {
    value: "",
    values: [],
};

const SET_LOGIN = "set";
const ADD_LOGIN = "add";
const REMOVE_LOGIN = "remove";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                value: action.value,
            };
        case ADD_LOGIN:
            return {
                ...state,
                values: [...state.jobs, action.value],
            };
        case REMOVE_LOGIN:
            const newValues = [...state.jobs];
            newValues.splice(action.index, 1);
            return {
                ...state,
                values: newValues,
            };
        default:
            throw new Error("Invalid action type");
    }
};
function PhoneNumber() {
    const [state, dispatch] = useReducer(reducer, initState);

    const setUser = (value) => {
        return {
            type: SET_LOGIN,
            value,
        };
    };
    const addUser = (value) => {
        return {
            type: ADD_LOGIN,
            value,
        };
    };
    const removeUser = (value) => {
        return {
            type: REMOVE_LOGIN,
            value,
        };
    };
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({
        number: number,
        password: password,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ number: number, password: password });
    };
    console.log(data);

    return (
        <Fragment>
            <form className={cx("form")}>
                <div className={cx("form-group")}>
                    <label>
                        VN +84
                        <FontAwesomeIcon
                            className={cx("icon")}
                            icon={faCaretDown}
                        />
                    </label>
                    <input
                        type="number"
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        className={cx("form-control")}
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                    />
                    {/* <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small> */}
                </div>
                <div className={cx("form-group")}>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        className={cx("form-control")}
                        placeholder="Password"
                    />
                </div>
                <a href="#" className={cx("other")}>
                    Forgot Password ?
                </a>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className={cx("btn")}
                >
                    Submit
                </button>
            </form>
        </Fragment>
    );
}
export default PhoneNumber;
