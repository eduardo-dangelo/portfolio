import React from 'react';
import { data, style } from '../data';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Links = styled.div`
  grid-column-start: 3;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: start;

  a {
    padding: 5px;
    cursor: pointer;
    color: white;
    opacity: 0.8;
    transition: 0.3s ease;
    font-size: 1.1em;
    text-shadow: ${style.textShadow};
    border-radius: ${style.outlineBorderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1px;

    &:focus {
      outline: none;
      box-shadow: ${style.outlineBoxShadow};
      background: ${style.outlineBg};
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const SocialMediaLinks = ({ links = data.links }) => (
  <Links>
    {links.map(link => (
      <a href={link.url} target="_blank">
        {link.icon}
      </a>
    ))}
  </Links>
);

SocialMediaLinks.propTypes = {
  links: PropTypes.array
};
