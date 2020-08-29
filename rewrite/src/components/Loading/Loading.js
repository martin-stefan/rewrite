import React from 'react';
import './Loading.scss';

const Loading = ()  => {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p>SM</p>
      </div>
    </div>
  );
}

export default Loading;