import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';
import Layout from './hoc/Layout/Layout';
import Welcome from './views/Welcome';
import NotFound from './views/NotFound';
import Chat from './views/Chat/Chat';

class App extends Component {
  render(){
    return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/details' component={Details} />
            <Route path='/login' component={Login} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/chat' component={Chat} />
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
