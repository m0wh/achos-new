import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import rafSchd from 'raf-schd'

const ScrollingText = styled.p`
  ${ fontSizes(9) };
  transition: transform 0.2s linear;
`

// Width has to be more than 100vw, otherwise long text justifies itself because it does not fit the viewport.

const Wrapper = styled.section`
  width: 300vw;
  margin: auto;
  overflow: hidden;
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
`

class FancyMarquee extends React.Component {
  state = {
    translateX: null,
  };

  myRef = React.createRef();

  getOffsetTop = () => this.myRef.current && this.myRef.current.offsetTop

  getHeight = () => this.myRef.current && this.myRef.current.offsetHeight

  componentDidMount () {
    window.addEventListener('scroll', rafSchd(this.handleScroll))
    this.elemOffsetTop = this.getOffsetTop()
    this.elemOffsetHeight = this.getHeight()
  }

  componentWillUnmount () {
    rafSchd(this.handleScroll).cancel()
    window.removeEventListener('scroll', rafSchd(this.handleScroll))
  }

  handleScroll = () => {
    const range = 200
    let scrolled = window.pageYOffset
    let calc = 0.2 * (1 - (((scrolled - this.elemOffsetTop - (this.elemOffsetHeight / 2) + range) / range) * 100))

    this.setState({
      translateX: `translateX(${ calc }%)`
    })
  }

  render () {
    const { text, black } = this.props
    return (
      <Wrapper black={black} ref={this.myRef}>
        <ScrollingText style={{ transform: `${ this.state.translateX } translateZ(1px)` }}>{text}</ScrollingText>
      </Wrapper>
    )
  }
};

export default FancyMarquee

// https://reactjs.org/docs/faq-functions.html#requestanimationframe-throttling

// STUDIO JOB
// key: "onScroll",
//             value: function(e) {
//                 e.scrollY + window.innerHeight >= this.containerBounds.top && e.scrollY <= this.containerBounds.bottom && this.inner && (this.nextTranslationValue = e.scrollY + window.innerHeight - this.containerBounds.top,
//                 this.nextTranslationValue = c.map([0, window.innerHeight + this.containerBounds.height], [0, 75], this.nextTranslationValue),
//                 this.translationValue += .12 * (this.nextTranslationValue - this.currentTranslationValue),
//                 this.currentTranslationValue = this.translationValue,
//                 this.inner.style.transform = "translateX(-" + this.translationValue + "%) translateZ(1px)")
//             }
