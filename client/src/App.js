
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import './App.css'


function App() {
  return (
      <Router>

        <Nav/>

          <Switch>

            <Route exact path={'/'}>
              <Home/>
            </Route>

            <Route exact path={'/contact'}>
              <Contact/>
            </Route>

            <Route exact path={'/portfolio'}>
              <Portfolio/>
            </Route>

          </Switch>

        

      </Router>

  );
}

export default App;
