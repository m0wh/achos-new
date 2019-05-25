import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'
import { useSpring, animated, config } from 'react-spring'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  grid-column: ${ props => (props.big ? 'span 2' : null) };
  // height: 80vh;
  
`
const Overlay = styled(animated.div)`
  background: rgba(26, 26, 26, 0.69);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  // height: 80vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  &:hover {
    cursor: var(--plusminus); 
  }
`

const OverlayWrapper = styled.div`
  padding: var(--generalSpacing);
`
const Title = styled(animated.h3)`
  ${ fontSizes(3.33) };
  color: ${ props => props.color };
`

const Category = styled(animated.p)`
  color: var(--lightgrey);
  ${ fontSizes(1.875) };
`

const StyledImg = styled(Img)`
  grid-column: ${ props => (props.big ? 'span 2' : null) };
`

const GridImage = ({
  big,
  link,
  fluid,
  name,
  category,
  color,
  sound
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const myRef = useRef(null)
  const overlayAnimation = useSpring({
    opacity: isHovering ? 1 : 0
  })
  const blurAnimation = useSpring({
    filter: isHovering ? `blur(0px)` : `blur(100px)`,
    config: config.default
  })
  const startSound = () => {
    myRef.current.play()
  }
  return (
    <Wrapper big={big} onMouseEnter={startSound}>
      <Fade duration={500} delay={400}>
        <Link to={link}>
          <StyledImg fluid={fluid} />
          <audio preload="auto" ref={myRef} >
            <source src={sound} type="audio/mpeg"></source>
          </audio>

          <Overlay style={overlayAnimation} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <OverlayWrapper>
              <Title style={blurAnimation} color={color}>{name}</Title>
              <Category style={blurAnimation}>{category}</Category>
            </OverlayWrapper>
          </Overlay>
        </Link>
      </Fade>
    </Wrapper>
  )
}

export default GridImage
