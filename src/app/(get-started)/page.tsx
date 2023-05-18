"use client";

import Image from "next/image";
import sx from "./page.module.scss";
import Login from "@/components/pages/login/Login";
import { useState } from "react";
import Register from "@/components/pages/register/Register";

export default function Home() {
  const [cast, setCast] = useState(false);

  return (
    <section className={sx.main}>
      <Login open={cast} />

      <div className={sx.brand}>
        {/* <button onClick={() => setCast((i: boolean) => !i)}>login</button> */}
        <h2>METASPACE</h2>
      </div>

      <Register open={!cast} />

    </section>
  );
}
