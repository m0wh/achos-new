import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import StaticImage from '../images/contact/contact-static.jpg'
import MovingImage from '../images/contact/contact-gif.gif'
import CarCursorImage from '../images/contact/car-cursor-image.gif'
import UfoCursorImage from '../images/contact/ufo-gif-image.gif'
import CarClaxon from '../images/contact/car-claxon.mp3'
import UfoSound from '../images/contact/ufo-ovni.mp3'
import CarMusic from '../images/contact/car-sound.mp3'
import UfoMusic from '../images/contact/ufo-sound.mp3'
import { useMousePosition } from 'use-events'

const HeroWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  cursor: none;
`

const Test = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: none;
  height: 200px;
  position: absolute;
`

const Image = styled.img`
  width: 100%;
  background-size: cover;
`
const CarCursor = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  pointer-events: none;
  z-index: 20000;
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 100px;
  margin-left: -50px;
  margin-top: 0px;
  transform: scale(1.5, 1.5);
  background: transparent url(${ CarCursorImage }) no-repeat;

`

const UfoCursor = styled(CarCursor)`
  background: transparent url(${ UfoCursorImage }) no-repeat;

`

function ContactGame () {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [x, y, bind] = useMousePosition()
  const refClaxonSound = useRef()
  const refUfoSound = useRef()
  function playClaxonSound () {
    refClaxonSound.current.play()
  }
  function playUfoSound () {
    refUfoSound.current.play()
  }

  return (
    <HeroWrapper {...bind} >
      <Test onClick={() => playUfoSound()} onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}></Test>
      <Image onClick={() => playClaxonSound()} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} src={isHovering || isVisible ? MovingImage : StaticImage} />
      <CarCursor visible={isHovering} style={{ top: `${ y }px`, left: `${ x }px` }} />
      <UfoCursor visible={isVisible} style={{ top: `${ y }px`, left: `${ x }px` }} />
      { isHovering && (<audio autoPlay src={CarMusic}></audio>)}
      { isVisible && (<audio autoPlay src={UfoMusic}></audio>)}
      <audio ref={refClaxonSound} src={CarClaxon}></audio>
      <audio ref={refUfoSound} src={UfoSound}></audio>

    </HeroWrapper>
  )
}

export default ContactGame
