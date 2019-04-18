import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

const Board = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1)

  function randomizePlayer() {
    if (number % 2 === 0) {
      let player = 'X'
      //message(`Player ${startingPlayer} goes first`)
      return(player)
    } else {
      let player = 'O'
      //message(`Player ${startingPlayer} goes first`)
      return(player)
    } 
  }   

    const [initialGameBoard, setInitialGameBoard] = useState(Array(9).fill(''))
    const [gameBoard, setGameBoard] = useState([])
    const [startingPlayer, setStartingPlayer] = useState(randomizePlayer())
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer)

    const blankCells = 
        initialGameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}
            onClick={() => userDidMove(index)}>
            {item}
        </div>
    )

    //broken function 
    const userDidMove = (index) => {
        const addMove = initialGameBoard.splice(index, 1, currentPlayer)
        setGameBoard(addMove)
        updateBoard(currentPlayer)
        switchPlayer(currentPlayer)       
    }

       
    const updateBoard = () => {
        
        const cells =
            gameBoard.map((item, index) =>
            <div className='cell'
                id={`cell${(index + 1)}`}
                key={index}
                onClick={() => userDidMove(index)}>
                {item}
            </div>)

            return(
                <div>
                    {cells}
                </div>
            )
    }

    const switchPlayer = () => {setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')}

    const resetGame = () => {
        setNumber(Math.floor(Math.random() * 10) + 1)
        setInitialGameBoard(Array(9).fill(''))
        setGameBoard([])
        setStartingPlayer(randomizePlayer())
        setCurrentPlayer(startingPlayer)
    }


    return (
        <div className='game' >
            <MessageBoard currentPlayer={currentPlayer} />
                <div className='board' id='gameBoard'>
                    {blankCells}
                </div>
                <div className='spacer'></div>
                <div>
                    <button onClick={() => resetGame()}>Reset Game</button>
                </div>
            </div>
    ) 
}

export default Board