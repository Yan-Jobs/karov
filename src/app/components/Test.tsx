"use client";
// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import crocodile from "../assets/crocodile.jpg";
import mondzia from "../assets/mondzia.jpg";
import anotherone from "../assets/another-one.jpg";
import "./test.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function One() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section>
    <div ref={ref}>
      <img src={crocodile.src} alt="" />
    </div>
    <motion.h2 style={{ y }}>{`The Crocodile`}</motion.h2>
  </section>
  );
}
// function Two() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
//   return (
//     <section>
//       <div ref={ref}>
//         <img src={expensive.src} alt="" />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </section>
//   );
// }
function Three() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (

    <section>
    <div ref={ref}>
      <img src={anotherone.src} alt="" />
    </div>
    <motion.h2 style={{ y }}>{`Another`}</motion.h2>
  </section>
  );
}
function Four() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section>
    <div ref={ref}>
      <img src={mondzia.src} alt="" />
    </div>
    <motion.h2 style={{ y }}>{`The Mondzia`}</motion.h2>
  </section>
  );
}

export default function Test() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <>
    <One />

    <Three />
    <Four />

      

    </>
  );
}
