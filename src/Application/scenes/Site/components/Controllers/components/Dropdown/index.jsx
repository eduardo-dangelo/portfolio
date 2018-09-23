import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { DropdownButton } from "react-bootstrap"
import { ButtonToolbarWapper } from '../../elements'

class Dropdown extends React.PureComponent {
  render() {
    const { children, color, top, bottom, right } = this.props
    return (
      <ButtonToolbarWapper
        top={top}
        color={color}
        right={right}
        bottom={bottom}
      >
        <DropdownButton
          noCaret
          pullRight
          bsStyle="default"
          title={<FaEllipsisH/>}
          id="dropdown-no-caret"
        >
          {children}
        </DropdownButton>
      </ButtonToolbarWapper>
    )
  }
}

export default Dropdown