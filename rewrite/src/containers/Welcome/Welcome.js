import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import Menu from '../../components/Menu/Menu';
import More from '../../components/More/More';

const Welcome = () => {
  return (
    <div className="Welcome">
      <Menu />
      <div className="introduction">
      <div className="introduction__main">
        <span className="introduction__text">Hi </span>
        <span className="introduction__text">Im </span>
        <span className="introduction__text">Stefan</span>
      </div>
        <More />
      </div>
    </div>
  );
}

export default Welcome;