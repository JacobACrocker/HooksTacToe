import React from 'react'

function MessageBoard(props) {

 /*   const message = (props) => {
        const player = (props.data.startingPlayer === 'X' ? 'O' : 'X')
        return(player)
    }*/


    return (
        <div className='message'>
            <div className='spacer'></div>

                Player {props.currentPlayer} has the first move!
            
            <div className='spacer'></div>
        </div>
    )
}

export default MessageBoard