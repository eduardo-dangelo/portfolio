import React from 'react'
import styled, { keyframes } from 'styled-components'

const Header = styled.div`
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  font-size: 1.2em;
  position: relative;
  align-items: center;
  transition: .3s ease;
  flex-direction: column;
  color: ${(props) => props.cssProps.color};
  background: ${(props) => props.cssProps.bgColor};
  text-align: ${(props) => props.cssProps.textAlign};
  height: ${(props) => getBoxSize(props.cssProps.boxSize)}px;
`;

const getBoxSize = (boxSize) => {
  switch (boxSize) {
    case 'x-large':
      return 400
    case 'large':
      return 300
    case 'medium':
      return 250
    case 'small':
      return 200
    case 'x-small':
      return 100
  }
}

const flash = keyframes`
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

const Input = styled.input`
  z-index: 0;
  width: 100%;
  margin: auto;
  padding: 8px 5px;
  overflow: visible;
  transition: .3s ease;
  box-sizing: padding-box;
  background: transparent;
  border: 1px dashed transparent;
  animation: ${flash} 2s ease-out;
  text-align: ${(props) => props.cssProps.align};
  
  &:focus, &:hover {
    outline: none;
    border: 1px dashed;
  }
`;

const getFontSize = (fontSize) => {
  switch (fontSize) {
    case 'x-large':
      return 55
    case 'large':
      return 45
    case 'medium':
      return 35
    case 'small':
      return 25
    case 'x-small':
      return 18
  }
}

const Heading = styled.h1`
  flex: 1;
  padding: 0;
  z-index: 0;
  position: relative;
  text-align: ${(props) => props.cssProps.align};
  font-size: ${(props) => getFontSize(props.cssProps.size)}px;
  ${(props) => props.cssProps.italic && `font-style: italic;`}
  ${(props) => props.cssProps.bold && `font-weight: bold;`}
`;

const OusideClickContainer = styled.div`
  top: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,20,0);
`;

const TopHeader = styled.div`
  width: 100%;
  top: 10px;
  padding: 0 15px;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  position: absolute;
`;

const HeaderBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  
  & > div {
    width: 100%;
  }
`;

export { Header, Input, Heading, OusideClickContainer, TopHeader, HeaderBody }