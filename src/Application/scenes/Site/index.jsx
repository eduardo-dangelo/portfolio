import React from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'

class Site extends React.Component {
  render() {
    const { account } = this.props

    return (
      <div>
        <Header isAuth={account.user}/>
        <h2>
          {/*{isAuth ? 'authetticaded' : 'not authenticaded'}*/}
        </h2>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    account: state.account
  })
)(Site)