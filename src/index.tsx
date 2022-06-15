import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import DatePicker from "./components/Datepicker/datepicker";
import Dashboard from "./pages/Dashboard/dashboard";
import Navbar from "./components/Navbar/navbar";
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
