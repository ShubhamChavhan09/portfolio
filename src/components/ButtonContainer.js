import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const ButtonContainer = () => {
  return (
    <Wrapper>
      <Button href="mailto:shubh.chavhan99@gmail.com" className="toggle">
        shubh.chavhan99@gmail.com
      </Button>
      <Button className="toggle">Resume</Button>
    </Wrapper>
  );
};

export default ButtonContainer;

const Wrapper = styled.div``;
