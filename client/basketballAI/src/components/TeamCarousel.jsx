import Carousel from "react-bootstrap/Carousel";

const TeamCarousel = ({teams}) => {
  return(
    <>
      <Carousel>
        {teams.map(team => {
          return (
            <Carousel.Item key={team.img}>
              <img src={team.img} width="100px" height="100px" />
              <Carousel.Caption key={team.abbr}>
                <h3>{team.abbr}</h3>
                <p>{team.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default TeamCarousel;