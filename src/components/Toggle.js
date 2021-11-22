import React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Div className="toggle" onClick={toggleTheme}>
      {theme === "dark" ? <BsSunFill /> : <FaMoon />}
    </Div>
  );
};

export default Toggle;

const Div = styled.div`
  font-size: 1.1rem;

  @media (max-width: 414px) {
    font-size: 0.8rem;
  }
`;
