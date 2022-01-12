import React from 'react';

import htmlLogo from '../../logos/html.png';
import sassLogo from '../../logos/sass.png';
import reactLogo from '../../logos/react.png';
import jsLogo from '../../logos/js.png';
import cplusLogo from '../../logos/cplus.png';
import pythonLogo from '../../logos/python.png';

export const Skills = () => {
  return (
    <div>
      <h2 className="skills__title">Skills</h2>
      <div className="skills">

          <div className="skills__box">

            <div className="skills__box__item">
              {/* <img src={htmlLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">HTML</p>
            </div>          

            <div className="skills__box__item">
              {/* <img src={sassLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">CSS & SCSS</p>
            </div>

            <div className="skills__box__item">
              {/* <img src={jsLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">JavaScript</p>
            </div>
            
            <div className="skills__box__item">
              {/* <img src={reactLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">React.js</p>
            </div>

            <div className="skills__box__item">
              {/* <img src={pythonLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">Python</p>
      
            </div>

            <div className="skills__box__item">
              {/* <img src={cplusLogo} className="skills__box__item--img"/> */}
              <p className="skills__box__item--title">C++</p>

            </div>

            <div className="skills__box__item">
              <p className="skills__box__item--title">Firebase</p>
            </div>

            <div className="skills__box__item">
              <p className="skills__box__item--title">Git</p>
            </div>

            <div className="skills__box__item">
              <p className="skills__box__item--title">Figma</p>
            </div>

            <div className="skills__box__item">
              <p className="skills__box__item--title">React Native</p>
            </div>
          
          </div>

        </div>
      </div>
  );
}

export default Skills;