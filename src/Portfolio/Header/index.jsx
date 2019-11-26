import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { Links, SocialMediaLinks } from './Links';

const Container = styled.div`
  background: linear-gradient(315deg, #152552, #152552);
  color: #fafafa;
  padding: 15px;
`;

const Name = styled.div`
  font-size: 14px;
`;

const Title = styled.h1`
  border: 1px solid orange;
  text-align: center;
`;

export const Header = () => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <SocialMediaLinks />
      <Title>{data.title}</Title>
    </Container>
  );
};
