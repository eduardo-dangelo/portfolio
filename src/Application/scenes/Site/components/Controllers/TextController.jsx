import React, { PureComponent } from 'react'
import FixedContainer from './components/FixedContainer'
import { ButtonGroup, Button, DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap'
import { FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaTextHeight } from 'react-icons/fa'

export default class TextController extends PureComponent {
  render() {
    const {
      cssProps: {
        bold,
        italic,
        textAlign,
      },
      onBlur,
      onToggleBold,
      onToggleItalic,
      OnTextAlignChange,
    } = this.props

    return (
      <FixedContainer>
        <ButtonToolbar>
          <ButtonGroup>
            <Button
              bsSize="small"
              onBlur={onBlur}
              active={textAlign === 'left'}
              onClick={OnTextAlignChange('left')}
              bsStyle={textAlign === 'left' ? 'info' : 'default'}
            >
              <FaAlignLeft/>
            </Button>
            <Button
              bsSize="small"
              onBlur={onBlur}
              active={textAlign === 'center'}
              onClick={OnTextAlignChange('center')}
              bsStyle={textAlign === 'center' ? 'info' : 'default'}
            >
              <FaAlignCenter/>
            </Button>
            <Button
              bsSize="small"
              onBlur={onBlur}
              active={textAlign === 'right'}
              onClick={OnTextAlignChange('right')}
              bsStyle={textAlign === 'right' ? 'info' : 'default'}
            >
              <FaAlignRight/>
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button
              bsSize="small"
              active={bold}
              onBlur={onBlur}
              onClick={onToggleBold}
              bsStyle={bold ? 'info' : 'default'}
            >
              <FaBold/>
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button
              bsSize="small"
              active={italic}
              onBlur={onBlur}
              onClick={onToggleItalic}
              bsStyle={italic ? 'info' : 'default'}
            >
              <FaItalic/>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </FixedContainer>
    )
  }
}
