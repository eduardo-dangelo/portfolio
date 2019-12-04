import React from 'react';
import { BgParticles } from '../components/Particles';
import { SocialMediaLinks } from '../components/SocialMediaLinks';
import { CallToActionButton } from '../components/CallToActionButton';
import { PageTitle } from '../components/PageTitle';
import { PageName } from '../components/PageName';
import styled from 'styled-components';
import { style } from '../data';

const Container = styled.div`
  color: #fafafa;
  padding: 15px;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: ${style.boxShadowInset};
  background: linear-gradient(315deg, #152552, #101023);

  @media all and (max-width: 900px) {
    height: 100vh;
  }
`;

export const Header = () => {
  return (
    <Container>
      <BgParticles />
      <PageName />
      <SocialMediaLinks />
      <PageTitle />
      <CallToActionButton />
    </Container>
  );
};
