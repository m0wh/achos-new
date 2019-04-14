import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1vw;
  align-items: baseline;
  ${ fontSizes(1.875) }
  margin: var(--generalSpacing);
  padding: ${ props => props.padding };
`

export const TextLeft = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  color: ${ props => props.color };
  font-size: ${ props => props.sizeLeft };
`
const TextRight = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  ${ media.phone`
    grid-column-start: 1;
    grid-column-end: -1;
  ` }

  color: inherit;
  font-size: ${ props => props.sizeRight };
`
const TextCenter = styled.p`
  grid-column: span 2;
  justify-items: center;
  text-align: center;
  font-size: ${ props => props.sizeCenter };
  color: ${ props => props.color };
`
const TextBlock = ({
  padding,
  sizeLeft,
  colorLeft,
  textLeft,
  sizeRight,
  textRight,
  sizeCenter,
  colorCenter,
  textCenter
}) => (
  <Wrapper padding={padding}>
    <TextLeft sizeLeft={sizeLeft} color={colorLeft}>
      <Fade duration={1000}>{textLeft}</Fade>
    </TextLeft>
    <TextRight sizeRight={sizeRight}>
      <Fade duration={2000}>{textRight}</Fade>
    </TextRight>
    <TextCenter sizeCenter={sizeCenter} color={colorCenter}>
      {textCenter}
    </TextCenter>
  </Wrapper>
)

export default TextBlock
