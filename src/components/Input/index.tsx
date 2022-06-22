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
            <input
                className="input flex flex--center text--grey-80 border__color--input background--tertiary"
                placeholder={placeholder}
            ></input>
        );
    } else {
        return (
            <div className="flex flex--center border__color--input border__radius--10 background--tertiary">
                <input
                    className="input text--grey-80 background--tertiary"
                    placeholder={placeholder}
                ></input>
                <div className="input__icon flex flex--center">
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
