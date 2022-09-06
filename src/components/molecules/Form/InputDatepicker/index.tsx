import React, { useState } from "react";
import { Calendar } from "../../../../assets/svg";
import Input from "../../../atoms/Input";
import DatePicker from "../../Datepicker";
import { InputDatepickerProps } from "./types";

const InputDatepicker: React.FC<InputDatepickerProps> = ({
  label,
  id,
  placeholder,
  saveDates,
}) => {
  const [showDatepicker, setShowDatepicker] = useState<boolean>(false);

  return (
    <div className="flex  flex--column flex__gap--1">
      <label className="font__weight--400" htmlFor={id}>
        {label}
      </label>
      <div className="position--relative">
        <div onClick={() => setShowDatepicker((prevState) => !prevState)}>
          <Input id={id} placeholder={placeholder} icon={Calendar} />
        </div>
        <div
          className={`position--absolute  ${
            !showDatepicker ? "display--none" : ""
          }`}
        >
          <DatePicker
            saveDates={(dateArr: Date[]) =>
              saveDates(dateArr[0].toDateString())
            }
            clearDates={() => console.log()}
            multipleSelection={false}
          />
        </div>
      </div>
    </div>
  );
};

export default InputDatepicker;
