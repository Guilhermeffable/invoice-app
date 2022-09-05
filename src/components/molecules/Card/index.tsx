import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ extraClasses, title, children }) => {
  return (
    <div className={`card flex flex--column flex__gap--1 ${extraClasses}`}>
      {title && <h2 className="font__weight--300">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
