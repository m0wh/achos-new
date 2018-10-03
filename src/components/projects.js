import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import MarianoPic from "../images/mariano.jpg";

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

const projectNumber = 1;
const ProjectsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const BigProject = styled.div`
  border: 1px solid red;
  background: url(${MarianoPic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  grid-column: span 2;
`;

const SmallProject = styled.div`
  border: 1px solid red;
  background: url(${MarianoPic});
  background-color: yellow;
  height: 40vh;
`;

const Projects = () => (
  <ProjectsGrid>
    <BigProject />
    <SmallProject />
    <SmallProject />
    <SmallProject />
    <SmallProject />
  </ProjectsGrid>
);

export default Projects;
