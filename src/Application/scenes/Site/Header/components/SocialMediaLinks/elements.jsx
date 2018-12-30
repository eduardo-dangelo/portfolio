import React from 'react';
import Flip from 'react-reveal/Flip';
import withReveal from 'react-reveal/withReveal';
import styled, { keyframes } from 'styled-components';

export const flash = keyframes`
  0% {
    border: 1px dashed transparent;
  }
  
  50% {
    border: 1px dashed;
  }

  100% {
    border: 1px dashed transparent;
  }
`;

export const SocialMediaLinksContainer = styled.div`
  z-index: 1;
  padding: 5px;
  float: right;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  border: 1px dashed transparent;
  animation: ${(props) => props.isAuth && flash} 2s ease-out;
  
  &:hover {
    border: 1px dashed ${(props) => props.hasActiveItem || !props.isAuth ? 'transparent' : props.color };
  }
  
  input {
    padding: 2px 5px;
  }
  
  @media all and (max-width: 400px) {
    width: 100%;
    text-align: center;
  }
`;

export const IconList = styled.div`
  margin: 0;
  display: flex;
  position: relative;
  align-items: center;
`;

export const IconListAuth = withReveal(styled(IconList)``, <Flip right cascade />);
export const IconListUnauth = withReveal(styled(IconList)``, <Flip right cascade />);

export const IconContainer = styled.div`
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  font-weight: 200;
  position: relative;
  align-items: center;
  opacity: ${(props) => props.active ? 1 : (props.hasValue ? .8 : .2)} !important;
  
  ${(props) => props.active && `
    &:after {
      top: 100%;
      content: "";
      right: -8px; 
      position: absolute;
      border-bottom: 15px solid white;
      border-top: 5px solid transparent; 
      border-left: 15px solid transparent; 
      border-right: 15px solid transparent; 
    }
  `}
  
  &:hover {
    opacity: ${(props) => props.active ? 1 : (props.hasValue ? 1 : .4)} !important;
  }
`;

export const IconLink = styled.a`
  color: ${(props) => props.color};
  opacity: 8;
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  
  &:hover, &:active, &.visited {
    opacity: 1;
    color: ${(props) => props.color};
  }
`;