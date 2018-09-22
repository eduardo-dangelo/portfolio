import gql from "graphql-tag";


const signupUserMutation = gql`
  mutation SignupUserMutation ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
      token
    }
  }
`

const authenticateUserMutation = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

export { signupUserMutation, authenticateUserMutation }