import styled from 'styled-components'

const Input = styled.input`
  padding: 5px;
  width: 260px;
  position: relative;
  transition: .2s linear;
  background: transparent;
  border: 1px dashed transparent;
  
  &:hover, &:focus {
    outline: none;
    border: 1px dashed white;
  }
`;

export { Input }