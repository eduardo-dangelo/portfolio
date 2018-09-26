import React from 'react'
import { connect } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { bindActionCreators } from 'redux'
import { graphql, compose } from 'react-apollo'
import { Bar, Form, Button, Title, Input, Spin, Error } from './elements'
import { actions as authActions } from './reducer'
import { allUsersQuery, loggedInUserQuery, UserQuery } from '../../services/queries'
import { authenticateUserMutation, signupUserMutation } from '../../services/mutations'

let userEmail = ''

class AdminBar extends React.PureComponent {
  state = {
    name: '',
    email: '',
    error: '',
    password: '',
    hasUsers: false,
    isUserLoggedIn: false,
    emailSubscription: false,
  }

  // componentWillMount() {
  //   localStorage.removeItem('graphcoolToken')
  // }

  handleLogOut = () => {
    const { actions } = this.props
    actions.loading(true)
    setTimeout(() => {
      localStorage.removeItem('graphcoolToken')
      actions.logOut()
      actions.loading(false)
      window.location.reload()
    }, 1000);
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
    const {
      actions,
      userQuery,
      loggedInUserQuery,
      authenticateUserMutation,
    } = this.props

    const { email, password } = this.state
    userEmail = email

    actions.loading(true)
    authenticateUserMutation({
      variables: { email, password },
    })
    .then((response) =>
      localStorage.setItem('graphcoolToken', response.data.authenticateUser.token),
    )
    .then(() => {
      loggedInUserQuery.refetch()
        .then((response) => {
          console.log('response', response)
          userQuery.refetch()
            .then((response) => {
              console.log('response.data.User', response.data.User)
              actions.setUser(response.data.User)
            })
            .catch((error) => {
              console.log('error', error)
            })
        })
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
    const { error } = this.state

    const allUsers = allUsersQuery.allUsers
    const hasUsers = allUsers && allUsers.length > 0

    const loggedInUser = loggedInUserQuery.loggedInUser
    const isAuth = loggedInUser && loggedInUser.id

    if (!loggedInUserQuery.loggedInUser) {
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
          <Title>Hello {account.user && account.user.name}</Title>
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
            {error && <Error>{error}</Error>}
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

export default compose(
  connect(
    (state) => ({
      account: state.account
    }),
    (dispatch) => ({
      actions: bindActionCreators(authActions, dispatch)
    })
  ),
  graphql(loggedInUserQuery, {name: 'loggedInUserQuery'}),
  graphql(signupUserMutation, {name: 'signupUserMutation'}),
  graphql(authenticateUserMutation, {name: 'authenticateUserMutation'}),
  graphql(allUsersQuery, {name: 'allUsersQuery'}),
  graphql(UserQuery, {
    name: 'userQuery',
    options: () => {
      return { variables: { email: userEmail }}
    }
  }),
)(AdminBar)