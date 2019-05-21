import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Image from '../images/gunshot.png'
import BgImg from '../images/clients/01_limon.png'
import { useSpring, animated } from 'react-spring'

const Container = styled(animated.section)`
  width: 150px;
  height: 150px;
  background-image: url(${ BgImg });
  background-size: contain;
  position: relative;
  border: 1px solid brown;
  overflow: hidden;
  display: inline-block;
  margin: 0 20px 10px;
`

const BloodGunshot = styled(animated.img)`
  opacity: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  pointer-events: none;
  margin: 0;
  border-radius: 100px;
  z-index: 300;
`

const ShootingRange = () => {
  const [ isClicked, setClicked ] = useState(false)
  const gunshotRef = useRef(null)
  const audioRef = useRef(null)
  const containerAnimation = useSpring({
    transform: isClicked ? `rotate(15deg)` : `rotate(0deg)`,
  })
  const shootAnimation = useSpring({
    opacity: isClicked ? 1 : 0
  })
  const handleClick = e => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left - 50 // x position within the element.
    let y = e.clientY - rect.top - 50 // y position within the element.
    gunshotRef.current.style.top = `${ y }px`
    gunshotRef.current.style.left = `${ x }px`
    audioRef.current.play()
    setClicked(true)
  }

  return (
    <Container onClick={handleClick} style={containerAnimation}>
      <BloodGunshot ref={gunshotRef} src={Image} style={shootAnimation} />
      <audio ref={audioRef} preload="auto" src="http://soundbible.com/mp3/ie_shot_gun-luminalace-770179786.mp3" type="audio/mpeg"></audio>
    </Container>
  )
}

export default ShootingRange
