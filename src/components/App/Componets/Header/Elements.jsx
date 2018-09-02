import styled from 'styled-components'

const Header = styled.div`
  background: ${(props) => props.bgColor}
  color: ${(props) => props.color};
  text-align: center;
  padding: 15px;
  position: relative;
`;

export { Header }