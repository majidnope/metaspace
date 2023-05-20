import React from "react";
import sx from "./Button.module.scss";

const Button: React.FC<{
  style?: object;
  children: any;
  [key: string]: any;
}> = ({ style, children, ...props }) => {
  const [shake, setShake] = React.useState(false);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 400);
  };
  return (
    <button
      onClick={handleClick}
      style={{ ...style }}
      className={sx.metaBtn}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
