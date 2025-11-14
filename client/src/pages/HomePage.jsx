const HomePage = () => {
  return (
    <div className="flex flex-col bg-linear-120 from-gray-950 to-emerald-400 border border-teal-500 rounded-2xl items-center justify-center self-center my-40 py-20 shadow-2xl shadow-emerald-400 drop-shadow-xs drop-shadow-emerald-300/40">
      <h1 className="text-4xl pb-4 font-sans font-black">Predict Ball</h1>
      <p className="text-xl font-light font-serif">Select two NBA teams and predict who wins between them based on recent performance!</p>
      <a className="border-2 border-emerald-400 rounded-lg p-2 bg-gray-900 hover:bg-emerald-500 hover:font-medium translate-y-10" href="/teamSelect">Get Started</a>
    </div>
  );
};

export default HomePage;