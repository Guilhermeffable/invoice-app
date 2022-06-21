import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const GenericButton = ({
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
            <button
                className={`button align--center ${
                    primary
                        ? "background--secondary text--white"
                        : "background--white"
                } border__color--secondary`}
                onClick={() => onClick()}
            >
                {text}
            </button>
        );
    } else {
        return (
            <button className="button--icon background--primary text--white flex flex--center">
                <div className="button__icon flex flex--center">
                    <Icon className="icon__stroke--primary" />
                </div>

                {text}
            </button>
        );
    }
};

GenericButton.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.object,
};

export default GenericButton;
