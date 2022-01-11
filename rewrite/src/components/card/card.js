// this component is to create an info card for jobs and projects

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';
import Button from '../Button/Button';

export const Card = (props) => {

  return (
    <Link to={{path: "/projects", state:{title: props.title}}} className='card link'>
      <div className='card__content'>
        <div className='card__content--header'>
          <h3 className='card__content--title'>{props.title}</h3>
          <h3 className='card__content--comp'>{props.company}</h3>
        </div>
        {/* <p className='card__content--desc'>{props.desc}</p> */}
      </div>
    </Link>
  );
}

export default Card;