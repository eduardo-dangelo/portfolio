import React from 'react'
import { Header as AppHeader, Input } from './Elements'
import { Dropdown, HeaderController } from '../Controller'
import AutosizeInput from 'react-input-autosize';

class Header extends React.PureComponent {
  state = {
    title: 'title',
    color: '#ffffff',
    bgColor: '#001b44',
    showDropdown: false
  }

  render() {
    const { bgColor, color, showDropdown, title } = this.state
    return (
      <AppHeader
        bgColor={bgColor}
        color={color}
        onMouseOver={this.handleCardMouseHover}
        onMouseLeave={this.handleCardMouseLeave}
      >
        {showDropdown && (
          <Dropdown color={this.getInvertColor(bgColor)}>
            <HeaderController
              color={color}
              bgColor={bgColor}
              onBgColorChange={this.updateValue('bgColor')}
              onColorChange={this.updateValue('color')}
            />
          </Dropdown>
        )}
        <h1>
          <Input
            name="test"
            value={title}
            bgColor={this.getInvertColor(bgColor)}
            style={{ bg: 'transparent' }}
            onChange={this.handleChangeTitle}
          />
        </h1>
      </AppHeader>
    )
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