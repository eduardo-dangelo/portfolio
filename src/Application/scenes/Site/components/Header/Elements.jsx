import styled from 'styled-components'

const Header = styled.div`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
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
  padding: 8px 0;
  overflow: visible;
  transition: .3s ease;
  text-align: ${(props) => props.textAlign};
  ${(props) => props.bold && 
  `font-weight: bold;`
  }
  ${(props) => props.italic && 
  `font-style: italic;`
  }
  
  &:focus {
    outline: none;
    border: 0px solid ${(props) => props.bgColor};
    box-shadow: inset 0 0 6px ${(props) => props.bgColor};
  }
  
`;

const H1 =styled.h1`
  position: relative;
  transition: .3s ease;
  border: 2px dashed transparent;
  text-align: ${(props) => props.textAlign};
  
  &:hover {
    border: 2px dashed ${(props) => props.bgColor};
    outline: none;
  }
`;



export { Header, Input, H1 }