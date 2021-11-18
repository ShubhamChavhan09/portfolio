import React from "react";
import { useParams } from "react-router";
import { projectData } from "../data/projects";
import styled from "styled-components";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  return (
    <Container>
      <h1>{project.title}</h1>
      <img src={project.thumb} alt={project.title} />
    </Container>
  );
};

export default ProjectDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
