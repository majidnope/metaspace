"use client";
import React from "react";
import Button from "@/components/common/MetaButtons/baseButton/Button";
import { useRouter } from "next/navigation";

import sx from "./page.module.scss";

const Space = () => {
  const route = useRouter();
  return <div>Hello</div>
};

export default Space;
