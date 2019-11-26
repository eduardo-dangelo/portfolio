import React from 'react';
import { data } from '../data';
import styled from 'styled-components';

export const Link = ({ link }) => (
  <li>
    <a href={link.url} target="_blank">
      {link.icon}
    </a>
  </li>
);

const Links = styled.ul``;
export const SocialMediaLinks = ({ link }) => (
  <Links>
    {data.links.map(link => (
      <Link key={link.name} link={link} />
    ))}
  </Links>
);
