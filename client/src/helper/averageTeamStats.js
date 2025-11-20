const averageTeamStats = (data) => {
  let fgPctSum = 0;
  let ftPctSum = 0;
  let fg3PctSum = 0;
  let astSum = 0;
  let rebSum = 0;

  const { games, length } = data;

  games.forEach(game => {
    fgPctSum += game.FG_PCT * 100;
    ftPctSum += game.FT_PCT * 100;
    fg3PctSum += game.FG3_PCT * 100;
    astSum += game.AST;
    rebSum += game.REB;
  });

  return {
    FG_PCT: parseFloat((fgPctSum / length).toFixed(1)),
    FT_PCT: parseFloat((ftPctSum / length).toFixed(1)),
    FG3_PCT: parseFloat((fg3PctSum / length).toFixed(1)),
    AST: Math.round(astSum / length),
    REB: Math.round(rebSum / length)
  };
};

export default averageTeamStats;