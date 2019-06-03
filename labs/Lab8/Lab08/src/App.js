import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';
import Layout from './hoc/Layout/Layout';
import Welcome from './views/welcome';
import NotFound from './views/NotFound';

class App extends Component {
  render(){
    return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/details' exact component={Details} />
            <Route path='/login' exact component={Login} />
            <Route path='/welcome' exact component={Welcome} />
            <Route
              path="/logout"
              render={() => {
                localStorage.removeItem('userId');
                localStorage.removeItem('userId');
                localStorage.removeItem('userId');
                return <Redirect to="/login" />;
              }}
              />
            <Route component={NotFound} />
          </Switch>
          </Layout>
    </BrowserRouter>
    );
  }
}

export default App;
