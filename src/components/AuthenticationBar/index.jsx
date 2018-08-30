import React from 'react'
import { Bar, Form, Button, Title, Input } from './Elements'
// import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'


class AuthenticationBar extends React.Component {
  state = {
    isAuth: false,
    email: '',
    password: '',
    name: '',
    emailSubscription: false,
    hasUsers: false,
    isUserLoggedIn: false,
  }
  
  componentWillReceiveProps(nextProps) {
    const { allUsersQuery } = this.props
    const allUsers = allUsersQuery.allUsers
    const allUsersNext = nextProps.allUsersQuery.allUsers
    const allUsersChanged = allUsers !== allUsersNext;
    const loggedInUserQuery = nextProps.loggedInUserQuery

    if (loggedInUserQuery.loggedInUser && loggedInUserQuery.loggedInUser.id) {
      this.setState({
        isUserLoggedIn: true,
      })
    }


    if (allUsers && allUsersChanged && allUsersNext.lenght > 0) {
      this.setState({
        hasUsers: true,
      })
    }
  }

  handleLogOut = () => {
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }


  render() {
    const { allUsersQuery, loggedInUserQuery } = this.props
    const allUsers = allUsersQuery.allUsers
    const hasUsers = allUsers && allUsers.length > 0
    const loggedInUser = loggedInUserQuery.loggedInUser
    const isUserLoggedIn = loggedInUser && loggedInUser.id

    if (!allUsers) {
      return (
        <Bar>
          loading...
        </Bar>
      )
    }

    if (isUserLoggedIn) {
      return (
        <Bar>
          <Title>Hello Eduardo</Title>
          <Form>
            <Button onClick={this.handleLogOut}>Logout</Button>
          </Form>
        </Bar>
      )
    }

    return (
      <Bar>
        <Title>{hasUsers ? 'Login' : 'Welcome'}</Title>
        <Form>
          <Input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          />
          <Input
            type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={(e) => this.setState({password: e.target.value})}
          />
          {!hasUsers && (
            <Input
              value={this.state.name}
              placeholder='Name'
              onChange={(e) => this.setState({name: e.target.value})}
            />
          )}
          {!hasUsers ? (
            <Button
              disabled={!this.state.email || !this.state.password || !this.state.name}
              onClick={this.signupUser}
            >
              Submit
            </Button>
          ) : (
            <Button
              disabled={!this.state.email || !this.state.password}
              onClick={this.authenticateUser}
            >
              Log In
            </Button>
          )}
        </Form>
      </Bar>
    )
  }

  signupUser = async () => {
    const { email, password, name } = this.state
    console.log('hello')

    try {
      const user = await this.props.signupUserMutation({variables: {email, password, name}})
      localStorage.setItem('graphcoolToken', user.data.signupUser.token)
      // this.props.history.replace('/')
      return console.log('heyy you have created an user')
    } catch (e) {
      console.error(`An error occured: `, e)
      // this.props.history.replace('/')
    }
  }

  authenticateUser = async () => {
    const {email, password} = this.state

    const response = await this.props.authenticateUserMutation({variables: {email, password}})
    localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
    console.log('this.props', this.props)
    this.props.loggedInUserQuery.refetch()
  }
}

const SIGNUP_USER_MUTATION = gql`
  mutation SignupUserMutation ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
      token
    }
  }
`

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      id
    }
  }
`

export default compose(
  graphql(SIGNUP_USER_MUTATION, {name: 'signupUserMutation'}),
  graphql(AUTHENTICATE_USER_MUTATION, {name: 'authenticateUserMutation'}),
  graphql(LOGGED_IN_USER_QUERY, {name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' }}),
  graphql(ALL_USERS_QUERY, {name: 'allUsersQuery'})
)(AuthenticationBar)