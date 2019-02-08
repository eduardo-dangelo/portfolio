import React from 'react';
import Site from './scenes/Site';
import AdminBar from './scenes/AdminBar';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

class Application extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Redirect from='/og_img.png' to='/'/>
          <Route path='/admin' render={() => <AdminBar/>}/>
          <Route path='/' render={() => <Site/>} />
        </div>
      </Router>
    );
  }
}

export default Application;
