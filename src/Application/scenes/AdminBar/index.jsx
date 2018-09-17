import React from 'react'
import { Bar, Form, Button, Title, Input, Spin } from './Elements'
// import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { FaSpinner } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { actions as authActions } from '../../redux/userAccountReducer'
import { allUsersQuery } from "../../queries";


class AdminBar extends React.Component {
  state = {
    name: '',
    email: '',
    error: '',
    password: '',
    isAuth: false,
    hasUsers: false,
    isLoading: false,
    isUserLoggedIn: false,
    emailSubscription: false,
  }
  
  handleLogOut = () => {
    const { actions } = this.props
    actions.loading(true)
    setTimeout(() => {
      localStorage.removeItem('graphcoolToken')
      actions.logOut()
      window.location.reload()
    }, 1000);
    // this.setState({ isLoading: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleSignupUser = async () => {
    const { email, password, name } = this.state

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

  handleAuthenticateUser = async () => {
    const { actions, authenticateUserMutation, loggedInUserQuery } = this.props
    const { email, password } = this.state

    actions.loading(true)
    authenticateUserMutation({
      variables: { email, password },
    })
    .then((response) =>
      localStorage.setItem('graphcoolToken', response.data.authenticateUser.token),
    )
    .then(() => {
        loggedInUserQuery.refetch();
        actions.loading(false)
      }
    )
    .catch(() => {
      this.setState({ error: 'Invalid Credentials'})
      setTimeout(() => this.setState({ error: '' }), 3000)
      actions.loading(false)
    })
  }


  render() {
    const { allUsersQuery, loggedInUserQuery, account } = this.props
    const { isLoading, error } = this.state

    const allUsers = allUsersQuery.allUsers
    const hasUsers = allUsers && allUsers.length > 0

    const loggedInUser = loggedInUserQuery.loggedInUser
    const isAuth = loggedInUser && loggedInUser.id

    if (!allUsers) {
      return (
        <Bar>
          <Title>
            <Spin><FaSpinner/></Spin>
          </Title>
        </Bar>
      )
    }

    if (isAuth) {
      return (
        <Bar>
          <Title>Hello Eduardo</Title>
          <Form>
            <Button onClick={this.handleLogOut}>
              {account.loading && <Spin><FaSpinner/></Spin>}
              Logout
            </Button>
          </Form>
        </Bar>
      )
    }

    return (
      <Bar>
        <Title>{hasUsers ? 'Login' : 'Welcome'}</Title>
        <form onSubmit={this.handleSubmit}>
          <Form>
            {error && error}
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
                onClick={this.handleSignupUser}
              >
                Submit
              </Button>
            ) : (
              <Button
                disabled={!this.state.email || !this.state.password}
                onClick={this.handleAuthenticateUser}
              >
                {account.loading && <Spin><FaSpinner/></Spin>}
                Log In
              </Button>
            )}
          </Form>
        </form>
      </Bar>
    )
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

export default compose(
  graphql(SIGNUP_USER_MUTATION, {name: 'signupUserMutation'}),
  graphql(AUTHENTICATE_USER_MUTATION, {name: 'authenticateUserMutation'}),
  graphql(allUsersQuery, {name: 'allUsersQuery'}),
  connect(
    (state) => ({
      account: state.account
    }),
    (dispatch) => ({
      actions: bindActionCreators(authActions, dispatch)
    })
  )
)(AdminBar)