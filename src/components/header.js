import React from 'react'
import styled from 'styled-components'

import Navbar from './navbar'
import Logo from './logo'

const HeaderWrapper = styled.header`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: baseline;
  color: white;
  margin: var(--generalSpacing);
  margin-top: 0;
`

const Header = ({ width }) => (
  <HeaderWrapper>
    <Logo />
    <Navbar width={width} />
  </HeaderWrapper>
)

export default Header
