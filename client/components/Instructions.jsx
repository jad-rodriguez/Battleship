import React from 'react'

function Instructions () {

    return (
        <>
        <div className='instructions'>
            <p>
                <strong>Welcome to the Battleship Game!</strong><br />
                Finding the battleships in a different way!<br />
                Your goal is to spot the right coordinates of the two (2) battleships<br /> 
                hidden in the cells.<br />
                Input your guess location in the form below.<br />
                Rows or X-Axis for horizontal point (from 1 to 8).<br />
                Columns or Y-Axis for vertical point (from 1 to 8).<br /><br />
                <strong>Here are some hints to get the right location:</strong><br />
                You will get an alert each time you submit your guessed location.<br />
                HOT means you are really close, about 1 to 2 cells away surrounding the exact coordinate,<br />
                WARM means you are relatively close, about 3 to 4 cells away,<br />
                and COLD means you are far away.<br />
                You have 20 guesses to make, to find the right coordinates.<br />
                Have fun!
            </p>
        </div>
        </>
    )
}

export default Instructions