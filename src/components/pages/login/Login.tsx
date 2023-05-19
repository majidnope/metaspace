import React, { useState } from "react";
import sx from "./login.module.scss";
import { Gear } from "@/components/common/svg/gear/Gear";
import { MetaText } from "@/components/common/MetaFields/MetaText";
import Button from "@/components/common/MetaButtons/baseButton/Button";

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
        <MetaText type="text" name="name" label="Your name" />
        <MetaText type="password" name="password" label="Your password" />

        <Button />
        <p
          color="white"
          onClick={() => castHandle(true)}
          data-content="I don't have account? "
        >
          register
        </p>
      </form>
    </div>
  );
};

export default Login;
