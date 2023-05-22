import React from "react";
import sx from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={sx.header}>
      <div className={sx.search}>
        <div className={sx.search_bar}>
          <input style={{background:"#1e1e1e"}} type="text" placeholder="search"/>
        </div>
      </div>
      <div className={sx.info}></div>
    </div>
  );
};
