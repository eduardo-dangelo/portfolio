import React, { Component } from 'react'
import { FullWidthContainerBox } from '../../elements'

export default class FullWidthBar extends Component {
  render() {
    return (
      <FullWidthContainerBox align={this.props.align}>
        {this.props.children}
      </FullWidthContainerBox>
    )
  }
}
