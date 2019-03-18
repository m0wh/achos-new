import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'

const ScrollingText = styled.p`
  ${ fontSizes(9) };
`

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  margin: auto;
  height: 200px; 
  overflow: hidden;
  position: relative;
  padding: 2.625rem 0;
  color: white;
  background: ${ props => props.black ? 'var(--black)' : 'linear-gradient(246deg, #ff60dd, #60ff66, #f4ff60, #60f0ff)' };
  background-size: 400% 400%;

  animation: ${ props => props.black ? '' : 'BgColors 30s ease infinite' };

  @keyframes BgColors {
    0% {
      background-position: 0% 72%;
    }
    50% {
      background-position: 100% 29%;
    }
    100% {
      background-position: 0% 72%;
    }
  }
  &:hover {
    background-size: 100% 100%;
    cursor: ${ props => props.cursormail ? 'var(--mail)' : 'var(--down)' };
  }
`

class FancyMarquee extends React.Component {
  state = {
    translateX: 0,
  };

  myRef = React.createRef();

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const range = 40
    let scrolled = window.pageYOffset
    const elemHeight = this.myRef.current && this.myRef.current.offsetHeight
    const elemOffsetTop = this.myRef.current && this.myRef.current.offsetTop
    let calc = 1 - ((scrolled - elemOffsetTop + range) / range).toFixed(2) * 100

    this.setState({
      translateX: `translateX(${ calc }%)`
    })
  }

  render () {
    const { text, black } = this.props
    console.log(this.state.translateX)
    return (
      <Wrapper black={black} ref={this.myRef}>
        <ScrollingText style={{ transform: this.state.translateX }}>{text}</ScrollingText>
      </Wrapper>
    )
  }
};

export default FancyMarquee
