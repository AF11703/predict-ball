import axios from "axios";
import fs from "fs";
import NBA_TEAMS from "../nba_teams.js";
import dotenv from "dotenv";
dotenv.config();

const dataUrl = `${process.env.NBA_API_HOST}/teams`;

const config = {
  headers: {
    'x-rapiapi-host': process.env.NBA_API_HOST,
    'x-rapidapi-key': process.env.NBA_API_KEY
  }
};

const getAllNBATeams = async () => {
  try {
    const apiResponse = await axios.get(dataUrl, config);
    const data = apiResponse.data;

    const mappedTeams = data.response.map(team => {
      if (team.code && NBA_TEAMS.includes(team.code)){
        return {abbr: team.code, name: team.name, img: team.logo};
      }
      else {
        return "NULL";
      }
    });


    const returnTeams = mappedTeams.filter(
      element => element !== "NULL"
    );

    fs.writeFile(
      'team-resources/teams.json', 
      JSON.stringify(returnTeams, null, 2), 
      (err) => {
        if (err) throw err;
        else console.log('teams.json created');
      }
    );
  }
  catch (error) {
    console.error(error);
  }
  
};

getAllNBATeams();

