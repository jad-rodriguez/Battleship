import React from 'react'
import GameBoard from './GameBoard'
import HowToButton from './HowTo'

function App () {  
  return (
    <>
      <center>
        <h1>Battleship Game</h1>
        <HowToButton /><br /><br />
        <GameBoard />
      </center>
    </>
  )
}

export default App

