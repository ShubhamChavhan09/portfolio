import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";

const Navigation = ({ theme, toggleTheme }) => {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Items className="items" to="/">
              Home
            </Items>
          </li>
          <li>
            <Items className="items" to="/projects">
              Projects
            </Items>
          </li>
          <li>
            <Items className="items" to="/skills">
              Skills
            </Items>
          </li>
          <li>
            <Items className="items" to="/about">
              About
            </Items>
          </li>
        </ul>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Nav>
    </>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  ul {
    display: flex;
    padding: 0;
    list-style-type: none;
  }
`;

const Items = styled(NavLink)`
  text-decoration: none;
  color: #888888;
  padding: 5px 10px;
  letter-spacing: 3px;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: 400;
`;
