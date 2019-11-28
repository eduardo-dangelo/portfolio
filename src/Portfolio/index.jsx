import * as React from 'react';
import { Header } from './Header';
import styled from 'styled-components';
import {Projects} from './Projects';
import {About} from './About';
import {Footer} from './Footer';

const Body = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <Body>
        <Header />
        <Projects/>
        <About/>
        <Footer/>
      </Body>
    );
  }
}

export default Portfolio;
