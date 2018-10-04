import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Navbar from "./navbar";
import Logo from "./logo";

const HeaderWrapper = styled.header`
  max-width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  color: white;
  font-size: 3rem;
  margin: 2.625rem 3.1875rem 0 3.5625rem;
`;
const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navbar />
  </HeaderWrapper>
);

export default Header;
