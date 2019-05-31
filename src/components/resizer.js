import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import DidgeridooImage from '../images/didgeridoo.jpg'
import DidgeridooSound from '../images/didgeridoosound.mp3'

const Wrapper = styled.div`
  background: url("${ DidgeridooImage }") no-repeat center center fixed; 
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  
`
const HideEverything = createGlobalStyle`
  body {
    header {
      opacity: 0;
    }
    * > img {
      opacity: 0;
    }
  }
`

function Resizer ({ width, isResizing }) {

  return (
    <>
      {width.windowWidth > 768 && isResizing &&
      <>
        <Wrapper />
        <HideEverything />
        <audio autoPlay src={DidgeridooSound}></audio>
      </>}

    </>
  )
}

export default Resizer
