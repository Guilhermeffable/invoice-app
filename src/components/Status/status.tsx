import React from "react";
import PropTypes from "prop-types";
import "./_status.scss";
import "../../scss/main.scss";

const Status = ({ type }: { type: number }) => {
    let backgroundClass = "";
    let textClass = "";
    let statusText = "";

    switch (type) {
        case 0:
            backgroundClass = "background--success";
            textClass = "text--success";
            statusText = "Paid";
            break;

        case 1:
            backgroundClass = "background--warning";
            textClass = "text--warning";
            statusText = "Warning";
            break;

        case 2:
            backgroundClass = "background--danger";
            textClass = "text--danger";
            statusText = "Danger";
            break;
    }

    return (
        <div className={`status ${textClass}`}>
            <div className={`status__icon ${backgroundClass}`}></div>
            <div className="status__text">{statusText}</div>
        </div>
    );
};

Status.propTypes = {
    type: PropTypes.number.isRequired,
};

export default Status;
