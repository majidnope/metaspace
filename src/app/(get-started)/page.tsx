"use client";

import Image from "next/image";
import sx from "./page.module.scss";
import Login from "@/components/pages/login/Login";
import { useState } from "react";
import Register from "@/components/pages/register/Register";
import Brand from "@/components/common/svg/brand/Brand";

export default function Home() {
  const [cast, setCast] = useState(false);

  return (
    <section className={sx.main}>
      <Login open={cast} castHandle={setCast} />

      <div className={sx.brand}>
        <Brand scale={1} />
        {/* <button onClick={() => setCast((i: boolean) => !i)}>login</button> */}
        <h2>METASPACE</h2>
      </div>

      <Register open={!cast} castHandle={setCast}/>
    </section>
  );
}
