import React, { useState } from 'react'
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
import { useMousePosition } from 'use-events'

// https://stackoverflow.com/questions/9189250/animated-cursor-support-in-web-applications

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

function ContactGame ({ visible }) {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [x, y, bind] = useMousePosition()
  return (
    <HeroWrapper {...bind} >
      <Test onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}></Test>
      <Image onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} src={isHovering || isVisible ? MovingImage : StaticImage} />
      <CarCursor visible={isHovering} style={{ top: `${ y }px`, left: `${ x }px` }} />
      <UfoCursor visible={isVisible} style={{ top: `${ y }px`, left: `${ x }px` }} />

    </HeroWrapper>
  )
}

export default ContactGame
