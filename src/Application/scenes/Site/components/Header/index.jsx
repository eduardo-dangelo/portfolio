import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PageTitle from './components/PageTitle'
import UserNameDisplay from './components/UserNameDisplay'
import SocialMediaLinks from './components/SocialMediaLinks'
import { Header as AppHeader, TopHeader, HeaderBody, Heading, OusideClickContainer } from './elements'
import { actions as headerActions } from '../../../../services/redux/headerReducer'
import TextController from "../Controllers/TextController";

class Header extends React.PureComponent {
  state = {
    color: '#ffffff',
    bgColor: '#001b44',
    boxSize: 'medium',
    textAlign: 'left'
  }

  // handleInputAndControllerBlur = () => {
  //   this.setState({
  //     inputActive: false,
  //     showTextController: false
  //   })
  // }
  //
  // handleTextAlignChange = (value) => () => {
  //   this.setState({
  //     textAlign: value,
  //     inputActive: true
  //   })
  // }
  //
  // handleTextSizeChange = (value) => () => {
  //   this.setState({
  //     textSize: value,
  //     inputActive: true
  //   })
  // }
  //
  // handleBoxSizeChange = (value) => () => {
  //   const { onBoxSizeChange } = this.props
  //   this.setState({
  //     boxSize: value,
  //     inputActive: false
  //   })
  //   onBoxSizeChange(value)
  // }
  //
  // handleToggleBold = () => {
  //   this.setState(preState => ({
  //     bold: !preState.bold,
  //     inputActive: true
  //   }))
  // }
  //
  // handleToggleItalic = () => {
  //   this.setState(preState => ({
  //     italic: !preState.italic,
  //     inputActive: true
  //   }))
  // }

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
        onMouseOver={this.handleCardMouseHover}
        onMouseLeave={this.handleCardMouseLeave}
        cssProps={{ boxSize, color, bgColor, textAlign }}
      >
        <TopHeader>
          <UserNameDisplay
            header={header}
            isAuth={isAuth}
            actions={actions}
          />
          <SocialMediaLinks
            header={header}
            isAuth={isAuth}
            actions={actions}
            cssProps={{ color }}
          />
        </TopHeader>
        <HeaderBody>
          <PageTitle
            header={header}
            isAuth={isAuth}
            actions={actions}
          />
        </HeaderBody>
        {/*{showTextController && (*/}
          {/*<TextController*/}
            {/*onColorChange={this.updateValue('color')}*/}
            {/*onBgColorChange={this.updateValue('bgColor')}*/}
            {/*onToggleBold={this.handleToggleBold}*/}
            {/*onToggleItalic={this.handleToggleItalic}*/}
            {/*onBoxSizeChange={this.handleBoxSizeChange}*/}
            {/*onTextSizeChange={this.handleTextSizeChange}*/}
            {/*OnTextAlignChange={this.handleTextAlignChange}*/}
            {/*cssProps={{ bold, italic, textAlign, textSize, boxSize, bgColor, color }}*/}
          {/*/>*/}
        {/*)}*/}
        {/*{showTextController && <OusideClickContainer onClick={this.handleInputAndControllerBlur}/>}*/}
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