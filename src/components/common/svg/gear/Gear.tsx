import React, { useEffect, useState } from "react";
import GearSvg from "./gear.svg";
import sx from "./Gear.module.scss";

export const Gear: React.FC<{
  spin?: boolean;
  style?: any;
}> = ({ spin, style }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
    setTimeout(() => {
      setPlay(false);
    }, 1000);
  }, [spin]);

  return (
    <>
      <GearSvg
        className={sx.svg}
        style={{ animationPlayState: play ? "running" : "paused" }}
      />
      <GearSvg
        className={sx.secondGear}
        style={{ animationPlayState: play ? "running" : "paused", ...style }}
      />
    </>
  );
};
