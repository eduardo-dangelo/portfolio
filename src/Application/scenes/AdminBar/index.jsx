import React from 'react'
import { Bar, Form, Button, Title, Input, Spin } from './Elements'
// import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { FaSpinner } from 'react-icons/fa'


class AdminBar extends React.Component {
  state = {
    isAuth: false,
    email: '',
    password: '',
    name: '',
    emailSubscription: false,
    hasUsers: false,
    isUserLoggedIn: false,
    isLoading: false,
    error: ''
  }
  
  handleLogOut = () => {
    this.setState({ isLoading: true })
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }


  render() {
    const { allUsersQuery, loggedInUserQuery } = this.props
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
              {isLoading && <Spin><FaSpinner/></Spin>}
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
                onClick={this.signupUser}
              >
                Submit
              </Button>
            ) : (
              <Button
                disabled={!this.state.email || !this.state.password}
                onClick={this.authenticateUser}
              >
                {isLoading && <Spin><FaSpinner/></Spin>}
                Log In
              </Button>
            )}
          </Form>
        </form>
      </Bar>
    )
  }

  handleSubmit = (e) => {
    console.log('e', e)
    e.preventDefault()
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
    const { onRefetch, authenticateUserMutation } = this.props
    const { email, password } = this.state
    this.setState({ isLoading: true })

    const response = await authenticateUserMutation({ variables: { email, password }})
    Promise.resolve(
      localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
    ).then(
      onRefetch()
    ).catch(e => {
      this.setState({ error: 'Invalid Credentials'})
    })
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
)(AdminBar)