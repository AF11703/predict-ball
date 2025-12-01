import axios from "axios";
import { StatusCodes } from "http-status-codes";
import STAT_CATEGORIES from "../stat_categories.js";
import dotenv from "dotenv";
dotenv.config();

const dataUrl = process.env.STATS_URL;
const config = {
  headers: {
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "Referer": "https://www.nba.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
  }
};


const filterForRecentGames = (games, numOfGames = 10) =>  {
  if (games.length <= numOfGames) {
    return games;
  }

  return games
    .sort((gameA, gameB) => gameB.GAME_DATE - gameA.GAME_DATE)
    .slice(0, numOfGames);
};

export const getAllGamesStats = async(req, res) => {
  try {
    const apiResponse = await axios.get(dataUrl, config);
    const gameData = apiResponse.data.resultSets[0].rowSet;

    gameData.forEach((gameArray, index, parentArray) => {
      const gameObj = {}
      gameArray.forEach((element, index) => {
        const stat_category = Object.keys(STAT_CATEGORIES)[index];
        gameObj[stat_category] = element;
      })
      parentArray[index] = gameObj;
    });

    res.json({length: gameData.length, games: gameData});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
  }
};

export const getTeamsGameStats = async(req, res) => {
  const limit = req.query.limit || 10;
  let teamAbbreviation = req.params.abbr;

  if (!teamAbbreviation) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Team abbreviation is required' });
  }

  if (teamAbbreviation.length !== 3) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Team abbreviation must be 3 characters long' });
  }

  teamAbbreviation = teamAbbreviation.toUpperCase();

  try {
    const apiResponse = await axios.get(dataUrl, config);
    const gameData = apiResponse.data.resultSets[0].rowSet;
    const teamStats = gameData
      .filter(game => game[STAT_CATEGORIES.TEAM_ABBREVIATION] === teamAbbreviation);

    teamStats.forEach((gameArray, index, parentArray) => {
      const gameObj = {}
      gameArray.forEach((element, index) => {
        const stat_category = Object.keys(STAT_CATEGORIES)[index];
        gameObj[stat_category] = element;
      })
      parentArray[index] = gameObj;
    });
    
    const returnStats = filterForRecentGames(teamStats, limit);
    res.json({length: returnStats.length, games: returnStats});
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Something unexpected occurred. Please try again later.'});
  }
};

export const predictMatchup = async (req, res) => {
  const homeTeam = req.body.homeTeam; 
  const awayTeam = req.body.awayTeam;

  const postData = {
    FG_PCT_home: parseFloat(homeTeam.FG_PCT),
    FT_PCT_home: parseFloat(homeTeam.FT_PCT),
    FG3_PCT_home: parseFloat(homeTeam.FG3_PCT),
    AST_home: parseInt(homeTeam.AST),
    REB_home: parseInt(homeTeam.REB),
    FG_PCT_away: parseFloat(awayTeam.FG_PCT),
    FT_PCT_away: parseFloat(awayTeam.FT_PCT),
    FG3_PCT_away: parseFloat(awayTeam.FG3_PCT),
    AST_away: parseInt(awayTeam.AST),
    REB_away: parseInt(awayTeam.REB)
  };

  try {
    const apiResponse = await axios.post('http://predict-microservice:8000/api/predict', postData, {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    
    const result = apiResponse.data.home_win;
    res.status(StatusCodes.CREATED).json({ homeWin: result});
  } catch(error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Something went wrong, please try again later."})
  }
  
}