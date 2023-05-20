import sx from "./Register.module.scss";

import React from "react";

interface regProps {
  open: boolean;
  castHandle: (state: any) => void;
}

const Register: React.FC<regProps> = ({ open, castHandle }) => {
  return (
    <div
      className={sx.container}
      style={{ transform: `translateY(${open ? "-100%" : "0%"})` }}
    >
      <form id={sx.reg_form} action="">
        <p onClick={() => castHandle(false)}>login</p>
      </form>
    </div>
  );
};

export default Register;
