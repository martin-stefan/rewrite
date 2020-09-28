// this will be the landing page of the website

import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button';
import About from '../../components/About/About';
import photo from '../../images/prom.JPG';

const Welcome = () => {
  return (
    <div>
      <div className="Welcome">
        <div className="introduction">
          <div className="introduction__main">
            <p className="introduction__text">Stéfan</p>
          </div>
            <p>I'm a 19 year old college student who loves technology and making websites.</p>

            <div className="photoContainer">
              <img src={photo} className="headshot" alt="photo of me"/>
            </div>
            <Button message="More about me"/>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Welcome;