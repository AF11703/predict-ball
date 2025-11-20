const TeamCard = ({team}) => {
  return(
    <div className="flex flex-col items-center justify-center border rounded-xl h-80 min-w-fit w-46 font-semibold">
      <h3>{team.abbr}</h3>
      <img className="w-32 h-32 rounded-md bg-white/15 p-2" src={team.img} />
      <p>{team.name}</p>
      <br/>
      <h2><a href={`/teams/${team.abbr}`}><span className="bg-white/15 p-1 rounded transition-all ease-in text-white hover:rounded-2xl hover:shadow-2xs hover:shadow-white">See recent stats</span></a></h2>
    </div>
  )
};

export default TeamCard;