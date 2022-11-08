import * as React from "react";
import { FC } from "react";
import { IGridProps } from "./types";

const Grid: FC<IGridProps> = ({ extraClasses = "", children }) => {
  return <div className={`grid ${extraClasses}`}>{children}</div>;
};

export default Grid;
