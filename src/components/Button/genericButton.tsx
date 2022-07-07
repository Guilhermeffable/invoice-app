import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";
import { GenericButtonProps } from "./utils";

const GenericButton = ({
  type,
  text,
  name,
  primary,
  onClick,
  icon,
  value,
  inline,
}: GenericButtonProps) => {
  const Icon = icon;
  console.log(inline);
  if (!Icon) {
    return (
      <button
        className={`button align--center ${
          primary
            ? "background__main--secondary text--white"
            : inline
            ? ""
            : "background--tertiary border__color--secondary-button text--color border__color--input"
        } `}
        name={name}
        type={type}
        value={value}
        onClick={() => onClick?.()}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        className={
          inline
            ? "button--icon button__inline flex flex--center"
            : `button--icon background__main--primary text--white flex flex--center`
        }
        onClick={() => onClick?.()}
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
};

GenericButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  value: PropTypes.string.isRequired,
};

export default GenericButton;
