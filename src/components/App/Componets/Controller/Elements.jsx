import styled from 'styled-components'
import { ButtonToolbar } from "react-bootstrap";

const ButtonToolbarWapper = styled(ButtonToolbar)`
  position: absolute;
  top: 15px;
  right: 15px;
  color: black;
  
  .dropdown-toggle {
    border-radius: 50%;
    border: 1px solid black;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
    padding: 2px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: white !important;
    color: #444444;
    
    &:hover {
      color: #222222;  
    }
    
    svg {
      font-size: 1.2em;
      margin: 0;
    }
  }
  
  .dropdown-menu {
    min-width: 280px;
    padding: 15px 0!important;
    background: rgba(255,255,255,0.9);
    //top: 45px;
    //right: -30px;
  }
  `;

const List = styled.ul`
  padding-left: 15px;
  max-width: 280px;
`;

const ListItem = styled.li`
  //align-items: center;
  justify-content: space-between;
  clear: both;
  display: flex;
  margin-bottom: 5px;
  
  & > div, strong {
    float: left;
    margin-right: 15px;
  }
`;

export { ButtonToolbarWapper, List, ListItem }