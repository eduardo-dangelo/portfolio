import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { data, style } from '../data';
import styled from 'styled-components';

const CallToAction = styled.button`
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: end;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ease;
  background: transparent;
  border: none;
  z-index: 10;
  border-radius: ${style.outlineBorderRadius};

  span {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: ${style.outlineBoxShadow};
    background: ${style.outlineBg};
    opacity: 1;
  }
`;

const Icon = styled.div`
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 15px;
  font-size: 1.3em;
`;

export const CallToActionButton = ({ contentType = data.contentType }) => (
  <CallToAction>
    <Icon>
      <FaAngleDoubleDown />
    </Icon>
    <span>{contentType}</span>
  </CallToAction>
);
