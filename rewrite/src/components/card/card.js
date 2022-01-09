// this component is to create an info card for jobs and projects

import React, { useState } from 'react';
import '../../sass/main.scss';
import Button from '../Button/Button';

export const Card = (props) => {

  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__content--header'>
          <h3 className='card__content--title'>{props.title}</h3>
          <h3 className='card__content--comp'>{props.company}</h3>
        </div>
        {/* <p className='card__content--desc'>{props.desc}</p> */}
        <Button message="Preview" class="card__button"/>
      </div>
    </div>
  );
}

export default Card;