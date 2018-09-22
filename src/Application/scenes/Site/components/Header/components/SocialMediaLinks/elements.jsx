import styled from 'styled-components'

const SocialMediaLinksContainer = styled.div`
  padding: 5px;
  display: flex;
  position: relative;
  align-items: center;
  border: 1px dashed transparent;
  justify-content: space-between;
  
  &:hover {
    border: 1px dashed ${(props) => props.hasActiveItem || !props.isAuth ? 'transparent' : 'white'};
  }
  
  input {
    padding: 2px 5px;
  }
`;

const IconContainer = styled.div`
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  opacity: ${(props) => props.active ? 1 : (props.hasValue ? .8 : .2)};
  
  ${(props) => props.active && `
    &:after {
      top: 100%;
      content: "";
      right: -8px; 
      position: absolute;
      border-bottom: 15px solid white;
      border-top: 5px solid transparent; 
      border-left: 15px solid transparent; 
      border-right: 15px solid transparent; 
    }
  `}
  
  &:hover {
    opacity: ${(props) => props.active ? 1 : (props.hasValue ? 1 : .4)};
  }
`;

const IconLink = styled.a`
  color: ${(props) => props.color};
  opacity: 8;
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  
  
  &:hover, &:active, &.visited {
    opacity: 1;
    color: ${(props) => props.color};
  }
`;

export { SocialMediaLinksContainer, IconContainer, IconLink }