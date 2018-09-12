import React from 'react'
import { Header as AppHeader, TopHeader, HeaderBody } from './Elements'
import { Dropdown, HeaderController } from '../Controllers'
import SocialMediaLinks from './components/SocialMediaLinks'
import UserNameDisplay from './components/UserNameDisplay'
import PageTitle from './components/PageTitle'

class Header extends React.PureComponent {
  state = {
    color: '#ffffff',
    bgColor: '#001b44',
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

  render() {
    const { isAuth } = this.props
    const {
      color,
      bgColor,
      textAlign,
    } = this.state

    const bgInvert = this.getInvertColor(bgColor)

    return (
      <AppHeader
        color={color}
        bgColor={bgColor}
        textAlign={textAlign}
        onMouseOver={this.handleCardMouseHover}
        onMouseLeave={this.handleCardMouseLeave}
      >
        <TopHeader>
          <UserNameDisplay/>
          <SocialMediaLinks/>
        </TopHeader>
        {/*{showDropdown && (*/}
        {/*<Dropdown*/}
        {/*top={15}*/}
        {/*right={15}*/}
        {/*color={this.getInvertColor(bgColor)}*/}
        {/*>*/}
        {/*<HeaderController*/}
        {/*color={color}*/}
        {/*bgColor={bgColor}*/}
        {/*onColorChange={this.updateValue('color')}*/}
        {/*onBgColorChange={this.updateValue('bgColor')}*/}
        {/*/>*/}
        {/*</Dropdown>*/}
        {/*)}*/}
        <HeaderBody>
          <PageTitle bgInvert={bgInvert}/>
        </HeaderBody>
      </AppHeader>
    )
  }
}

export default Header