import ClassNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/Components/Layout/Components/Header";
import Footer from "~/Components/Layout/Components/Footer";
const cx = ClassNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header></Header>
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
