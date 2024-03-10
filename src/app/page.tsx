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
      <Filiale />
    </main>
  );
}
