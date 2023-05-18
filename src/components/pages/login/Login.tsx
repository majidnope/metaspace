import React, { useState } from "react";
import sx from "./login.module.scss";
import { Gear } from "@/components/common/svg/gear/Gear";

interface LoginProps {
  open: boolean;
  castHandle: (state: any) => void;
}

const Login: React.FC<LoginProps> = ({ open, castHandle }) => {
  return (
    <div
      className={sx.container}
      style={{ transform: `translateY(${open ? "100%" : "0%"})` }}
    >
      <Gear spin={open} />
      <form id={sx.login_form} action="">
        <p color="white" onClick={() => castHandle(true)}>
          register
        </p>
      </form>
    </div>
  );
};

export default Login;
