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

    const [gameBoard, setGameBoard] = useState(Array(9).fill(''))
    const [startingPlayer, setStartingPlayer] = useState(randomizePlayer())
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer)

    const blankCells = 
        gameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}
            onClick={() => userDidMove(index)}>
            {item}
        </div>
    )
 
    const userDidMove = (index) => {
        gameBoard.splice(index, 1, currentPlayer)
        updateBoard(currentPlayer)
        switchPlayer(currentPlayer)     
    }

    const winCheck = (player) => {
        if ((gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
            (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) ||
            (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) ||
            (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) ||
            (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) ||
            (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) ||
            (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) ||
            (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player)
            ){
            console.log(player)
            console.log(`winner`)
            return(true)
        } else {
            console.log(player)
            console.log(`no winner`)
            return(false)
        }
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

            console.log(gameBoard)
            winCheck(currentPlayer)

            return(
                <div>
                    {cells}
                </div>
            )
    }

    const arrayTestButton = () => {
        console.log(gameBoard[0], gameBoard[1], gameBoard[2])
    }

    const switchPlayer = () => {setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')}

    const resetGame = () => {
        setNumber(Math.floor(Math.random() * 10) + 1)
        setGameBoard(Array(9).fill(''))
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
                    <button onClick={() => arrayTestButton()}>Array Test</button>
                </div>
            </div>
    ) 
}

export default Board