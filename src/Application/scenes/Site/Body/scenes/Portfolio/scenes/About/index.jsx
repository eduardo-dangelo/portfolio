import React from 'react'
import Links from './components/Links'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Contact from './components/Contact'
import AboutHeader from './components/AboutHeader'
import { AboutContainer, Container } from './elements'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducer'
import { connect } from 'react-redux'


class About extends React.PureComponent {
  render() {
    return (
      <AboutContainer>
        <Container>
          <AboutHeader/>
          <Profile/>
          <Skills/>
          <Contact/>
          <Links/>
        </Container>
      </AboutContainer>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    portfolio: state.portfolio
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(About)