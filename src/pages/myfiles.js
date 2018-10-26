import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  const { frontmatter } = data.allMarkdownRemark.edges[1].node;
  return (
    <Layout>
      <h1>{frontmatter.name}</h1>
      <h1>{frontmatter.introduction}</h1>
      <div style={{ width: "50%" }}>
        <Img fluid={frontmatter.bigimage1.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            introduction
            bigimage1 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
