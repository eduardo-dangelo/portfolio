import React from 'react';
import { data } from '../data';
import { BgParticles } from './Particles';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { CallToAction, Container, Icon, Links, Name, Title } from './elements';

export const Header = () => {
  return (
    <Container>
      <BgParticles />
      <Name>{data.name}</Name>
      <Links>
        {data.links.map(link => (
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        ))}
      </Links>
      <Title>{data.title}</Title>
      <CallToAction>
        <Icon>
          <FaAngleDoubleDown />
        </Icon>
        <span>{data.contentType}</span>
      </CallToAction>
    </Container>
  );
};
