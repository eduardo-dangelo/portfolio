import styled, { keyframes } from 'styled-components'

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
`;

export { Input }