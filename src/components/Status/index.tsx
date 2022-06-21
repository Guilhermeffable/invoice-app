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
        <div className={`status flex flex--center ${textClass}`}>
            <span className={`status__icon ${backgroundClass}`}></span>
            <div className="status__text">
                <p>{statusText}</p>
            </div>
        </div>
    );
};

Status.propTypes = {
    type: PropTypes.number.isRequired,
};

export default Status;
