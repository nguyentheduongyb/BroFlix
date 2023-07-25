import classNames from "classnames/bind";
import styles from "./Section.module.scss";

import Switch from "~/Components/Page/Switch";

const cx = classNames.bind(styles);

function Section({ title, children, ...props }) {
    return (
        <div className={cx("wrapper")}>
            <section className={cx("row no-gutters pd-l-40")}>
                {title && <h3 className={cx("title", "m-r-24")}>{title}</h3>}
                <Switch {...props} />
            </section>
            {children}
        </div>
    );
}

export default Section;
