import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectImg = styled(Img)`
width: ${ props => props.small ? '50%' : '' };
display: ${ props => props.small ? 'inline-block' : '' };
`
export default ProjectImg
