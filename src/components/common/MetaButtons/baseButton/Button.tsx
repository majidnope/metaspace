import React from "react";
import sx from "./Button.module.scss";
import styled from "styled-components";
const Button: React.FC<{ style?: object }> = ({ style, ...props }) => {
  const ButtonShake = styled.div`
    transition: transform 0.2s;

    &.shake {
      animation: shake 0.2s;
    }

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      20% {
        transform: translateX(-1px);
      }
      40% {
        transform: translateX(1px);
      }
      60% {
        transform: translateX(-1px);
      }
      80% {
        transform: translateX(1px);
      }
      100% {
        transform: translateX(0);
      }
    }
  `;
  const [shake, setShake] = React.useState(false);

  const handleClick = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 400);
  };
  return (
    <ButtonShake
      onClick={handleClick}
      style={{ ...style }}
      className={shake ? [sx.metaBtn, "shake"].join(" ") : sx.metaBtn}
      {...props}
    >
      login
    </ButtonShake>
  );
};

export default Button;
