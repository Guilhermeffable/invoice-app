import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import "./_input.scss";

const Input = ({
  placeholder,
  icon,
  onChange,
  id,
}: {
  placeholder: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onChange?: Function;
  id: string;
}) => {
  const Icon = icon;

  if (!Icon) {
    return (
      <input
        id={id}
        className="input flex flex--center text--grey-80 border__color--input background--tertiary"
        defaultValue={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      ></input>
    );
  } else {
    return (
      <div className="flex flex--center border__color--input border__radius--10 background--tertiary">
        <input
          className="input text--grey-80 background--tertiary"
          placeholder={placeholder}
        ></input>
        <div className="input__icon flex flex--center">
          <Icon className="icon__stroke--primary icon__fill--primary" />
        </div>
      </div>
    );
  }
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default Input;
