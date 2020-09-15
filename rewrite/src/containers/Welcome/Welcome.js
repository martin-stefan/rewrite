import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button';

const Welcome = () => {
  return (

      <div className="Welcome">
        <span className="background">
          &nbsp;&nbsp;&nbsp;Stéfan 
          <br /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Martin
        </span>
        <Menu />
        <div className="introduction">
        <div className="introduction__main">
          <span className="introduction__text">Hi </span>
          <span className="introduction__text">I'm </span>
          <span className="introduction__text">Stéfan</span>
          
        </div>
          
        </div>
      </div>
  );
}

export default Welcome;