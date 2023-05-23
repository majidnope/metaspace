"use client";
import React from "react";
import sx from "./layout.module.scss";
import { motion as m } from "framer-motion";
import { Header } from "@/components/pages/header/Header";
import Image from "next/image";
import Logo from "@/assets/svg/metaspace.svg";
import { routes } from "@/config/routes";
import NavPanel from "@/components/pages/navpanel/NavPanel";

const SpaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={sx.layout}>
      {/* header */}
      <m.header
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
        className={sx.header}
      >
        <Header />
      </m.header>
      {/* sidebar */}
      <m.aside
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className={sx.sidebar}
      >
        <div className={sx.sideHead}>
          <Logo width="40px" />
          <h3>Metaspace</h3>
        </div>
        <NavPanel routes={routes} />
      </m.aside>
      {/* body */}
      <m.div
        initial={{ width: 0, height: 0 }}
        animate={{
          width: "",
          height: "",
          scale: [0, 0, 1],
          rotate: [0, 239, 0],
        }}
        transition={{ duration: 1.2 }}
        className={sx.body}
      >
        {children}
      </m.div>
      {/* info sidebar */}
      <m.aside
        initial={{ height: "0%", position: "absolute", bottom: "0" }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.2 }}
        className={sx.info}
      ></m.aside>
    </div>
  );
};

export default SpaceLayout;
