import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const Button = ({ text, primary }: { text: string; primary: boolean }) => {
    return (
        <div
            className={`button align--center ${
                primary ? "background--primary-02 text--primary-03" : ""
            } border--primary-02`}
        >
            <p>{text}</p>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
};

export default Button;
