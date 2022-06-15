import React, { Component, ReactComponentElement } from "react";
import PropTypes from "prop-types";
import { Plus } from "../../assets/svg";
import "./_button.scss";

const PillButton = ({
    icon,
}: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    const Icon = icon;

    return (
        <div className="button__pill background--primary">
            {icon != null ? (
                <div className="button__icon">
                    <Icon className="stroke--primary-01" />
                </div>
            ) : (
                ""
            )}

            <div className="button__text text--primary-03"> New Invoice</div>
        </div>
    );
};

PillButton.propTypes = {
    icon: PropTypes.element,
};

export default PillButton;
