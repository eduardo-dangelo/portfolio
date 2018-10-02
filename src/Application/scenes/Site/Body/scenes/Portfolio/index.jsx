import React from 'react'
import About from './scenes/About'
import Posts from './scenes/Posts'
import styled from 'styled-components'

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;


class Portfolio extends React.PureComponent {
  render() {
    return (
      <FlexContainer>
        <Posts/>
        <About/>
      </FlexContainer>
    )
  }
}

export default Portfolio