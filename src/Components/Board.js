import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

function Board(props) {

    const moves = props.gameBoard

    const [player, setPlayer] = useState(props.initialPlayer)

    //broken function
    const userDidMove = (index) => {
        function update() {
            setPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
            console.log(`useDidMove->update() read player as ${player}`)
        }
        update()
        document.getElementById(`cell${index + 1}`).innerHTML = {player}
        console.log(`userDidMove read startingPlayer as ${props.startingPlayer}`)
        console.log(`userDidMove read currentPlayer as ${props.currentPlayer}`)
        console.log(`userDidMove read player as ${player}`)
    }

    const cell = moves.map((item, index) =>
        <div className='cell' 
            id={`cell${(index + 1)}`} 
            key={index} 
            onClick={() => userDidMove(index)}>
            {item}
        </div>
    )
    
    return (
        <div className='game'>
            <MessageBoard />
            <div className='board'>
                {cell} 
            </div>
        </div>
    )
      /* onClick={() => { this.userDidMove(index) }} */
   
}

export default Board