import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const FlexBody = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  clear: both;
  flex-direction: column;
`;

const FlexFooter = styled.div`
  flex-shrink: 0;
`

class Site extends React.PureComponent {
  render() {
    return (
      <FlexBox>
        <FlexBody>
          <Header/>
          <Body/>
        </FlexBody>
        <FlexFooter>
          <Footer/>
        </FlexFooter>
      </FlexBox>
    )
  }
}

export default Site
