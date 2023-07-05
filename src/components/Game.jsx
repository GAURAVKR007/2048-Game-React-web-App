import React, { useState } from 'react'
import Block from './Block'

function Game() {
    const [data , setData] = useState([
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ])


    // Initialize 

    // AddNumber - Add an item

    // Swipe -> Right, left , up ,Down

    // Check Game Over 

    // Reset


  return (
    <div>
        {/* <h1>2048</h1>
        <hr />
        <h2>Score : 0</h2> */}

        <div className='board'>
            {data.map((row, oneIndex) => {
                return (
                    <div style={{display: "flex"}}>
                        {row.map((digit, index) => (
                            <Block num={digit} key={index} />
                        ))}
                    </div>
                )
            }
            )}
        </div>
    </div>
  )
}

export default Game