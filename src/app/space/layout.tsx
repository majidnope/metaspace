"use client";
import React from "react";
import sx from "./layout.module.scss";
import { motion as m } from "framer-motion";
const SpaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={sx.layout}>
      <m.header
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
        className={sx.header}
      ></m.header>
      <m.aside
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className={sx.sidebar}
      >
        j
      </m.aside>
      <m.div
        initial={{ scaleZ: "5", rotate: "360deg" }}
        animate={{ scaleZ: "1", rotate: "0deg" }}
        transition={{ duration: 1.2 }}
        className={sx.body}
      >
        {children}
      </m.div>
      <m.aside
        initial={{ height: "0%", position: "absolute", bottom: "0" }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
        className={sx.info}
      >
        m
      </m.aside>
    </div>
  );
};

export default SpaceLayout;
