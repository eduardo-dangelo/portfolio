import React from 'react'
import { Header as AppHeader } from './Elements'
import { Dropdown, HeaderController } from '../Controller'

class Header extends React.PureComponent {
  state = {
    bgColor: '#001b44',
    color: '#ffffff'
  }

  render() {
    const { bgColor, color } = this.state
    return (
      <AppHeader bgColor={bgColor} color={color}>
        <Dropdown>
          <HeaderController
            color={color}
            bgColor={bgColor}
            onBgColorChange={this.updateValue('bgColor')}
            onColorChange={this.updateValue('color')}
          />
        </Dropdown>
        <h1>Web Developer</h1>
      </AppHeader>
    )
  }

  updateValue = (item) => (value) => {
    this.setState({
      [item]: value.hex
    })
  }
}

export default Header