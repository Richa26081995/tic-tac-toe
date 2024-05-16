import React from "react";
import { useState } from "react";

const Players = ({ initialname, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialname);

  const editHandler = () => {
    //setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
  };
  const changeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  let editplayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";
  if (isEditing) {
    editplayerName = (
      <input type="text" required value={playerName} onChange={changeHandler} />
    );
    //btnCaption = "Save";
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editplayerName}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Players;
