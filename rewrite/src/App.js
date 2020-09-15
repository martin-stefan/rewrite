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


function App() {
  return (
    <Router>

      <div className="App">

        <Menu />
        
        <Switch>
          <Route path="/project">
            <Card />
          </Route>

          <Route path="/work">
            <Card />
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
