import Players from "./Components/Players";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  //  function use when we switch turn

  const activePlayer = deriveActivePlayer(gameTurn);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === "X" ? "0" : "X"
    // );
    setGameTurn((prevTurn) => {
      // let currentPlayer = "X";
      // if (prevTurn.length > 0 && prevTurn[0].player === "X") {
      //   currentPlayer = "0";
      // }

      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Players
              initialname="Player1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Players
              initialname="Player2"
              symbol="0"
              isActive={activePlayer === "0"}
            />
          </ol>
          {/* //Game Board */}
          <GameBoard
            onSelectSquare={handleSelectSquare}
            // activePlayerSymbol={activePlayer}
            turns={gameTurn}
          />
        </div>
        {/* LOG */}
        <Log turns={gameTurn} />
      </main>
    </>
  );
}

export default App;
