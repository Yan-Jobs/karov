"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import mondzia from "../assets/mondzia.jpg";
import "./test.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Mondzia() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section>
    <div ref={ref}>
      <img src={mondzia.src} alt="" className={"img"}/>
    </div>
    <motion.h2 style={{ y }}>{`La Mondzia`}</motion.h2>
  </section>
  );
}

export default function Test() {
  return (
    <>
    <Mondzia />
    </>
  );
}
