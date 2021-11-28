import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Wrapper>
        <Section>
          <Heading>About Me!</Heading>
          <Text className="paragraph">
            I describe myself as a passionate developer who loves coding, open
            source, and the web platform with a keen eye for detail, and a
            determination to deliver the very highest quality. The purpose of me
            pursuing a career in web development is because of the sheer amount
            of options to tackle any given problem, allow me to learn and grow
            myself while giving our customers the best quality applications for
            their uses.
          </Text>
          <Text className="paragraph">
            I take great pride in my work, and I always try to better myself
            with every project I work on. Aside from my job, I like to create
            projects that help me to learn a ton of new stuff, grow as a
            developer.
          </Text>
          <Text className="paragraph">
            The main areas of my expertise are React, HTML(5), CSS(3) and
            JavaScript but I have intermediate knowledge of Python.
          </Text>
          <Text className="paragraph">
            I am comfortable working under pressure to complex specifications. I
            regularly use the version control system (GIT), to maintain my code.
            And I specialise in responsive web design (RWD). <br /> In my free
            time you can find me training my dog, at the gym, learning new songs
            on my guitar and reading about new technologies and automobiles.
          </Text>
          <Text className="paragraph">
            Interested in working with me? Get in touch and I’d be happy to talk
            to you.
          </Text>
        </Section>
      </Wrapper>
    </div>
  );
};

export default About;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin: 10px 0;
`;

const Heading = styled.h1`
  margin-bottom: 10px;
  text-align: left;
`;

const Text = styled.p`
  margin-bottom: 30px;
  max-width: 100%; 
  color: #888888;
  font-size: 1rem;
  @media (max-width: 414px) {
    font-size: 0.82rem;
  }
  }
`;
