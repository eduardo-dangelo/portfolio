import styled from 'styled-components'

const SocialMediaLinksContainer = styled.div`
  padding: 5px;
  position: relative;
  border: 1px dashed transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
    &:hover {
  ${(props) => props.isAuth && `
      border: 1px dashed ${(props) => props.hasActiveItem ? 'transparent' : 'white'};
  `}
    }
  
  input {
    padding: 2px 5px;
  }
`;

const IconContainer = styled.div`
  //float: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 5px;
  opacity: ${(props) => props.active ? 1 : (props.hasValue ? .8 : .2)};
  position: relative;
  
  ${(props) => props.active && `
  &:after {
    content: "";
    border-left: 15px solid transparent; 
    border-right: 15px solid transparent; 
    border-top: 5px solid transparent; 
    border-bottom: 15px solid white;
    position: absolute;
    top: 100%;
    right: -8px; 
  }
  `}
  
  &:hover {
    opacity: ${(props) => props.active ? 1 : (props.hasValue ? 1 : .4)};
  }
`;

const IconLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 5px;
  opacity: 8;
  position: relative;
  
  
  &:hover {
    opacity: 1;
  }
`;

export { SocialMediaLinksContainer, IconContainer, IconLink }