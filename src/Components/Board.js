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

    const [gameBoard, setGameBoard] = useState(Array(9).fill(null))
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
 /*
    const userDidMove = (index) => {
        console.log(`userDidMove ran`)
        if (gameBoard[index] === null){
            gameBoard.splice(index, 1, currentPlayer)
            updateBoard()
            winCheck(currentPlayer, index)
            switchPlayer()
        } else {
            console.log(`cell full`)
        }
            console.log(`--------- end process -----------`)
    }*/

    const userDidMove = (index) => {
        console.log(`userDidMove ran`)
        if (gameBoard[index] === null){
            gameBoard.splice(index, 1, currentPlayer)
           if (winCheck(currentPlayer, index)){
               console.log(`${currentPlayer} is the winner`)
           } else {
            switchPlayer()
           }
        } else {
            console.log(`cell full`)
        }
            console.log(`--------- end process -----------`)
    }
    
    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
        console.log(`switchPlayer ran`)
    }

    const winCheck = (player, index) => {
        console.log(`winCheck ran`)
        if ((gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
            (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) ||
            (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) ||
            (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) ||
            (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) ||
            (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) ||
            (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) ||
            (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player)
            ){
            console.log(gameBoard)
            console.log(player)
            console.log(`winner`)
            return(true)
        } else {
            console.log(gameBoard)
            console.log(player)
            console.log(`no winner`)
            return(false)
        }
    }

    const resetGame = () => {
        setNumber(Math.floor(Math.random() * 10) + 1)
        setGameBoard(Array(9).fill(null))
        setStartingPlayer(randomizePlayer())
        setCurrentPlayer(startingPlayer)
        console.clear()
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