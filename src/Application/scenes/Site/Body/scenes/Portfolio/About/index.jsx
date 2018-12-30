import React from 'react';
import Links from './Links';
import Skills from './Skills';
import Profile from './Profile';
import Contact from './Contact';
import { actions } from '../reducer';
import { connect } from 'react-redux';
import AboutHeader from './AboutHeader';
import { bindActionCreators } from 'redux';
import { AboutContainer, Container } from './elements';


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
    );
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
)(About);
