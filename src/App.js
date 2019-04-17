import React, { useState, useEffect } from 'react';
import Board from './Components/Board'
import Counter from './Components/Count'
import './App.css';

function App() {

  const randomizePlayer = () => {
    if (number % 2 === 0) {
      let player = 'X'
      //message(`Player ${startingPlayer} goes first`)
      console.log(`Player ${player} goes first`)
      return(player)
    } else {
      let player = 'X'
      //message(`Player ${startingPlayer} goes first`)
      console.log(`Player ${player} goes first`)
      return(player)
  }
}

    const [gameBoard, setGameBoard] = useState(Array(9).fill(''))
    const [currentPlayer, setCurrentPlayer] = useState('')
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1)
    const [startingPlayer, setStartingPlayer] = useState(randomizePlayer())
    //const [startingPlayer, setStartingPlayer] = useState(() => {const initialState = randomizePlayer()})
    //const [gameWinner, setGameWinner] = useState(false)
    
    //const randomizePlayer = () => {
      
      
    

       
      

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
        <div className='messageBoard'>
          <div className='spacer'></div>
          <div className='message'></div>
          <div className='spacer'></div>
        </div>
        <Board currentPlayer={currentPlayer} startingPlayer={startingPlayer} gameBoard={gameBoard}/>
        <Counter player='X' initialCount={0}/>
        <Counter player='O' initialCount={0}/>
      </div>
    );
  }

export default App;
