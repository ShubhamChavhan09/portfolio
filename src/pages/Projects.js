import React from "react";
import styled from "styled-components";
import { projectData } from "../data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      {projectData.map((project) => (
        <Wrapper key={project.id}>
          <img src={project.thumb} alt="" />

          <Link to={`/projects/${project.id}`}>
            <Overlay className="overlay">
              <h1> {project.title}</h1>
            </Overlay>
          </Link>
        </Wrapper>
      ))}
    </div>
  );
};

export default Projects;

const Wrapper = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  border: 1px solid #333;
  margin: 40px 0;
  &:hover .overlay {
    transform: translateY(0);
    opacity: 1;
  }

  img {
    object-fit: cover;
    width: 120%;
  }
`;

const Overlay = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  position: absolute;
  inset: -5px;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(3%);
  color: white;
  cursor: pointer;

  h1 {
    font-size: 3rem;
    margin-left: 2rem;
  }
`;
