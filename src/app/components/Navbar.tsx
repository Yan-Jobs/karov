import Image from "next/image";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <div className="h-1/6 pr-4 pl-4 ">
        <div
            className={
                " justify-center text-center items-center flex-row flex gap-x-6"
            }
        >
            <Image
                className={"rotate-90"}
                src={logo.src}
                width={50}
                height={50}
                alt={"logo"}
            />
            <div className={"hover:underline"}>{"Watches"}</div>
            <div className={"hover:underline"}>{"Production"}</div>
            <div className={"hover:underline"}>{"Nos partenaires"}</div>
            <div className={"hover:underline"}>{"About"}</div>
            <div className={"hover:underline"}>{"Buy"}</div>
        </div>
    </div>
  );
}
