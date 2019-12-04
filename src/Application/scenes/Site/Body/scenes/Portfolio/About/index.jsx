import React from 'react';
import Links from '../../../../../../../Portfolio/About/Links';
import Skills from '../../../../../../../Portfolio/About/Skills';
import Profile from '../../../../../../../Portfolio/About/Profile';
import Contact from '../../../../../../../Portfolio/About/Contact';
import { actions } from '../reducer';
import { connect } from 'react-redux';
import AboutHeader from '../../../../../../../Portfolio/About/AboutHeader';
import { bindActionCreators } from 'redux';
import {
  AboutContainer,
  Container
} from '../../../../../../../Portfolio/About/elements';

class About extends React.PureComponent {
  render() {
    return (
      <AboutContainer>
        <Container>
          <AboutHeader />
          <Profile />
          <Skills />
          <Contact />
          <Links />
        </Container>
      </AboutContainer>
    );
  }
}

export default connect(
  state => ({
    account: state.account,
    portfolio: state.portfolio
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(About);
