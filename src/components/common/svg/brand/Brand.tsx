import React from "react";
import BrandLogo from "./metaspace_cyan.svg";
import sx from "./Brand.module.scss";
const Brand: React.FC<{ scale: number }> = ({
  scale,
  
}) => {
  return <BrandLogo className={sx.brand} style={{ scale: 1 }} />;
};

export default Brand;
