import React, { useRef, useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const SliderWrapper = styled.section`
  overflow: auto;
  margin: 9vw 0;
  display: grid;
  align-items: center;
  width: 100vw;
  
`

const SliderContainer = styled.div`
  position: relative;
  padding: 0 6vmin;
  white-space: nowrap;
  height: 100%;
`
const SliderImage = styled.div`
  display: inline-block;
  width: 50vmax;
  margin: 0 2vmin;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  transition: all 0.65s ease;

`

const ImageSlider = ({ edges }) => {
  let parentRef = useRef(null)
  let childRef = useRef(null)
  function mouseMove (event) {
    let thisWidth = childRef.current.offsetWidth
    let barWidth = (window.innerWidth / thisWidth) * window.innerWidth
    let maxScroll = parentRef.current.offsetWidth
    let scrollSize = (event.clientX * thisWidth) / maxScroll

    parentRef.current.scrollLeft = scrollSize - barWidth
  }
  return (
    <SliderWrapper onMouseMove={mouseMove} ref={parentRef}>
      <SliderContainer ref={childRef}>
        {edges.filter(element => element.node.childImageSharp !== null).map(item => (
          <SliderImage>
            <Img width="100%" fluid={item.node.childImageSharp.fluid} />
          </SliderImage>
        ))}
      </SliderContainer>
    </SliderWrapper>
  )
}

export default ImageSlider
