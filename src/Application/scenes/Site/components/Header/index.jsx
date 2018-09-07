import React from 'react'
import { Header as AppHeader, Input, H1 } from './Elements'
import { Dropdown, HeaderController, TextController } from '../Controllers'

class Header extends React.PureComponent {
  state = {
    bold: false,
    italic: false,
    title: 'title',
    color: '#ffffff',
    bgColor: '#001b44',
    textAlign: 'center',
    showDropdown: false,
  }

  render() {
    const { isAuth } = this.props
    const { bgColor, color, showDropdown, title, textAlign, bold, italic } = this.state
    console.log(italic)
    return (
      <AppHeader
        color={color}
        bgColor={bgColor}
        textAlign={textAlign}
        onMouseOver={this.handleCardMouseHover}
        onMouseLeave={this.handleCardMouseLeave}
      >
        {showDropdown && (
          <Dropdown
            top={15}
            right={15}
            color={this.getInvertColor(bgColor)}
          >
            <HeaderController
              color={color}
              bgColor={bgColor}
              onColorChange={this.updateValue('color')}
              onBgColorChange={this.updateValue('bgColor')}
            />
          </Dropdown>
        )}
        <H1 textAlign={textAlign}>
          <Input
            bold={bold}
            name="test"
            value={title}
            italic={italic}
            textAlign={textAlign}
            onChange={this.handleChangeTitle}
            bgColor={this.getInvertColor(bgColor)}
          />
          <TextController
            bold={bold}
            italic={italic}
            textAlign={textAlign}
            onToggleBold={this.handleToggleBold}
            onToggleItalic={this.handleToggleItalic}
            OnTextAlignChange={this.handleTextAlignChange}
          />  
        </H1>
      </AppHeader>
    )
  }

  handleTextAlignChange = (value) => () => {
    this.setState({
      textAlign: value
    })
  }

  handleToggleBold = () => {
    this.setState(preState => ({
      bold: !preState.bold
    }))
  }

  handleToggleItalic = () => {
    console.log('aaaaa')
    this.setState(preState => ({
      italic: !preState.italic
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
}

export default Header