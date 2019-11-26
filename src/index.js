import React from 'react';
import App from './App';
import 'tachyons';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { ApolloLink} from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { createStore, applyMiddleware } from 'redux';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { rootReducer } from "./Application/services/redux";
import Portfolio from './Portfolio';

const httpLink = createHttpLink({ uri: `https://api.graph.cool/simple/v1/cjlff6bg55guo0104m4lg6s6e` })

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render((
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Portfolio/>
      </Provider>
    </ApolloProvider>
  ),
  document.getElementById('root')
)
