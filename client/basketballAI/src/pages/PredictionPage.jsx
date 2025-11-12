import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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
}

const PredictionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [prediction, setPrediction] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { homeTeam, awayTeam } = location.state || {};
  useEffect(() => {
    if (!homeTeam || !awayTeam) {
      navigate("/");
      return;
    }

    const homeAbbr = homeTeam.value;
    const awayAbbr = awayTeam.value;

    const fetchPrediction = async () => {
      setError(null);

      try {
        const responseHome = await axios.get(`http://localhost:3000/api/games/${homeAbbr}`);
        const responseAway = await axios.get(`http://localhost:3000/api/games/${awayAbbr}`);

        const homeAvgs = averageTeamStats(responseHome.data);
        const awayAvgs = averageTeamStats(responseAway.data);


        const response = await axios.post("http://localhost:3000/api/games/predict", {
          homeTeam: homeAvgs,
          awayTeam: awayAvgs
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        console.log(response.data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    }

    fetchPrediction();
  }, [homeTeam, awayTeam, navigate]);
}

export default PredictionPage;