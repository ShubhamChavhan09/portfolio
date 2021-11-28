import React from "react";
import styled from "styled-components";
import { projectData } from "../data/projects";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = () => {
  return (
    <Wrapper>
      <SubHeading>Collection of personal web dev projects</SubHeading>
      <Container>
        {projectData.map((project) => (
          <Card key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.detail}</p>
            <Tech>
              {project.tech.map((item) => (
                <p> {item}</p>
              ))}
            </Tech>
            <Links>
              <Link href={project.github} target="_blank" rel="noreferrer">
                GitHub
                <RiExternalLinkLine />
              </Link>
              <Link href={project.appLink} target="_blank" rel="noreferrer">
                Live App
                <RiExternalLinkLine />
              </Link>
            </Links>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-direction;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid;
  border-radius: 15px;
  margin: 1rem 0;
  padding: 1rem;

  p {
    font-weight: 300;
  }

  h2 {
    font-weight: 400;
    margin: 0;
  }
`;

const Tech = styled.div`
  display: flex;
  justify-content: content;
  align-items: center;
  flex-wrap: wrap;
  p {
    font-size: 0.9rem;
    margin: 0.5rem;
    background: ${({ theme }) => theme.toggle};
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: #666;
  margin-right: 1rem;
  :hover {
    color: currentColor;
    transition: all 0.5s ease;
  }
`;

export default Projects;
