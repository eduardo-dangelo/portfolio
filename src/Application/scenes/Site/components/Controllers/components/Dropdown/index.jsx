import React from 'react'
import { ButtonToolbarWapper } from '../../elements'
import { DropdownButton } from "react-bootstrap"
import { FaEllipsisH } from 'react-icons/fa'

class Dropdown extends React.PureComponent {
  render() {
    const { children, color, top, bottom, right } = this.props
    return (
      <ButtonToolbarWapper
        color={color}
        top={top}
        bottom={bottom}
        right={right}
      >
        <DropdownButton
          bsStyle="default"
          title={<FaEllipsisH/>}
          noCaret
          pullRight
          id="dropdown-no-caret"
        >
          {children}
        </DropdownButton>
      </ButtonToolbarWapper>
    )
  }
}

export default Dropdown