import React from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import PageTitle from './components/PageTitle/index';
import UserNameDisplay from './components/UserNameDisplay/index';
import SocialMediaLinks from './components/SocialMediaLinks/index';
import { HeaderController } from '../components/Controllers/index';
import { Header as AppHeader, TopHeader, HeaderBody, HeaderContent, ParticlesContainer } from './elements';

class Header extends React.PureComponent {
  state = {
    showController: false
  }

  handleCardMouseHover = () => {
    const { account } = this.props
    const isAuth = account.isAuth

    if (!isAuth) {
      return null;
    }

    this.setState({
      showController: true
    })
  }

  handleCardMouseLeave = () => {
    // this.setState({
    //   showController: false
    // })
  }

  render() {
    const { account, header } = this.props
    const isAuth = account.isAuth
    const color = header.box.color
    const boxSize = header.box.size
    const bgColor1 = header.box.bgColor1
    const bgColor2 = header.box.bgColor2
    const angle = header.box.angle
    const textAlign = header.title.align
    const { showController, } = this.state

    return (
      <div onMouseOver={this.handleCardMouseHover} onMouseLeave={this.handleCardMouseLeave}>
        {showController && isAuth && (
          <HeaderController header={header}/>
        )}

        <AppHeader cssProps={{ boxSize, color, bgColor1, bgColor2, angle, textAlign }}>
          <ParticlesContainer>
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 50
                  },
                  "size": {
                    "value": 1
                  }
                },
                "interactivity": {
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    }
                  }
                }
              }}
            />
          </ParticlesContainer>
          <HeaderContent>
            <TopHeader>
              <UserNameDisplay
                header={header}
                isAuth={isAuth}
              />
              <SocialMediaLinks
                header={header}
                isAuth={isAuth}
              />
            </TopHeader>
            <HeaderBody>
              <PageTitle
                header={header}
                isAuth={isAuth}
              />
            </HeaderBody>
          </HeaderContent>
        </AppHeader>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    account: state.account,
    header: state.header
  }),
)(Header);
