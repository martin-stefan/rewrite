import React from 'react';
import Loading from './components/Loading/Loading';
import Welcome from './containers/Welcome/Welcome';
import Footer from './containers/Footer/Footer';

import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';
import Work from './containers/Work/Work';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './containers/Projects/Projects';
import Skills from './components/Skills/Skills';
import Scroll from './components/Scroll/Scroll';


function App() {
  return (
    <Router>

      <div className="App">
        <Scroll />
        <Menu />
        
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/">
            <Welcome />
            <Skills />
          </Route>
          
        </Switch>
      

        <Footer />
      </div>
    </Router>
    );
}

export default App;
