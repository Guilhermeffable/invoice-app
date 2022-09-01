import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import Navbar from "./components/molecules/Navbar/index";
import "./assets/styles/main.scss";
import InvoiceDetail from "./pages/Detail";
import CreateInvoice from "./pages/Create";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<InvoiceDetail />} />
          <Route path="/create" element={<CreateInvoice />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
