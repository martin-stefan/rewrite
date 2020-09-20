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


function App() {
  return (
    <Router>

      <div className="App">

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
          </Route>
          
        </Switch>
      

        <Footer />
      </div>
    </Router>
    );
}

export default App;
