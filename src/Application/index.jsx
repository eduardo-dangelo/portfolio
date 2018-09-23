import React from 'react'
import AdminBar from './scenes/AdminBar'
import Site from './scenes/Site'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Application extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route path='/admin' render={() => <AdminBar/>}/>
          <Route path='/' render={() => <Site/>} />
        </div>
      </Router>
    )
  }
}

export default Application