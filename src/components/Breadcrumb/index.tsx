import React from "react";
import { Chevron } from "../../assets/svg";
import "./_breadcrumb.scss";

const Breadcrumb = () => {
    return (
        <div className="breadcrumb flex flex--start-X flex--center ">
            <p>Invoice</p>
            <Chevron className="icon__fill--default transform__rotate--anticlockwise-90" />
            <p className="text--primary-01">Invoice Detail</p>
        </div>
    );
};

export default Breadcrumb;
