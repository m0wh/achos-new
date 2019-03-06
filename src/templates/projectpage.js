import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import TextBlock, { Wrapper } from '../components/textblock'
import SEO from '../components/SEO'
import randomColor from '../utils/randomColor'
import fontSizes from '../utils/fontSizes'
import ScrollToClose from '../components/scrolltoclose'

// TODO: play Mario sound on route change/load

const ProjectWrapper = styled.main`
  background-color: var(--lightblack);
  color: var(--lightgrey);
  display: grid;
  grid-template-columns: 1fr;
`

const SmallImg = styled(Img)`
  width: 50%;
  display: inline-block;
`

const CreditsList = styled.ul`
  grid-column: span 2;
  justify-items: center;
  align-items: center;
  text-align: center;
  color: ${ props => props.color };
`

export default ({ data }) => {
  const { node } = data.allContentfulProyecto.edges[0]
  return (
    <>
      <SEO
        title={node.titulo}
        description={
          node.bloquesDeTexto[0].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody || 'nothin’'
        }
        image={node.imagenPortada.fluid}
      />

      <ProjectWrapper>
        <TextBlock
          textCenter={node.titulo}
          padding="4vw 0"
          sizeCenter={fontSizes(5)}
          colorCenter="white"
        />
        <Fade duration={500}>
          <div style={{ maxWidth: '100%' }}>
            <Img fluid={node.imagenPortada.fluid} />
          </div>
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft={node.bloquesDeTexto[0].titulo}
          textRight={node.bloquesDeTexto[0].childContentfulBloqueDeTextoBodyTextNode.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />
        {/* <Fade duration={500}>
          <Img fluid={frontmatter.bigimage2.childImageSharp.fluid} />
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft={node.textoBloque2.childMarkdownRemark.frontmatter.titulo}
          textRight={node.textoBloque2.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />
        <Fade cascade duration={500}>
          <div>
            <SmallImg fluid={frontmatter.smallimage1.childImageSharp.fluid} />
            <SmallImg fluid={frontmatter.smallimage2.childImageSharp.fluid} />
          </div>
        </Fade>

        {frontmatter.attachments &&
          frontmatter.attachments.map(item => (
            <video
              key={item.publicURL}
              loop
              controls
              style={{ width: '100%' }}
              src={item.publicURL}
            />
          ))}
        <Fade cascade duration={2000}>
          <Wrapper style={{ padding: '4vw 0' }}>
            <CreditsList>
              {frontmatter.credits.map(credit => (
                <ul style={{ marginBottom: '2.5vw' }}>
                  <li style={{ color: randomColor() }} key={credit.title}>
                    {credit.title}
                  </li>
                  <li>{credit.name}</li>
                </ul>
              ))}
            </CreditsList>
          </Wrapper>
        </Fade> */}
        <ScrollToClose />
      </ProjectWrapper>
    </>
  )
}

export const query = graphql`
  query ProjectPageQuery ($slug: String!) {
    allContentfulProyecto(filter: { slug: { eq: $slug }}) {
      edges {
        node {
          titulo
          listacreditos {
            credito1
            credito2
            credito3
            credito4
          }
          imagenPortada {
            fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
            }
          }
          bloquesDeTexto {
            titulo
            childContentfulBloqueDeTextoBodyTextNode {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
          imagenes {
            esgrande
            imagen {
              fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
