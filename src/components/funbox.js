import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import posed from 'react-pose'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column: ${ props => (props.big ? 'span 2' : null) };
  background: url(${ props => props.background }) no-repeat center/100%;
  background-color: ${ props => props.backgroundColor };
  align-items: center;
  text-align: center;
  
`

const FunBoxText = styled.h3`
  ${ fontSizes(3.33) };
  color: ${ props => props.textColor ? props.textColor : 'white' };
`

const FunBox = ({ isBig, text, background, link, video, backgroundColor, textColor }) => {
  return (
    <Wrapper background={background} backgroundColor={backgroundColor} isBig={isBig}>
      <Fade duration={500} delay={400}>
        <a href={link} rel="noopener noreferrer">
          {text && <FunBoxText textColor={textColor}>{text}</FunBoxText>}
          {video && <video width="100%" controls src={video} />}
        </a>
      </Fade>
    </Wrapper>
  )
}

FunBox.propTypes = {
  isBig: PropTypes.bool,
  text: PropTypes.string,
  background: PropTypes.string,
  link: PropTypes.string,
  video: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string
}

export default FunBox
