import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Image from '../images/gunshot.png'
import { useSpring, animated, config } from 'react-spring'

const Container = styled(animated.section)`
  width: 150px;
  height: 150px;
  background-image: url(${ props => props.image });
  background-size: contain;
  position: relative;
  overflow: hidden;
  // filter: invert(1);
  opacity: 0.7;
  margin: 10px;
  transition: all 0.2s linear;
  &:hover {
    opacity: 1;
    transition: all 0.2s linear;
  }
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

const ShootingRangeElement = ({ image }) => {
  const [ isClicked, setClicked ] = useState(false)
  const gunshotRef = useRef(null)
  const audioRef = useRef(null)
  const { x } = useSpring({ from: { x: 0 }, x: isClicked ? 1 : 0, config: { duration: 500 } })
  const shootAnimation = useSpring({
    opacity: isClicked ? 1 : 0,
    config: config.wobbly
  })
  const handleClick = e => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left - 20 // x position within the element.
    let y = e.clientY - rect.top - 20 // y position within the element.
    gunshotRef.current.style.top = `${ y }px`
    gunshotRef.current.style.left = `${ x }px`
    audioRef.current.play()
    setClicked(true)
  }

  return (
    <Container onClick={handleClick} style={{
      transform: x
        .interpolate({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
        })
        .interpolate(x => `scale(${ x })`)
    }} image={image} >
      <BloodGunshot ref={gunshotRef} src={Image} style={shootAnimation} />
      <audio ref={audioRef} preload="auto" src="http://soundbible.com/mp3/ie_shot_gun-luminalace-770179786.mp3" type="audio/mpeg"></audio>
    </Container>
  )
}

export default ShootingRangeElement
