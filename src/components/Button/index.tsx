import React, { Fragment } from "react";
import PropTypes from "prop-types";
import GenericButton from "./genericButton";
import PillButton from "./pillbutton";

const Button = ({
    buttonStyle,
    type,
    text,
    onClick,
    icon,
}: {
    buttonStyle: string;
    type?: "submit" | "reset" | "button";
    text?: string;
    onClick?: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
    switch (buttonStyle) {
        case "primary":
            return (
                <GenericButton
                    text={text!}
                    primary={true}
                    onClick={onClick!}
                    icon={icon}
                    type={type}
                />
            );

        case "secondary":
            return (
                <GenericButton
                    text={text!}
                    primary={false}
                    onClick={onClick!}
                    icon={icon}
                    type={type}
                />
            );
        case "inline":
            return (
                <GenericButton
                    text={text!}
                    primary={false}
                    onClick={onClick!}
                    icon={icon}
                    type={type}
                />
            );

        case "pill":
            return <PillButton text={text!} />;

        default:
            return <Fragment></Fragment>;
    }
};

Button.propTypes = {
    buttonStyle: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object,
};

export default Button;
