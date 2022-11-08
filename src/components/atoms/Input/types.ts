export interface IInputProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    | "value"
    | "disabled"
    | "onChange"
    | "onBlur"
    | "onFocus"
    | "placeholder"
    | "id"
    | "name"
    | "onKeyDown"
    | "onKeyUp"
    | "onClick"
    | "maxLength"
    | "min"
    | "max"
    | "autoFocus"
    | "type"
    | "readOnly"
  > {
  placeholder: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
}
