import styled from 'styled-components'

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
  padding: 8px;
  overflow: visible;
  transition: .3s ease;
  
  &:hover {
    border: 2px dashed ${(props) => props.bgColor};
    outline: none;
  }
  
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.bgColor};
    box-shadow: inset 0 0 6px ${(props) => props.bgColor};
  }
  
`;

const H1 =styled.h1`
  position: relative;
  
  &:hover {
    border: 2px dashed ${(props) => props.bgColor};
    outline: none;
  }
`;

export { Header, Input, H1 }