import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import TextBlock from "../components/textblock";
import AboutPic from "../images/about.gif";
import fontSizes from "../utils/fontSizes";

const Wrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  ${fontSizes(1.875)}
  line-height: 1.53;
`;
const ImageWrapper = styled.div`
  max-width: 100%;
`;

const ListsWrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 5vw 0;
  grid-gap: 3vw;
`;

const List = styled.ul`
  text-align: center;
`;

export default () => (
  <Layout>
    <Wrapper>
      <ImageWrapper>
        <img src={AboutPic} width="100%" />
      </ImageWrapper>
      <ListsWrapper>
        <List>
          <li style={{ color: "var(--pink)" }}>Business Enquiries</li>
          <li style={{ textAlign: "center" }}>
            <a
              href="mailto:hi@achos.es?Subject=Shut up and take my money!"
              target="_blank"
              rel="noopener noreferrer"
            >
              hi@achos.es
            </a>
          </li>
        </List>
        <List>
          <li style={{ color: "var(--cyan)" }}>Collabs</li>
          <li style={{ textAlign: "center" }}>
            <a
              href="mailto:collab@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              collab@achos.es
            </a>
          </li>
        </List>
        <List>
          <li style={{ color: "var(--yellow)" }}>Internships</li>
          <li style={{ textAlign: "center" }}>
            <a
              href="mailto:experience@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              experience@achos.es
            </a>
          </li>
        </List>
      </ListsWrapper>
    </Wrapper>
  </Layout>
);
