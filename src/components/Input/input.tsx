import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./_input.scss";
import { Chevron } from "../../assets/svg";

const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <div className="input border--primary-02">
            <div className="input__placeholder">{placeholder}</div>
            <div className="input__icon">
                <Chevron />
            </div>
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default Input;
