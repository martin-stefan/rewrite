// button

import React from 'react';
import '../../sass/main.scss';

export const Button = (props) => {
  return (
    <div className="button">
      <h3>{props.title}</h3>
    </div>
  );
  
}

export default Button;