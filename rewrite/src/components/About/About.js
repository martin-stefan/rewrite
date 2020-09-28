// this is component is for a small section talking about me

import React from 'react';
import Button from '../Button/Button';

export const About = () => {
  return (
    <div className='about'>
      <div className='about__box'>
        <div className='about__content'>
          <p>
            I am a sophomore at Rensselaer Polytechnic Institute pursuing 
            my bachelor's degree in Information Technology and Web Sciences. 

          </p>
        </div>
      </div>

      <Button message="My skills" />
      
    </div>
  )
}

export default About;