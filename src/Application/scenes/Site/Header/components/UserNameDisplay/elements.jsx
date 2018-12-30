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

export const Input = styled.input`
  z-index: 1;
  padding: 5px;
  width: 260px;
  position: relative;
  transition: .2s linear;
  background: transparent;
  border: 1px dashed transparent;
  animation: ${flash} 2s ease-out;
  
  &:hover, &:focus {
    outline: none;
    border: 1px dashed;
  }
  
  @media all and (max-width: 400px) {
    width: 100%;
    text-align: center;
  }
`;

export const NameContainer = styled.div`
  float: left;
  font-size: 1.1em;
  font-weight: 400;
  
  @media all and (max-width: 400px) {
    float: none;
  }
`;
