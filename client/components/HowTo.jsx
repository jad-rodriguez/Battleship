import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Instructions from "./Instructions"


function HowToButton () {

  //Hide/View content from How To Button
  const [showHowTo, setShowHowTo] = useState(false)

  const toggleForm = () => {
    setShowHowTo(!showHowTo)
  }

  const renderForm = () => {
    return (<Instructions />)
  }

  return (
    <>
    <Button onClick={toggleForm}>{showHowTo ? 'HIDE' : 'HOW TO PLAY'}</Button>
    {showHowTo && renderForm()}
    </>
  )
  
}

export default HowToButton