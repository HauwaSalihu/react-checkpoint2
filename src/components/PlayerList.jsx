import Player from "./Player";
import { PlayersList } from "../players";

function PlayerList() {
  return PlayersList.map((item) => {
    return (
      <div className="col-sm-1 col-md-2 col-lg-3 m-2">
        <Player
          name={item.name}
          image={item.image}
          nationality={item.nationality}
          age={item.age}
          team={item.team}
          jerseyNumber={item.jerseyNumber}
        />
      </div>
    );
  });
}

export default PlayerList;
