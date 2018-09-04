import React from 'react'
import Header from './Componets/Header'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Index extends React.PureComponent {
  state = {
    isAuth: false,
  }

  componentWillReceiveProps(nextProps) {
    const loggedInUserQuery = nextProps.loggedInUserQuery

    if (loggedInUserQuery.loggedInUser && loggedInUserQuery.loggedInUser.id) {
      this.setState({
        isAuth: true,
      })
    }

    if (loggedInUserQuery.loggedInUser && !loggedInUserQuery.loggedInUser.id) {
      this.setState({
        isAuth: false,
      })
    }
  }

  render() {
    const { isAuth } = this.state
    return (
      <div>
        <Header isAuth={isAuth}/>
      </div>
    );
  }
}

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

export default graphql(LOGGED_IN_USER_QUERY, {name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' }});
