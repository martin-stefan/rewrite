// this component is to create an info card for jobs and projects

import React from 'react';
import '../../sass/main.scss';
import Button from '../Button/Button';

export const Card = (props) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <h3 className='card__content--title'>This job</h3>
        <p className="card__content--description">This is what I did at this job</p>

        <Button></Button>
      </div>

    </div>
  );
}

// export default Card;