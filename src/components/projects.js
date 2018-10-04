import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import MarianoPic from "../images/mariano.jpg";
import AxpePic from "../images/axpe-01.jpg";
import DadaPic from "../images/dadadada-00.jpg";
import DesigndoesPic from "../images/designdoes.jpg";
import SmallfilmsPic from "../images/smallfilms-00.jpg";

// Grid de 1 full x 2
// El de full es veu a 80-90vh

/*
Projects Schema:

- Fecha
- Introduccion
- Creditos
- Imagenes
- Videos
- Proyectos relacionados

*/


const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const BigProject = styled.img`
  grid-column: span 2;
  max-width: 100%;
`;

const SmallProject = styled.img`
  max-width: 100%;
`;

const Projects = () => (
  <ProjectsGrid>
    <BigProject src={MarianoPic} />
    <SmallProject src={AxpePic} />
    <SmallProject src={DadaPic} />
    <SmallProject src={DesigndoesPic} />
    <SmallProject src={MarianoPic} />
    <BigProject src={SmallfilmsPic} />
  </ProjectsGrid>
);

export default Projects;
