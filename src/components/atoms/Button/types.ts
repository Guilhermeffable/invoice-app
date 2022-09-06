import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  buttonStyle: string;
  type: "submit" | "reset" | "button";
  label: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}
