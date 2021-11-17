import React from "react";
import styled from "styled-components";
import { techSkills } from "../data/skills";

const Skills = () => {
  return (
    <Wrapper>
      <h2>Technologies I've worked with</h2>
      <Container>
        {techSkills.map((tech) => (
          <TechWrapper key={tech.id}>
            <Icon>{tech.icon}</Icon>
            <Text className="paragraph">{tech.name}</Text>
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  border: 0.01rem solid #333;
  border-radius: 8px;
  letter-spacing: 1.5px;
  
  }
`;

const Icon = styled.span`
  font-size: 4rem;
`;

const Text = styled.span`
  margin: 0 auto;
  font-size: 1.2rem;
`;
