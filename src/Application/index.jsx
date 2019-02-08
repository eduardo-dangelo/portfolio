import React from 'react';
import Site from './scenes/Site';
import AdminBar from './scenes/AdminBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { data } from './mockData';
import AdminArea from './AdminArea';

export const MyContext = React.createContext(data);

class Application extends React.Component {
  render() {
    return (
      <MyContext.Provider value={data}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              {/*<Route path='/admin' render={() => <AdminBar/>}/>*/}
              {/*<Route path='/' render={() => <Site/>} />*/}
              {data.pages.map((page) => {
                return (
                  <Route path={page.path} key={page.id} exact>
                    <Site page={page}/>
                  </Route>
                )
              })}
              <Route path='/admin' exact>
                <AdminArea/>
              </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default Application;
