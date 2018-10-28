import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'


const SiteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 300;
  position: absolute;
  flex-direction: column;
  font-family: 'Source Sans Pro', sans-serif;
`;

const SiteBody = styled.div`
  clear: both;
  display: flex;
  flex: 1 0 auto;
  position: relative;
  flex-direction: column;
`;

const SiteFooter = styled.div`
  flex-shrink: 0;
`

class Site extends React.PureComponent {
  render() {
    return (
      <SiteContainer>
        <SiteBody>
          <Header/>
          <Body/>
        </SiteBody>
        <SiteFooter>
          <Footer/>
        </SiteFooter>
      </SiteContainer>
    )
  }
}

export default Site
