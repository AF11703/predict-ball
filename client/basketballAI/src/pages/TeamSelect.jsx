import TeamCarousel from "../components/TeamCarousel";
import teams from "../../../../server/team-resources/teams.json";
import "../styles/TeamSelectStyle.css"

const TeamSelect = () => {
  return(
    <div className="teamsCard">
      <div className="teamSelectCarousel" id="homeTeam">
        <TeamCarousel teams={teams}></TeamCarousel>
      </div>
      <div className="versus">
        <h2>VS.</h2>
      </div>
      <div className="teamSelectCarousel" id="awayTeam">
        <TeamCarousel teams={teams}></TeamCarousel>
      </div>
    </div>
  );
};

export default TeamSelect;