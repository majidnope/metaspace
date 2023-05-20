import React from "react";
import styles from "./MetaText.module.scss";

type TypeEnum = "text" | "password" | "email";

interface InputProps {
  name: string;
  onChange?: () => any;
  label?: string;
  type: TypeEnum;
  [key: string]: any;
}

const MetaText: React.FC<InputProps> = ({
  name,
  onChange,
  label,
  type = "text",
  ...props
}) => {
  return (
    <div className={styles.holder} {...props}>
      <input placeholder={label} type={type} name={name} />
    </div>
  );
};

export default MetaText;
