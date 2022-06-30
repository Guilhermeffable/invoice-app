import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ButtonProps {
    buttonStyle: string;
    type: "submit" | "reset" | "button";
    text?: string;
    name: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onChange?: ChangeEventHandler;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    value?: string;
}

export interface GenericButtonProps {
    type: "submit" | "button" | "reset";
    text: string;
    name: string;
    primary: boolean;
    onClick: Function;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    value?: string;
}
export interface PillButtonProps {
    text: string;
    value: string;
    name: string;
    onChange: ChangeEventHandler;
}
