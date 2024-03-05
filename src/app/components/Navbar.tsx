import Image from "next/image";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <div className="h-1/6 snap-center pl-4 pr-4 pt-4">
      <div
        className={
          " flex flex-row items-center justify-center gap-x-6 text-center"
        }
      >
        {/* <Image
                  className={"rotate-90"}
                  src={logo.src}
                  width={50}
                  height={50}
                  alt={"logo"}
              /> */}
        <div className={"hover:underline"}>{"Watches"}</div>
        <div className={"hover:underline"}>{"Production"}</div>
        <div className={"hover:underline"}>{"Nos partenaires"}</div>
        <div className={"hover:underline"}>{"About"}</div>
        <div className={"hover:underline"}>{"Buy"}</div>
      </div>
    </div>
  );
}
