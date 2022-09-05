import * as React from "react";
import { FC } from "react";
import { IGridColProps } from "./types";

const GridCol: FC<IGridColProps> = ({
  defaultCol,
  mobile,
  tablet,
  tabletLandscape,
  desktop,
  lgDesktop,
  offsetMobile,
  offsetTablet,
  offsettabletLandscape,
  offsetDesktop,
  offsetLgDesktop,
  gridColExtraClass,
  children,
}) => {
  return (
    <div
      className={`grid__col--${defaultCol || 12} ${
        mobile ? `grid__col--xs-${mobile}` : ""
      } ${tablet ? `grid__col--sm-${tablet}` : ""} ${
        tabletLandscape ? `grid__col--md-${tabletLandscape}` : ""
      } ${desktop ? `grid__col--lg-${desktop}` : ""} ${
        lgDesktop ? `grid__col--xl-${lgDesktop}` : ""
      } ${gridColExtraClass} ${
        offsetMobile ? `grid__offset--xs-${offsetMobile}` : ""
      } ${offsetTablet ? `grid__offset--sm-${offsetTablet}` : ""} ${
        offsettabletLandscape ? `grid__offset--md-${offsettabletLandscape}` : ""
      } ${offsetDesktop ? `grid__offset--lg-${offsetDesktop}` : ""} ${
        offsetLgDesktop ? `grid__offset--xl-${offsetLgDesktop}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default GridCol;
