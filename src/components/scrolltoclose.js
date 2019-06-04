import React from 'react'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'
import { useScrollPercentage } from 'react-scroll-percentage'
import { navigate } from 'gatsby'

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 30vh;
  padding: 0 20rem;
  margin-bottom: 50rem;
  color: white;
  ${ fontSizes(1.875) }
`

const ScrollToClose = () => {
  const [ref, percentage] = useScrollPercentage({
    threshold: 0.25,
  })
  return (
    <Wrapper>
      <p ref={ref} style={{ opacity: `${ percentage.toFixed(2) }` }}>Scroll to close</p>
      {percentage === 1 ? navigate('/', { replace: true }) : null}
    </Wrapper>
  )
}

export default ScrollToClose
