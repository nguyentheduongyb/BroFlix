import { useState, createContext } from "react";

const DisplayContext = createContext();

function DisplayProvider({ children }) {
    const [display, setDisplay] = useState(false);
    const [type, setType] = useState("main");
    const [isLogin, setIsLogin] = useState(false);
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({
        number: number,
        password: password,
    });

    const toggleDisplay = () => {
        setDisplay(!display);
    };
    const toggleClose = () => {
        setDisplay(!display);
        // setIsLogin(true);
        setType("main");
    };
    const displayForm = (e) => {
        setType(e.type);
    };
    const item = {
        display,
        toggleDisplay,
        toggleClose,
        type,
        isLogin,
        setIsLogin,
        displayForm,
    };
    return (
        <DisplayContext.Provider value={item}>
            {children}
        </DisplayContext.Provider>
    );
}
export { DisplayProvider, DisplayContext };
