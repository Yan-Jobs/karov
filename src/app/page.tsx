import Image from "next/image";
import expensiveWatchDiamonds from "./assets/expensive-watch-diamonds.jpg";
import aLotOfDias from "./assets/lots-of-dias.jpg";
import anotherOne from "./assets/another-one.jpg";
import { Navbar } from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={"h-full w-full gap-3"}>
        <div className={"flex flex-col"}>
          <div
            className={"w-full flex-wrap sm:flex-nowrap flex pr-4 gap-3 pl-4"}
          >
            <div className={"w-full"}>
              <Image
                src={expensiveWatchDiamonds.src}
                width={500}
                height={500}
                alt={""}
              />
            </div>
            <div className={"w-full"}>
              <Image src={aLotOfDias.src} width={500} height={500} alt={""} />
            </div>
            <div className={"w-full"}>
              <Image src={anotherOne.src} width={500} height={500} alt={""} />
            </div>
          </div>
          <div className={"flex-col justify-center items-center flex gap-8 pt-6"}>
            <div>
              <div className={"text-center"}>
                <h1 className={"text-4xl"}>{"Perfection, à l'état pur."}</h1>
              </div>
              <div className={"text-center"}>
                <text className={"text-xl"}>
                  {"Nos montres les plus prestigieuses, rien que pour vous."}
                </text>
              </div>
            </div>

            <div className={"text-center w-[1/15] p-3 border-black border-2 hover:bg-black hover:text-white transition ease-in-out duration-500"}>
              <text className={"italic"}>
                {"Plus d'informations"}
              </text>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
