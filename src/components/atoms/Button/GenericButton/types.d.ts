export interface GenericButtonProps {
  type: "submit" | "button" | "reset";
  text: string;
  name: string;
  primary: boolean;
  inline?: boolean;
  onClick: Function;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  value?: string;
}
