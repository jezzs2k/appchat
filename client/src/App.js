import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';

import './App.css';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Conversation from './components/Conversation/Conversation';
import MessengerTop from './components/Messenger/MessengerTop';
import MessengerBottom from './components/Messenger/MessengerBottom';
import Messenger from './components/Messenger/Messenger';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Messenger'>
          <div className='left' id='scrollBar2'>
            <Conversation />
          </div>
          <div className='right'>
            <div className='top'>
              <MessengerTop />
            </div>
            <div className='content'>
              <Messenger />
            </div>
            <div className='bottom'>
              <MessengerBottom />
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
