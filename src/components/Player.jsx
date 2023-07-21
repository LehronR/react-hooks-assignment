import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Player.css";

export default function Player({ name }) {
  const [score, setScore] = useState(0);

  const decrement = () => {
    setScore(score - 1);
  };

  const increment = () => {
    setScore(score + 1);
  };

  const deletePlayer = (e) => {
    e.target.parentNode.parentNode.remove();
  };

  return (
    <div className='player-container'>
      <div className='header-container'>
        <h3>{name}</h3>
        <img
          src='https://static.vecteezy.com/system/resources/previews/009/344/655/original/x-transparent-free-png.png'
          alt='close x icon'
          onClick={deletePlayer}
        />
      </div>
      <p>{score}</p>
      <div>
        <button onClick={decrement}>Subtract Point</button>
        <button onClick={increment}>Add Point</button>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired
};
