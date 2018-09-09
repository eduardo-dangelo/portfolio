import styled from 'styled-components'

const Header = styled.div`
  padding: 10px;
  display: flex;
  height: 180px;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
`;

const Input = styled.input`
  width: 100%;
  margin: auto;
  padding: 8px 5px;
  overflow: visible;
  transition: .3s ease;
  box-sizing: padding-box;
  background: transparent;
  text-align: ${(props) => props.cssProps.textAlign};
  ${(props) => props.cssProps.bold && `font-weight: bold;`}
  ${(props) => props.cssProps.italic && `font-style: italic;`}
  border: 1px dashed ${(props) => props.cssProps.inputActive ? props.cssProps.bgColorInvert : 'transparent'};
  
  &:focus {
    outline: none;
    border: 1px dashed ${(props) => props.cssProps.bgColorInvert};
    //box-shadow: 0 0 6px ${(props) => props.cssProps.bgColorInvert};
  }
  
  &:hover {
    outline: none;
    border: 1px dashed ${(props) => props.cssProps.bgColorInvert};
  }
  
`;

const Heading =styled.h1`
  flex: 1;
  padding: 0;
  z-index: 2;
  position: relative;
  transition: .3s ease;
  text-align: ${(props) => props.textAlign};
`;

const OusideClickContainer = styled.div`
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,20,0.3);
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



export { Header, Input, Heading, OusideClickContainer, TopHeader }