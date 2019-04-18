import React from 'react'

function MessageBoard(props) {

    return (
        <div className='message'>
            <div className='spacer'></div>

                It's {props.currentPlayer}'s turn!
            
            <div className='spacer'></div>
        </div>
    )
}

export default MessageBoard