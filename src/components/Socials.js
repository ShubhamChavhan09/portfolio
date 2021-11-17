import React from "react";
import { socials } from "../data/socials";
import styled from "styled-components";

const Socials = () => {
  return (
    <Wrapper>
      {socials.map((social) => (
        <div key={social.site}>
          <Link href={social.link} target="_blank" rel="noreferrer">
            {social.icon}
          </Link>
        </div>
      ))}
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled.div`
  display: flex;
  margin: 30px 0;
`;

const Link = styled.a`
  margin-right: 38px;
  cursor: pointer;
  color: #666;
  font-size: 1.8rem;
  :hover {
    color: currentColor;
    transition: all 0.5s ease;
  }
`;
