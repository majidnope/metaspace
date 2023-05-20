import React from "react";
import BrandLogo from "./metaspace_cyan.svg";
import sx from "./Brand.module.scss";
const Brand: React.FC<{ scale: number; blink: boolean }> = ({
  scale = 1,
  blink,
}) => {
  return (
    <BrandLogo
      className={sx.brand}
      style={{ scale: scale, animationPlayState: blink ? "paused" : null }}
    />
  );
};

export default Brand;
