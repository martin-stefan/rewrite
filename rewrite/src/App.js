import React from 'react';
import Loading from './components/Loading/Loading';
import Welcome from './containers/Welcome/Welcome';
import Footer from './containers/Footer/Footer';

import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Menu from './components/Menu/Menu';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Scroll from './components/Scroll/Scroll';
import Courses from './containers/Courses/Courses';
import SideNav from './components/SideNav/SideNav';


function App() {
  return (

    <Router>
      <div className="App">
        <div className="base">
          <SideNav />
          
          <div className="base__content">
            <Switch>
              <Route path="/" component={Welcome} exact />
              <Route path="/courses" component={Courses} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    );
}

export default App;
