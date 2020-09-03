import React from 'react';
import '../../sass/main.scss';

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