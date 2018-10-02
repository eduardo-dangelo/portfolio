import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  background: #999170;
  padding: 30px;
  flex-shrink: 0;
`;

class About extends React.PureComponent {
  render() {
    return (
      <AboutContainer>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>About</h2>
      </AboutContainer>
    )
  }
}

export default About