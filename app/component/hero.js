import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import meow from "../asset/meow.png";
export default function Hero() {
  return (
    <div>
      {" "}
      <div className="pt-8 lg:flex lg:justify-center lg">
        <div className="px-24  lg:px-0  flex justify-center">
          <Image src={hero} alt="hero" width={350} height={350} />
        </div>
        <div className="pt-4 ">
          <div className="flex justify-center ">
            <a className="text-white px-12 py-6 font-bold text-2xl lg:text-3xl lg:px-16 lg:py-9 bg-black">
              Plastic cat bag
            </a>
          </div>
          <div className="flex justify-center px-24 lg:px-0 pt-4 lg:pl-4">
            <Image src={meow} alt="hero" width={450} height={480} />
          </div>
        </div>
      </div>
    </div>
  );
}
