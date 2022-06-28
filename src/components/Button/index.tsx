import React, { ChangeEventHandler, Fragment, MouseEventHandler } from "react";
import PropTypes from "prop-types";
import GenericButton from "./genericButton";
import PillButton from "./pillbutton";

const Button = ({
    buttonStyle,
    type,
    text,
    name,
    onClick,
    onChange,
    icon,
    value,
}: {
    buttonStyle: string;
    type: "submit" | "reset" | "button";
    text?: string;
    name: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onChange?: ChangeEventHandler;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    value?: string;
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
                    value={value}
                    name={name}
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
                    value={value}
                    name={name}
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
                    value={value}
                    name={name}
                />
            );

        case "pill":
            return (
                <PillButton
                    text={text!}
                    value={value!}
                    name={name}
                    onChange={onChange!}
                />
            );

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
