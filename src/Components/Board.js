import React, { useState } from 'react'
import MessageBoard from './MessageBoard'

function Board(props) {

    const moves = props.data.gameBoard

    const [player, setPlayer] = useState('i')

    //broken function
    const userDidMove = (index) => {
        function update() {
            setPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
            console.log(player)
        }
        update()
        document.getElementById(`cell${index + 1}`).innerHTML = {player}
        console.log(props.data.startingPlayer)
        console.log(props.data.currentPlayer)
        console.log(player)
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