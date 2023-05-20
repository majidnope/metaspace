"use client";

import Image from "next/image";
import sx from "./page.module.scss";
import Login from "@/components/pages/login/Login";
import { useEffect, useReducer, useState } from "react";
// import Register from "@/components/pages/register/Register";
import Brand from "@/components/common/svg/brand/Brand";
import { RgbLights } from "@/components/common/effects/RgbLights";
import { signOut, useSession } from "next-auth/react";
import Button from "@/components/common/MetaButtons/baseButton/Button";
import { useRouter } from "next/navigation";

import { motion as m } from "framer-motion";

export default function Home() {
  const [authState, setAuthState] = useState("loading");
  const [cast, setCast] = useState(false);
  const [power, setPower] = useState(true);

  const session = useSession();

  const route = useRouter();

  useEffect(() => {
    switch (session.status) {
      case "loading":
        setAuthState("loading");
        setCast(true);
        document.body.style.background = "";
        break;
      case "authenticated":
        setAuthState("authenticated");
        setPower(false);
        setCast(true);
        document.body.style.background = "#000";
        break;
      case "unauthenticated":
        setAuthState("unauthenticated");
        setCast(false);
        document.body.style.background = "";

        break;
      default:
        break;
    }
  }, [session]);

  return (
    <>
    
      <m.section className={sx.main}>
        <Login open={cast} castHandle={setCast} />
        {authState === "authenticated" && (
          <Image
            className={sx.profile}
            alt="profile"
            src={session.data?.user?.image ?? ""}
            width={100}
            height={100}
          />
        )}
        <div className={sx.brand}>
          <RgbLights power={power} />
          <Brand blink={authState === "authenticated"} scale={1} />

          {authState === "authenticated" ? (
            <h4>{session.data?.user?.name}</h4>
          ) : (
            <h2>METASPACE</h2>
          )}
        </div>
        {authState === "authenticated" && (
          <>
            <div className={sx.btnCloset}>
              <Button onClick={() => signOut()}>Sign Out</Button>

              <Button onClick={() => route.push("/space")}>
                Open my space
              </Button>
            </div>
          </>
        )}
      </m.section>
    </>
  );
}
