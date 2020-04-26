import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={login} />
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
