import React from "react";
import styled from "styled-components";
import Profile from "../assets/shubham01.jpg";
import ButtonContainer from "../components/ButtonContainer";
import Socials from "../components/Socials";

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
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const Hero = styled.div`
  width: 100%;
  padding-right: 60px;

  h1 {
    font-size: 3rem;
    margin: 0;

    @media (max-width: 700px) {
      font-size: 2rem;
      padding-right: 0px;
    }
  }

  p {
    font-size: 1.05rem;
    margin: 0 0 30px 0;
  }

  @media (max-width: 700px) {
    padding: 0px;
  }
`;

const Img = styled.img`
  width: 175px;
  height: 175px;

  padding: 20px;

  border-radius: 50%;
  margin: 0 auto;

  @media (max-width: 700px) {
    margin: 0;
    width: 130px;
    height: 130px;
  }
`;
