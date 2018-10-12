import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import { TextContainer, TextLeft, TextRight, CreditsList } from "./project";

import BeansPic from "../images/beans.jpg";
import AboutPic from "../images/about.gif";

const aboutText = [
  {
    header:
      "We are a creative agency focusing on provocative ideas. We create work that “awes” and entertains humans of all sorts. Our work is edgy and fun! We are young, we like to collaborate & we are always online.",
    first:
      "But what does achos! mean? Achos is a Spanish expression that originates from Murcia, Spain. It means “young kids”, or “dudes” and is used as a call for attention! It’s also an anagram for chaos! It might be no accident, as it’s been reiterated that creativity is on the edge of chaos!",
    second:
      "achos! was founded in 2013, Barcelona by Benjamin Barber and David Ortega with one goal in mind; to bring fun back into the creative work. When they first started, David, our Creative Director, worked as a metro driver whilst Ben, our talented Designer/AD, made cocktails in a bar. Simultaneously, spending all their time and money on passion projects (and parties!) Years later achos! was born purely out of passion!"
  },
  {
    attention:
      "Communication & advertising campaigns that will make you stop & stare. In every brief we look for the ‘wow’ factor. We will steal, lie and cheat for you if that’s what you’re into.",
    crazyWebsites:
      "We despise the template! That’s why we always creating fun & original web & digital solutions. They say the average website visit time is 30 seconds, we’ll extend yours to 30 minutes...",
    hotBranding:
      "We bring out the best of you, we make you young and attractive! We like to get intimate with our clients through every step of the creative process."
  }
];

const hotBranding =
  "art direction / bondage / events / graphic design / illustration / digital marketing / sex / print /  editorial / naming / messaging / tone of voice / strategy / positioning / latex / packaging design / porn / social media / film / WOW factor! / creative team";

const blaBoomBling = [
  [
    "EVA '17",
    "Pecha Kucha Den Haag '17",
    "ADCE Potencial '17",
    "OFFF Barcelona '16",
    "ENED '16",
    "ADCE '15",
    "Idep Barcelona '15",
    "FIU Barcelona '15",
    "Student Laus Tour '14",
    "FIU Barcelona '14",
    "UAB '14"
  ],
  [
    "Design Kids '17",
    "TIA '17",
    "Charlie Magazine '15",
    "el Periodico '15",
    "Graffica '15",
    "Creative Review '15",
    "BOOOOOOOM '15",
    "Murcia Visual '14",
    "Idep Barcelona '14",
    "Small Job '14"
  ],
  [
    "Developer Award '18",
    "Awwwards SOTD '18",
    "Brutalist Website '17",
    "Honors Awwwards '17",
    "Brutalist Website '17",
    "Honors Awwwards '17",
    "Brutalist Website '17",
    "Honors Awwwards '17",
    "Honors Awwwards '17",
    "Laus '15",
    "Laus '14"
  ]
];

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
`;
const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 9rem 0;
`;

const ShowsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  justify-items: center;
  align-items: baseline;
  font-size: 2rem;
  line-height: 1.53;
  text-align: center;
`;

const AboutPage = () => (
  <Layout>
    <ProjectWrapper>
      <ImageWrapper style={{ marginTop: 0, marginBottom: "6rem" }}>
        <img src={AboutPic} width="100%" />
      </ImageWrapper>
      <TextContainer
        style={{
          marginTop: "5rem",
          paddingRight: "3rem"
        }}
      >
        <TextLeft color="var(--pink)">Who We Are</TextLeft>
        <TextRight
          style={{
            fontSize: "3rem",
            marginBottom: "3.5rem",
            lineHeight: "1.4"
          }}
        >
          {aboutText[0].header}
        </TextRight>
        <TextRight style={{ marginBottom: "3.5rem" }}>
          {aboutText[0].first}
        </TextRight>
        <TextRight>{aboutText[0].second}</TextRight>
      </TextContainer>
      <ImageWrapper>
        <img src={BeansPic} width="100%" />
      </ImageWrapper>
      <TextContainer>
        <TextLeft color="var(--yellow)">Attention</TextLeft>
        <TextRight style={{ paddingRight: "3rem" }}>
          {aboutText[1].attention}
        </TextRight>
      </TextContainer>
      <TextContainer>
        <TextLeft color="var(--pink)">crazy websites</TextLeft>
        <TextRight style={{ paddingRight: "3rem" }}>
          {aboutText[1].crazyWebsites}
        </TextRight>
      </TextContainer>
      <TextContainer>
        <TextLeft color="var(--green)">hot branding</TextLeft>
        <TextRight style={{ paddingRight: "3rem" }}>
          {aboutText[1].hotBranding}
        </TextRight>
      </TextContainer>
      <ImageWrapper>
        <img src={BeansPic} width="100%" />
      </ImageWrapper>
      <TextContainer>
        <CreditsList style={{ padding: "0 3rem" }}>
          <li style={{ color: "var(--green)", marginBottom: "2rem" }}>
            Hot Branding
          </li>
          <li>{hotBranding}</li>
        </CreditsList>
      </TextContainer>
      <TextContainer>
        <CreditsList style={{ padding: "0 3rem" }}>
          <li style={{ color: "var(--pink)", marginBottom: "2rem" }}>
            Shooting Range
          </li>
        </CreditsList>
      </TextContainer>
      <ShowsContainer>
        <ul>
          <ul style={{ color: "var(--green)" }}>Bla Bla</ul>
          {blaBoomBling[0].map(item => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
        <ul>
          <ul style={{ color: "var(--cyan)" }}>Boom Boom</ul>
          {blaBoomBling[1].map(item => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
        <ul>
          <ul style={{ color: "var(--yellow)" }}>Bling Bling</ul>
          {blaBoomBling[2].map(item => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </ShowsContainer>
    </ProjectWrapper>
  </Layout>
);

export default AboutPage;
