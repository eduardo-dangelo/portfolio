import React from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import PageTitle from './components/PageTitle/index';
import UserNameDisplay from './components/UserNameDisplay/index';
import SocialMediaLinks from './components/SocialMediaLinks/index';
import { HeaderController } from '../components/Controllers/index';
import {
  Header as AppHeader,
  TopHeader,
  HeaderBody,
  HeaderContent,
  ParticlesContainer,
  DisplayModeContainer,
  DisplayModeItem,
  Divider,
  Label,
  TooltipCustom
} from './elements';
import { FaAlignJustify, FaList, FaThLarge, FaTh } from 'react-icons/fa'
import { bindActionCreators } from 'redux';
import { actions as portfolioActions } from '../Body/scenes/Portfolio/reducer';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

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
    const { account, header, portfolio } = this.props
    const isAuth = account.isAuth
    const color = header.box.color
    const boxSize = header.box.size
    const bgColor1 = header.box.bgColor1
    const bgColor2 = header.box.bgColor2
    const angle = header.box.angle
    const textAlign = header.title.align
    const displayMode = portfolio.displayMode
    const { showController, } = this.state

    const tooltip = (displayMode) => (
      <TooltipCustom id="tooltip">
        <Label>Display mode:</Label> {displayMode}.
      </TooltipCustom>
    );

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
            <DisplayModeContainer>
              <OverlayTrigger placement="top" overlay={tooltip('Block')}>
              <DisplayModeItem
                onClick={this.handleChangeDisplayMode('block')}
                active={displayMode === 'block'}
              >
                <FaTh/>
              </DisplayModeItem>
              </OverlayTrigger>
              <Divider/>
                <OverlayTrigger placement="top" overlay={tooltip('List')}>
              <DisplayModeItem
                onClick={this.handleChangeDisplayMode('list')}
                active={displayMode === 'list'}
              >
                  <FaList/>
              </DisplayModeItem>
                </OverlayTrigger>
            </DisplayModeContainer>
          </HeaderContent>
        </AppHeader>
      </div>
    );
  }

  handleChangeDisplayMode = (displayMode) => () => {
    const { actions } = this.props;
    actions.selectDisplayMode(displayMode);
  }
}

export default connect(
  (state) => ({
    account: state.account,
    header: state.header,
    portfolio: state.portfolio
  }),
  (dispatch) => ({
    actions: bindActionCreators(portfolioActions, dispatch)
  })
)(Header);
