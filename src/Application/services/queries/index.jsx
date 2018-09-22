import gql from 'graphql-tag'

const loggedInUserQuery = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`
const allUsersQuery = gql`
  query AllUsersQuery {
    allUsers {
      id
    }
  }
`
const UserQuery = gql`
   query User($email: String!) {
    User(email: $email) {
      id
      email
      name
    }
  }
`

export { allUsersQuery, loggedInUserQuery, UserQuery }