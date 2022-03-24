function Hero() {
  return (
    <div className="flex flex-col space-y-2 my-8">
      <div class="text-left text-2xl font-light text-white">👋 I am</div>
      <div className="text-left text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
          Fernando Molano
        </span>
      </div>
      <div class="text-left text-2xl font-light text-white">
        Frontend Developer
      </div>
    </div>
  );
}

export default Hero;
