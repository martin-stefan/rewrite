// this will be an extended verion of the card component

import React from 'react';

const Banner = (props) => {
  return (
    <div className="Banner">
      {props.title}
      {props.time}
      {props.company}
      {props.desc}
    </div>
  );
}

export default Banner;