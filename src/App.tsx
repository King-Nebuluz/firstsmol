import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/global.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;