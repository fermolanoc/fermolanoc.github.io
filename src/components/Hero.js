function Hero() {
  return (
    <div className="snap-start flex flex-col space-y-2 mt-16 px-4 h-screen items-start">
      <div>
        <div className="text-left text-7xl font-extrabold -mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
            Fernando
          </span>
        </div>
        <div className="text-left text-7xl font-extrabold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
            Molano
          </span>
        </div>
        <div class="text-left text-3xl font-light text-white tracking-widest">
          Frontend Developer
        </div>
      </div>
      <div className="text-left text-white space-y-6">
        <div className="mt-20 text-xl">
          <p>
            <strong className="font-bold bg-clip-text text-transparent bg-teal-400">
              Software Developer
            </strong>{" "}
            graduated from{" "}
            <strong className="font-bold bg-clip-text text-transparent bg-teal-400">
              MCTC
            </strong>{" "}
            in 2021.
          </p>
        </div>
        <div className="text-xl">
          <p className="font-bold bg-clip-text text-transparent bg-teal-400">
            Works with:
          </p>
          <div className="flex flex-wrap justify-start items-center gap-x-4">
            <span className="text-slate-300">#Tailwindcss</span>
            <span className="text-slate-300">#JavaScript</span>
            <span className="text-slate-300">#ReactJS</span>
            <span className="text-slate-300">#Python</span>
            <span className="text-slate-300">#Django</span>
            <span className="text-slate-300">#SwiftUI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
