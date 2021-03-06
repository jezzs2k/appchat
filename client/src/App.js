import React from 'react';
import configureSocket from './socket';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';

import './App.css';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ChatUi from './components/Layout/ChatUi';
import Alert from './components/Layout/Alert';

import { Provider } from 'react-redux';
import Store from './redux/Store';

const socket = configureSocket(Store.dispatch);

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className='App'>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/messenger' component={ChatUi} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export { socket, App };
