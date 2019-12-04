import React from 'react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

const linkType = {
  GITHUB: 'github',
  CODE_PEN: 'codepen',
  LINKED_IN: 'linkedIn'
};

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
  contentType: 'Portfolio',
  links: [
    { name: linkType.GITHUB, url:'http://github.com/eduardo-dangelo', icon: renderIcon(linkType.GITHUB)},
    { name: linkType.CODE_PEN, url:'https://codepen.io/eduardodangelo', icon: renderIcon(linkType.CODE_PEN)},
    { name: linkType.LINKED_IN, url:'https://www.linkedin.com/in/eduardo-d-angelo-profile/', icon: renderIcon(linkType.LINKED_IN)},
  ],
  projects: [
    {
      title: 'Social Media Demo',
      key: 'social_media_demo',
      bg: '#c50039',
      description: 'An example of a social media application.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/social-media-demo',
      github: 'https://github.com/eduardo-dangelo/social-media-demo'
    },
    {
      title: 'Weather App',
      key: 'weather_app',
      bg: '#fbaa39',
      description: 'Search for multiple cities and receive weather information.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/react-redux-weather-app/',
      github: 'https://github.com/eduardo-dangelo/react-redux-weather-app'
    },
    {
      title: 'Redux Playground',
      key: 'redux_playground',
      bg: '#571845',
      description: 'Examples of usages of ReactJs + Redux and Redux-form.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/redux-playground/',
      github: 'https://github.com/eduardo-dangelo/redux-playground'
    },
    {
      title: 'Styling Via Props',
      key: 'styling_via_props',
      bg: '#2561e9',
      description: 'Controlling component style with Redux and Styled-components.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/styling-components-via-props/',
      github: 'https://github.com/eduardo-dangelo/styling-components-via-props'
    },
    {
      title: 'Youtube Api Search',
      key: 'youtube_api_serach',
      bg: '#992322',
      description: 'An interface to search and play youtube videos.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/youtube-api-search-app/',
      github: 'https://github.com/eduardo-dangelo/youtube-api-search-app'
    },
    {
      title: 'Fight Game Menu',
      key: 'fight_game_menu',
      bg: '#412781',
      description: 'Select your players and start your fight.',
      technologies: ['react', 'redux', 'scss', 'bootstrap'],
      demo: 'https://eduardo-dangelo.github.io/redux-simple-example/',
      github: 'https://github.com/eduardo-dangelo/redux-simple-example'
    },
  ],
};

export const style = {
  textShadow: '0 4px 6px rgba(0,0,0,1), 0 -2px 6px rgba(255,255,255,0.1)',
  boxShadowInset: 'rgba(0, 0, 0, 0.2) 0px 2px 16px inset',
  outlineBorderRadius: '8px',
  outlineBoxShadow: '0 0 4px rgba(255, 255, 0, 1)',
  outlineBg: 'rgba(255,225,0,0.05)'
};