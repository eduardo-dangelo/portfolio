import React from 'react'
import { FullWidthContainerBox } from '../../elements'

export default class FullWidthBar extends React.PureComponent {
  render() {
    return (
      <FullWidthContainerBox {...this.props}>
        {this.props.children}
      </FullWidthContainerBox>
    )
  }
}
