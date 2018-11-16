import React from "react";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

// import Layout from "../components/layout";
import TextBlock from "../components/textblock";
import AboutPic from "../images/about.gif";
import fontSizes from "../utils/fontSizes";

import BeansImg from "../images/beans.jpg";

const Wrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  ${fontSizes(1.875)}
  line-height: 1.53;
`;
const ImageWrapper = styled.div`
  max-width: 100%;
`;

const LocationsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

const BusinessMail = styled.a`
  ${fontSizes(8)};
`;
const CollabsMail = styled.a`
  ${fontSizes(4.6)};
`;
const InternshipsMail = styled.a`
  ${fontSizes(2.2)};
`;

export default ({ data }) => (
  <>
    <Wrapper>
      <ImageWrapper>
        <img src={AboutPic} width="100%" />
      </ImageWrapper>
      <ListsWrapper>
        <List>
          <li style={{ color: "var(--pink)" }}>Business Enquiries</li>
          <li style={{ textAlign: "center" }}>
            <BusinessMail
              href="mailto:hi@achos.es?Subject=Shut up and take my money!"
              target="_blank"
              rel="noopener noreferrer"
            >
              hi@achos.es
            </BusinessMail>
          </li>
        </List>
        <List>
          <li style={{ color: "var(--cyan)" }}>Collabs</li>
          <li style={{ textAlign: "center" }}>
            <CollabsMail
              href="mailto:collab@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              collab@achos.es
            </CollabsMail>
          </li>
        </List>
        <List>
          <li style={{ color: "var(--yellow)" }}>Internships</li>
          <li style={{ textAlign: "center" }}>
            <InternshipsMail
              href="mailto:experience@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              experience@achos.es
            </InternshipsMail>
          </li>
        </List>
      </ListsWrapper>
      <LocationsWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </LocationsWrapper>
    </Wrapper>
  </>
);

export const query = graphql`
  query ContactQuery {
    file(relativePath: { eq: "achosnew/src/images/beans.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
