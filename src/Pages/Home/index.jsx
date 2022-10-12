import ClassNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState } from "react";

import Discovery from "~/Components/Page/Discovery";
import Trailer from "~/Components/Page/Trailer";
import Community from "~/Components/Page/Community";
import MovieList from "~/Components/Page/Movies/MovieList";
import Section from "~/Components/Page/Section";

const cx = ClassNames.bind(styles);

function Home() {
    const [sectionToggle, setSectionToggle] = useState({
        first: "On TV",
        second: "In Theaters",
        third: "To Day",
        forth: "This Week",
    });
    const handleToggle = (section, selected) => {
        setSectionToggle((prev) => {
            return {
                ...prev,
                [section]: selected,
            };
        });
    };
    return (
        <div className={cx("container")}>
            <Discovery></Discovery>
            <Section
                title="What's popular ?"
                items={["On TV", "In Theaters"]}
                onToggle={handleToggle.bind(null, "first")}
                isToggled={sectionToggle.first === "On TV" ? false : true}
            >
                <MovieList fetch={sectionToggle.first} />
            </Section>

            <Trailer></Trailer>
            <Section
                title="What's popular ?"
                items={["To Day", "This Week"]}
                onToggle={handleToggle.bind(null, "third")}
                isToggled={sectionToggle.third === "To Day" ? false : true}
            >
                <MovieList page="4" fetch={sectionToggle.third} />
            </Section>
            <Community></Community>
        </div>
    );
}
export default Home;
