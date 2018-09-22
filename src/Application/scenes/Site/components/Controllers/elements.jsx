import styled from 'styled-components'
import { ButtonToolbar } from "react-bootstrap";

const ButtonToolbarWapper = styled(ButtonToolbar)`
  color: black;
  position: absolute;
  ${(props) => props.top && `top: ${props.top}px`};
  ${(props) => props.right && `right: ${props.right}px`};
  ${(props) => props.bottom && `bottom: ${props.bottom}px`};
  
  .dropdown-toggle {
    width: 30px;
    padding: 2px;
    height: 30px;
    display: flex;
    color: #444444;
    border-radius: 50%;
    align-items: center;
    background: white !important;
    justify-content: space-around;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    border: 1px solid ${(props) => props.color};
    
    &:hover {
      color: #222222;  
    }
    
    svg {
      margin: 0;
      font-size: 1.2em;
    }
  }
  
  .dropdown-menu {
    min-width: 280px;
    transition: .3s ease;
    padding: 15px 0!important;
    background: rgba(255,255,255,0.9);
    
    &:hover {
      background: rgba(255,255,255,1);
    }
  }
  `;

const List = styled.ul`
  max-width: 280px;
  padding-left: 15px;
`;

const ListItem = styled.li`
  clear: both;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  
  & > div, strong {
    float: left;
    margin-right: 15px;
  }
`;

const FiexedContainerBox = styled.div`
  ${(props) => props.align === 'right' ? 'right: 0;' : 'left: 0;'}
  z-index: 2;
  color: black;
  padding: 5px;
  font-size: 14px;
  background: white;
  border-radius: 3px;
  position: absolute;
  top: calc(100% + 5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);

`;

const FullWidthContainerBox = styled.div`
  ${(props) => props.align === 'right' ? 'right: 0;' : 'left: 0;'}
  z-index: 2;
  color: black;
  padding: 5px;
  font-size: 14px;
  background: white;
  border-radius: 3px;
  position: relative;
  //top: calc(100% + 5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);

`;

export { ButtonToolbarWapper, List, ListItem, FiexedContainerBox, FullWidthContainerBox }