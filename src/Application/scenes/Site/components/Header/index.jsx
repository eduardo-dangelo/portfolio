import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from './components/PageTitle'
import UserNameDisplay from './components/UserNameDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'
import { Header as AppHeader, TopHeader, HeaderBody } from './Elements'
import { actions as headerActions } from '../../../../services/redux/headerReducer'

class Header extends React.PureComponent {
  state = {
    color: '#ffffff',
    bgColor: '#001b44',
    boxSize: 'medium'
  }

  handleCardMouseHover = () => {
    this.setState({
      showDropdown: true
    })
  }

  handleCardMouseLeave = () => {
    this.setState({
      showDropdown: false
    })
  }

  updateValue = (item) => (value) => {
    this.setState({
      [item]: value.hex
    })
  }

  getInvertColor = (hex) => {
    const padZero = (str, len) => {
      len = len || 2;
      const zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }

    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    let r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
  }

  onBoxSizeChange = (value) => {
    this.setState({
      boxSize: value,
    })
  }

  render() {
    const { account, header, actions } = this.props
    const isAuth = account.isAuth
    const {
      color,
      boxSize,
      bgColor,
      textAlign,
    } = this.state

    const bgInvert = this.getInvertColor(bgColor)

    return (
      <AppHeader
        color={color}
        bgColor={bgColor}
        textAlign={textAlign}
        cssProps={{ boxSize }}
        onMouseOver={this.handleCardMouseHover}
        onMouseLeave={this.handleCardMouseLeave}
      >
        <TopHeader>
          <UserNameDisplay isAuth={isAuth}/>
          <SocialMediaLinks
            header={header}
            isAuth={isAuth}
            actions={actions}
            cssProps={{ color }}
          />
        </TopHeader>
        <HeaderBody>
          <PageTitle
            color={color}
            isAuth={isAuth}
            bgColor={bgColor}
            bgInvert={bgInvert}
            onBoxSizeChange={this.onBoxSizeChange}
            onColorChange={this.updateValue('color')}
            onBgColorChange={this.updateValue('bgColor')}
          />
        </HeaderBody>
      </AppHeader>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account,
    header: state.header
  }),
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(Header)