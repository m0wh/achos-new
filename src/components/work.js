import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import MarianoPic from "../images/mariano.jpg";
import AxpePic from "../images/axpe-01.jpg";
import DadaPic from "../images/dadadada-00.jpg";
import DesigndoesPic from "../images/designdoes.jpg";
import SmallfilmsPic from "../images/smallfilms-00.jpg";

/*
Projects Schema:

- Fecha
- Introduccion
- Creditos
- Imagenes
- Videos
- Proyectos relacionados

*/

export const WorkGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

export const Project = styled.img`
  max-width: 100%;
  grid-column: ${props => (props.big ? "span 2" : null)};
`;
const Work = () => (
  <WorkGrid>
    <Project big src={MarianoPic} />
    <Project src={AxpePic} />
    <Project src={DadaPic} />
    <Project src={DesigndoesPic} />
    <Project src={MarianoPic} />
    <Project big src={SmallfilmsPic} />
  </WorkGrid>
);

export default Work;
