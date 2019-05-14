import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import fontSizes from '../utils/fontSizes'

import SoundGif from './soundgif'

import Sound from '../images/barcelona.mp3'
import GIF from '../images/gifs/5sectour.gif'

const LogoWrapper = styled.div`
  z-index: 1;
  margin-top: 15px;
`

const LogoText = styled.h2`
  ${ fontSizes(5) };
  letter-spacing: 3px;
  line-height: 100px;
`

const locationArray = ['/', '/contact', '/about']

const Logo = () => (
  <LogoWrapper>
    <SoundGif sound={Sound} gif={GIF}>
      <Link to="/">
        <LogoText>
          {typeof location !== `undefined` &&
            locationArray.includes(location.pathname)
            ? 'achos!'
            : 'achos&'}
        </LogoText>
      </Link>
    </SoundGif>
  </LogoWrapper>
)

export default Logo
