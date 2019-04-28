import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

const Board = () => {

    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1)    
    const [gameBoard, setGameBoard] = useState(Array(9).fill(null))
    const [endGameBoard, setEndGameBoard] = useState(null)
    const [startingPlayer, setStartingPlayer] = useState(randomizePlayer())
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer)

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

    const EndGame = () => {
        console.log(`EndGame game board is:`)
        console.log(gameBoard)
        return(
        endGameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}>
            {item}
        </div>
    ) )}
    
    const LiveBoard = () => {
        return(
        gameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}
            onClick={() => userDidMove(index)}>
            {item}
        </div>
            ) 
        )
    }  
    
    const Board = (index) => {
        if (winCheck(currentPlayer, index)){
            return(<EndGame />)
        } else {
            return (<LiveBoard />)
        }
    }

     const userDidMove = (index) => {
        if (gameBoard[index] === null){
            gameBoard.splice(index, 1, currentPlayer)
           if (winCheck(currentPlayer)){
               console.log(`${currentPlayer} is the winner`)
               setEndGameBoard(gameBoard)
               return(<EndGame />)
           } else if (tieCheck()) {
               console.log(`Tie!`)
               setEndGameBoard(gameBoard)
           } else {
            switchPlayer()
           }
        } else {
            return (<LiveBoard />)
        }
    }
    
    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
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
            return true
        } else {
            return false
        }
    }

    const tieCheck = () => {
        if (gameBoard.includes(null)) {
            return false
        } else {
            return true
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
            <MessageBoard currentPlayer={currentPlayer} gameBoard={gameBoard} endGameBoard={endGameBoard} tieCheck={tieCheck}/>
                <div className='board' id='gameBoard'>
                    <Board />
                </div>
                <div className='spacer'></div>
                <div>
                    <button onClick={() => resetGame()}>Reset Game</button>
                </div>
            </div>
    ) 
}

export default Board