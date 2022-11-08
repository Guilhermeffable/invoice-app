import React from "react";
import { Chevron } from "../../../assets/svg";
import { IBreadcrumbProps } from "./types";

const Breadcrumb = ({ urls }: IBreadcrumbProps) => {
  return (
    <nav className="breadcrumb flex flex--start-X flex--center ">
      <a href="/">Invoice</a>
      <ul>
        {urls.map((url, index) => {
          return (
            <li key={index}>
              <Chevron className="icon__fill--default transform__rotate--anticlockwise-90" />
              <a href={url.url} className="text--primary-01 font__weight--600">
                {url.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
