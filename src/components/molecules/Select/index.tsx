import React, { useState } from "react";
import { Chevron } from "../../../assets/svg";
import Input from "../../atoms/Input";
import "../../../assets/styles/components/molecules/_select.scss";

const Select = ({
  defaultValue,
  options,
  onSelect,
}: {
  defaultValue: string;
  options: string[];
  onSelect: Function;
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const selectOption = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className={`select ${showOptions ? "select__active" : ""}`}>
      <div onClick={() => setShowOptions(!showOptions)}>
        <Input
          id="invoiceState"
          placeholder={
            selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)
          }
          icon={Chevron}
        />
      </div>

      <div
        className={`select__options card border__color--input font__weight--400 ${
          !showOptions ? "display--none" : "flex flex--column flex__gap--1"
        }`}
      >
        {options.map((option, index) => {
          return (
            <p
              key={index}
              className="select__item"
              onClick={() => selectOption(option)}
            >
              {option}
            </p>
          );
        })}
      </div>

      <select
        className="display--none"
        name="state"
        defaultValue={selectedValue}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
