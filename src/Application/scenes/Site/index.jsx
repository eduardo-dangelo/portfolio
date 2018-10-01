import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const SiteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  border: 1px solid orange;
`;

const PageWrapper = styled.div`
  flex: 1 0 auto;
`;

const FooterWrapper = styled.div`
  flex-shrink: 0;
`

class Site extends React.PureComponent {
  render() {
    return (
      <SiteWrapper>
        <PageWrapper>
          <Header/>
          <Body/>
        </PageWrapper>
        <FooterWrapper>
          <Footer/>
        </FooterWrapper>
      </SiteWrapper>
    )
  }
}

export default Site
