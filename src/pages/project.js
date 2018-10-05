import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Header from "../components/header";
import Contact from "../components/contact";
import LuckyDay from "../components/luckyday";
import Projects from "../components/projects";

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 2.625rem;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  padding: 10vh 0;
  align-items: baseline;
  font-size: 2rem;
  line-height: 1.53;
  margin: 0 3.1875rem 0 3.5625rem;
`;
const TextLeft = styled.p`
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: start;
  color: ${props => props.color};
  padding-right: 1rem;
  border: ${props => (props.test ? "1px solid red" : null)};
  font-size: ${props => (props.test ? "10rem" : null)};
`;
const TextRight = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: start;
  color: ${props => props.color};
`;

const TextCenter = styled.p`
  grid-column: span 2;
  justify-self: center;
  align-self: center;
  padding: 0 30vw;
  margin: 1rem 0;
  color: ${props => props.color};
`;

const ProjectPage = () => (
  <Layout>
    <Header />
    <ProjectWrapper>
      <TextContainer>
        <TextLeft test color="var(--pink)">
          introduction
        </TextLeft>
        <TextRight>
          Discover the world of Mariano Pascual through his own eyes, or in this
          case, his computer.
        </TextRight>
      </TextContainer>
      <TextContainer>
        <TextLeft color="var(--yellow)">concept & execution</TextLeft>
        <TextRight>
          #IStandFor by Beefeater is an anthropological study conducted by
          Domestic Data Streamers in collaboration with Beefeater. Through lots
          (and lots) of questions and lots of technology, we discovered how
          these festivalgoers that were born in the 80s and 90s are and what
          they really stand for.
        </TextRight>
      </TextContainer>
      <TextContainer>
        <TextCenter>Hey</TextCenter>
        <TextCenter>Hey</TextCenter>
        <TextCenter>Hey</TextCenter>
        <TextCenter>Hey</TextCenter>
        <TextCenter>Hey</TextCenter>
        <TextCenter>Hey</TextCenter>
      </TextContainer>
    </ProjectWrapper>
    <Contact />
    <LuckyDay />
  </Layout>
);

export default ProjectPage;
