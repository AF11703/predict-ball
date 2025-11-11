import Select from "react-select";
import { useState, useEffect } from "react";

const TeamSelect = ({teams}) => {
  const [teamOption, setTeam] = useState(null);
  const [logo, setLogo] = useState("");

  const options = teams.map(t => ({value: t.abbr, label: t.name}));
  
  const handleTeamChange = (selectedTeam) => {
    setTeam(selectedTeam);
  };

  useEffect(() => {
    if (!teamOption) {
      setLogo("");
      return;
    }

    const found = teams.find(t => t.name === teamOption.label).img;
    setLogo(found ? found : "");
  }, [teamOption, teams]);

  const customStyles = {
    placeholder: (base) => ({
      ...base,
      color: "#000000",
    }),

    option: (base) => ({
      ...base,
      color: "#000000",
    }),
  };

  return(
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center">
          {logo ? <img className="w-24 h-24 object-contain rounded-md" src={logo} alt={teamOption.abbr || "team logo"} style={{maxWidth: 120}} /> : null}
        </div>
        <Select 
          options={options} 
          onChange={handleTeamChange}
          value={teamOption}
          placeholder="Select a team..."
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            colors: {
              ...theme.colors,
              primary25: 'lightblue',
              primary: 'skyblue',

            }
          })}
        />
      </div> 
  );
};

export default TeamSelect;