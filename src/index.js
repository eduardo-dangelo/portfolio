import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import AdminBar from './components/AdminBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink} from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjlff6bg55guo0104m4lg6s6e' })

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('graphcoolToken')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

const TempApp = () => {
  return (
    <div>
      <h1>hellu</h1>
    </div>
  )
}

ReactDOM.render((
    <ApolloProvider client={client}>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path='/admin' component={AdminBar} />
          <Route path='/' component={App} />
        </div>
      </Router>
      {/*<App/>*/}
    </ApolloProvider>
  ),
  document.getElementById('root')
)
