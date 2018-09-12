import React, { PureComponent } from 'react'
import FixedContainer from './components/FixedContainer'
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
  FaTextHeight,
} from 'react-icons/fa'

export default class TextController extends PureComponent {
  render() {
    const {
      cssProps: {
        bold,
        italic,
        boxSize,
        textSize,
        textAlign,
      },
      onBlur,
      onToggleBold,
      onToggleItalic,
      onBoxSizeChange,
      onTextSizeChange,
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
          <ButtonGroup>
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
        </ButtonToolbar>
      </FixedContainer>
    )
  }
}
