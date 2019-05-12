import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import TextBlock from '../components/textblock'
import BeansPic from '../images/beans.jpg'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'
import ImageSlider from '../components/imageslider'

const aboutText = [
  {
    header:
      'We are a creative agency focusing on provocative ideas. We create work that “awes” and entertains humans of all sorts. Our work is edgy and fun! We are young, we like to collaborate & we are always online.',
    first:
      'But what does achos! mean? Achos is a Spanish expression that originates from Murcia, Spain. It means “young kids”, or “dudes” and is used as a call for attention! It’s also an anagram for chaos! It might be no accident, as it’s been reiterated that creativity is on the edge of chaos!',
    second:
      'achos! was founded in 2013, Barcelona by Benjamin Barber and David Ortega with one goal in mind; to bring fun back into the creative work. When they first started, David, our Creative Director, worked as a metro driver whilst Ben, our talented Designer/AD, made cocktails in a bar. Simultaneously, spending all their time and money on passion projects (and parties!) Years later achos! was born purely out of passion!'
  },
  {
    attention:
      'Communication & advertising campaigns that will make you stop & stare. In every brief we look for the ‘wow’ factor. We will steal, lie and cheat for you if that’s what you’re into.',
    crazyWebsites:
      'We despise the template! That’s why we always creating fun & original web & digital solutions. They say the average website visit time is 30 seconds, we’ll extend yours to 30 minutes...',
    hotBranding:
      'We bring out the best of you, we make you young and attractive! We like to get intimate with our clients through every step of the creative process.'
  }
]

const blaBla =
  [
    { name: 'Pecha Kucha Den Haag', link: 'http://www.pechakuchadenhaag.nl' },
    {
      name: 'EVA',
      link: 'http://evafest.com/'
    },
    {
      name: 'ADCE Potencial',
      link:
        'http://www.adceurope.org/news/detail/id/140/adce-high-potentials-comes-to-munich-in-2017'
    },
    { name: 'OFFF Barcelona', link: 'http://www.offf.ws' },
    { name: 'ENED', link: 'https://ened.pt' },
    { name: 'ADCE', link: 'http://europeancreativityfestival.com' },
    { name: 'Idep Barcelona', link: 'http://www.idep.es' },
    { name: 'FIU Barcelona', link: 'http://www.fiubcn.com' },
    { name: 'UAB', link: 'http://www.fiubcn.com' }
  ]

const boomBoom =
  [
    {
      name: 'Design Kids',
      link: 'http://thedesignkids.org/interviews/achos/'
    },
    {
      name: 'TIA',
      link:
        'http://www.topinteractiveagencies.com/digital/agency/profiles/mixing-work-pleasure-search-creativity/'
    },
    {
      name: 'Charlie Magazine',
      link: 'http://charliemag.be/wereld/barcelona1/'
    },
    {
      name: 'el Periodico',
      link:
        'http://www.elperiodico.com/es/noticias/sociedad/espai-born-compartir-espacio-los-proyectos-trabajo-4186661'
    },
    {
      name: 'Graffica',
      link: 'http://graffica.info/achos-robo-sagmeister-walsh/'
    },
    {
      name: 'Creative Review',
      link:
        'http://www.creativereview.co.uk/cr-blog/2015/april/sagmeister-walsh-and-the-robbery-that-never-was/'
    },
    {
      name: 'BOOOOOOOM',
      link:
        'http://www.booooooom.com/2015/04/21/how-to-get-noticed-steal-work-from-sagmeister-walsh/'
    },
    { name: 'Murcia Visual', link: 'http://www.murciavisual.com/?p=8170' },
    { name: 'Idep Barcelona', link: 'http://www.idep.es' },
    {
      name: 'Small Job',
      link:
        'http://blog.asmalljob.com/?utm_source=rss&utm_medium=rss&utm_campaign=como-partir-un-laus'
    }
  ]

