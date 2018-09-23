import styled from 'styled-components'

const Button = styled.button`
  width: 30px;
  height: 29.6px;
  margin-right: 0;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  background: ${(props) => (props.color)};
  box-shadow: 0 2px 6px rgba(0,0,0,0.3), inset 0 -2px 6px rgba(0,0,0,0.3), inset 0 2px 6px rgba(255,255,255,0.2);
`;

const HiddenElement = styled.div`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const OverlayContainer = styled.div`
  z-index: 2;
  right: 15px;
  position: absolute;
`;

export { Button, HiddenElement, OverlayContainer }