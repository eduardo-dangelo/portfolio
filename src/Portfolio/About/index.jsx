import React from 'react';
import styled from 'styled-components';
import AboutHeader from './AboutHeader';
import Profile from './Profile';
import Skills from './Skills';
import Contact from './Contact';
import Links from './Links';

const Container = styled.div`
  background: #ffffff;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const Content = styled.div`
  grid-column-start: 2;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 30px;
`;

export const About = () => (
  <Container>
    <Content>
      <AboutHeader />
      <Profile />
      <Skills />
      <Contact />
      <Links />
    </Content>
  </Container>
);
