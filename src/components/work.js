import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import media from "../utils/breakpoints";
import GridImage from "./gridimage";
import randomColor from "../utils/randomColor";

import MoanSound1 from "../images/moan/moan1.mp3";
import MoanSound2 from "../images/moan/moan2.mp3";
import MoanSound3 from "../images/moan/moan3.mp3";
import MoanSound4 from "../images/moan/moan4.mp3";

import TickSound from "../images/tick3.mp3";

const randomMoan = () => {
  const moanSounds = [MoanSound1, MoanSound2, MoanSound3, MoanSound4];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const chosen = getRandomInt(moanSounds.length);
  return moanSounds[chosen];
};

const WorkGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.phone`grid-template-columns: 1fr`};
`;

export default ({ projectEdges }) => {
  const everyFifth = [0, 5, 10, 15, 20, 25, 30];
  // Want to display a grid where each 5th image is 100% wide. So we basically compare the projects' array index with our constant and if they match, we display a "big" image. Otherwise, just a small half-width image.
  // Hovering the big images also plays a random moan sound.
  // Element is just a wrapper for react-scroll
  return (
    <Element name="work">
      <WorkGrid>
        <Fade duration={1500} delay={400}>
          {projectEdges.map(project =>
            everyFifth.includes(projectEdges.indexOf(project)) ? (
              <GridImage
                color={randomColor()}
                key={project.node.frontmatter.name}
                big
                fluid={project.node.frontmatter.bigimage1.childImageSharp.fluid}
                name={project.node.frontmatter.name}
                category={project.node.frontmatter.category}
                link={project.node.fields.slug}
                sound={randomMoan()}
              />
            ) : (
              <GridImage
                color={randomColor()}
                key={project.node.frontmatter.name}
                fluid={project.node.frontmatter.bigimage1.childImageSharp.fluid}
                name={project.node.frontmatter.name}
                category={project.node.frontmatter.category}
                link={project.node.fields.slug}
                sound={TickSound}
              />
            )
          )}
        </Fade>
      </WorkGrid>
    </Element>
  );
};
