import React from "react";
import { Link } from 'react-router-dom'

// display button to switch to minesweeper game and the game rules
function Home() {
  return (
    <main className="home">
      <div className="homeBtn">
        <Link to="/Minesweeper">
          <h4>Minesweeper Game</h4>
        </Link>
      </div>
      <div className="gameRules">
        <h3>How To Play</h3>
        <ol>
          <li>
            The goal is to get to a pot of gold on the underside of one of the
            cards.
          </li>
          <li>Clicking on a card reveals its underside. </li>
          <li>
            Behind each card lies either a giggling monkey, an exploding
            dynamite, or a pot of gold
          </li>
          <li>Finding the pot of gold will end the game</li>
          <li>Finding a dynamite will end the game.</li>
          <li>Finding a monkey allows further attempts.</li>
          <li>Each play allows for a maximum of 3 attempts.</li>
          <li>"Try Again" button starts the game afresh</li>
          <li>"Quit" button quits the game entirely.</li>
        </ol>
      </div>
    </main>
  );
}

export default Home;
