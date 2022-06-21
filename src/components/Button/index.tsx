import React from "react";
import PropTypes from "prop-types";
import GenericButton from "./genericButton";
import PillButton from "./pillbutton";

const Button = ({
    type,
    text,
    onClick,
    icon,
}: {
    type: string;
    text?: string;
    onClick?: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    switch (type) {
        case "primary":
            return (
                <GenericButton
                    text={text!}
                    primary={true}
                    onClick={onClick!}
                    icon={icon}
                />
            );

        case "secondary":
            return (
                <GenericButton
                    text={text!}
                    primary={false}
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
    onClick: PropTypes.func,
    icon: PropTypes.object,
};

export default Button;
