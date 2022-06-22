import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const GenericButton = ({
    type,
    text,
    primary,
    onClick,
    icon,
}: {
    type?: "submit" | "button" | "reset";
    text: string;
    primary: boolean;
    onClick: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    const Icon = icon;

    if (!Icon) {
        return (
            <button
                className={`button align--center ${
                    primary
                        ? "background__main--secondary text--white"
                        : "background--white"
                } border__color--secondary`}
                onClick={() => onClick()}
                type={type}
            >
                {text}
            </button>
        );
    } else {
        return (
            <button className="button--icon background__main--primary text--white flex flex--center">
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
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object,
};

export default GenericButton;
