import React from "react";

export interface ButtonProps {
  buttonStyle: "primary" | "secondary" | "icon" | "inline" | "pill";
  type: "submit" | "reset" | "button";
  label: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}
