import React, { PureComponent } from 'react'
import FullWidthBar from './components/FullWidthBar'
import { map } from 'lodash'
import {
  Button,
  MenuItem,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
} from 'react-bootstrap'
import {
  FaBold,
  FaItalic,
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
} from 'react-icons/fa'
import ColorKnob from './components/Knobs/components/ColorKnob'

export default class HeaderController extends PureComponent {
  handleUpdatePageTitleProps = (prop, value) => () => {
    const { actions } = this.props
    actions.updatePageTitleProps(prop, value)
  }

  handleUpdateHeaderProps = (prop, value) => () => {
    const { actions } = this.props
    actions.updateHeaderProps(prop, value)
  }

  getIcon = (value) => {
    switch (value) {
      case 'left':
        return <FaAlignLeft/>
      case 'center':
        return <FaAlignCenter/>
      case 'right':
        return <FaAlignRight/>
      case 'bold':
        return <FaBold/>
      case 'italic':
        return <FaItalic/>
    }
  }

  renderTitleAlignOptions = () => {
    const { header } = this.props
    const alignOptions = ['left', 'center', 'right']
    const textAlign = header.title.props.align

    return map(alignOptions, (value, key) => {
      return (
        <Button
          key={key}
          bsSize="small"
          active={textAlign === value}
          onClick={this.handleUpdatePageTitleProps('align', value)}
          bsStyle={textAlign === value ? 'info' : 'default'}
        >
          {this.getIcon(value)}
        </Button>
      )
    })
  }

  renderSingleButtonOption = (key) => {
    const { header } = this.props
    const value = header.title.props[key]

    return (
      <Button
        bsSize="small"
        active={value}
        onClick={this.handleUpdatePageTitleProps(key, !value)}
        bsStyle={value ? 'info' : 'default'}
      >
        {this.getIcon(key)}
      </Button>
    )
  }

  renderDropDownOptions = (key, options) => {

    return (
      <DropdownButton bsSize="small" title="Text size" id="bg-nested-dropdown">
        {map(options, (option, key) => {
          return (
            <MenuItem
              key={key}
              eventKey={key}
              active={key === option}
              onClick={this.handleUpdateHeaderProps(option)}
            >
              {option}
            </MenuItem>
          )
        })}
      </DropdownButton>
    )
  }

  render() {
    const {
      cssProps: {
        color,
        boxSize,
        bgColor,
        textSize,
      },
      onColorChange,
      onBoxSizeChange,
      onBgColorChange,
      onTextSizeChange,
    } = this.props

    return (
      <FullWidthBar align={'right'}>
        <ButtonToolbar>
          <ButtonGroup>
            {this.renderTitleAlignOptions()}
          </ButtonGroup>

          <ButtonGroup>
            {this.renderSingleButtonOption('bold')}
          </ButtonGroup>

          <ButtonGroup>
            {this.renderSingleButtonOption('italic')}
          </ButtonGroup>
          <ButtonGroup>
            {this.renderDropDownOptions('size', )}
            <DropdownButton bsSize="small" title="Text size" id="bg-nested-dropdown">
              <MenuItem
                eventKey="1"
                active={textSize === 'x-large'}
                onClick={onTextSizeChange('x-large')}
              >
                x-large
              </MenuItem>
              <MenuItem
                eventKey="2"
                active={textSize === 'large'}
                onClick={onTextSizeChange('large')}
              >
                large
              </MenuItem>
              <MenuItem
                eventKey="3"
                active={textSize === 'medium'}
                onClick={onTextSizeChange('medium')}
              >
                medium
              </MenuItem>
              <MenuItem
                eventKey="4"
                active={textSize === 'small'}
                onClick={onTextSizeChange('small')}
              >
                small
              </MenuItem>
              <MenuItem
                eventKey="5"
                active={textSize === 'x-small'}
                onClick={onTextSizeChange('x-small')}
              >
                x-small
              </MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <ButtonGroup>
            <DropdownButton bsSize="small" title="Box size" id="bg-nested-dropdown">
              <MenuItem
                eventKey="1"
                active={boxSize === 'x-large'}
                onClick={onBoxSizeChange('x-large')}
              >
                x-large
              </MenuItem>
              <MenuItem
                eventKey="2"
                active={boxSize === 'large'}
                onClick={onBoxSizeChange('large')}
              >
                large
              </MenuItem>
              <MenuItem
                eventKey="3"
                active={boxSize === 'medium'}
                onClick={onBoxSizeChange('medium')}
              >
                medium
              </MenuItem>
              <MenuItem
                eventKey="4"
                active={boxSize === 'small'}
                onClick={onBoxSizeChange('small')}
              >
                small
              </MenuItem>
              <MenuItem
                eventKey="5"
                active={boxSize === 'x-small'}
                onClick={onBoxSizeChange('x-small')}
              >
                x-small
              </MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <ButtonGroup>
            <ColorKnob
              value={bgColor}
              action={onBgColorChange}
            />
          </ButtonGroup>
          <ButtonGroup>
            <ColorKnob
              value={color}
              action={onColorChange}
            />
          </ButtonGroup>
        </ButtonToolbar>
      </FullWidthBar>
    )
  }
}
