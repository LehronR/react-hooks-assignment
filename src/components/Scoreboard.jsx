import { useState, useRef } from "react";
import Player from "./Player";
import "../styles/Scoreboard.css";

export default function Scoreboard() {
  const [players, setPlayers] = useState([]);
  let playerRef = useRef();

  const addPlayer = () => {
    let newPlayerName =
      playerRef.current.value || `User${Math.floor(Math.random() * 10000)}`;

    setPlayers([...players, { id: Date.now(), name: newPlayerName }]);

    playerRef.current.value = "";
  };

  return (
    <main>
      <section>
        <h1>Players Scoreboard</h1>
        <div className='scoreboard-container'>
          {players.map((player) => (
            <Player key={player.id} name={player.name} />
          ))}
        </div>
        <div className='addPlayer-container'>
          <input type='text' ref={playerRef} className='playerInput' />
          <button onClick={addPlayer} className='addPlayerBtn'>
            Add Player
          </button>
        </div>
      </section>
    </main>
  );
}
