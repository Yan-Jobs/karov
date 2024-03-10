"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import "./filiales.css";
import seagull from "../assets/seagull.jpeg";
import filiale2 from "../assets/filiale2.jpeg";
import dandenong from "../assets/dandenong.jpeg";
import verre from "../assets/verre.png";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function SeaGull() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref});
  const y = useParallax(scrollYProgress, 300);
  return (
      <section>
        <div ref={ref} className="w-[600px] bg-white">
          <text className="block text-6xl pb-4 font-bold">
            {"SeaGull"}
          </text>
          <text className="block">{"Pays ateliers : mines de diamants au Botswana, d’or en Afrique du Sud."}</text>
          <text
              className="block">{"Moyen de fabrication : Assemblage dans les usines par des ouvriers formés et spécialisés"}</text>
          <text className="block">{"Implantation locale : main d’œuvre qualifié et réputée, peu chère "}</text>
          <text className="block">{"Situé à Tianjin, Chine"}</text>
          <text
              className="block">{"Moyen d’acheminement : Hub de Tianjin, aéroport international jusqu’à l’aéroport de Genève, puis Camion"}</text>
        </div>
        <motion.img
            className="left-[calc(50%+300px)] map w-[393px] h-[500px] rounded-2xl"
            style={{y}}
            src={seagull.src}
        ></motion.img>
      </section>
  )
}

function Filiale2() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref});
  const y = useParallax(scrollYProgress, 300);
  return (<section>
    <div ref={ref} className="w-[600px] bg-white">
      <text className="block text-6xl pb-4 font-bold">
        {"Safaira"}
      </text>
      <text
          className="block">{"Raisons :à proximité d’une mine de saphir, Main d’œuvre peu coûteuse pour la qualification nécessaire "}</text>
      <text
          className="block">{"Moyens de fabrication - Recherche des pierres précieuses dans la mine, puis acheminement de ceux-ci vers l’atelier Transformation des pierres saphirs en verre de saphir synthétisés dans un des plus grands ateliers mis en place à proximité de la mine"}</text>
      <text className="block">{"Moyens d’acheminement : voie maritime : Port de Hai Phong"}</text>
      <text className="block">{"mines de la région de Luc Yen au Nord-Est du Vietnam."}</text>
      <img src={verre.src} className={"rounded-2xl"}></img>
    </div>
    <motion.img
        className="left-[calc(50%+300px)] map w-[393px] h-[500px] rounded-2xl"
        style={{y}}
        src={filiale2.src}
    ></motion.img>
  </section>)
}

function Dandenong() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref});
  const y = useParallax(scrollYProgress, 300);
  return (<section>
        <div ref={ref} className="w-[600px] bg-white">
          <text className="block text-6xl pb-4 font-bold">
            {"Dandenong"}
          </text>
          <text className="block">{"Raisons:\n" +
              "Très réputé pour ses mines : L'Australie est le premier producteur de bauxite, d'alumine… , le deuxième producteur d'or, de minerai de fer, plomb.., le troisième producteur d'uranium, de zinc.., le quatrième de charbon et d'argent,\n" +
              "Spécialisé dans les minerais\n" +
              "Proximité des mines \n" +
              "Main d’œuvre qualifié "}</text>
          <text className="block">{"Moyens de fabrications : \n" +
              "Usines et machines : transformation des matières (fer) en acier : aciérie \n" +
              "Savoir faire \n" +
              "Main d’œuvre "}</text>
          <text className="block">{"Moyen d’acheminement :\n" +
              "Port de Melbourne \n" +
              "Port de Rotterdam \n" +
              "Chemin de fer : ligne Rotterdam Lausanne puis Lausanne Geneve (nouvelle)"}</text>
          <text className="block">{"Adresse : 55 Monash Dr, Dandenong South VIC 3175, Australie"}</text>

        </div>
        <motion.img
            className="left-[calc(50%+300px)] map w-[393px] h-[500px] rounded-2xl"
        style={{y}}
        src={dandenong.src}
    ></motion.img>
  </section>
  )
}

export const Filiale = (props: any) => {

  return (
      <>
          <div ref={props.refProp}></div>
        <SeaGull />
        <Filiale2 />
        <Dandenong />
      </>
  );
}
