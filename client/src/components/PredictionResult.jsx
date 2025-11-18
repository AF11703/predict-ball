const PredictionResult = ({homeTeam, awayTeam, prediction}) => {
  const homeTeamWins = prediction.homeWin;

  return(
    <div className="flex flex-col items-center justify-center mt-40 w-full">
      <h2 className="-translate-y-7 text-2xl font-mono font-bold">Prediction</h2>
      <div className="flex gap-12 items-center justify-center bg-gray-700/40 from-gray-950 to-gray-700 border border-gray-400/60 shadow-2xs shadow-white drop-shadow-xs drop-shadow-white/15 bg-linear-210 rounded-2xl px-32 py-12">
        <div className={homeTeamWins ? "font-black flex flex-col items-center space-y-4 border-2 border-green-300 shadow-md shadow-green-300 rounded-2xl w-5/12 mr-7 bg-green-300/75" : "flex font-black flex-col items-center space-y-4 border-2 border-red-300 shadow-md shadow-red-400 rounded-2xl w-5/12 mr-7 bg-red-300/75"}>
          <h2>Home</h2>
          <img className="w-24 h-24 object-contain rounded-md" src={homeTeam.img} />
          <h3>{homeTeam.value}<br/>{homeTeam.label}</h3>
          {homeTeamWins ? <p><span className="text-green-800">WIN</span></p> : <p><span className="text-red-700">LOSE</span></p>}
        </div>

        <div className="self-center -translate-y-12 text-xl font-bold text-shadow-2xs text-white/20 text-shadow-white">
          VS.
        </div>

        <div className={homeTeamWins ? "flex font-black flex-col items-center space-y-4 border-2 border-red-300 shadow-md shadow-red-400 rounded-2xl w-5/12 ml-7 bg-red-300/75" : "flex font-black flex-col items-center space-y-4 border-2 border-green-300 shadow-md shadow-green-400 rounded-2xl w-5/12 ml-7 bg-green-300/75"}>
          <h2>Away</h2>
          <img className="w-24 h-24 object-contain rounded-md" src={awayTeam.img} />
          <h3>{awayTeam.value}<br/>{awayTeam.label}</h3>
          {homeTeamWins ? <p><span className="text-red-700">LOSE</span></p> : <p><span className="text-green-800">WIN</span></p>}
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;