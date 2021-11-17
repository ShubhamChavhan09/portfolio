import React from "react";
import styled from "styled-components";
import Profile from "../assets/shubham01.jpg";
import ButtonContainer from "../components/ButtonContainer";
import Socials from "../components/Socials";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <>
      <Container>
        <Hero>
          <h1>Shubham Chavhan</h1>
          <p style={{ fontWeight: "500" }}>Front End Developer</p>
          <p className="paragraph">
            My expertise is in the area of responsive design. With every line of
            code, I strive to make the web a beautiful place.
          </p>
        </Hero>
        <Img src={Profile} alt="Avatar" />
      </Container>
      <ButtonContainer />
      <Socials />
      <About />
      <Skills />
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Hero = styled.div`
  width: 100%;
  padding-right: 60px;
  h1 {
    font-size: 3rem;
    margin: 0;
  }

  p {
    font-size: 1.05rem;
    margin: 0 0 30px 0;
  }
`;

const Img = styled.img`
  width: 175px;
  height: 175px;

  padding: 20px;

  border-radius: 50%;
  margin: 0 auto;
`;
