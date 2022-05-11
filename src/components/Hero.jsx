import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/outline";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col w-full md:items-start justify-center px-2 py-8 mt-20 md:mt-0">
          <p className="text-2x">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full h-[90%]" src="/assets/cyber.png" alt="cyber"  />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-300 border border-slate-300 rounded-xl text-center shadow-xl">
            <p>Data Services</p>
            <div className="flex px-4 justify-between mt-3">
                <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-indigo-600" /> App Security</p>
                <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-indigo-600" /> Dashboard</p>
                <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-600" /> Cloud Data</p>
                <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-indigo-600" /> API</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
