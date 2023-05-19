import React from "react";
import sx from "./MetaText.module.scss";

type typeEnum = "text" | "password" | "email";

interface inputProps {
  name: string;
  onChange?: () => any;
  label?: string;
  type: typeEnum;
}
export const MetaText: React.FC<inputProps> = ({
  name,
  onChange,
  label,
  type,
}) => {
  return (
    <>
      <div className={sx.holder}>
        <input placeholder={label} type={type} name={name} />
      </div>
    </>
  );
};
