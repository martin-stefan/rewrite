// this component is to create an info card for jobs and projects

import React, { useState } from 'react';
import '../../sass/main.scss';
import Button from '../Button/Button';

export const Card = (props) => {

  const [shown , setShow] = useState(false);


  return (
    <div className='card'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <div className='card__content'>
        <h3 className='card__content--title'>{props.title}</h3>
        <h3 className='card__content--comp'>{props.company}</h3>
        <p className="card__content--description">{props.desc}</p>


        {shown && (
          <Button className='card__Button'></Button>
        )}
        
      </div>

    </div>
  );
}

export default Card;