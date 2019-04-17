import React, { useState } from 'react';
import Board from './Components/Board'
import Counter from './Components/Count'
import './App.css';

function App() {

  const [number] = useState(Math.floor(Math.random() * 10) + 1)

  function randomizePlayer() {
    if (number % 2 === 0) {
      let player = 'X'
      //message(`Player ${startingPlayer} goes first`)
      console.log(`randomizePlayer() ran on #${number}. Player ${player} goes first`)
      return(player)
    } else {
      let player = 'O'
      //message(`Player ${startingPlayer} goes first`)
      console.log(`#${number} rolled. Player ${player} goes first`)
      return(player)
    } 
  }    
          
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>
              Tic-Tac-Toe <br />
              with React Hooks!
            </p>
          </div>
        </header>
        <Board random={randomizePlayer}/>
        <Counter player='X' initialCount={0}/>
        <Counter player='O' initialCount={0}/>
      </div>
    );
  }

export default App;
