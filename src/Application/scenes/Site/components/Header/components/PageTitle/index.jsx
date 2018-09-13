import React from 'react'
import { TextController } from '../../../Controllers'
import { Input, Heading, OusideClickContainer } from '../../Elements'
import HeaderController from "../../../Controllers/HeaderController";

class Header extends React.Component {
  state = {
    bold: false,
    italic: false,
    title: 'title',
    boxSize: 'medium',
    inputActive: false,
    textSize: 'medium',
    textAlign: 'center',
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

  handleTextSizeChange = (value) => () => {
    this.setState({
      textSize: value,
      inputActive: true
    })
  }

  handleBoxSizeChange = (value) => () => {
    const { onBoxSizeChange } = this.props
    this.setState({
      boxSize: value,
      inputActive: false
    })
    onBoxSizeChange(value)
  }

  handleToggleBold = () => {
    this.setState(preState => ({
      bold: !preState.bold,
      inputActive: true
    }))
  }

  handleToggleItalic = () => {
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

  render() {
    const { onColorChange, onBgColorChange, bgInvert, bgColor, color, } = this.props
    const {
      bold,
      title,
      italic,
      boxSize,
      textSize,
      textAlign,
      inputActive,
      showTextController,
    } = this.state

    return (
      <div>
        <Heading cssProps={{ textAlign, textSize }}>
          <Input
            name="test"
            value={title}
            onBlur={this.handleInputBlur}
            onFocus={this.handleInputFocus}
            onChange={this.handleChangeTitle}
            cssProps={{ bold, italic, textAlign, bgInvert, inputActive }}
          />
          {showTextController && (
            <TextController
              onColorChange={onColorChange}
              onBgColorChange={onBgColorChange}
              onToggleBold={this.handleToggleBold}
              onToggleItalic={this.handleToggleItalic}
              onBoxSizeChange={this.handleBoxSizeChange}
              onTextSizeChange={this.handleTextSizeChange}
              OnTextAlignChange={this.handleTextAlignChange}
              cssProps={{ bold, italic, textAlign, textSize, boxSize, bgColor, color }}
            />
          )}
        </Heading>
        {showTextController && <OusideClickContainer onClick={this.handleInputAndControllerBlur}/>}
      </div>
    )
  }
}

export default Header