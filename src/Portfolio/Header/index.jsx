import React from 'react';
import styled from 'styled-components';
import { data, style } from '../data';
import {BgParticles} from './Particles';
import Flip from 'react-reveal/Flip';

const Container = styled.div`
  color: #fafafa;
  padding: 15px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: ${style.boxShadowInset};
  background: linear-gradient(315deg, #152552, #101023);
`;

const Name = styled.div`
  text-shadow: ${style.textShadow};
`;

const Title = styled.h1`
  text-align: center;
  grid-row-start: 2;
  grid-row-end: 2;
  font-size: 45px;
  font-weight: 100;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: span col3-end;
  text-shadow: ${style.textShadow}
`;

const Links = styled.div`
  grid-column-start: 2;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: start;


  a {
    padding: 5px;
    cursor: pointer;
    color: white;
    opacity: 0.6;
    transition: .3s ease;
    font-size: 1.1em;
    text-shadow: ${style.textShadow};

    &:hover {
      opacity: 1;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <BgParticles/>
      <Name>
        <Flip top cascade>
          {data.name}
        </Flip>
      </Name>
      <Links>
        {data.links.map(link => (
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        ))}
      </Links>
      <Title>
        <Flip top cascade>{data.title}</Flip>
      </Title>
    </Container>
  );
};
