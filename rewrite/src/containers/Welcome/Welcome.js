import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button';
import About from '../../components/About/About';

const Welcome = () => {
  return (
    <div>
      <div className="Welcome">
        <span className="background">
          &nbsp;&nbsp;&nbsp;Stéfan 
          <br /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Martin
        </span>
        <div className="introduction">
        <div className="introduction__main">
          <span className="introduction__text">Hi </span>
          <span className="introduction__text">I'm </span>
          <span className="introduction__text">Stéfan</span>
          
        </div>

          
        </div>
      </div>
      <About />
    </div>
  );
}

export default Welcome;