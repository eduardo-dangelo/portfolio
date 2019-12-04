import React from 'react';
import { data, style } from '../data';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Name = styled.div`
  text-shadow: ${style.textShadow};
  opacity: 0.8;
  transition: 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 1;
  }
`;

export const PageName = ({ name = data.name }) => <Name>{name}</Name>;

PageName.propTypes = {
  name: PropTypes.string
};
