import React from 'react'
import { Header as AppHeader, Input, Heading, OusideClickContainer, TopHeader } from './Elements'
import { Dropdown, HeaderController, TextController } from '../Controllers'
import SocialMediaLinks from './components/SocialMediaLinks'
import UserNameDisplay from './components/UserNameDisplay'

class Header extends React.PureComponent {
  state = {
    bold: false,
    italic: false,
    title: 'title',
    color: '#ffffff',
    bgColor: '#001b44',
    textAlign: 'center',
    inputActive: false,
    showDropdown: false,
    showTextController: false,
  }

  handleInputFocus = () => {
    this.setState({
      inputActive: true,
      showTextController: true
    })
  }

  handleInputBlur = () => {
    this.setState({
      inputActive: false
    })
  }

  handleInputAndControllerBlur = () => {
    this.setState({
      inputActive: false,
      showTextController: false
    })
  }

  handleTextAlignChange = (value) => () => {
    this.setState({
      textAlign: value,
      inputActive: true
    })
  }

  handleToggleBold = () => {
    this.setState(preState => ({
      bold: !preState.bold,
      inputActive: true
    }))
  }

  handleToggleItalic = () => {
    console.log('aaaaa')
    this.setState(preState => ({
      italic: !preState.italic,
      inputActive: true
    }))
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
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
      bold,
      color,
      title,
      italic,
      bgColor,
      textAlign,
      inputActive,
      showDropdown,
      showTextController,
    } = this.state

    const bgColorInvert = this.getInvertColor(bgColor)

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
        <Heading textAlign={textAlign}>
          <Input
            name="test"
            value={title}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            onChange={this.handleChangeTitle}
            cssProps={{ bold, italic, textAlign, bgColorInvert, inputActive }}
          />
          {showTextController && (
            <TextController
              onToggleBold={this.handleToggleBold}
              onToggleItalic={this.handleToggleItalic}
              OnTextAlignChange={this.handleTextAlignChange}
              cssProps={{ bold, italic, textAlign }}
            />
          )}
        </Heading>
        {showTextController && <OusideClickContainer onClick={this.handleInputAndControllerBlur}/>}
      </AppHeader>
    )
  }
}

export default Header