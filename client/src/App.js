import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';

import './App.css';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Conversation from './components/Conversation/Conversation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Messenger'>
          <div className='left'>
            <Conversation />
          </div>
          <div className='center'>
            <div className='top'>Top</div>
            <div className='content'>center</div>
            <div className='right'>Right</div>
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
