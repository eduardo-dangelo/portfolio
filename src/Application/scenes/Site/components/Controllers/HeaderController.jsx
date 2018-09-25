import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FullWidthBar from './components/FullWidthBar'
import ColorKnob from './components/Knobs/components/ColorKnob'
import { actions as headerActions } from '../../../../services/redux/headerReducer'
import { FaBold, FaItalic, FaAlignLeft, FaAlignRight, FaAlignCenter } from 'react-icons/fa'
import { Button, MenuItem, ButtonGroup, ButtonToolbar, DropdownButton } from 'react-bootstrap'

class HeaderController extends React.PureComponent {
  UpdateHeaderProps = (target, prop, value) => () => {
    const { actions } = this.props
    actions.updateHeaderProps(target, prop, value)
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
      default:
        return null
    }
  }

  MultiButtonOptions = (prop, target, options) => {
    const { header } = this.props
    const value = header[target][prop]

    return map(options, (option, key) => {
      return (
        <Button
          key={key}
          bsSize="small"
          active={value === option}
          bsStyle={value === option ? 'info' : 'default'}
          onClick={this.UpdateHeaderProps(target, prop, option)}
        >
          {this.getIcon(option)}
        </Button>
      )
    })
  }

  SingleButtonOption = (prop, target) => {
    const { header } = this.props
    const value = header[target][prop]

    return (
      <Button
        bsSize="small"
        active={value}
        onClick={this.UpdateHeaderProps(target, prop, !value)}
        bsStyle={value ? 'info' : 'default'}
      >
        {this.getIcon(prop)}
      </Button>
    )
  }

  DropDownOptions = (prop, target, options) => {
    const { header } = this.props
    const value = header[target][prop]

    return (
      <DropdownButton bsSize="small" title={`${target} ${prop}`} id="bg-nested-dropdown">
        {map(options, (option, key) => {
          return (
            <MenuItem
              key={key}
              eventKey={key}
              active={value === option}
              onClick={this.UpdateHeaderProps(target, prop, option)}
            >
              {option}
            </MenuItem>
          )
        })}
      </DropdownButton>
    )
  }

  ColorKnobOption = (prop, target) => {
    const { actions, header } = this.props
    const value = header[target][prop]

    const onColorChange = (target, prop) => (value) => {
      actions.updateHeaderProps(target, prop, value.hex)
    }

    return (
      <ColorKnob
        value={value}
        action={onColorChange(target, prop)}
      />
    )
  }

  render() {
    const alignOptions = ['left', 'center', 'right']
    const sizeOptions = ['x-large', 'large', 'medium', 'small', 'x-small']

    return (
      <FullWidthBar>
        <ButtonToolbar>
          <ButtonGroup>
            {this.MultiButtonOptions('align', 'title', alignOptions)}
          </ButtonGroup>
          <ButtonGroup>
            {this.SingleButtonOption('bold', 'title')}
          </ButtonGroup>
          <ButtonGroup>
            {this.SingleButtonOption('italic', 'title')}
          </ButtonGroup>
          <ButtonGroup>
            {this.DropDownOptions('size', 'title', sizeOptions)}
          </ButtonGroup>
          <ButtonGroup>
            {this.DropDownOptions('size', 'box', sizeOptions)}
          </ButtonGroup>
          <ButtonGroup>
            {this.ColorKnobOption('bgColor', 'box')}
          </ButtonGroup>
          <ButtonGroup>
            {this.ColorKnobOption('color', 'box')}
          </ButtonGroup>
        </ButtonToolbar>
      </FullWidthBar>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(headerActions, dispatch)
  })
)(HeaderController)
