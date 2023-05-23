import React, { useRef, useState } from "react";
import sx from "./login.module.scss";
import { Gear } from "@/components/common/svg/gear/Gear";

import { signIn, signOut } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

interface LoginProps {
  open: boolean;
  castHandle: (state: any) => void;
}

const Login: React.FC<LoginProps> = ({ open, castHandle }) => {

  const [blur, setBlur] = useState(0);
  return (
    <div
      className={sx.container}
      style={{
        transform: `translateY(${open ? "100%" : "0%"})`,
        backdropFilter: `blur(${blur}px)`,
      }}
    >
      <Gear spin={open} />

      <div className={sx.holder}>
        <GoogleIcon
          onMouseOver={() => setBlur(3)}
          onMouseOut={() => setBlur(0)}
          className={sx.icon}
          onClick={() => signIn("google")}
        />
        <GitHubIcon
          onMouseOver={() => setBlur(3)}
          onMouseOut={() => setBlur(0)}
          className={sx.icon}
          onClick={() => signIn("github")}
        />
      </div>
    </div>
  );
};

export default Login;
