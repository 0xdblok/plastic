import React from "react";
import "animate.css";
export default function Token() {
  return (
    <div>
      {" "}
      <div className="animate__animated animate__fadeInUp pt-36 flex justify-center">
        <a className="text-white px-12 py-6 font-bold text-2xl  lg:text-3xl lg:px-16 lg:py-9 bg-black">
          Tocatnomics
        </a>
      </div>
      <div>
        <h1 className="animate__animated animate__fadeInUp pt-3 text-center lg:text-3xl font-bold text-2xl">
          1,000,000,000
        </h1>
        <p className="animate__animated animate__fadeInUp pt-1 font-semibold lg:text-lg  text-center">
          that’s all!
        </p>
        <div className="animate__animated animate__fadeInUp flex pt-20 lg:text-lg font-semibold justify-evenly">
          <p>that’s all!</p>
          <p>that’s all!</p>
        </div>
      </div>
      <p className="animate__animated animate__fadeInUp animate__animated animate__fadeInUp text-center lg:text-lg font-semibold pt-24">
        CA :
      </p>
      <div className="">
        {" "}
        <div className="animate__animated animate__fadeInUp pt-40 flex justify-center">
          <a className="text-white  lg:text-3xl lg:px-16 lg:py-9 px-14 py-6 font-bold text-2xl bg-black">
            Updating...
          </a>
        </div>{" "}
        <div>
          <div className="animate__animated animate__fadeInUp flex lg:text-lg  pt-12 px-28 justify-evenly">
            <p className="font-semibold ">that’s all!</p>
            <p className="font-semibold">that’s all!</p>
          </div>{" "}
          <p className="animate__animated animate__fadeInUp pt-20 text-center lg:text-lg  font-semibold pt-10">
            that’s all!
          </p>
        </div>
      </div>
    </div>
  );
}
