import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  type,
  onClick,
  icon,
  label,
}) => {
  //TODO passar icon nas props

  const Icon = icon;

  return (
    <button
      className={`button disabled button--${buttonStyle}  ${
        Icon ? "button--icon" : ""
      } flex flex--center`}
      type={type}
      onClick={onClick}
    >
      {Icon && (
        <span className="flex flex--center">
          {" "}
          <Icon />
        </span>
      )}
      {label}
    </button>
  );
};

export default Button;
