import styled from 'styled-components'

const SocialMediaLinksContainer = styled.div`
  padding: 2px;
  position: relative;
  border: 1px dashed transparent;
  
  &:hover {
    border: 1px dashed white;
  }
`;

const IconContainer = styled.div`
  float: right;
  cursor: pointer;
  margin-left: 10px;
  opacity: .8;
  
  &:hover {
    opacity: 1;
  }
`;

export { SocialMediaLinksContainer, IconContainer }