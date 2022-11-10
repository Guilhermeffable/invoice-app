import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  type,
  children,
  extraClasses = "",
  onClick,
}) => {
  return (
    <button
      className={`button disabled button--${buttonStyle} ${extraClasses} flex flex--center`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
