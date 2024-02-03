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
            Dedicated to crafting seamless and visually captivating user
            experiences, I specialize in front-end development with expertise in
            JavaScript, React, HTML and CSS. I thrive on turning design concepts
            into interactive and responsive websites. Detail-oriented and
            committed to excellence, I constantly seek ways to enhance my skills
            and stay at the forefront of web development trends.
          </p>
        </Hero>
        <ProfileImage src={Profile} alt="Avatar" />
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

  @media (max-width: 414px) {
    flex-direction: column-reverse;
  }
`;

const Hero = styled.div`
  width: 100%;
  padding-right: 60px;

  h1 {
    font-size: 3rem;
    margin: 0;

    @media (max-width: 414px) {
      font-size: 2rem;
      padding-right: 0;
    }
  }

  p {
    font-size: 1rem;
    margin: 0 0 30px 0;
    line-height: 1.5;

    @media (max-width: 414px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 414px) {
    padding: 0;
  }
`;

const ProfileImage = styled.img`
  width: 175px;
  height: 175px;
  padding: 20px;
  border-radius: 50%;
  margin: 0 auto;

  @media (max-width: 414px) {
    margin: 0;
    width: 130px;
    height: 130px;
  }
`;
