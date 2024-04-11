import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";

export default function Hero() {
  return (
    <div>
      {" "}
      <div className="pt-8">
        <div className="px-24 flex justify-center">
          <Image src={hero} alt="hero" width={450} height={450} />
        </div>
        <div className="pt-4">
          <div className="flex justify-center">
            <a className="text-white px-12 py-6 font-bold text-2xl bg-black">
              Plastic cat bag
            </a>
          </div>
          <p className="pt-4 px-36">
            MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow
            MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow
            MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow
            MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow
            MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow MeowMeowMeowMeow
            MeowMeowMeowMeow
          </p>
        </div>
      </div>
    </div>
  );
}
