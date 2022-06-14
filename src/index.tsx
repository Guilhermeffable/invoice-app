import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "./components/Datepicker/datepicker";
import "./scss/main.scss";

const App = () => {
    return <DatePicker />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
