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


function App() {
  return (

      <div className="App">
        <Scroll />
        <Welcome />
        <Projects />
        <Courses />
        <Skills />
        <Footer />
      
      </div>
    );
}

export default App;
