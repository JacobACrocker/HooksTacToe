import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

function Board(props) {

    const [gameBoard, setGameBoard] = useState(Array(9).fill(''))
    const [startingPlayer] = useState(props.random)
    const [currentPlayer, setCurrentPlayer] = useState(startingPlayer)

    //broken function
    
    const userDidMove = (index) => {
        console.log( `userDidMove() ran and read currentPlayer as ${currentPlayer}`)
        const addMove = gameBoard.splice(index, 1, currentPlayer)
        setGameBoard(addMove)

        gameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}
            onClick={() => userDidMove(index)}>
            {item}
        </div>)

        update(currentPlayer)

        console.log(`post-splice gameBoard is ${gameBoard}`)
        
    }
    
    const update = (currentPlayer) => {
        console.log( `update() ran`)
       setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
        console.log(`update() read currentPlayer as ${currentPlayer}`)
    }


    console.log(`pre-cell gameBoard is ${gameBoard}`)
    const cell = gameBoard.map((item, index) =>
        <div className='cell'
            id={`cell${(index + 1)}`}
            key={index}
            onClick={() => userDidMove(index)}>
            {item}
        </div>
    )

/*
const Cell = (props) => {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

    const test = () => {
        return (
            <Cell>
                {gameBoard.map((item, index) => 
                    <div className='cell'>
                        'W'
                    </div>}
            </Cell>
        );
    }
*/


    return (
        <div className='game' >
            <MessageBoard currentPlayer={currentPlayer} />
                <div className='board' id='gameBoard'>
                    {cell}
                </div>
            </div>
    )

}

export default Board