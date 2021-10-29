import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //It's typical to wrap the app in a Router so that
    //we can have good page navigation

    //adding a path to a Route allows us to determine
    //the endpoint of the component

    //exact={true} tells Dashboard to only appear on
    // localhost/ and not on localhost/*
    <Router>
      <Route path="/" exact={true}>
        <Dashboard></Dashboard>

      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
