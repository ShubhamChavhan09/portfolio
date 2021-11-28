import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Resume from "../assets/Shubham_Chavhan-resume.pdf";

const ButtonContainer = () => {
  return (
    <Wrapper>
      <Button href="mailto:shubh.chavhan99@gmail.com" className="toggle">
        shubh.chavhan99@gmail.com
      </Button>
      <Button href={Resume} target="_blank" rel="noreferrer" className="toggle">
        Resume
      </Button>
    </Wrapper>
  );
};

export default ButtonContainer;

const Wrapper = styled.div``;
