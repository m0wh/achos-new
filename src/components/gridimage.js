import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'
import { useSpring, animated, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-column: ${ props => (props.big ? 'span 2' : null) };
  ${ media.phone`grid-column: inherit;` }
  
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
const StyledGif = styled.img`
  grid-column: ${ props => (props.big ? 'span 2' : null) };
`

const GridImage = ({
  big,
  link,
  cover,
  name,
  category,
  color,
  sound,
  width
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const audioRef = useRef(null)
  const [ref, inView] = useInView({
    threshold: 0.9,
    rootMargin: '-400px 0px'
  })
  const overlayAnimation = useSpring({
    opacity: (width.windowWidth < 768 ? inView : isHovering) ? 1 : 0
  })
  const blurAnimation = useSpring({
    filter: (width.windowWidth < 768 ? inView : isHovering) ? `blur(0px)` : `blur(100px)`,
    config: config.default
  })
  const startSound = () => {
    audioRef.current.play()
  }

  return (
    <Wrapper big={big} onMouseEnter={width.windowWidth > 768 ? startSound : undefined}>
      <Fade duration={500} delay={400}>
        <Link to={link}>
          {cover.src ? <StyledImg fluid={cover} /> : <StyledGif width="100%" src={cover} />}
          <audio preload="auto" ref={audioRef} >
            <source src={sound} type="audio/mpeg"></source>
          </audio>
          <Overlay ref={ref} style={overlayAnimation} onMouseOver={() => width.windowWidth > 768 ? setIsHovering(true) : undefined} onMouseOut={() => width.windowWidth > 768 ? setIsHovering(false) : undefined}>
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
