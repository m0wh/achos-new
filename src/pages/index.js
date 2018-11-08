import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Intro from "../components/intro";
import Work from "../components/work";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: projectEdges }
  }
}) => (
  <Layout>
    <Intro />
    <Work projectEdges={projectEdges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fileAbsolutePath], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            category
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
