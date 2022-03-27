import { useState } from "react";
import ExtendedSummary from "./ExtendedSummary";
import ShortSummary from "./ShortSummary";
import { IoMdArrowDropright } from "react-icons/io";

function Hero() {
  const [summary, setSummary] = useState("Short");
  return (
    <div
      id="home"
      className="w-full flex flex-col space-y-2 mt-12 mb-8 px-4 pb-12 h-auto items-start border-solid border-b-2 border-slate-700 sm:items-center"
    >
      <div>
        <div className="text-left text-7xl font-extrabold -mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
            Fernando
          </span>
        </div>
        <div className="text-left text-7xl font-extrabold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
            Molano
          </span>
        </div>
        <div className="text-left text-3xl font-light text-white tracking-widest">
          Software Developer
        </div>
      </div>
      <div id="about-me" className="text-left text-white space-y-6">
        <div className="flex w-full items-center justify-around gap-2 mt-14 mb-12">
          <button
            onClick={() => setSummary("Short")}
            className={`${
              summary === "Short" ? "ring-offset-1" : "ring-offset-0"
            } px-4 py-2 rounded-md text-teal-400 hover:ring-offset-1 ring-1 ring-blue-300 hover:-translate-y-0.5 ease-linear duration-300`}
          >
            Short summary
          </button>
          <button
            onClick={() => setSummary("Extended")}
            className={`${
              summary === "Extended" ? "ring-offset-1" : "ring-offset-0"
            } px-4 py-2 rounded-md text-teal-400 hover:ring-offset-1 ring-1 ring-blue-300 hover:-translate-y-0.5 ease-linear duration-300 relative`}
          >
            <span
              className={`${
                summary !== "Extended"
                  ? "animate-ping absolute top-0 right-0 rounded-full h-2 w-2 bg-teal-400 z-0"
                  : "animate-none"
              } `}
            ></span>
            Extended summary
          </button>
        </div>
        {summary === "Short" ? <ShortSummary /> : <ExtendedSummary />}
        <div className="text-xl">
          <p className="mt-12 font-bold bg-clip-text text-transparent bg-teal-400">
            Work with:
          </p>
          <div className="grid grid-cols-2 text-lg">
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">
                JavaScript <span className="text-slate-300">(ES6+)</span>
              </span>
            </div>
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">ReactJS</span>
            </div>
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">Python</span>
            </div>
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">Django</span>
            </div>
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">Tailwindcss</span>
            </div>
            <div className="flex items-center justify-start">
              <span>
                <IoMdArrowDropright color="#2dd4bf" />
              </span>
              <span className="text-white">MySQL</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 md:-top-8 md:left-20 rounded-full bg-teal-600 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -top-30 left-40 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 md:-top-8 md:left-60 rounded-full bg-slate-400 blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute -top-40 left-60 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 md:-top-8 md:left-80 rounded-full bg-cyan-600 blur-3xl animate-blob"></div>
        </div>
        <div className="w-full h-48 flex items-center justify-center">
          <img
            className="rounded-full w-auto h-full mt-8 mix-blend-soft-light"
            src="https://avatars.githubusercontent.com/u/53359507?v=4"
            alt="Fernando Molano profile picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
