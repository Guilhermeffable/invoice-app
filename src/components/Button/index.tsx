import React from "react";
import PropTypes from "prop-types";
import GenericButton from "./genericButton";
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
                <GenericButton
                    text={text!}
                    primary={primary!}
                    onClick={onClick!}
                    icon={icon}
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
    text: PropTypes.string,
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.object,
};

export default Button;
