import React, { useState } from 'react'
import styled from 'styled-components'

const GiantDiv = styled.div`
  position: absolute;
  background: red;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
`

function TapToClose () {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div onClick={() => setIsClicked(true)}>
      {!isClicked && (<GiantDiv><h1>Tap to close</h1></GiantDiv>)}
    </div>
  )
}

export default TapToClose
