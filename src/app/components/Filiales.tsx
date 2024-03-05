"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import expensive from "../assets/expensive-watch-diamonds.jpg";
import "./filiales.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Filiale() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <>
      <section>
        <div ref={ref} className="w-[600px] bg-white">
          <text className="block text-6xl pb-4 font-bold">
            {"Boitier et Ornement"}
          </text>
          <text className="block">
            {
              "Les ornements proviennent de diamants  extraits au Botswana et d'Or extrait de mines en Afrique du Sud, situées dans la région de Witwatersrand."
            }
          </text>
          <text className="block">
            {
              "Le boitier est en or 18 carats, un alliage d'or, de cuivre et de platine, qui garantit une couleur et une durabilité exceptionnelles."
            }
          </text>
          <text className="block">
            {
              "Celui-ci est assemblé dans les usines de SeaGull situées à Shenzhen, en Chine, par une main d'oeuvre peu chère et qualifiée."
            }
          </text>
          <text className="block">
            {
              "Le boitier fini est ensuite achmenié par avion en passant par le hub de Tianjin avant d'arriver à l'aéroport international de Genève, où il sera ensuite achmenié par camion jusqu'à nos ateliers."
            }
          </text>
        </div>
        <motion.h2
          className="left-[calc(50%+300px)]"
          style={{ y }}
        >{`SeaGull`}</motion.h2>
      </section>
    </>
  );
}
