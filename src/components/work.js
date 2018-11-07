import React from "react";
import { Link } from "gatsby";
import { Element } from "react-scroll";
import styled from "styled-components";
import Img from "gatsby-image";
import media from "../utils/breakpoints";
import GridImage from "./gridimage";
import randomColor from "../utils/randomColor";

const WorkGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.phone`grid-template-columns: 1fr`};
`;

export default ({ projectEdges }) => {
  const everyFifth = [0, 5, 10, 15, 20, 25, 30];
  // Want to display a grid where each 5th image is 100% wide. So we basically compare the projects' array index with our constant and if they match, we display a "big" image. Otherwise, just a small half-width image.
  // Element is just a wrapper for react-scroll
  return (
    <Element name="work">
      <WorkGrid>
        {projectEdges.map(
          project =>
            everyFifth.includes(projectEdges.indexOf(project)) ? (
              <GridImage
                color={randomColor()}
                key={project.node.frontmatter.name}
                big
                fluid={project.node.frontmatter.bigimage1.childImageSharp.fluid}
                name={project.node.frontmatter.name}
                category={project.node.frontmatter.category}
                link={project.node.fields.slug}
              />
            ) : (
              <GridImage
                color={randomColor()}
                key={project.node.frontmatter.name}
                fluid={project.node.frontmatter.bigimage1.childImageSharp.fluid}
                name={project.node.frontmatter.name}
                category={project.node.frontmatter.category}
                link={project.node.fields.slug}
              />
            )
        )}
      </WorkGrid>
    </Element>
  );
};
