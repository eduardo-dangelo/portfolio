import React from 'react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

const linkType = {
  GITHUB: 'github',
  CODE_PEN: 'codepen',
  LINKED_IN: 'linkedIn'
}

const renderIcon = name => {
  switch (name) {
    case linkType.GITHUB:
      return <FaGithub />;
    case linkType.CODE_PEN:
      return <FaCodepen />;
    case linkType.LINKED_IN:
      return <FaLinkedin />;
    default:
      return null;
  }
};

export const data = {
  name: 'Eduardo D\'Angelo',
  title: 'Software Engineer',
  links: [
    { name: linkType.GITHUB, url:'http://github.com/eduardo-dangelo', icon: renderIcon(linkType.GITHUB)},
    { name: linkType.CODE_PEN, url:'https://codepen.io/eduardodangelo', icon: renderIcon(linkType.CODE_PEN)},
    { name: linkType.LINKED_IN, url:'https://www.linkedin.com/in/eduardo-d-angelo-profile/', icon: renderIcon(linkType.LINKED_IN)},
  ],
}