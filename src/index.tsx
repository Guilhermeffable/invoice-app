import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import Navbar from "./components/Navbar/index";
import "./scss/main.scss";
import InvoiceDetail from "./pages/Detail";

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/invoice" element={<InvoiceDetail />} />
                </Routes>
            </Router>
        </Fragment>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
