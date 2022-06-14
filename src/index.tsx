import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "./components/Datepicker/datepicker";
import Dashboard from "./pages/Dashboard";
import "./scss/main.scss";

const App = () => {
    return <Dashboard />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
