import styled, { keyframes } from 'styled-components'

export const Header = styled.div`
  top: 0;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  position: relative;
  transition: .3s ease;
  color: ${(props) => props.cssProps.color};
  text-align: ${(props) => props.cssProps.textAlign};
  height: ${(props) => getBoxSize(props.cssProps.boxSize)}px;
  background: linear-gradient(${({ cssProps }) => cssProps.angle}deg, ${({ cssProps }) => cssProps.bgColor1}, ${({ cssProps }) => cssProps.bgColor2});
`;

export const ParticlesContainer = styled.div`
  top: 0;
  left: 0;
  opacity: .5;
  width: 100%;
  height: 450px;
  position: fixed;
  
  @media all and (max-width: 1200px) {
    width: 1200px;
  }
`;

export const HeaderContent = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0 2px 16px rgba(0,0,0,0.2);
`;

export const getBoxSize = (boxSize) => {
  switch (boxSize) {
    case 'x-large':
      return 550
    case 'large':
      return 300
    case 'medium':
      return 250
    case 'small':
      return 200
    case 'x-small':
      return 100
    default:
      return null;
  }
}

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

export const getFontSize = (fontSize) => {
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
    default:
      return null;
  }
}

export const Heading = styled.h1`
  flex: 1;
  padding: 0;
  z-index: 0;
  position: relative;
  text-align: ${(props) => props.cssProps.align};
  font-size: ${(props) => getFontSize(props.cssProps.size)}px;
  ${(props) => props.cssProps.italic && `font-style: italic;`}
  ${(props) => props.cssProps.bold ? `font-weight: bold;` : `font-weight: lighter;`}
`;

export const OusideClickContainer = styled.div`
  top: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0,0,20,0);
`;

export const TopHeader = styled.div`
  top: 10px;
  width: 100%;
  padding: 0 15px;
  position: absolute;
`;

export const HeaderBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  
  & > div {
    width: 100%;
  }
`;

export const DisplayModeContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

export const DisplayModeItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  ${(props) => props.active ? `opacity: 1` : `opacity: .4`};
  transition: .3s ease;
  
  &:hover {
    ${(props) => props.active ? `opacity: 1` : `opacity: .8`};
  }
`;

export const Divider = styled.div`
  align-self: stretch;
  width: 1px;
  background: white;
`;
