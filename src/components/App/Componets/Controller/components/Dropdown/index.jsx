import React from 'react'
import { ButtonToolbarWapper } from '../../Elements'
import { DropdownButton } from "react-bootstrap"
import { FaEllipsisH } from 'react-icons/fa'

class Dropdown extends React.PureComponent {
  render() {
    const { children, color } = this.props
    return (
      <ButtonToolbarWapper color={color}>
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