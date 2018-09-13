import React from 'react'
import { ChromePicker } from 'react-color'
import { Button, OverlayContainer, HiddenElement } from '../Elements';


class ColorKnob extends React.Component {
  state = {
    showColorPicker: false,
  }

  handleClick = () => {
    if (this.state.showColorPicker) {
      this.setState({ showColorPicker: false })
    }

    if (!this.state.showColorPicker) {
      this.setState({ showColorPicker: true })
    }
  }

  handleBlur = () => {
    this.setState({ showColorPicker: false })
  }

  render() {
    const { value, action } = this.props
    const { showColorPicker } = this.state

    return (
      <div>
        <Button color={value} onClick={this.handleClick} />
        {showColorPicker && (
          <OverlayContainer >
            <ChromePicker
              color={value}
              tabindex={'0'}
              onChangeComplete={action}
              display={showColorPicker}
            />
          </OverlayContainer>
        )}
        {showColorPicker && <HiddenElement onClick={this.handleBlur}/>}
      </div>
    )
  }
}

export default ColorKnob