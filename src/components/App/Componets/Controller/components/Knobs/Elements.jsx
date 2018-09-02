import styled from 'styled-components'

const Button = styled.button`
  width: 16px;
  height: 16px;
  border: 1px solid #9b9b9b;
  background: ${(props) => (props.color)};
  margin-right: 10px;
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
  z-index: 2;
`;

export { Button, HiddenElement, OverlayContainer }