import React from "react";
import { GenericButtonProps } from "./utils";
import "./_button.scss";

function InlineButton({
    type,
    text,
    name,
    primary,
    onClick,
    icon,
    value,
}: GenericButtonProps) {
    const Icon = icon!;

    return (
        <button
            className="button--icon button__inline background__main--primary text--white flex flex--center"
            onClick={() => onClick()}
            type={type}
            name={name}
            value={value}
        >
            <span className="button__icon flex flex--center">
                <Icon className="icon__stroke--primary" />
            </span>

            {text}
        </button>
    );
}

export default InlineButton;
