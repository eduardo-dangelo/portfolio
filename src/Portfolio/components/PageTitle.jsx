import React from 'react';
import { data, style } from '../data';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: 100;
  align-self: center;
  grid-column-start: 1;
  grid-column-end: span col3-end;
  grid-row-start: 2;
  grid-row-end: 2;
  text-shadow: ${style.textShadow};
  opacity: 0.8;
  transition: 0.3s ease;
  cursor: default;
  letter-spacing: 3px;

  &:hover {
    opacity: 1;
  }
`;

export const PageTitle = ({ title = data.title }) => <Title>{title}</Title>;

PageTitle.propTypes = {
  title: PropTypes.string
};
