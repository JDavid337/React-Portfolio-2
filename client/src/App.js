
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import JZDavidson from './pages/JZDavidson'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer/Footer'
import './App.css'

const projects = [
  {
    img: 'BudgetTracker.png',
    github: 'https://github.com/JDavid337/Progressive-Budget-Tracker'
  },
  {
    img: 'ChosenOutfit.png',
    github: 'https://github.com/JDavid337/Project-3/tree/main',
    deployed: 'https://infinite-fjord-75479.herokuapp.com/'
  },
  {
    img: 'ExpressNoteTaker.png',
    github: 'https://github.com/JDavid337/express-note-jotter',
    deployed:  'https://express-note-jotter-jzd.herokuapp.com/'
  },
  {
    img: 'LyricFinder',
    github: 'https://github.com/Lyndseyfin/Lyric-finder',
    deployed:  'https://lyndseyfin.github.io/Lyric-finder/'
  },
  {
    img: 'Tripr.png',
    github: 'https://github.com/JDavid337/Project-2-Travel-Green',
    deployed:  'https://tripr-project2.herokuapp.com/'
  },
]


function App() {
  return (
      <Router>

        <Nav/>

          <Switch>

            <Route exact path={'/'}>
              <AboutMe />
            </Route>

            <Route exact path={'/JZDavidson'}>
              <JZDavidson />
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

        <Footer/>

      </Router>

  );
}

export default App;
