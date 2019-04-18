import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

function Board(props) {

    const [initialGameBoard] = useState(Array(9).fill(''))
    const [gameBoard, setGameBoard] = useState([])
    const [startingPlayer] = useState(props.random)
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

       
    const updateBoard = (index, currentPlayer) => {
        
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


    return (
        <div className='game' >
            <MessageBoard currentPlayer={currentPlayer} />
                <div className='board' id='gameBoard'>
                    {blankCells}
                </div>
            </div>
    ) 
}

export default Board