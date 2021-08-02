
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Home from './pages/Home'
import JZDavidson from './pages/JZDavidson'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import './App.css'


function App() {
  return (
      <Router>

        <Nav/>

          <Switch>

            <Route exact path={'/'}>
              <AboutMe />
            </Route>

            <Route exact path={'/J.Z. Davidson'}>
              <JZDavidson />
              <Home/>
            </Route>

            <Route exact path={'/Portfolio'}>
              <Portfolio />
            </Route>

            <Route exact path={'/AboutMe'}>
              <AboutMe />
            </Route>
            <Route exact path={'/Resume'}>
              <Resume />
            </Route>
            <Route exact path={'/Contact'}>
              <Contact />
            </Route>

          </Switch>

        

      </Router>

  );
}

export default App;
