import styled from 'styled-components'
import AutosizeInput from 'react-input-autosize';

const Header = styled.div`
  background: ${(props) => props.bgColor}
  color: ${(props) => props.color};
  text-align: center;
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 180px;
`;

const Input = styled.input`
  background: transparent !important;
  box-sizing: content-box;
  text-align: center;
  border: 2px dashed transparent;
  width: 100%;
  margin: auto;
  padding: 5px;
  overflow: visible;
  transition: .3s ease;
  
  &:hover, &:focus {
    border: 2px dashed ${(props) => props.bgColor};
    outline: none;
  }
  
`;

export { Header, Input }