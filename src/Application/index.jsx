import React from 'react'
import AdminBar from './scenes/AdminBar'
import Site from './scenes/Site'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { loggedInUserQuery, allUsersQuery } from './queries'
import { graphql, compose } from 'react-apollo'

class Application extends React.Component {
  render() {
    const { loggedInUserQuery } = this.props

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route
            path='/admin'
            render={() => <AdminBar {...this.props}/>}/>
          <Route
            path='/'
            render={() => <Site {...this.props}/>} />
        </div>
      </Router>
    )
  }
}

export default compose(
  graphql(loggedInUserQuery, {name: 'loggedInUserQuery'}),
)(Application)