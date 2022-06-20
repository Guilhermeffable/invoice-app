import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const PrimaryButton = ({
    text,
    primary,
    onClick,
    icon,
}: {
    text: string;
    primary: boolean;
    onClick: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    const Icon = icon;

    if (!Icon) {
        return (
            <div
                className={`button align--center ${
                    primary ? "background--secondary text--white" : ""
                } border--primary-02`}
                onClick={() => onClick()}
            >
                <p>{text}</p>
            </div>
        );
    } else {
        return (
            <div className="button--icon background--primary ">
                <div className="button__icon">
                    <Icon className="icon__stroke--primary" />
                </div>

                <div className="button__text text--white">{text}</div>
            </div>
        );
    }
};

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object,
};

export default PrimaryButton;
