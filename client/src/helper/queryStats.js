import axios from "axios";

const queryStats = async (abbr) => {
  return await axios.get(`http://localhost:3000/api/games/${abbr}`);
}

export default queryStats;