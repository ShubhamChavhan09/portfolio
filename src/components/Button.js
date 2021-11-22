import styled from "styled-components";

export const Button = styled.a`
  border: none;
  outline: none;
  margin-right: 20px;
  padding: 8px 12px;
  border-radius: 3px;
  font-size: 1rem;
  color: currentColor;
  text-decoration: none;
  font-weight: 300;

  @media (max-width: 414px) {
    font-size: 0.9rem;
  }
`;
