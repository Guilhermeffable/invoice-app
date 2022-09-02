import * as React from "react";
import { FC } from "react";
import { IGridProps } from "./types";
// import { Close } from '../../../assets/svg';

const Grid: FC<IGridProps> = ({ gridExtraClass, children }) => {
  return (
    <>
      <div className={`grid ${gridExtraClass ? gridExtraClass.join(" ") : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Grid;
