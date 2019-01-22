import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import TextBlock, { Wrapper } from "../components/textblock";
import SEO from "../components/SEO";
import randomColor from "../utils/randomColor";
import LuckyDay from "../components/luckyday";
import fontSizes from "../utils/fontSizes";

// TODO: play Mario sound on route change/load

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
`;

const SmallImg = styled(Img)`
  width: 50%;
  display: inline-block;
`;

const CreditsList = styled.ul`
  grid-column: span 2;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: ${props => props.color};
`;

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // console.log(frontmatter);
  return (
    <>
      <SEO
        title={frontmatter.name}
        description={
          frontmatter.introduction || frontmatter.concept || "nothin’"
        }
        image={frontmatter.bigimage1.childImageSharp.fluid}
      />
      <ProjectWrapper>
        <TextBlock
          textCenter={frontmatter.name}
          padding="4vw 0"
          sizeCenter={fontSizes(5)}
          colorCenter="white"
        />
        <Fade duration={3000}>
          <div style={{ maxWidth: "100%" }}>
            <Img fluid={frontmatter.bigimage1.childImageSharp.fluid} />
          </div>
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft="introduction"
          textRight={frontmatter.introduction}
          padding="4vw 0"
        />
        <Fade duration={3000}>
          <Img fluid={frontmatter.bigimage2.childImageSharp.fluid} />
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft="concept & execution"
          textRight={frontmatter.concept}
          padding="4vw 0"
        />
        <Fade cascade duration={3000}>
          <div>
            <SmallImg fluid={frontmatter.smallimage1.childImageSharp.fluid} />
            <SmallImg fluid={frontmatter.smallimage2.childImageSharp.fluid} />
          </div>
        </Fade>

        {frontmatter.attachments &&
          frontmatter.attachments.map(item => (
            <video
              key={item.publicURL}
              loop
              controls
              style={{ width: "100%" }}
              src={item.publicURL}
            />
          ))}
        <Fade cascade duration={3000}>
          <Wrapper style={{ padding: "4vw 0" }}>
            <CreditsList>
              {frontmatter.credits.map(credit => (
                <ul style={{ marginBottom: "2.5vw" }}>
                  <li style={{ color: randomColor() }} key={credit.title}>
                    {credit.title}
                  </li>
                  <li>{credit.name}</li>
                </ul>
              ))}
            </CreditsList>
          </Wrapper>
        </Fade>
      </ProjectWrapper>
      <LuckyDay />
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        introduction
        concept
        attachments {
          publicURL
        }
        credits {
          title
          color
          name
        }
        bigimage1 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bigimage2 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smallimage1 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        smallimage2 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(filter: { extension: { eq: "gif" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
