import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/Dashboard/index";
import Navbar from "./components/Navbar/index";
import "./scss/main.scss";

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Dashboard />
        </Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
