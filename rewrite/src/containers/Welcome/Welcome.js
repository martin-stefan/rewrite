// this will be the landing page of the website

import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="intro">
        <div className="intro__main">
          <p className="intro__text">Stéfan Martin</p>
        </div>

        <p className="intro__desc">
          I am a junior at Rensselaer Polytechnic Institute pursuing 
          my bachelor's degree in Information Technology and Web Science
          looking for an internship/co-op for spring and summer 2022. 
        </p>

        <div className="intro__btn">
          <a href="#projects" className="intro__btn--link">View my experience</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;