import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'

const hoverProps = {
  hoverable: true,
  init: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  }
}

const titleProps = {
  init: {
    y: '300%',
    scale: 0,
  },
  hover: {
    y: '0',
    scale: 1,

  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  grid-column: ${ props => (props.big ? 'span 2' : null) };
  // height: 80vh;
  
`
const Overlay = styled(posed.div(hoverProps))`
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
  margin: 3.5vw 4.1875vw;
`
const Title = styled(posed.h3(titleProps))`
  ${ fontSizes(3.33) };
  color: ${ props => props.color };
`

const Category = styled(posed.p(titleProps))`
  color: var(--lightgrey);
  ${ fontSizes(1.875) };
`

const StyledImg = styled(Img)`
  grid-column: ${ props => (props.big ? 'span 2' : null) };
`

export default class Gridimage extends React.Component {
  myRef = React.createRef();

  startSound = () => {
    this.myRef.current.play()
  }
  render () {
    const {
      big,
      link,
      fluid,
      name,
      category,
      color
    } = this.props
    return (
      <Wrapper big={big} onMouseEnter={this.startSound}>
        <Fade duration={500} delay={400}>
          <Link to={link}>
            <StyledImg fluid={fluid} />
            <audio preload="auto" ref={this.myRef} >
              <source src={this.props.sound} type="audio/mpeg"></source>
            </audio>

            <Overlay>
              <OverlayWrapper>
                <Title color={color}>{name}</Title>
                <Category>{category}</Category>
              </OverlayWrapper>
            </Overlay>
          </Link>
        </Fade>
      </Wrapper>
    )
  }
}
