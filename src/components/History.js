import React from 'react'

function History({history,moveTo}) {
    return (
        <ul>
            {
                history.map((_,move)=>{
                    return(
                <li key={move}><button
                 type="button" onClick={()=>{
                    moveTo(move);
                }}>{move==0 ? 'Go to game start': `Go to move' #${move}`}</button></li>
                    );
                })
            }
            
        </ul>
    );
};

export default History
