import * as React from 'react';
import { Header } from './Header';
import styled from 'styled-components';

const Body = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <Body>
        <Header />
      </Body>
    );
  }
}

export default Portfolio;
