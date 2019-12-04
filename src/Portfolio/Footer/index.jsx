import React from 'react';
import styled from 'styled-components';
import { SocialMediaLinks } from '../components/SocialMediaLinks';

const Container = styled.div`
  height: 400px;
  padding: 15px;
  background: #1d1d1d;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const Links = styled.div`
  justify-self: center;
`;

export const Footer = () => (
  <Container>
    <Links>
      <SocialMediaLinks />
    </Links>
  </Container>
);
