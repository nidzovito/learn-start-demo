import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import HomeContainer from './components/home_container';
import StoriesContainer from './components/stories_container';
import Header from './components/header';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/home' component={HomeContainer}></Route>
          <Route exact path='/stories' component={StoriesContainer}></Route>
          <Redirect to='/home' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
