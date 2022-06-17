import React, { Component, ReactComponentElement } from "react";
import PropTypes from "prop-types";
import { Plus } from "../../assets/svg";
import "./_button.scss";

const PillButton = ({
    text,
    icon,
    primary,
}: {
    text: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    primary: boolean;
}) => {
    const Icon = icon;

    if (!Icon) {
        return (
            <div
                className={`button__pill background--primary  border--primary-02 background--white button align--center ${
                    primary
                        ? "background--secondary text--white"
                        : "text--black"
                } border--primary-02`}
            >
                <div className="button__text">{text}</div>
            </div>
        );
    } else {
        return (
            <div className="button__pill--icon background--primary ">
                <div className="button__icon">
                    <Icon className="icon__stroke--primary" />
                </div>

                <div className="button__text text--white">{text}</div>
            </div>
        );
    }
};

PillButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    primary: PropTypes.bool.isRequired,
};

export default PillButton;
