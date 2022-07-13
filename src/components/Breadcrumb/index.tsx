import React from "react";
import { Chevron } from "../../assets/svg";

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <nav className="breadcrumb flex flex--start-X flex--center ">
      <a href="/">Invoice</a>
      <Chevron className="icon__fill--default transform__rotate--anticlockwise-90" />
      <p className="text--primary-01 font__weight--600">{title}</p>
    </nav>
  );
};

export default Breadcrumb;
