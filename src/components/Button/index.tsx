import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./primaryButton";
import PillButton from "./pillbutton";

const Button = ({
    type,
    text,
    primary,
    onClick,
    icon,
}: {
    type: string;
    text?: string;
    primary?: boolean;
    onClick?: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    switch (type) {
        case "primary":
            return (
                <PrimaryButton
                    text={text!}
                    primary={primary!}
                    onClick={onClick!}
                    icon={!icon ? undefined : icon}
                />
            );

        case "pill":
            return <PillButton text={text!} />;

        default:
            return <div></div>;
    }
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Button;
