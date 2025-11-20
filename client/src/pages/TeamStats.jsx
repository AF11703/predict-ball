import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import averageTeamStats from "../helper/averageTeamStats";
import axios from "axios";
import teams from "../../../server/team-resources/teams.json";


const TeamStats = () => {
  const { abbr } = useParams();
  const team = teams.find(team => team.abbr === abbr);

  const { data: response, isLoading, error } = useQuery({queryKey: ['teamStats'], queryFn: async () => {
    return await axios.get(`http://localhost:3000/api/games/${abbr}`);
  }});
  
  if (isLoading) return(<div className="flex flex-col justify-center items-center align-middle h-screen">Loading...</div>);
  if (error) {
    console.error(error)
    return(<div className="flex flex-col justify-center items-center align-middle h-screen">Error</div>);
  }
  
  const { data } = response;
  const performance = averageTeamStats(data);
  console.log(performance);

  return(
    <div className="w-fit flex flex-col justify-center items-center align-middle place-self-center">
      <div className="flex flex-col w-fit items-center md:flex-row border rounded-md mt-30">
        <img className="h-32 w-32 m-4 border rounded-md md:rounded-r-3xl p-3 bg-white/15" src={team.img} />
        <div className="p-3 text-end">
          <h2 className="font-extrabold">Avg. performance over last 10 games</h2>
          <div className="text-center">
            <ul>
              <li><span className="font-medium">FG%:</span> {performance.FG_PCT}</li>
              <li><span className="font-medium">3PT%:</span> {performance.FG3_PCT}</li>
              <li><span className="font-medium">FT%:</span> {performance.FT_PCT}</li>
              <li><span className="font-medium">AST:</span> {performance.AST}</li>
              <li><span className="font-medium">REB:</span> {performance.REB}</li>
            </ul>
          </div>
        </div> 
      </div>
      <a className="mt-4" href="/teams"><span className="bg-white/15 p-1 rounded transition-all ease-in text-white hover:rounded-2xl hover:shadow-2xs hover:shadow-white">Back</span></a>
    </div>
  );

}

export default TeamStats;