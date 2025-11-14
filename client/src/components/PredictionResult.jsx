const PredictionResult = ({homeTeam, awayTeam, prediction}) => {
  const homeTeamWins = prediction.homeWin;

  return(
    <div>
      <h2>Prediction</h2>
      <div>
        <div>
          <h2>Home</h2>
          <img src={homeTeam.img} />
          <h3>{homeTeam.value}-{homeTeam.label}</h3>
          {homeTeamWins ? <p><span>WIN</span></p> : <p><span>LOSE</span></p>}
        </div>

        <div>
          VS.
        </div>

        <div>
          <h2>Away</h2>
          <img src={awayTeam.img} />
          <h3>{awayTeam.value}-{awayTeam.label}</h3>
          {homeTeamWins ? <p><span>LOSE</span></p> : <p><span>WIN</span></p>}
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;