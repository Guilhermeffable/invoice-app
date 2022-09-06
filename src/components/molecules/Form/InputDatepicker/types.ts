import { InputFieldProps } from "../InputField/types";

export interface InputDatepickerProps
  extends Omit<InputFieldProps, "onChange"> {
  label: string;
  id: string;
  saveDates: (date: string) => void;
}
