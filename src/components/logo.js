import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoWrapper = styled.div`
  order: 0;
`;

const LogoText = styled.h2`
  font-size: 5rem;
  letter-spacing: 3px;
  line-height: 100px;
`;

const Logo = () => (
  <LogoWrapper>
    <Link to="/">
      <LogoText>achos!</LogoText>
    </Link>
  </LogoWrapper>
);

export default Logo;
