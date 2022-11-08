import React from "react";
import Input from "../../../atoms/Input";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <div className="flex  flex--column flex__gap--1">
      <label className="font__weight--400" htmlFor={id}>
        {label}
      </label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
