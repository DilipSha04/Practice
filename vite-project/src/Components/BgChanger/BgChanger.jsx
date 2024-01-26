import React, { useState } from "react";

const BgChanger = () => {
  let [bgcolor, setBgColor] = useState("");

  return (
    <div
      className="w-full h-[100vh] flex justify-center"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="my-auto space-x-4 bg-slate-200 px-4 py-2 rounded-l">
        <button
          className="bg-red-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
        <button
          className="bg-purple-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("purple")}
        >
          Purple
        </button>
        <button
          className="bg-yellow-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-blue-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-violet-500 px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("violet")}
        >
          Voilet
        </button>
        <button
          className="bg-black px-2 py-1 rounded-md text-white"
          onClick={() => setBgColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default BgChanger;
