import teams from "../../../server/team-resources/teams.json";
import TeamCard from "../components/TeamCard";


const Teams = () => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-12 gap-x-0 mt-30">
      {teams.map(team => <TeamCard key={team.abbr} team={team}/>)}
    </div>
  )
  
}

export default Teams;