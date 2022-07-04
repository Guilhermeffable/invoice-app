import React from "react";
import { Chevron } from "../../assets/svg";

const Breadcrumb = () => {
    return (
        <nav className="breadcrumb flex flex--start-X flex--center ">
            <p>Invoice</p>
            <Chevron className="icon__fill--default transform__rotate--anticlockwise-90" />
            <p className="text--primary-01 font__weight--600">Invoice Detail</p>
        </nav>
    );
};

export default Breadcrumb;
