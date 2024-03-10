"use client";
import { Navbar } from "@/app/components/Navbar";
import Test from "@/app/components/Test";
import {Filiale} from "./components/Filiales";
import {useRef} from "react";

export default function Home() {
    const ref = useRef(null);
  return (
      <main className={""}>
          <div className="h-1/6 snap-center pl-4 pr-4 pt-4">
              <div
                  className={
                      " flex flex-row items-center justify-center gap-x-6 text-center"
                  }
              >
                  <div className={"hover:underline"}>{"Mondzia"}</div>
                  <div className={""}>{"|"}</div>

                  <div className={"hover:underline"} onClick={() => {
                      //@ts-ignore
                      ref.current.scrollIntoView()
                  }}>{"Nos Partenaires"}</div>
              </div>
          </div>
          <Navbar/>
          <Test/>
          <Filiale refProp={ref}/>
      </main>
  );
}
