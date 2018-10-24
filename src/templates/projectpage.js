import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

import Layout from "../components/layout";

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 2.625rem;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  padding: 10vh 0;
  align-items: baseline;
  font-size: 2rem;
  line-height: 1.53;
  margin: 0 3.5625rem;
`;
export const TextLeft = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: start;
  color: ${props => props.color};
  padding-right: 1rem;
`;
export const TextRight = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: start;
  color: ${props => props.color};
`;

const SmallImg = styled(Img)`
  width: 50%;
  display: inline-block;
`;

export const CreditsList = styled.ul`
  grid-column: span 2;
  justify-self: center;
  align-self: center;
  text-align: center;
  padding: 0 30vw;
  margin: 1rem 0;
  color: ${props => props.color};
`;

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <ProjectWrapper>
        <TextContainer>
          <TextLeft color="var(--pink)">introduction</TextLeft>
          <TextRight>{frontmatter.introduction}</TextRight>
        </TextContainer>
        <div>
          <Img fluid={frontmatter.bigimage1.childImageSharp.fluid} />
        </div>
        <TextContainer>
          <TextLeft color="var(--yellow)">concept & execution</TextLeft>
          <TextRight>{frontmatter.concept}</TextRight>
        </TextContainer>
        <Img fluid={frontmatter.bigimage2.childImageSharp.fluid} />
        <div>
          <SmallImg fluid={frontmatter.smallimage1.childImageSharp.fluid} />
          <SmallImg fluid={frontmatter.smallimage2.childImageSharp.fluid} />
        </div>
        <img
          style={{ width: "100%" }}
          src={frontmatter.attachments[0].publicURL}
        />
        <video
          loop
          controls
          style={{ width: "100%" }}
          src={frontmatter.attachments[1].publicURL}
        />
        <TextContainer>
          <CreditsList>
            {frontmatter.credits.map(credit => (
              <ul style={{ marginBottom: "2.5rem" }}>
                <li style={{ color: credit.color }} key={credit.id}>
                  {credit.title}
                </li>
                <li>{credit.name}</li>
              </ul>
            ))}
          </CreditsList>
        </TextContainer>
      </ProjectWrapper>
      <div>
        {/* <Project src={AxpePic} width="50%" />
        <Project src={DadaPic} width="50%" /> */}
      </div>
    </Layout>
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
