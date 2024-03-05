"use client";
import { Navbar } from "@/app/components/Navbar";
import Test from "@/app/components/Test";
import { ReactTyped } from "react-typed";
import Filiale from "./components/Filiales";

export default function Home() {
  return (
    <main className={""}>
      <Navbar />
      <Test />

      {/* <div
        className={
          "absolute h-[100vh] w-full snap-center flex items-center text-center justify-center"
        }
      >
          <ReactTyped
            startWhenVisible
            strings={["Want to know more?"]}
            typeSpeed={40}
            className="block pt-4 text-4xl"
          />

      </div> */}
      <Filiale />
    </main>
  );
}
