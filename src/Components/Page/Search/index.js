import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Wrapper as PopperWrapper } from "~/Components/Page/Popper";
import MovieItems from "~/Components/Layout/Components/MovieItems";

import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import ClassNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = ClassNames.bind(styles);

function Search(props) {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [blur, setBlur] = useState(false);

    const input = useRef();

    const API =
        "https://api.themoviedb.org/3/tv/popular?api_key=0e7933ccb96aa8a6aa3112ae73201b82&language=en-US&page=2";

    useEffect(() => {
        axios.get(API).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    const handleSearch = (e) => {
        if (!!e.target.value.trim()) {
            setBlur(false);
            setLoading(true);
            setInputValue(e.target.value);
            const searchResults = movies.filter(
                (item) =>
                    item.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) !== -1,
            );
            setSearchResults(searchResults);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        if (e.target.value === "") {
            setLoading(false);
            setSearchResults([]);
            setInputValue(e.target.value);
        }
    };
    useEffect(() => {});
    const handleBlur = () => {
        setBlur(true);
        setSearchResults([]);
    };
    const handleRemoveInput = () => {
        setInputValue("");
        input.current.focus();
    };
    return (
        <Tippy
            visible={searchResults.length > 0 || inputValue}
            interactive
            onClickOutside={handleBlur}
            render={(attrs) => (
                <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                    {blur ? (
                        ""
                    ) : (
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>
                                {searchResults.length === 0
                                    ? "No results found"
                                    : "Movies"}
                            </h4>
                            {searchResults.map((item, index) => (
                                <MovieItems key={index} item={item} />
                            ))}
                        </PopperWrapper>
                    )}
                </div>
            )}
        >
            <div className={cx("search")}>
                <input
                    ref={input}
                    onBlur={handleBlur}
                    onChange={(e) => handleSearch(e)}
                    type="text"
                    placeholder="Nhập vào 1 thứ gì đó"
                    value={inputValue}
                />
                {!!inputValue && !loading && (
                    <button className={cx("clear")} onClick={handleRemoveInput}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                )}
                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}
Search.propTypes = {
    onSubmit: PropTypes.func,
};
Search.defaultProps = {
    onSubmit: null,
};
export default Search;
