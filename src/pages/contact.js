import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import posed from 'react-pose'
import fontSizes from '../utils/fontSizes'
import media from '../utils/breakpoints'

const hoverProps = {
  hoverable: true,
  init: {
    opacity: 0
  },
  hover: {
    opacity: 1
  }
}

const Wrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  ${ fontSizes(1.875) }
`
const ImageWrapper = styled.div`
  max-width: 100%;
  position: relative;
  bottom: 180px;
`

const LocationsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${ media.tablet`grid-template-columns: 1fr` };
`

const ListsWrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 5vw 0;
  grid-gap: 3vw;
`

const List = styled.ul`
  text-align: center;
`
const LocationWrapper = styled.article`
  position: relative;
`
const Overlay = styled.div`
  background: rgba(26, 26, 26, 0.69);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  // height: 80vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`

const OverlayWrapper = styled.div`
  margin: 3.5vw 4.1875vw;
`
const Title = styled.h3`
  ${ fontSizes(3) };
  color: ${ props => props.color };
`

const BusinessMail = styled.a`
  ${ fontSizes(8) };
`
const CollabsMail = styled.a`
  ${ fontSizes(4.6) };
`
const InternshipsMail = styled.a`
  ${ fontSizes(2.2) };
`

const AddressDetails = styled(posed.article(hoverProps))`
  //asas
`

export default ({
  data: {
    allFile: { edges: locationEdges }
  }
}) => (
  <>
    <Wrapper>
      <ImageWrapper>
        <Img fluid={locationEdges[0].node.childImageSharp.fluid} />
      </ImageWrapper>
      <ListsWrapper>
        <List>
          <li style={{ color: 'var(--pink)' }}>Business Enquiries</li>
          <li style={{ textAlign: 'center' }}>
            <BusinessMail
              href="mailto:hi@achos.es?Subject=Shut up and take my money!"
              target="_blank"
              rel="noopener noreferrer"
            >
              hi@achos.es
            </BusinessMail>
          </li>
        </List>
        <List>
          <li style={{ color: 'var(--cyan)' }}>Collabs</li>
          <li style={{ textAlign: 'center' }}>
            <CollabsMail
              href="mailto:collab@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              collab@achos.es
            </CollabsMail>
          </li>
        </List>
        <List>
          <li style={{ color: 'var(--yellow)' }}>Internships</li>
          <li style={{ textAlign: 'center' }}>
            <InternshipsMail
              href="mailto:experience@achos.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              experience@achos.es
            </InternshipsMail>
          </li>
        </List>
      </ListsWrapper>
      <LocationsGrid>
        <LocationWrapper>
          <Img fluid={locationEdges[3].node.childImageSharp.fluid} />
          <Overlay>
            <OverlayWrapper>
              <Title color="var(--yellow)">Barcelona</Title>
              <AddressDetails>
                Carrer dels Vigatans 11, <br />
                08003 Barcelona
                <br />
                <br />
                <a
                  href="tel:+34935016671"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +34 935 016 671
                </a>
                <br />
                <a
                  href="mailto:hi@achos.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hi@achos.es
                </a>
              </AddressDetails>
            </OverlayWrapper>
          </Overlay>
        </LocationWrapper>
        <LocationWrapper>
          <Img fluid={locationEdges[0].node.childImageSharp.fluid} />
          <Overlay>
            <OverlayWrapper>
              <Title color="var(--pink)">Bali</Title>
              <AddressDetails>
                Jl. Kuwum II, Kerobokan <br />
                80361, Bali
                <br />
                <br />
                <a
                  href="tel:+62081238399"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 081 23 83 99
                </a>
                <br />
                <a
                  href="mailto:hi@achos.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hi@achos.es
                </a>
              </AddressDetails>
            </OverlayWrapper>
          </Overlay>
        </LocationWrapper>
        <LocationWrapper>
          <Img fluid={locationEdges[1].node.childImageSharp.fluid} />
          <Overlay>
            <OverlayWrapper>
              <Title color="var(--green)">Medellin</Title>
              <AddressDetails>Coming soon</AddressDetails>
            </OverlayWrapper>
          </Overlay>
        </LocationWrapper>
        <LocationWrapper>
          <Img fluid={locationEdges[2].node.childImageSharp.fluid} />
          <Overlay>
            <OverlayWrapper>
              <Title color="var(--cyan)">Hong Kong</Title>
              <AddressDetails>
                Jl. Kuwum II, Kerobokan <br />
                80361, Bali
                <br />
                <br />
                <a
                  href="tel:+62081238399"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 081 23 83 99
                </a>
                <br />
                <a
                  href="mailto:hi@achos.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hi@achos.es
                </a>
              </AddressDetails>
            </OverlayWrapper>
          </Overlay>
        </LocationWrapper>
      </LocationsGrid>
    </Wrapper>
  </>
)

export const pageQuery = graphql`
  query ContactQuery {
    allFile(filter: { sourceInstanceName: { eq: "locationimages" } }) {
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
