import React from 'react';
import styled from 'styled-components';
import { data } from '../data';

const Container = styled.div`
  color: #fafafa;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background: linear-gradient(315deg, #152552, #152552);
`;

const Name = styled.div`
  font-size: 14px;
`;

const Title = styled.h1`
  text-align: center;
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: span col3-end;
`;

const Links = styled.div`
  grid-column-start: 2;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  a {
    padding: 5px;
    cursor: pointer;
    color: white;
    opacity: 0.8;
    transition: 0.6s ease;
    font-size: 1.1em;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Links>
        {data.links.map(link => (
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        ))}
      </Links>
      <Title>{data.title}</Title>
    </Container>
  );
};
