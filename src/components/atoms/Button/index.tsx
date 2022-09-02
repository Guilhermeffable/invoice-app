import React from "react";
import PropTypes from "prop-types";
import { ButtonProps } from "./types";

const Button = ({ buttonStyle, type, onClick, icon, label }: ButtonProps) => {
  //TODO passar icon nas props

  const Icon = icon;

  return (
    <button
      className={`button button--${buttonStyle}  ${
        Icon ? "button--icon" : ""
      } flex flex--center`}
      type={type}
      onClick={onClick}
    >
      <span className="flex flex--center">{Icon && <Icon />}</span>
      {label}
    </button>
  );
};

export default Button;
