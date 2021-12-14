import React from 'react'

const StatusMessage = ({winner}) => {
    // const winner = calculateWinner(current.board);
        // const message = winner ? `Winner is ${winner}`:
        //  `Next player is ${current.isXNext ? 'X' : 'O'}`

        return <h1> {winner && `Winner is ${winner}`}</h1>;
}

export default StatusMessage








