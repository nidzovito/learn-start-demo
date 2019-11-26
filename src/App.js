import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from "./containers/home";
import Stories from "./containers/stories";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/stories" component={Stories}></Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
