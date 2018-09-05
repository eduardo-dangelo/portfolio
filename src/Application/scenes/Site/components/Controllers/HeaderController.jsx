import React from 'react'
import { List, ListItem } from './Elements'
import { ColorKnob } from './components/Knobs/index'

class HeaderController extends React.PureComponent {
  render() {
    const { onBgColorChange, onColorChange, bgColor, color } = this.props
    return (
      <List>
        <ListItem>
          <strong>background-color:</strong>
          <ColorKnob
            value={bgColor}
            action={onBgColorChange}
          />
        </ListItem>
        <ListItem>
          <strong>color:</strong>
          <ColorKnob
            value={color}
            action={onColorChange}
          />
        </ListItem>
        <ListItem>
          <strong>Header style:</strong>
        </ListItem>
      </List>
    )
  }
}

export default HeaderController