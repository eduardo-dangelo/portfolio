import React from 'react'
import { FullWidthContainerBox } from '../../elements'

export default class FullWidthBar extends React.PureComponent {
  render() {
    return (
      <FullWidthContainerBox align={this.props.align}>
        {this.props.children}
      </FullWidthContainerBox>
    )
  }
}
