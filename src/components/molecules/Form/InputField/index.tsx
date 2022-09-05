import React from "react";
import Input from "../../../atoms/Input";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex  flex--column flex__gap--1">
      <label className="font__weight--400" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        placeholder={placeholder}
        onChange={(value: string) => onChange(value)}
      />
    </div>
  );
};

export default InputField;
