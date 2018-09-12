import React from 'react'
import { TextController } from '../../../Controllers'
import { Input, Heading, OusideClickContainer } from '../../Elements'

class Header extends React.Component {
  state = {
    bold: false,
    italic: false,
    title: 'title',
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
    console.log('value', value)
    this.setState({
      textSize: value,
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
    const { bgInvert } = this.props
    const {
      bold,
      title,
      italic,
      textSize,
      textAlign,
      inputActive,
      showTextController,
    } = this.state
    console.log('textSize', textSize)

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
              onToggleBold={this.handleToggleBold}
              onToggleItalic={this.handleToggleItalic}
              onTextSizeChange={this.handleTextSizeChange}
              OnTextAlignChange={this.handleTextAlignChange}
              cssProps={{ bold, italic, textAlign, textSize }}
            />
          )}
        </Heading>
        {showTextController && <OusideClickContainer onClick={this.handleInputAndControllerBlur}/>}
      </div>
    )
  }
}

export default Header