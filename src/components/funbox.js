import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  // height: 80vh;
  
`

const FunBoxText = styled.h3`
  ${ fontSizes(3.33) };
  color: white;
`

export default class FunBox extends React.Component {
  myRef = React.createRef();

  startSound = () => {
    this.myRef.current.play()
  }
  render () {
    const {
      link,
      text,

    } = this.props
    return (
      <Wrapper onMouseEnter={this.startSound}>
        <Fade duration={500} delay={400}>
          <Link to={link}>
            <audio preload="auto" ref={this.myRef} >
              <source src={this.props.sound} type="audio/mpeg"></source>
            </audio>
            <FunBoxText>{text}</FunBoxText>
          </Link>
        </Fade>
      </Wrapper>
    )
  }
}
