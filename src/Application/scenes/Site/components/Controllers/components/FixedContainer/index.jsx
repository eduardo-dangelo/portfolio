import React from 'react'
import { FiexedContainerBox } from '../../elements'

export default class FixedContainer extends React.PureComponent {
  render() {
    return (
      <FiexedContainerBox align={this.props.align}>
        {this.props.children}
      </FiexedContainerBox>
    )
  }
}
