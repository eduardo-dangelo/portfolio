import styled from 'styled-components'

const Button = styled.button`
  width: 30px;
  height: 29.6px;
  border: 1px solid #9b9b9b;
  background: ${(props) => (props.color)};
  margin-right: 0;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3), inset 0 -2px 6px rgba(0,0,0,0.3), inset 0 2px 6px rgba(255,255,255,0.2);
`;

const HiddenElement = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  right: 15px;
  z-index: 2;
`;

export { Button, HiddenElement, OverlayContainer }