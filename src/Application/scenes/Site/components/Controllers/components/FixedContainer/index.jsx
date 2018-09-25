import React from 'react'
import { FixedContainerBox } from '../../elements'

export default class FixedContainer extends React.PureComponent {
  render() {
    return (
      <FixedContainerBox align={this.props.align}>
        {this.props.children}
      </FixedContainerBox>
    )
  }
}
