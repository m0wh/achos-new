import React, { useState } from 'react'
import styled from 'styled-components'

const GiantDiv = styled.div`
  position: fixed;
  background: var(--black);
  font-size: 1.875rem;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0.95;
  color: white;
  cursor: var(--whiteX);
`

function TapToClose () {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div onClick={() => setIsClicked(true)}>
      {!isClicked && (<GiantDiv><h1>Tap to continue</h1></GiantDiv>)}
    </div>
  )
}

export default TapToClose
