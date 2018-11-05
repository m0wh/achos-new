import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import TextBlock, { Wrapper } from "../components/textblock";
import randomColor from "../utils/randomColor";

import Layout from "../components/layout";

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 2.625rem;
`;

const SmallImg = styled(Img)`
  width: 50%;
  display: inline-block;
`;

const CreditsList = styled.ul`
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
        <TextBlock
          colorLeft={randomColor()}
          textLeft="introduction"
          textRight={frontmatter.introduction}
        />
        <div style={{ maxWidth: "100%" }}>
          <Img fluid={frontmatter.bigimage1.childImageSharp.fluid} />
        </div>
        <TextBlock
          colorLeft={randomColor()}
          textLeft="concept & execution"
          textRight={frontmatter.concept}
        />
        <Img fluid={frontmatter.bigimage2.childImageSharp.fluid} />
        <div>
          <SmallImg fluid={frontmatter.smallimage1.childImageSharp.fluid} />
          <SmallImg fluid={frontmatter.smallimage2.childImageSharp.fluid} />
        </div>

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

        <Wrapper>
          <CreditsList>
            {frontmatter.credits.map(credit => (
              <ul style={{ marginBottom: "2.5rem" }}>
                <li style={{ color: randomColor() }} key={credit.id}>
                  {credit.title}
                </li>
                <li>{credit.name}</li>
              </ul>
            ))}
          </CreditsList>
        </Wrapper>
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
