import React, { useState } from "react";
import sx from "./login.module.scss";
import { Gear } from "@/components/common/svg/gear/Gear";

import { signIn, signOut} from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

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

      <div className={sx.holder}>
        <GoogleIcon className={sx.icon} onClick={() => signIn("google")} />
        <GitHubIcon className={sx.icon} onClick={() => signIn("github")} />
      </div>
    </div>
  );
};

export default Login;
