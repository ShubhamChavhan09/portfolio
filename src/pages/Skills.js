import React from "react";
import { Tooltip } from "react-tippy";
import styled from "styled-components";
import { techSkills } from "../data/skills";

const Skills = () => {
  return (
    <Wrapper>
      <h2>Technologies I've worked with</h2>
      <Container>
        {techSkills.map((tech) => (
          <TechWrapper key={tech.id}>
            <Tooltip title={tech.name} position="bottom" animation="fade">
              <Icon>{tech.icon}</Icon>
              {/* <Text className="paragraph">{tech.name}</Text>  */}
            </Tooltip>
          </TechWrapper>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Skills;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
  @media (max-width: 414px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 14rem;
  @media (max-width: 1024px) {
    margin-right: 6rem;
  }
  @media (max-width: 414px) {
    margin-right: 1rem;
  }
`;

const Icon = styled.span`
  font-size: 4rem;
  @media (max-width: 414px) {
    font-size: 2.5rem;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;
