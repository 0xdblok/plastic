import React from "react";

export default function Token() {
  return (
    <div>
      {" "}
      <div className="pt-32 flex justify-center">
        <a className="text-white px-12 py-6 font-bold text-2xl bg-black">
          Tocatnomics
        </a>
      </div>
      <div>
        <h1 className="pt-3 text-center font-bold text-2xl">1,000,000,000</h1>
        <p className="pt-1 font-semibold text-center">that’s all!</p>
        <div className="flex pt-20 font-semibold justify-evenly">
          <p>that’s all!</p>
          <p>that’s all!</p>
        </div>
      </div>
      <div className="">
        {" "}
        <div className="pt-40 flex justify-center">
          <a className="text-white px-14 py-6 font-bold text-2xl bg-black">
            Updating...
          </a>
        </div>{" "}
        <div>
          <div className="flex pt-12 px-28 justify-evenly">
            <p className="font-semibold ">that’s all!</p>
            <p className="font-semibold">that’s all!</p>
          </div>{" "}
          <p className="pt-20 text-center font-semibold pt-10">that’s all!</p>
        </div>
      </div>
    </div>
  );
}
