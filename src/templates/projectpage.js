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
          node.textoBloque1.childMarkdownRemark.rawMarkdownBody || 'nothin’'
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
          textLeft={node.textoBloque1.childMarkdownRemark.frontmatter.titulo}
          textRight={node.textoBloque1.childMarkdownRemark.rawMarkdownBody}
          padding="4vw 0"
        />
        {/* <Fade duration={500}>
          <Img fluid={frontmatter.bigimage2.childImageSharp.fluid} />
        </Fade>
        <TextBlock
          colorLeft={randomColor()}
          textLeft="concept & execution"
          textRight={frontmatter.concept}
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
          slug
          textoBloque1 {
            childMarkdownRemark {
              frontmatter {
                titulo
              }
              rawMarkdownBody
            }
          }
          imagenPortada {
              fluid(maxWidth: 800, quality: 80) {
               ...GatsbyContentfulFluid_tracedSVG
              }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query ProjectPageQuery ($slug: String!) {
//     allContentfulProyecto(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         name
//         introduction
//         concept
//         attachments {
//           publicURL
//         }
//         credits {
//           title
//           color
//           name
//         }
//         bigimage1 {
//           childImageSharp {
//             fluid(maxWidth: 800, quality: 80) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         bigimage2 {
//           childImageSharp {
//             fluid(maxWidth: 800, quality: 80) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         smallimage1 {
//           childImageSharp {
//             fluid(maxWidth: 800, quality: 80) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         smallimage2 {
//           childImageSharp {
//             fluid(maxWidth: 800, quality: 80) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//     allFile(filter: { extension: { eq: "gif" } }) {
//       edges {
//         node {
//           publicURL
//         }
//       }
//     }
//   }
// `
