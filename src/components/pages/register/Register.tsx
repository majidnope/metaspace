import sx from "./Register.module.scss";

import React from "react";

interface regProps {
  open: boolean;
}

const Register: React.FC<regProps> = ({ open }) => {
  return (
    <div
      className={sx.container}
      style={{ transform: `translateY(${open ? "-100%" : "0%"})` }}
    ></div>
  );
};

export default Register;
