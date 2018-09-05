import React from 'react'
import Header from './components/Header'

class Site extends React.Component {
  render() {
    const { loggedInUserQuery } = this.props
    const loggedInUser = loggedInUserQuery.loggedInUser
    const isAuth = loggedInUser && loggedInUser.id

    return (
      <div>
        <Header/>
        <h2>
          {isAuth ? 'authetticaded' : 'not authenticaded'}
        </h2>
      </div>
    )
  }
}

export default Site