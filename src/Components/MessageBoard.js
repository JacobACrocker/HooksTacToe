import React from 'react'

const MessageBoard = (props) => {
    const Message = () => {
        console.log(props.gameBoard)
        if (props.tieCheck) {
            return (`It's a tie!`)
        } else if (props.gameBoard.includes(`X`) || props.gameBoard.includes(`O`) ) {
            return(`It's ${props.currentPlayer}'s turn!`)
        } else {
            return(`${props.currentPlayer} goes first`) 
        }
    }

    return (
        <div className='message'>
            <div className='spacer'></div>

                <Message />
            
            <div className='spacer'></div>
        </div>
    )
}

export default MessageBoard