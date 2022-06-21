import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./_input.scss";
import { Chevron } from "../../assets/svg";

const Input = ({
    placeholder,
    icon,
}: {
    placeholder: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    const Icon = icon;

    if (!Icon) {
        return (
            <div className="input border--primary-02">
                <div className="input__placeholder">{placeholder}</div>
            </div>
        );
    } else {
        return (
            <div className="input border--primary-02">
                <div className="input__placeholder">{placeholder}</div>
                <div className="input__icon">
                    <Icon className="icon__stroke--primary icon__fill--primary" />
                </div>
            </div>
        );
    }
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.object,
};

export default Input;
