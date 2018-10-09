import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import { TextContainer, TextLeft, TextRight } from "./project";

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

const GreyTextContainer = styled(TextContainer)`
  color: var(--lightgrey);
`;

const AboutPage = () => (
  <Layout>
    <GreyTextContainer>
      <TextLeft color="var(--pink)">Who We Are</TextLeft>
      <TextRight style={{ fontSize: "3rem" }}>{aboutText[0].header}</TextRight>
      <TextRight>{aboutText[0].first}</TextRight>
      <TextRight>{aboutText[0].second}</TextRight>
    </GreyTextContainer>
    <GreyTextContainer>
      <TextLeft color="var(--yellow)">Attention</TextLeft>
      <TextRight>{aboutText[1].attention}</TextRight>
      <TextLeft color="var(--pink)">crazy websites</TextLeft>
      <TextRight>{aboutText[1].crazyWebsites}</TextRight>
      <TextLeft color="var(--green)">hot branding</TextLeft>
      <TextRight>{aboutText[1].hotBranding}</TextRight>
    </GreyTextContainer>
  </Layout>
);

export default AboutPage;
