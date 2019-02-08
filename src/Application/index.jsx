import React from 'react';
import Site from './scenes/Site';
import AdminBar from './scenes/AdminBar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

class Application extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Redirect from='/ogp.png' to='/'/>
          <Route path='/admin' component={AdminBar}/>
          <Route path='/' component={Site} />
        </Switch>
      </Router>
    );
  }
}

export default Application;
