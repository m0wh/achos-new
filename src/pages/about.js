import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import TextBlock from '../components/textblock'
import BeansPic from '../images/beans.jpg'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'
import Fade from 'react-reveal/Fade'

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

export default ({ data }) => (
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
      <TextBlock
        colorLeft="var(--yellow)"
        textLeft="attention"
        textRight={aboutText[1].attention}
      />
      <br />
      <br />
      <TextBlock
        colorLeft="var(--pink)"
        textLeft="crazy websites"
        textRight={aboutText[1].crazyWebsites}
      />
      <br />
      <br />
      <TextBlock
        colorLeft="var(--green)"
        textLeft="hot branding"
        textRight={aboutText[1].hotBranding}
      />
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

      {/* <CreditsList style={{ padding: "0 3rem" }}>
        <li style={{ color: "var(--pink)", marginBottom: "2rem" }}>
          Shooting Range
        </li>
      </CreditsList> */}

      <ShowsContainer>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--cyan)' }}>{data.allContentfulListaAbout.edges[2].node.titulo}</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {data.allContentfulListaAbout.edges[2].node.enlaces.map(item => (
              <li key={item.id}>
                <a href={item.enlace} target="_blank" rel="noopener noreferrer">
                  {item.texto}
                </a>
              </li>
            ))}
          </Fade>
        </ul>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--yellow)' }}>{data.allContentfulListaAbout.edges[1].node.titulo}</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {data.allContentfulListaAbout.edges[1].node.enlaces.map(item => (
              <li key={item.id}>
                <a href={item.enlace} target="_blank" rel="noopener noreferrer">
                  {item.texto}
                </a>
              </li>
            ))}
          </Fade>
        </ul>
        <ul>
          <Fade duration={1000}>
            <ul style={{ color: 'var(--pink)' }}>{data.allContentfulListaAbout.edges[0].node.titulo}</ul>
          </Fade>
          <Fade cascade duration={2000}>
            {data.allContentfulListaAbout.edges[0].node.enlaces.map(item => (
              <li key={item.id}>
                <a href={item.enlace} target="_blank" rel="noopener noreferrer">
                  {item.texto}
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
    allContentfulListaAbout {
      edges {
        node {
          titulo
          enlaces {
            texto
            enlace
          }
        }
      }
    }
  }  
`
