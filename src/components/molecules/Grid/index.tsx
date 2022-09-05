import * as React from "react";
import { FC } from "react";
import { IGridProps } from "./types";

const Grid: FC<IGridProps> = ({ gridExtraClass, children }) => {
  return (
    <>
      <div className={`grid ${gridExtraClass}`}>{children}</div>
    </>
  );
};

export default Grid;
