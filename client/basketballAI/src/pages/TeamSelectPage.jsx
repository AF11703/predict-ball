import TeamSelect from "../components/TeamSelect";
import teams from "../../../../server/team-resources/teams.json";

const TeamSelectPage = () => {
  return(
    <div className="flex flex-col bg-linear-to-t/decreasing from-gray-800 to-teal-400 border border-t-0 border-teal-300/55  shadow-2xl shadow-teal-700 drop-shadow-blue-300/50 drop-shadow-2xl rounded-2xl items-center justify-center gap-6 md:gap-12 px-4 py-8 my-40">
      <div className="flex flex-col md:flex-row items-center justify-center self-center gap-6 md:gap-12">
        <div className="flex flex-col items-center space-y-4" id="homeTeam">
          <h2 className="text-xl text-shadow-2xs text-white/20 text-shadow-white font-bold">Home</h2>
          <TeamSelect teams={teams} />
        </div>

        <div className="fixed mx-4 text-2xl md:text-3xl font-bold text-shadow-2xs text-white/20 text-shadow-white">
          VS.
        </div>
        
        <div className="flex flex-col items-center space-y-4" id="awayTeam">
          <h2 className="text-xl text-shadow-2xs text-white/20 text-shadow-white font-bold">Away</h2>
          <TeamSelect teams={teams} />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-linear-to-br from-teal-500 to-cyan-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white hover:cursor-pointer dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Predict
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default TeamSelectPage;