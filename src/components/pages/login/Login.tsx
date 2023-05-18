import React, { useState } from "react";
import sx from "./login.module.scss";
import { Gear } from "@/components/common/svg/gear/Gear";

interface LoginProps {
  open: boolean;
}

const Login: React.FC<LoginProps> = ({ open }) => {
  return (
    <div
      className={sx.container}
      style={{ transform: `translateY(${open ? "100%" : "0%"})` }}
    >
      <Gear spin={open} />
    </div>
  );
};

export default Login;
