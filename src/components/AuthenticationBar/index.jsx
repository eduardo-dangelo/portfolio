import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const Bar = styled.div`
  background: #cdd2ef;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  //padding: 0 15px;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 1px solid #3a3a3a;
  margin-right: 15px;
  padding: 8px;
  transition: .3s ease;
  box-shadow: inset 0 1px 5px rgba(0,0,0,0.2);
  
  &:hover, &:focus {
    box-shadow: inset 0 1px 6px rgba(0,0,0,0.4);
  }
`;

const Form = styled.div`
  padding: 0 15px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background: transparent;
  border: 1px solid #3a3a3a;
  transition: .2s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
  }
`;

const Title = styled.h3`
  padding: 0 15px;
  font-weight: lighter;
`;

class AuthenticationBar extends React.Component {
  state = {
    isAuth: false,
    email: '',
    password: '',
    name: '',
    emailSubscription: false,
  }

  handleSubmit = () => {
    this.setState({
      isAuth: true,
    })
  }

  handleLogOut = () => {
    this.setState({
      isAuth: false,
    })
  }


  render() {
    const { isAuth } = this.state
    if (isAuth) {
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
        <Title>Welcome</Title>
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
          <Input
            value={this.state.name}
            placeholder='Name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          <Button onClick={this.signupUser}>Submit</Button>
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
}

const SIGNUP_USER_MUTATION = gql`
  mutation SignupUserMutation ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
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

export default compose(
  graphql(SIGNUP_USER_MUTATION, {name: 'signupUserMutation'}),
  graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(withRouter(AuthenticationBar))