const blingBling =
  [
    {
      name: 'Mariano Pascual · SOTD & Dev. Awwwards ',
      link: 'https://www.awwwards.com/sites/mariano-pascual'
    },
    {
      name: 'DOOB · Brutalist Website',
      link: 'http://brutalistwebsites.com/dictionaryofonlinebehavior.com/'
    },
    {
      name: 'Lazy Eyes · Honors Awwwards',
      link: 'https://www.awwwards.com/sites/lazy-eyes'
    },
    {
      name: 'Lazy Eyes · Brutalist Website',
      link: 'http://brutalistwebsites.com/lazyeyes.cool/'
    },
    {
      name: 'Codea Studio · Honors Awwwards',
      link: 'https://www.awwwards.com/sites/codea-studio'
    },
    {
      name: 'Codea Studio · Brutalist Website',
      link: 'http://brutalistwebsites.com/codeastudio.com/'
    },
    {
      name: 'Jen Lu · Honors Awwwards',
      link: 'https://www.awwwards.com/sites/collabwith-jen-lu'
    },
    {
      name: 'Smash · Honors Awwwards',
      link: 'https://www.awwwards.com/sites/smash-post-production-company'
    },
    { name: "Laus '15", link: '' },
    { name: "Laus '14", link: '' }
  ]

const hotBranding =
  'art direction / bondage / events / graphic design / illustration / digital marketing / sex / print /  editorial / naming / messaging / tone of voice / strategy / positioning / latex / packaging design / porn / social media / film / WOW factor! / creative team'

const ProjectWrapper = styled.section`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  ${ fontSizes(1.875) }
`
const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 9vw 0;
`
const VideoWrapper = styled.div`
  max-width: 100%;
  position: relative;
`

const ShowsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid  -gap: 3vw;
  justify-items: center;
  align-items: baseline;
  text-align: center;
  padding: 9vh 3.5vw;
  ul {
    ${ media.tablet`margin: 5vw 0;` }
    ul {
      margin-bottom: 3vw;
    }
  }
`

const CreditsList = styled.ul`
  display: grid;
  justify-items: center;
`

export default ({ data, attention }) => (
  <>
    <ProjectWrapper>
      <VideoWrapper style={{ marginTop: 0, marginBottom: '6rem' }}>
        <video
          style={{ width: '100%' }}
          controls
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
      <TextBlock
        colorLeft="var(--pink)"
        textLeft="who we are"
        textRight={aboutText[0].header}
        sizeRight={fontSizes(3)}
        style={{ margin: '9vw 0' }}
      />
      <br />
      <TextBlock textRight={aboutText[0].first} />
      <br />
      <TextBlock textRight={aboutText[0].second} />

      <ImageWrapper>
        <img src={BeansPic} width="100%" />
      </ImageWrapper>

      <CreditsList style={{ margin: '0 3rem' }}>
        <Fade duration={1000}>
          <li style={{ color: 'var(--green)', marginBottom: '2rem' }}>
           and everything nice!
          </li>
        </Fade>
        <Fade duration={2000}>
          <li style={{ textAlign: 'center' }}>{hotBranding}</li>
        </Fade>
      </CreditsList>

      <TextBlock
        colorLeft="var(--yellow)"
        textLeft="Attention"
        textRight={aboutText[1].attention}
      />
      {/* <ImageSlider /> */}
      <br />
      <br />
      <TextBlock
        colorLeft="var(--pink)"
        textLeft="Digital"
        textRight={aboutText[1].crazyWebsites}
      />
      <ImageSlider edges={data.attention.edges} />
      <br />
      <br />
      <TextBlock
        colorLeft="var(--green)"
        textLeft="Branding"
        textRight={aboutText[1].hotBranding}
      />
      {/* <ImageSlider images={BeansPic} /> */}

      {/* <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} /> */}
      {/* <CreditsList style={{ padding: "0 3rem" }}>
        <li style={{ color: "var(--pink)", marginBottom: "2rem" }}>
          Shooting Range
        </li>
      </CreditsList> */}

      <ShowsContainer>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--cyan)' }}>bla bla</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {blaBla.map(item => (
              <li key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </Fade>
        </ul>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--yellow)' }}>boom boom</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {boomBoom.map(item => (
              <li key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </Fade>
        </ul>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--pink)' }}>bling bling</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {blingBling.map(item => (
              <li key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </Fade>
        </ul>
      </ShowsContainer>
    </ProjectWrapper>
  </>
)

export const query = graphql`
  query AboutPageQuery {
    attention: allFile(filter: {sourceInstanceName: {eq: "aboutimages"}, relativeDirectory: {eq: "attention"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }  
`
