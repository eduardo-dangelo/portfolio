import React from 'react'
import { connect } from 'react-redux'
import Portfolio from './scenes/Portfolio'
import Documentation from './scenes/Documentation'

class Body extends React.PureComponent {
  renderBodyByType = () => {
    const { body } = this.props

    switch(body.bodyType) {
      case 'portfolio':
        return <Portfolio/>
      case 'documentation':
        return <Documentation/>
      default:
        return null
    }
  }

  render() {
    return this.renderBodyByType()
  }
}

export default connect(
  (state) => ({
    body: state.body
  }),
)(Body)