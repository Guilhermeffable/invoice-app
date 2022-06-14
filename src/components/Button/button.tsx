import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const Button = ({
    text,
    primary,
    onClick,
}: {
    text: string;
    primary: boolean;
    onClick: Function;
}) => {
    return (
        <div
            className={`button align--center ${
                primary ? "background--primary-02 text--primary-03" : ""
            } border--primary-02`}
            onClick={() => onClick()}
        >
            <p>{text}</p>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
