import React, { useState } from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import { useScrollPercentage } from 'react-scroll-percentage'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 60vh;
  padding: 10rem 0 20rem 0;
  margin-bottom: 20rem;
  color: white;
  ${ fontSizes(1.875) }
`

const ScrollToClose = () => {
  const takeMeBack = (function () {
    let executed = false
    return function () {
      if (!executed) {
        executed = true
        window.history.back()
      }
    }
  })()
  const [ref, percentage] = useScrollPercentage({
    threshold: 0.25,
  })
  return (
    <Wrapper>
      <p ref={ref} style={{ opacity: `${ percentage.toFixed(2) }` }}>Scroll to close</p>
      {percentage === 1 ? takeMeBack() : null}
    </Wrapper>
  )
}

export default ScrollToClose
