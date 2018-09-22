import React, { Component } from 'react'
import { FiexedContainerBox } from '../../elements'

export default class FixedContainer extends Component {
  render() {
    return (
      <FiexedContainerBox align={this.props.align}>
        {this.props.children}
      </FiexedContainerBox>
    )
  }
}
