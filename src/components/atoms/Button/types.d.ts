export interface ButtonProps {
  buttonStyle: string;
  type: "submit" | "reset" | "button";
  text?: string;
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  value?: string;
}
