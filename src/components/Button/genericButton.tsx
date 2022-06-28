import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const GenericButton = ({
    type,
    text,
    name,
    primary,
    onClick,
    icon,
    value,
}: {
    type: "submit" | "button" | "reset";
    text: string;
    name: string;
    primary: boolean;
    onClick: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    value?: string;
}) => {
    const Icon = icon;

    if (!Icon) {
        return (
            <button
                className={`button align--center ${
                    primary
                        ? "background__main--secondary text--white"
                        : "background--tertiary border__color--secondary-button text--color border__color--input"
                } `}
                name={name}
                type={type}
                value={value}
                onClick={() => onClick()}
            >
                {text}
            </button>
        );
    } else {
        return (
            <button
                className="button--icon background__main--primary text--white flex flex--center"
                onClick={() => onClick()}
                type={type}
                name={name}
                value={value}
            >
                <span className="button__icon flex flex--center">
                    <Icon className="icon__stroke--primary" />
                </span>

                {text}
            </button>
        );
    }
};

GenericButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.object,
};

export default GenericButton;
