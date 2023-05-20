import sx from "./rgb.module.scss";

import React from "react";

export const RgbLights: React.FC<{ children?: any; power: boolean }> = ({
  children,
  power,
}) => {
  return (
    <div style={{ opacity: power ? "1" : "0"}} className={sx.holder}>
      {children}
    </div>
  );
};
