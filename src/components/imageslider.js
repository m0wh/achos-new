import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SliderWrapper = styled.section`
  overflow: auto;
  margin: 9vw 0;
  display: grid;
  align-items: center;
  width: 100vw;
  // height: 60vh;
  
`

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 6vmin;
  white-space: nowrap;
  height: 100%;
`
const SliderImage = styled.div`
  display: inline-block;
  width: 40vw;
  margin: 0 2vmin;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  // transform: scale(1, 1);
  transition: all 0.65s ease;

`

const ImageSlider = ({ images }) => {
  return (
    <SliderWrapper>
      <SliderContainer>
        {images.map((item, index) => (
          <SliderImage key={index}>
            <img width="100%" src={item} />
          </SliderImage>
        ))}
      </SliderContainer>
    </SliderWrapper>
  )
}

export default ImageSlider
