import React from 'react';
import Aux from '../../Auxilliary';

export const Skills = () => {
  return (
    <Aux>
      <h2 className="sectionTitle">My Skills</h2>
      <div className="skills">

        <div className="skills__box">
          <div class="skills__box">

            <div className="skills__box__item">
              <p class="skills__box__item--title">HTML</p>
              <p class="skills__box__item--info"></p>
            </div>          

            <div className="skills__box__item">
              <p class="skills__box__item--title">CSS/SCSS</p>
              <p class="skills__box__item--info">More info about Css</p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">JavaScript</p>
              <p class="skills__box__item--info">More info about JS</p>
            </div>
            
            <div className="skills__box__item">
              <p class="skills__box__item--title">React JS</p>
              <p class="skills__box__item--info">More info about react</p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">Python</p>
              <p class="skills__box__item--info">More info about Python</p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">C++</p>
              <p class="skills__box__item--info">More info about C++</p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">Afrikaans</p>
              <p class="skills__box__item--info">Afrikaans was the first language that I learned. </p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">Spanish</p>
              <p class="skills__box__item--info">I began learning Spanish in 8th grade </p>
            </div>

            <div className="skills__box__item">
              <p class="skills__box__item--title">Chinese (Basic)</p>
              <p class="skills__box__item--info">Started learning Chinese in the spring of 2020.
                I plan on continuing learning.
              </p>
            </div>
          
          </div>

        </div>
      </div>
    </Aux>
  );
}

export default Skills;