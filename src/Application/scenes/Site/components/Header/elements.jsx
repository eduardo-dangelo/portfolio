import styled from 'styled-components'

const Header = styled.div`
  padding: 10px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.cssProps.color};
  background: ${(props) => props.cssProps.bgColor};
  text-align: ${(props) => props.cssProps.textAlign};
  height: ${(props) => getBoxSize(props.cssProps.boxSize)}px;
`;

const getBoxSize = (boxSize) => {
  switch (boxSize) {
    case 'x-large':
      return 300
    case 'large':
      return 250
    case 'medium':
      return 200
    case 'small':
      return 150
    case 'x-small':
      return 100
  }
}

const Input = styled.input`
  width: 100%;
  margin: auto;
  padding: 8px 5px;
  overflow: visible;
  box-sizing: padding-box;
  background: transparent;
  border: 1px dashed transparent;
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
  z-index: 2;
  position: relative;
  text-align: ${(props) => props.cssProps.align};
  font-size: ${(props) => getFontSize(props.cssProps.size)}px;
  ${(props) => props.cssProps.italic && `font-style: italic;`}
  ${(props) => props.cssProps.bold && `font-weight: bold;`}
`;

const OusideClickContainer = styled.div`
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,20,0);
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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