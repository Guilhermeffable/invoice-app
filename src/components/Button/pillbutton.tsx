import React, { Component, ReactComponentElement } from "react";
import PropTypes from "prop-types";
import { Plus } from "../../assets/svg";
import "./_button.scss";

const PillButton = ({ text }: { text: string }) => {
    return (
        <div className="button__pill">
            <input
                className="display--none"
                name="teste"
                id={text}
                type="checkbox"
            />
            <label className="align--center" htmlFor={text}>
                {text}
            </label>
        </div>
    );
};

PillButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PillButton;
