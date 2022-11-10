import React from "react";

export interface ButtonProps {
  buttonStyle: "primary" | "secondary" | "icon" | "inline" | "pill";
  type: "submit" | "reset" | "button";
  children?: React.ReactNode;
  extraClasses?: string;
  onClick?: () => void;
}
