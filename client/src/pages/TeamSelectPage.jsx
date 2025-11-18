import TeamSelect from "../components/TeamSelect";
import teams from "../../../server/team-resources/teams.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamSelectPage = () => {
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);
  const navigate = useNavigate();

  const handlePredict = () => {
    if (!homeTeam || !awayTeam) {
      alert("Please select both teams");
      return;
    }

    if (homeTeam.value == awayTeam.value) {
      alert("Please select a different home and/or away team");
      return;
    }

    navigate("/prediction", { state: { homeTeam, awayTeam } })
  }


  return(
    <div className="flex flex-col brightness-90 bg-gray-700/40 from-gray-950 to-gray-700 border border-gray-400/60 shadow-2xs shadow-white drop-shadow-xs drop-shadow-white/15 bg-linear-210 rounded-2xl items-center justify-center gap-6 md:gap-12 px-4 py-8 my-40">
      <div className="flex flex-col md:flex-row items-center justify-center self-center gap-6 md:gap-12">
        <div className="flex flex-col items-center space-y-4" id="homeTeam">
          <h2 className="text-xl text-shadow-2xs text-white/20 text-shadow-white font-bold translate-y-2">Home</h2>
          <TeamSelect teams={teams} onTeamChangeCallback={setHomeTeam} />
        </div>

        <div className="fixed mx-4 text-2xl md:text-3xl font-bold text-shadow-2xs text-white/20 text-shadow-white">
          VS.
        </div>
        
        <div className="flex flex-col items-center space-y-4" id="awayTeam">
          <h2 className="text-xl text-shadow-2xs text-white/20 text-shadow-white font-bold translate-y-2">Away</h2>
          <TeamSelect teams={teams} onTeamChangeCallback={setAwayTeam} />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" onClick={handlePredict} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-linear-to-br from-gray-400 to-gray-900 group-hover:from-white group-hover:to-gray-100 hover:text-white hover:cursor-pointer dark:text-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-gray-200">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Predict
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default TeamSelectPage;