import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';

/*
import logo from './logo.svg';
import './App.css';
*/

class App extends Component {
  render(){
    return (<BrowserRouter>
        <div>
          <h1>Sitio de peliculas</h1>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/details' exact component={Details} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </div>
    </BrowserRouter>);
  }
}

export default App;
