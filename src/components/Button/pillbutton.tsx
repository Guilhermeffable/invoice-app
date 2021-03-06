import React, {
    ChangeEventHandler,
    Component,
    ReactComponentElement,
} from "react";
import PropTypes from "prop-types";
import { Plus } from "../../assets/svg";
import "./_button.scss";
import { PillButtonProps } from "./utils";

const PillButton = ({ text, value, name, onChange }: PillButtonProps) => {
    return (
        <div className="button__pill">
            <input
                className="display--none"
                id={text}
                type="checkbox"
                value={value}
                name={name}
                onChange={onChange}
            />
            <label
                className="align--center border__color--input"
                htmlFor={text}
            >
                {text}
            </label>
        </div>
    );
};

PillButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PillButton;
