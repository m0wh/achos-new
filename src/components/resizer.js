import React from 'react'
import styled from 'styled-components'
import DidgeridooImage from '../images/didgeridoo.jpg'
import DidgeridooSound from '../images/didgeridoosound.mp3'
// import rafSchd from 'raf-schd'
import { useWindowResize } from '../utils/hooks'

const Wrapper = styled.div`
  background: url("${ DidgeridooImage }") no-repeat center center fixed; 
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
`

function Resizer () {
  const { width, isResizing } = useWindowResize()

  return (
    <>
      {width.windowWidth > 768 && isResizing && <Wrapper />}
      {width.windowWidth > 768 && isResizing && <audio autoPlay src={DidgeridooSound}></audio>}
    </>
  )
}

export default Resizer
