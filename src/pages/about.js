import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import TextBlock from "../components/textblock";
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
    { name: "EVA '17", link: "http://evafest.com/" },
    {
      name: "Pecha Kucha Den Haag '17",
      link: "http://www.pechakuchadenhaag.nl"
    },
    {
      name: "ADCE Potencial '17",
      link:
        "http://www.adceurope.org/news/detail/id/140/adce-high-potentials-comes-to-munich-in-2017"
    },
    { name: "OFFF Barcelona '16", link: "http://www.offf.ws" },
    { name: "ENED '16", link: "https://ened.pt" },
    { name: "ADCE '15", link: "http://europeancreativityfestival.com" },
    { name: "Idep Barcelona '15", link: "http://www.idep.es" },
    { name: "FIU Barcelona '15", link: "http://www.fiubcn.com" },
    {
      name: "Student Laus Tour '14",
      link: "http://www.fad.cat/adg/blog/2014/12/01/students-laus-tour/"
    },
    { name: "FIU Barcelona '14", link: "http://www.fiubcn.com" },
    { name: "UAB '14", link: "http://www.fiubcn.com" }
  ],
  [
    {
      name: "Design Kids '17",
      link: "http://thedesignkids.org/interviews/achos/"
    },
    {
      name: "TIA '17",
      link:
        "http://www.topinteractiveagencies.com/digital/agency/profiles/mixing-work-pleasure-search-creativity/"
    },
    {
      name: "Charlie Magazine '15",
      link: "http://charliemag.be/wereld/barcelona1/"
    },
    {
      name: "el Periodico '15",
      link:
        "http://www.elperiodico.com/es/noticias/sociedad/espai-born-compartir-espacio-los-proyectos-trabajo-4186661"
    },
    {
      name: "Graffica '15",
      link: "http://graffica.info/achos-robo-sagmeister-walsh/"
    },
    {
      name: "Creative Review '15",
      link:
        "http://www.creativereview.co.uk/cr-blog/2015/april/sagmeister-walsh-and-the-robbery-that-never-was/"
    },
    {
      name: "BOOOOOOOM '15",
      link:
        "http://www.booooooom.com/2015/04/21/how-to-get-noticed-steal-work-from-sagmeister-walsh/"
    },
    { name: "Murcia Visual '14", link: "http://www.murciavisual.com/?p=8170" },
    { name: "Idep Barcelona '14", link: "http://www.idep.es" },
    {
      name: "Small Job '14",
      link:
        "http://blog.asmalljob.com/?utm_source=rss&utm_medium=rss&utm_campaign=como-partir-un-laus"
    }
  ],
  [
    {
      name: "Developer Award '18",
      link: "https://www.awwwards.com/sites/mariano-pascual"
    },
    {
      name: "Awwwards SOTD '18",
      link: "https://www.awwwards.com/sites/mariano-pascual"
    },
    {
      name: "Brutalist Website '17",
      link: "http://brutalistwebsites.com/dictionaryofonlinebehavior.com/"
    },
    {
      name: "Honors Awwwards '17",
      link: "https://www.awwwards.com/sites/lazy-eyes"
    },
    {
      name: "Brutalist Website '17",
      link: "http://brutalistwebsites.com/lazyeyes.cool/"
    },
    {
      name: "Honors Awwwards '17",
      link: "https://www.awwwards.com/sites/codea-studio"
    },
    {
      name: "Brutalist Website '17",
      link: "http://brutalistwebsites.com/codeastudio.com/"
    },
    {
      name: "Honors Awwwards '17",
      link: "https://www.awwwards.com/sites/collabwith-jen-lu"
    },
    {
      name: "Honors Awwwards '17",
      link: "https://www.awwwards.com/sites/smash-post-production-company"
    },
    { name: "Laus '15", link: "" },
    { name: "Laus '14", link: "" }
  ]
];

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  @media (min-width: 320px) {
     {
      font-size: calc(1.1rem + ((1vw - 0.2rem) * 2.4107));
    }
  }
  @media (min-width: 768px) {
     {
      font-size: 1.875rem;
    }
  }
  line-height: 1.53;
`;
const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 9vw 0;
`;

const ShowsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3vw;
  justify-items: center;
  align-items: baseline;
  text-align: center;
  padding: 9vh 3.5vw;
`;

const CreditsList = styled.ul`
  display: grid;
  justify-items: center;
`;

export default () => (
  <Layout>
    <ProjectWrapper>
      <ImageWrapper style={{ marginTop: 0, marginBottom: "6rem" }}>
        <img src={AboutPic} width="100%" />
      </ImageWrapper>
      <TextBlock
        colorLeft="var(--pink)"
        textLeft="who we are"
        textRight={aboutText[0].header}
        sizeRight="3rem"
        sizeLeft="1.875rem"
        style={{ margin: "9vw 0" }}
      />
      <TextBlock textRight={aboutText[0].first} />
      <TextBlock textRight={aboutText[0].second} />

      <ImageWrapper>
        <img src={BeansPic} width="100%" />
      </ImageWrapper>
      <TextBlock
        colorLeft="var(--yellow)"
        textLeft="attention"
        textRight={aboutText[1].attention}
      />
      <TextBlock
        colorLeft="var(--pink)"
        textLeft="crazy websites"
        textRight={aboutText[1].crazyWebsites}
      />
      <TextBlock
        colorLeft="var(--green)"
        textLeft="hot branding"
        textRight={aboutText[1].hotBranding}
      />
      <ImageWrapper>
        <img src={BeansPic} width="100%" />
      </ImageWrapper>

      <CreditsList style={{ padding: "0 3rem" }}>
        <li style={{ color: "var(--green)", marginBottom: "2rem" }}>
          and everything nice!
        </li>
        <li style={{ textAlign: "center" }}>{hotBranding}</li>
      </CreditsList>

      <CreditsList style={{ padding: "0 3rem" }}>
        <li style={{ color: "var(--pink)", marginBottom: "2rem" }}>
          Shooting Range
        </li>
      </CreditsList>

      <ShowsContainer>
        <ul>
          <ul style={{ color: "var(--green)", marginBottom: "4vw" }}>
            Bla Bla
          </ul>
          {blaBoomBling[0].map(item => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <ul style={{ color: "var(--cyan)", marginBottom: "4vw" }}>
            Boom Boom
          </ul>
          {blaBoomBling[1].map(item => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <ul style={{ color: "var(--yellow)", marginBottom: "4vw" }}>
            Bling Bling
          </ul>
          {blaBoomBling[2].map(item => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </ShowsContainer>
    </ProjectWrapper>
  </Layout>
);
